btnMenuEl.addEventListener('click', function(ev) {
	ev.preventDefault();
	headerEl.classList.toggle('menu-open'); 

	for (let i=0, length = navLinksCollection.length; i < length; i++) {
		navLinksCollection[i].addEventListener('click', function() {
			headerEl.classList.remove('menu-open');
			bodyEl.classList.remove('js-fixed');
		});
    }
    
    if(headerEl.classList.contains('menu-open') ) {
        btnMenuEl.setAttribute('aria-label', 'Скрыть меню');
    } else {
        btnMenuEl.setAttribute('aria-label', 'пПоказать меню');
    }

	if( (window.matchMedia('(max-width: 1023px)').matches) && (headerEl.classList.contains('menu-open')) ) {
		bodyEl.classList.add('js-fixed');
	} else {
		bodyEl.classList.remove('js-fixed');
	}
});