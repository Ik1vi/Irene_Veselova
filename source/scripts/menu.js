btnMenuEl.addEventListener('click', function(ev) {
	ev.preventDefault();
	headerEl.classList.toggle('menu-open');
	btnMunuLine.classList.toggle('btn-line--active');
	for (let i=0, length = navLinksCollection.length; i < length; i++) {
		navLinksCollection[i].addEventListener('click', function() {
			headerEl.classList.remove('menu-open');
			bodyEl.classList.remove('js-fixed');
			btnMunuLine.classList.remove('btn-line--active');
		});
    }
    
    if(headerEl.classList.contains('menu-open') ) {
        btnMenuEl.setAttribute('aria-label', 'Скрыть меню');
		btnMunuLine.classList.add('btn-line--active');
    } else {
        btnMenuEl.setAttribute('aria-label', 'Показать меню');
		btnMunuLine.classList.remove('btn-line--active');
    }

	if( (window.matchMedia('(max-width: 1023px)').matches) && (headerEl.classList.contains('menu-open')) ) {
		bodyEl.classList.add('js-fixed');
	} else {
		bodyEl.classList.remove('js-fixed');
	}

	pageNavEl.addEventListener('mousedown', function(e) {
		if(!e.target.closest('.js-nav-list') ){
			headerEl.classList.remove('menu-open');
			bodyEl.classList.remove('js-fixed');
			btnMunuLine.classList.remove('btn-line--active');
		}
	});
});

let modifyeHeaderMenu = function() {
	if (window.matchMedia('(max-width: 1023px)').matches) { //если планшет или смартфон
		if(headerEl.classList.contains('menu-open')) {
			bodyEl.classList.add('js-fixed');//убираем прокрутку экрана
		}
	} else if (window.matchMedia('(min-width: 1170px)').matches){ //если десктоп
		headerEl.classList.remove('menu-open'); //убираем класс раскрывающегося меню
		bodyEl.classList.remove('js-fixed'); //возвращаем прокрутку экрана
		btnMunuLine.classList.remove('btn-line--active');
	} else { //если планшет или нетбук
		bodyEl.classList.remove('js-fixed'); //возвращаем прокрутку экрана
	}
}