$(document).ready(function(){
	const bodyEl = $('.js-body');
	const btnHeaderPhoneEl = $('.js-call-btn');

	bodyEl.removeClass('no-js');

	window.addEventListener(`resize`, event => { //слушаем изменение размера экрана
		if (window.matchMedia('(max-width: 1023px)').matches || window.matchMedia('(min-width: 1023px)').matches)
		 {
			checkWindowSize();
		}

	}, false);

	checkWindowSize = function()
	{
		if (window.matchMedia('(max-width: 1023px)').matches) {
			btnHeaderPhoneEl.addClass('call-btn--round');
			btnHeaderPhoneEl.empty(); //удаляем содержимое ссылки
		}
	    else {
			btnHeaderPhoneEl.removeClass('call-btn--round');
			btnHeaderPhoneEl.text('Заказать звонок'); //возвращаем надпись на кнопку
	    }
	}

	checkWindowSize();
});
