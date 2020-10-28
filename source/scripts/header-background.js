
let changeHeaderBackground = function() {
	if (window.matchMedia('(min-width: 1170px)').matches){
		headerEl.classList.add('header--loaded');

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