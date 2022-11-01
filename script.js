const btnClick = document.querySelectorAll('button');
let displayNumbers = document.querySelector('.result');

let answer;
let reset;
let blockInOne;
let inOne;
let inTwo;
let lastOperator = [];

btnClick.forEach((e) => {
	e.addEventListener('click', (e) => {
		switch (e.target.id) {
			case 'cls':
				displayNumbers.innerText = '';
				answer = '';
				reset = '';
				blockInOne = '';
				inOne = '';
				inTwo = '';
				lastOperator = [];
				break;
			case 'bsp':
				displayNumbers.innerText = displayNumbers.innerText.slice(0, -1);
				break;
			case '+':
				displayNumbers.innerText += e.target.id;
				if (displayNumbers.innerText.includes('+') && blockInOne !== 1) {
					inOne = displayNumbers.innerText.slice(0, -1);
					displayNumbers.innerText = '';
					blockInOne = 1;
					lastOperator.unshift('+');
					console.log(inOne);
				}
				if (displayNumbers.innerText.includes('+')) {
					inTwo = displayNumbers.innerText.slice(0, -1);
					answer = +inOne + +inTwo;
					displayNumbers.innerText = answer;
					blockInOne = 0;
					reset = 1;
				}
				break;
			case '-':
				displayNumbers.innerText += e.target.id;
				if (displayNumbers.innerText.includes('-') && blockInOne !== 1) {
					inOne = displayNumbers.innerText.slice(0, -1);
					displayNumbers.innerText = '';
					blockInOne = 1;
					lastOperator.unshift('-');
					console.log(inOne);
				}
				if (displayNumbers.innerText.includes('-')) {
					inTwo = displayNumbers.innerText.slice(0, -1);
					answer = inOne - inTwo;
					displayNumbers.innerText = answer;
					blockInOne = 0;
					reset = 1;
				}
				break;
			case '/':
				displayNumbers.innerText += e.target.id;
				if (displayNumbers.innerText.includes('/') && blockInOne !== 1) {
					inOne = displayNumbers.innerText.slice(0, -1);
					displayNumbers.innerText = '';
					blockInOne = 1;
					lastOperator.unshift('/');
					console.log(inOne);
				}
				if (displayNumbers.innerText.includes('/')) {
					inTwo = displayNumbers.innerText.slice(0, -1);
					answer = inOne / inTwo;
					displayNumbers.innerText = answer;
					blockInOne = 0;
					reset = 1;
				}
				break;
			case '*':
				displayNumbers.innerText += e.target.id;
				if (displayNumbers.innerText.includes('*') && blockInOne !== 1) {
					inOne = displayNumbers.innerText.slice(0, -1);
					displayNumbers.innerText = '';
					blockInOne = 1;
					lastOperator.unshift('*');
					console.log(inOne);
				}
				if (displayNumbers.innerText.includes('*')) {
					inTwo = displayNumbers.innerText.slice(0, -1);
					answer = inOne * inTwo;
					displayNumbers.innerText = answer;
					blockInOne = 0;
					reset = 1;
				}
				break;
			case '%':
				displayNumbers.innerText += e.target.id;
				if (displayNumbers.innerText.includes('%') && blockInOne !== 1) {
					inOne = displayNumbers.innerText.slice(0, -1);
					displayNumbers.innerText = '';
					blockInOne = 1;
					lastOperator.unshift('%');
					console.log(inOne);
				}
				if (displayNumbers.innerText.includes('%')) {
					inTwo = displayNumbers.innerText.slice(0, -1);
					answer = inOne % inTwo;
					displayNumbers.innerText = answer;
					blockInOne = 0;
					reset = 1;
				}
				break;
			case '=':
				if (inOne !== '' && displayNumbers.innerText !== '') {
					let operator = lastOperator[0];
					switch (operator) {
						case '%':
							answer = +inOne % +displayNumbers.innerText;
							displayNumbers.innerText = answer;
							break;
						case '/':
							answer = +inOne / +displayNumbers.innerText;
							displayNumbers.innerText = answer;
							break;
						case '*':
							answer = +inOne * +displayNumbers.innerText;
							displayNumbers.innerText = answer;
							break;
						case '-':
							answer = +inOne - +displayNumbers.innerText;
							displayNumbers.innerText = answer;
							break;
						case '+':
							answer = +inOne + +displayNumbers.innerText;
							displayNumbers.innerText = answer;
							break;
						default:
							break;
					}
				}
				break;
			default:
				if (reset) {
					inOne = answer;
					answer = '';
					displayNumbers.innerText = e.target.id;
					reset = 0;
				} else {
					displayNumbers.innerText += e.target.id;
				}
		}
	});
});
