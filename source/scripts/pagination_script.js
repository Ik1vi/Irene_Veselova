$(document).ready(function(){
	const paginationDotEl = $('.js-pagination-dot');
	const paginationEl = $('.js-pagination');

	const paginationDotFirstEl = $('.js-pagination-dot:First-child');
	const paginationDotSecondEl = $('.js-pagination-dot:nth-child(2)');
	const paginationDotThirdEl = $('.js-pagination-dot:last-child');

	const portfolioItemFirstEl = $('.js-portfolio-item:first-child');
	const portfolioItemSecondEl = $('.js-portfolio-item:nth-child(2)');
	const portfolioItemThirdEl = $('.js-portfolio-item:last-child');


	carouselBtnClickSlider = function(e) //отображение кейсов, в зависимости от активной точки пагинации
	{
		paginationDotEl.removeClass('pagination__dot--active'); //снимаем класс активной точки с остальных
		$(this).addClass('pagination__dot--active'); //при нажатии на точку пагинации она становится активной
		e.preventDefault();

		//ширина окна меньше 1023px

		if (window.matchMedia('(min-width: 1023px)').matches // если окно меньше 1023px и активна первая точка
			&& paginationDotFirstEl.hasClass('pagination__dot--active'))
		{
			portfolioItemFirstEl.attr('style',  'order:-1'); // то видны первый и второй кейсы
			portfolioItemSecondEl.attr('style',  'order:0');
			portfolioItemThirdEl.attr('style',  'order:1');
		}

		else if (window.matchMedia('(min-width: 1023px)').matches // если окно меньше 1023px и активна вторая точка
			&& paginationDotSecondEl.hasClass('pagination__dot--active'))
		{
			portfolioItemSecondEl.attr('style',  'order:-1'); // то видны второй и третий кейсы
			portfolioItemThirdEl.attr('style',  'order:0');
			portfolioItemFirstEl.attr('style',  'order:1');
		}

		else if (window.matchMedia('(min-width: 1023px)').matches // если окно меньше 1023px и активна третья точка
			&& paginationDotThirdEl.hasClass('pagination__dot--active'))
		{
			portfolioItemThirdEl.attr('style',  'order:-1'); // то видны третий и первый кейсы
			portfolioItemFirstEl.attr('style',  'order:0');
			portfolioItemSecondEl.attr('style',  'order:1');
		}

		//окно больше 1023px

		else if  (window.matchMedia('(max-width: 1023px)').matches // если окно больше 1023px и активна первая точка
			&& paginationDotFirstEl.hasClass('pagination__dot--active'))
		{
			portfolioItemSecondEl.attr('style',  'order:-1'); // то виден второй, приоритетный кейс
			portfolioItemThirdEl.attr('style',  'order:0');
			portfolioItemFirstEl.attr('style',  'order:1');
		}

		else if  (window.matchMedia('(max-width: 1023px)').matches // если окно больше 1023px и активна вторая точка
			&& paginationDotSecondEl.hasClass('pagination__dot--active'))
		{
			portfolioItemFirstEl.attr('style',  'order:-1'); // то виден первый кейс
			portfolioItemSecondEl.attr('style',  'order:0');
			portfolioItemThirdEl.attr('style',  'order:1');
		}

		else if  (window.matchMedia('(max-width: 1023px)').matches // если окно больше 1023px и активна третья точка
			&& paginationDotThirdEl.hasClass('pagination__dot--active'))
		{
			portfolioItemThirdEl.attr('style',  'order:-1'); // то виден третий кейс
			portfolioItemFirstEl.attr('style',  'order:0');
			portfolioItemSecondEl.attr('style',  'order:1');
		}
	}

	paginationDotEl.on('click', carouselBtnClickSlider);
});
