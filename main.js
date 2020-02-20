function calculate(inputVal) {
	const expression = /\+|\-|\/|\*/;
	const numbers = inputVal.split(expression);

	const num0 = parseInt(numbers[0]);
	const num1 = parseInt(numbers[1]);

	const op = inputVal.match(expression);

	if (Number.isNaN(num0) || Number.isNaN(num1) || op === null) {
		updateResult('Invalid operation!');
		return;
	}

	const calculator = new Calculator();
	calculator.add(num0);

	let result;
	switch(op[0]) {
		case '+':
			result = calculator.add(num1);
			break;
		case '-':
			result = calculator.subtract(num1);
			break;
		case '*':
			result = calculator.multiply(num1);
			break;
		case '/':
			result = calculator.divide(num1);
			break;
	}

	updateResult(result);
}

function updateResult(result) {
	const element = document.getElementById('result');

	if (element) {
		element.innerText = result;
	}
}

function showVersion() {
	const calculator = new Calculator();
	const element = document.getElementById('version');

	element.innerText = calculator.version;
}