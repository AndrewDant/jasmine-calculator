describe('main.js', function() {
    describe('calculate()', function() {
        xit('validates expression', function () {
            
        });

        it('calls add', function () {
            
        });

        it('calls subtract', function () {
            
        });

        it('calls multiply', function () {
            
        });

        it('calls divide', function () {
            
        });

        it('validates operation', function () {
            
        });

        it('calls updateResult', function () {
            
        });
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