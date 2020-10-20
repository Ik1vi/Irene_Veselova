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

bodyEl.classList.remove('no-js');

let checkWindowSize = function() {
	if (window.matchMedia('(max-width: 1023px)').matches) {
		btnHeaderPhoneEl.classList.add('call-btn--round');
		btnHeaderPhoneEl.textContent= ''; //удаляем содержимое ссылки

		if(headerEl.classList.contains('menu-open')) {
			bodyEl.classList.add('js-fixed');
		}
	} else if (window.matchMedia('(min-width: 1170px)').matches){
		btnHeaderPhoneEl.classList.remove('call-btn--round');
		btnHeaderPhoneEl.textContent = 'Заказать звонок'; //возвращаем надпись на кнопку

		headerEl.classList.remove('menu-open');
		bodyEl.classList.remove('js-fixed');
	} else {
		btnHeaderPhoneEl.classList.remove('call-btn--round');
		btnHeaderPhoneEl.textContent = 'Заказать звонок'; //возвращаем надпись на кнопку

		bodyEl.classList.remove('js-fixed');
	}
}

window.addEventListener(`resize`, event => { //слушаем изменение размера экрана
	if (window.matchMedia('(max-width: 1023px)').matches || window.matchMedia('(min-width: 1024px)').matches) {
		checkWindowSize();
	}
}, false);

window.addEventListener("load", function(event) {
	headerEl.classList.add('header--loaded');
});

window.addEventListener("scroll", function (e) {
 
   if(window.pageYOffset > 300)
   {
	headerEl.classList.remove('header--loaded');
	headerEl.classList.add('header--scrolled');
   }
   else
   {
	headerEl.classList.add('header--loaded');
	headerEl.classList.remove('header--scrolled');
   }
});

checkWindowSize();