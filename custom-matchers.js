// crazy syntax for custom matchers. Generally avoid these
// registered in spec-runner
// used in calculator.spec.js

const customMatchers = {
    toBeCalculator: function () {
        return {
            compare: function (actual) {
                const result = {
                    pass: actual instanceof Calculator,
                    message: ''
                }

                if (result.pass) {
                    // this is for when the matcher is negated
                    result.message = 'Expected ' + actual + ' not to be instance of Calculator';
                } else {
                    result.message = 'Expected ' + actual + ' to be instance of Calculator';
                }

                return result;
            }
        }
    }
}