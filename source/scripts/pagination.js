for (let i=0, length = paginationDotCollection.length; i < length; i++) {
	paginationDotCollection[i].addEventListener('click', function(ev) {
		ev.preventDefault();

		for (let index=0, length = paginationDotCollection.length; index < length; index++) {
			paginationDotCollection[index].classList.remove('pagination__dot--active');
		}

		paginationDotCollection[i].classList.add('pagination__dot--active');

		if(i==0) {
			portfolioCollection[0].style.order = '-2';
			portfolioCollection[1].style.order = '-1';
			portfolioCollection[2].style.order = '1';
		} else if(i==1) {
			portfolioCollection[0].style.order = '1';
			portfolioCollection[1].style.order = '-2';
			portfolioCollection[2].style.order = '-1';
		} else {
			portfolioCollection[0].style.order = '-1';
			portfolioCollection[1].style.order = '1';
			portfolioCollection[2].style.order = '-2';
		}
	});
}