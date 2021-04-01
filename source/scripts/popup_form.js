for (let i=0, length = formBtnsCollection.length; i < length; i++) {
	formBtnsCollection[i].addEventListener('click', function(ev) {
		ev.preventDefault();

		headerEl.classList.remove('menu-open');
		bodyEl.classList.add('js-fixed');
		btnMunuLine.classList.remove('btn-line--active');

		popupContainerEl.classList.add('animate-form');
	});
}

for (let i=0, length = btnClosePopupCollection.length; i < length; i++) {
	btnClosePopupCollection[i].addEventListener('click', function(ev) {
		ev.preventDefault();

		popupContainerEl.classList.remove('animate-form');
		bodyEl.classList.remove('js-fixed');
		popupContainerEl.classList.remove('animate-success');
	});
}

popupSuccessBtnEl.addEventListener('click', function() {
	popupContainerEl.classList.remove('animate-success');
});

document.addEventListener('mousedown', function(e) {
	if(!e.target.closest('.js-popup-form') && !e.target.closest('.js-popup-success') ){
		popupContainerEl.classList.remove('animate-form');
		popupContainerEl.classList.remove('animate-success');
		bodyEl.classList.remove('js-fixed');
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

	telInputEl.addEventListener('input', mask, false);
	telInputEl.addEventListener('focus', mask, false);
	telInputEl.addEventListener('blur', mask, false)
});

let formSubmitHandler = function(e) {
	e.preventDefault();
	Email.send({
		SecureToken: "0079c8e2-11ff-4db9-8990-d53ff02914bd",
		To : 'ik1vikuz@gmail.com',
		From : 'ik1vikuz@gmail.com',
		Subject : "Portfolio-page request",
		Body :`
			<html>
				<h2>Имя адресата:</h2>
					
				<p>${nameInputEl.value}<p/>

				<h2>Телефон:</h2>

				<p>${telInputEl.value}<p/>

				<h2>Почтовый адрес:</h2>

				<p>${mailInputEl.value}<p/>
			</html>`
	}).then(
	  message => {
		popupContainerEl.classList.remove('animate-form');
		popupContainerEl.classList.add('animate-success');
		formEl.reset();
	  }
	);
}

formEl.addEventListener('submit', formSubmitHandler);
