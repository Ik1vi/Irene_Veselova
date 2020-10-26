const bodyEl = document.querySelector('.js-body');
const headerEl = document.querySelector('.js-header');

const btnMenuEl = document.querySelector('.js-btn-menu');
const btnMunuLine = document.querySelector('.js-btn-line');
const navLinksCollection = document.querySelectorAll('.js-nav-link');
const pageNavEl = document.querySelector('.js-page-nav');

const btnHeaderPhoneEl = document.querySelector('.js-call-btn');

const formBtnsCollection = document.querySelectorAll('.js-form-call-btn');

const popupContainerEl = document.querySelector('.js-popup-container');
const popupEl = document.querySelector('.js-popup');

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

const priceWrapperEl = document.querySelector('.js-price-wrapper');

bodyEl.classList.remove('no-js');

window.addEventListener("load", function(event) {
	modifyeHeaderMenu();
	modifyCallBtn();

	changeHeaderBackground();
});

window.addEventListener(`resize`, event => { 
	modifyeHeaderMenu();
	modifyCallBtn();

	changeHeaderBackground();
	moveHeaderBackgroundImgs();

	moovePriceContainer();
}, false);

window.addEventListener("scroll", function (e) {
	changeHeaderBackground();
	moveHeaderBackgroundImgs();
	
	moovePriceContainer();
});