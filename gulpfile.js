const gulp = require('gulp');
const sass = require('gulp-sass'); //работа с sass
const autoprefixer = require('gulp-autoprefixer'); //работа с префиксами

const minifyCSS = require('gulp-csso'); //минификация
const plumber = require('gulp-plumber'); //вывод об ошибке, без прерывания работы gulp
const csscomb = require('gulp-csscomb'); //улучшает структуру css
const gcmq = require('gulp-group-css-media-queries'); //группировка медиа-запросов

const browserSync = require('browser-sync').create(); //запуск, перезагрузка браузера, синхронизация действий на разных устройствах

const rename = require('gulp-rename'); //работа с именами
const del = require('del'); //удаление

const imageMin = require('gulp-imagemin'); //Оптимизация изображений
const webp = require('gulp-webp'); //Конвертация изображений в формат WebP
const newer = require('gulp-newer'); //обращение к новым (в данном случае, изображенийям)

const postHtml = require('gulp-posthtml'); //Шаблонизация HTML-файлов
const include = require('posthtml-include'); //Шаблонизация HTML-файлов
const htmlMin = require('gulp-htmlmin'); //минификация html

const typeOfCompression = 4;
const qualityOfImage = 75;

const gih = require('gulp-include-html'); //включение html

const concat = require('gulp-concat');
const uglify = require('gulp-uglify');

gulp.task('scripts', function () {
  return gulp.src('source/scripts/*.js') // путь к папке со скриптами
    .pipe(concat('all.js')) // в какой файл объединить
    //  .pipe(uglify())
    .pipe(gulp.dest('build/scripts'));
});

gulp.task('style', function () {
  return gulp.src('source/styles/style.scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(gcmq())
    .pipe(csscomb())
    .pipe(gulp.dest('build/styles'))

    .pipe(minifyCSS())
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest('build/styles'))
});

gulp.task('images', function () {
  return gulp.src('source/img/**/*.+(png|jpg|webp|svg)')
    .pipe(newer('build/img'))
    .pipe(imageMin([
      imageMin.optipng({ optimizationLevel: typeOfCompression }),
      imageMin.mozjpeg({ progressive: true }),
      imageMin.svgo({
        plugins: [
          { removeViewBox: true },
          { cleanupIDs: false }
        ]
      })
    ]))
    .pipe(gulp.dest('build/img'))
});

gulp.task('webp', function () {
  return gulp.src('build/img/*.{png,jpg}')
    .pipe(webp({
      quality: 95,
      lossless: false
    }))
    .pipe(gulp.dest('build/img/webp'))
});

gulp.task('html', function () {
  return gulp.src('source/*.html')
    .pipe(postHtml([include({
      encoding: 'utf8', root: './source/'
    })]))
    .pipe(htmlMin({
      collapseWhitespace: true
    }))
    .pipe(gulp.dest('build'))
});

gulp.task('clean', function () {
  return del('build');
});

gulp.task('fonts', function () {
  return gulp.src('source/fonts/**/*.+(woff|woff2)')
    .pipe(gulp.dest('build/fonts'));
});

gulp.task('favicon', function () {
  return gulp.src('source/favicon.png')
    .pipe(gulp.dest('build'))
});

gulp.task('build', gulp.series([
  'clean',
  'fonts',
  'images',
  'style',
  'scripts',
  'html',
  'favicon',
  'webp',
]));

gulp.task('serve', function () {
  browserSync.init({
    server: 'build'
  });

  browserSync.watch('build/**/*.*').on('change', browserSync.reload);
});

gulp.task('watch', function () {
  gulp.watch('source/styles/**/*.scss', gulp.series('style'));
  gulp.watch('source/**/*.html', gulp.series('html'));
  gulp.watch('source/**/*.js', gulp.series('scripts'));
  gulp.watch('source/img/**/*.+(png|jpg|webp|svg)', gulp.series('images'));
});

gulp.task('dev',
  gulp.series('build', gulp.parallel('watch', 'serve'))
)
