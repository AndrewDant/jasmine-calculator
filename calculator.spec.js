describe('calculator.js', function() {
	it('should add straight to 5', function() {
		const calc = new Calculator();
		calc.add(5);
		expect(calc.total).toBe(5);
	});

	it('should subtract from total', function() {
		const calc = new Calculator();
		calc.total = 30;
		calc.subtract(5);
		expect(calc.total).toBe(25);
	});

	it('should multiply total by number', function() {
		const calc = new Calculator();
		calc.total = 10;
		calc.multiply(10);
		expect(calc.total).toBe(100);
	});

	it('should divide total by number', function() {
		const calc = new Calculator();
		calc.total = 10;
		calc.divide(2);
		expect(calc.total).toBe(5);
	});

	it('should initialize to 0', function() {
		const calc = new Calculator();
		expect(calc.total).toBe(0);
	});

	it('should be instantiated', function() {
		const calc = new Calculator();
		const calc2 = new Calculator();

		expect(calc).toBeTruthy();
		expect(calc2).toBeTruthy();
		expect(calc).toEqual(calc2);
	});

	it('does not handle NaN in division', function() {
		const calc = new Calculator();

		calc.total = 20;
		calc.multiply('a');

		expect(calc.total).toBeNaN();
	});

	it('throws an error on divide by zero', function () {
		const calc = new Calculator();

		expect(function () { calc.divide(0); }).toThrow();
		expect(function () { calc.divide(0); }).toThrowError();
	});

	it('is of type Calculator', function () {
		// required to use custom matchers
		jasmine.addMatchers(customMatchers);

		const calc = new Calculator();
		expect(calc).toBeCalculator();
	});
});