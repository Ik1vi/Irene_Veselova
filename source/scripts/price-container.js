let moovePriceContainer = function() {
	if (window.matchMedia('(min-width: 1170px)').matches){
		if (window.pageYOffset >= 1745) {
			priceWrapperEl.style.transform = 'translateY(0)';
			priceWrapperEl.style.opacity = '1';
		} else {
			priceWrapperEl.style.transform = 'translateY(-20%)';
			priceWrapperEl.style.opacity = '0';
		}
	} else {
        priceWrapperEl.style.transform = null;
        priceWrapperEl.style.opacity = null;
    }
}
