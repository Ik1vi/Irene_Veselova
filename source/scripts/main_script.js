const bodyEl = document.querySelector('.js-body');
const btnHeaderPhoneEl = document.querySelector('.js-call-btn');
const btnMenuEl = document.querySelector('.js-btn-menu');
const headerEl = document.querySelector('.js-header');

const formBtnsCollection = document.querySelectorAll('.js-form-call-btn');
const popupContainer = document.querySelector('.js-popup-container');
const popup = document.querySelector('.js-popup');

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

	if ( (window.matchMedia('(max-width: 1023px)').matches) && (headerEl.classList.contains('menu-open')) ) {
		bodyEl.classList.add('js-fixed');
	} else {
		bodyEl.classList.remove('js-fixed');
	}
});

var paragraphList = document.querySelectorAll('p');
// переберём полученную коллекцию элементов с помощью цикла for
for (let i=0, length = formBtnsCollection.length; i < length; i++) {
	formBtnsCollection[i].addEventListener('click', function() {
		popupContainer.style.display = 'block';
	});
}

checkWindowSize();