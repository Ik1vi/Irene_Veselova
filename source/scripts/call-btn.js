
let modifyCallBtn = function() {
	if (window.matchMedia('(max-width: 1023px)').matches) { //если планшет или смартфон
		btnHeaderPhoneEl.classList.add('call-btn--round'); //добавляем класс круглой кнопки
		btnHeaderPhoneEl.textContent= ''; //удаляем содержимое ссылки
	} else if (window.matchMedia('(min-width: 1170px)').matches){ //если десктоп
		btnHeaderPhoneEl.classList.remove('call-btn--round');//убираем класс круглой кнопки
		btnHeaderPhoneEl.textContent = 'Заказать звонок'; //возвращаем надпись на кнопку
	} else { //если планшет или нетбук
		btnHeaderPhoneEl.classList.remove('call-btn--round'); //убираем класс круглой кнопки
		btnHeaderPhoneEl.textContent = 'Заказать звонок'; //возвращаем надпись на кнопку
	}
}