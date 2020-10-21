const bodyEl = document.querySelector('.js-body');
const headerEl = document.querySelector('.js-header');

const btnMenuEl = document.querySelector('.js-btn-menu');
const navLinksCollection = document.querySelectorAll('.js-nav-link');
const pageNavEl = document.querySelector('.js-page-nav');

const btnHeaderPhoneEl = document.querySelector('.js-call-btn');

const formBtnsCollection = document.querySelectorAll('.js-form-call-btn');

const popupContainerEl = document.querySelector('.js-popup-container');
const formEl = document.querySelector('.js-form');
const nameInputEl = document.querySelector('.js-name__input')
const telInputEl = document.querySelector('.js-tel-input');
const mailInputEl = document.querySelector('.js-mail__input')

const btnPopupCloseEl = document.querySelector('.js-btn-close');

const paginationDotCollection =  document.querySelectorAll('.js-pagination-dot');
const portfolioCollection =  document.querySelectorAll('.js-portfolio-item');

const portraitOriginal = document.querySelector ('.js-portrait-original');
const portraitCenter = document.querySelector ('.js-portrait');
const portraitLeft = document.querySelector ('.js-portrait-left');
const portraitRight = document.querySelector ('.js-portrait-right');

bodyEl.classList.remove('no-js');

let checkWindowSize = function() {
	if (window.matchMedia('(max-width: 1023px)').matches) { //если планшет или смартфон
		
		// вид кнопки заказать звонок
		btnHeaderPhoneEl.classList.add('call-btn--round'); //добавляем класс круглой кнопки
		btnHeaderPhoneEl.textContent= ''; //удаляем содержимое ссылки
		// навигация в header 
		if(headerEl.classList.contains('menu-open')) {
			bodyEl.classList.add('js-fixed');//убираем прокрутку экрана
		}

	} else if (window.matchMedia('(min-width: 1170px)').matches){ //если десктоп

		// вид кнопки заказать звонок
		btnHeaderPhoneEl.classList.remove('call-btn--round');//убираем класс круглой кнопки
		btnHeaderPhoneEl.textContent = 'Заказать звонок'; //возвращаем надпись на кнопку
		// навигация в header 
		headerEl.classList.remove('menu-open'); //убираем класс раскрывающегося меню
		bodyEl.classList.remove('js-fixed'); //возвращаем прокрутку экрана

	} else { //если планшет или нетбук

		// вид кнопки заказать звонок
		btnHeaderPhoneEl.classList.remove('call-btn--round'); //убираем класс круглой кнопки
		btnHeaderPhoneEl.textContent = 'Заказать звонок'; //возвращаем надпись на кнопку
		// навигация в header
		bodyEl.classList.remove('js-fixed'); //возвращаем прокрутку экрана

	}
}

window.addEventListener(`resize`, event => { //слушаем изменение размера экрана
	checkWindowSize();
	changeHeaderBackground();
	moveHeaderBackgroundImgs();
}, false);

window.addEventListener("load", function(event) {
	if (window.matchMedia('(min-width: 1170px)').matches){
		headerEl.classList.add('header--loaded');
	}
});

let changeHeaderBackground = function() {
	if (window.matchMedia('(min-width: 1170px)').matches){
		if(window.pageYOffset > 300)
		{
		headerEl.classList.remove('header--loaded');
		headerEl.classList.add('header--scrolled');
		} else {
		headerEl.classList.add('header--loaded');
		headerEl.classList.remove('header--scrolled');
		}
	} else {
		headerEl.classList.remove('header--loaded');
		headerEl.classList.remove('header--scrolled');
	}
}

let moveHeaderBackgroundImgs = function() {
	if (window.matchMedia('(min-width: 1170px)').matches){
		animatePosition = window.pageYOffset - 50;

		if(window.pageYOffset > 50 && window.pageYOffset < 180 ) {
			portraitLeft.style.left = 37 + animatePosition/10 + '%';
			portraitLeft.style.opacity = '1';

			portraitRight.style.left = 67 - animatePosition/10 + '%';
			portraitRight.style.opacity = '1';

			portraitOriginal.style.opacity = '0';

		} else if (window.pageYOffset >= 180) {
			portraitLeft.style.opacity = '0';
			portraitRight.style.opacity = '0';
			portraitOriginal.style.opacity = '1';

		} else {
			portraitLeft.style.left = null;
			portraitLeft.style.opacity = null;

			portraitRight.style.left = null;
			portraitRight.style.opacity = null;

			portraitOriginal.style.opacity = null;
		}
	} 
	else {
		portraitLeft.style.left = null;
		portraitLeft.style.opacity = null;

		portraitRight.style.left = null;
		portraitRight.style.opacity = null;

		portraitOriginal.style.opacity = null;
	}
}

window.addEventListener("scroll", function (e) {
	changeHeaderBackground();
	moveHeaderBackgroundImgs();
});

checkWindowSize();