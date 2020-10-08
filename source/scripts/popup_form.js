for (let i=0, length = formBtnsCollection.length; i < length; i++) {
	formBtnsCollection[i].addEventListener('click', function(ev) {
		ev.preventDefault();

		headerEl.classList.remove('menu-open');
		bodyEl.classList.remove('js-fixed');

		popupContainerEl.style.display = 'block';
	});
}

btnPopupCloseEl.addEventListener('click', function() {
	popupContainerEl.style.display = 'none';
	formEl.reset();
});

document.addEventListener('mousedown', function(e) {
	if(!e.target.closest('.js-popup')){
		popupContainerEl.style.display = 'none';
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

	telInputEl.addEventListener('input', mask, false);
	telInputEl.addEventListener('focus', mask, false);
	telInputEl.addEventListener('blur', mask, false)
});

let formSubmitHandler = function() {
	popupContainer.style.display = 'none';
	alert('Спасибо!Данные переданы успешно');
}

formEl.addEventListener('submit', formSubmitHandler);