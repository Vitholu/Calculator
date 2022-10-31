// Display Result
const btnClick = document.querySelectorAll('button');
const displayNumbers = document.querySelector('.result');
let arrayNumbers = [];

btnClick.forEach((e) => {
	e.addEventListener('click', (e) => {
		console.log(e.target.id);
		if (e.target.id >= 0 || e.target.id === '.') {
			if (arrayNumbers.indexOf(0) === 0) {
				arrayNumbers.pop();
			}
			arrayNumbers.push(e.target.id);
			for (const n of arrayNumbers) {
				displayNumbers.textContent = arrayNumbers.join('');
			}
		}
		console.log(arrayNumbers);

		if (e.target.id === 'cls') {
			return clearAll(true);
		}
	});
});

// Operators

function sum(a, b) {
	return sum;
}

function subtract(a, b) {
	return subtract;
}

function multiply(a, b) {
	return multiply;
}

function divide(a, b) {
	return divide;
}

// Misc

function clearAll(x) {
	if (x) {
		arrayNumbers = [0];
		console.log('made it to clearAll');
		displayNumbers.textContent = arrayNumbers.join('');
	}
}

function remove(x) {
	return remove;
}

function equal(x) {
	return equal;
}
