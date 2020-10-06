const bodyEl = document.querySelector('.js-body');
const headerEl = document.querySelector('.js-header');

const btnHeaderPhoneEl = document.querySelector('.js-call-btn');
const btnMenuEl = document.querySelector('.js-btn-menu');

const navLinksCollection = document.querySelectorAll('.js-nav-link');
const formBtnsCollection = document.querySelectorAll('.js-form-call-btn');

const popupContainer = document.querySelector('.js-popup-container');
const popupEl = document.querySelector('.js-popup');
const formEl = document.querySelector('.js-form');
const telInput = document.querySelector('.js-tel-input');

const btnPopupCloseEl = document.querySelector('.js-btn-close');
const btnFormSubmitEl = document.querySelector('.js-popup__btn');


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

btnMenuEl.addEventListener('click', function(ev) {
	ev.preventDefault();
	headerEl.classList.toggle('menu-open'); 

	for (let i=0, length = navLinksCollection.length; i < length; i++) {
		navLinksCollection[i].addEventListener('click', function() {
			headerEl.classList.remove('menu-open');
			bodyEl.classList.remove('js-fixed');
		});
	}

	if ( (window.matchMedia('(max-width: 1023px)').matches) && (headerEl.classList.contains('menu-open')) ) {
		bodyEl.classList.add('js-fixed');
	} else {
		bodyEl.classList.remove('js-fixed');
	}
});

for (let i=0, length = formBtnsCollection.length; i < length; i++) {
	formBtnsCollection[i].addEventListener('click', function(ev) {
		ev.preventDefault();

		headerEl.classList.remove('menu-open');
		bodyEl.classList.remove('js-fixed');

		popupContainer.style.display = 'block';
	});
}

btnPopupCloseEl.addEventListener('click', function() {
	popupContainer.style.display = 'none';
	formEl.reset();
});

document.addEventListener('mousedown', function(e) {
	if(!e.target.closest('.js-popup')){
		popupContainer.style.display = 'none';
		formEl.reset();
    }
});

window.addEventListener('DOMContentLoaded', function() {
	let setCursorPosition = function(pos, elem) {
		elem.focus();
		if (elem.setSelectionRange) elem.setSelectionRange(pos, pos);
		else if (elem.createTextRange) {
			let range = elem.createTextRange();
			range.collapse(true);
			range.moveEnd('character', pos);
			range.moveStart('character', pos);
			range.select()
		}
	}

	let mask = function(event) {
		let matrix = '+7 (___) ___ ____';
		let i = 0;
		let def = matrix.replace(/\D/g, '');
		let val = this.value.replace(/\D/g, '');

		if (def.length >= val.length) { val = def };
		this.value = matrix.replace(/./g, function(a) {
			if (/[_\d]/.test(a) && i < val.length) {
				return val.charAt(i++);
			} else if (i >= val.length) {
				return ''
			} else {
				return a
			}
			// return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a
		});
		if (event.type == 'blur') {
			if (this.value.length == 2) this.value = ''
		} else setCursorPosition(this.value.length, this)
	};

	telInput.addEventListener('input', mask, false);
	telInput.addEventListener('focus', mask, false);
	telInput.addEventListener('blur', mask, false)
});

let formSubmitHandler = function() {
	popupContainer.style.display = 'none';
	alert('Спасибо!Данные переданы успешно');
}

formEl.addEventListener('submit', formSubmitHandler);

checkWindowSize();