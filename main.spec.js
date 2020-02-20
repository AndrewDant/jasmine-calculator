describe('main.js', function() {
    describe('calculate()', function() {

        beforeEach(function() {
            spyOn(window, 'updateResult');
        });

        it('validates expression', function () {
            calculate('a+3');

            expect(window.updateResult).toHaveBeenCalledWith('Invalid operation!');
        });

        it('calls add', function () {
            const spy = spyOn(Calculator.prototype, 'add');

            calculate('3+4');

            expect(Calculator.prototype.add).toHaveBeenCalledTimes(2);
            // alternate syntax
            expect(spy).toHaveBeenCalledTimes(2);

            expect(spy).toHaveBeenCalledWith(3);
            expect(spy).toHaveBeenCalledWith(4);
        });

        it('calls subtract', function () {
            const spy = spyOn(Calculator.prototype, 'subtract');

            calculate('3-7');

            expect(spy).not.toHaveBeenCalledWith(3);
            expect(spy).toHaveBeenCalledWith(7);
        });

        it('calls multiply', function () {
            const spy = spyOn(Calculator.prototype, 'multiply');

            calculate('5*5');

            expect(spy).toHaveBeenCalledWith(5);
        });

        it('calls divide', function () {
            const spy = spyOn(Calculator.prototype, 'divide');

            calculate('6/1');

            expect(spy).toHaveBeenCalledWith(1);
            expect(spy).not.toHaveBeenCalledWith(6);
        });

        it('calls updateResult (example using and.callThrough', function () {
            spyOn(Calculator.prototype, 'multiply').and.callThrough();

            calculate('5*5');

            expect(window.updateResult).toHaveBeenCalledWith(25); 
        });

        it('calls updateResult (example using and.callFake)', function () {
            spyOn(Calculator.prototype, 'multiply').and.callFake(function (number) {
                return 'it works';
            });
    
            calculate('5*5');
    
            expect(window.updateResult).toHaveBeenCalled();
            expect(window.updateResult).toHaveBeenCalledWith('it works');
        });
    
        it('calls updateResult (example using and.returnValue)', function () {
            spyOn(Calculator.prototype, 'multiply').and.returnValue('whatever [multiply] returns');
    
            calculate('5*5');
    
            expect(window.updateResult).toHaveBeenCalled();
            expect(window.updateResult).toHaveBeenCalledWith('whatever [multiply] returns');
        });
    
        it('calls updateResult (example using and.returnValues)', function () {
            spyOn(Calculator.prototype, 'add').and.returnValues(null, 'whatever [add] returns');
    
            calculate('5+5');
    
            expect(window.updateResult).toHaveBeenCalled();
            expect(window.updateResult).toHaveBeenCalledWith('whatever [add] returns');
        });

        it('does not handle errors', function () {
            spyOn(Calculator.prototype, 'add').and.throwError('err');

            expect(function () { calculate('5+5'); }).toThrowError('err');
        })

    });

    describe('updateResult()', function() {
        let element;

        beforeAll(function() {
            element = document.createElement('div');
            element.setAttribute('id', 'result');
            document.body.appendChild(element);
        });

        afterAll(function () {
            document.body.removeChild(element);
        });
        
        it('adds result to DOM element', function () {
            updateResult('5');
            expect(element.innerText).toBe('5');
        });
    });
});