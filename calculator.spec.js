describe('calculator.js', function() {
	// example of how suites can be nested
	describe('Calculator tests', function() {
		let calc;
		let calc2;
		// runs before each test
		beforeEach(function() {
			calc = new Calculator();
			calc2 = new Calculator();
		});

		it('should add straight to 5', function() {
			calc.add(5);
			expect(calc.total).toBe(5);
		});
	
		it('should subtract from total', function() {
			calc.total = 30;
			calc.subtract(5);
			expect(calc.total).toBe(25);
		});
	
		it('should multiply total by number', function() {
			calc.total = 10;
			calc.multiply(10);
			expect(calc.total).toBe(100);
		});
	
		it('should divide total by number', function() {
			calc.total = 10;
			calc.divide(2);
			expect(calc.total).toBe(5);
		});
	
		it('should initialize to 0', function() {
			expect(calc.total).toBe(0);
		});
	
		it('should be instantiated', function() {	
			expect(calc).toBeTruthy();
			expect(calc2).toBeTruthy();
			expect(calc).toEqual(calc2);
		});
	
		it('does not handle NaN in division', function() {
			calc.total = 20;
			calc.multiply('a');
	
			expect(calc.total).toBeNaN();
		});
	
		it('throws an error on divide by zero', function () {
			expect(function () { calc.divide(0); }).toThrow();
			expect(function () { calc.divide(0); }).toThrowError();
		});
	
		it('is of type Calculator', function () {
			// required to use custom matchers
			jasmine.addMatchers(customMatchers);
	
			expect(calc).toBeCalculator();
		});
	
		it('uses third party matchers', function () {
			// toBeNumber comes from an added third party library of matchers
			expect(0).toBeNumber();
		});
	});
});