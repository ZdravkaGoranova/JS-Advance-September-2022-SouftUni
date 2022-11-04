
const PaymentPackage = require('./PaymentPackage');
const { assert } = require('chai');
//TEST
// describe("test", () => {
//     it("test setting", function () {
//         assert.equal(1,1);
//     });
// });

describe('PaymentPackage tests', () => {
    describe('create instance', () => {
        let paymentPackage;
        beforeEach(() => {
            paymentPackage = new PaymentPackage('Slavi', 10);
        });

        it('name should be correct', () => {
            assert.equal(paymentPackage._name, 'Slavi', 'name is correct');
        });

        it('value should be correct', () => {
            assert.equal(paymentPackage._value, 10, 'value is correct set to 10');
        });

        it('VAT should be correct', () => {
            assert.equal(paymentPackage._VAT, 20, 'VAT is correct set to 20');
            assert.equal(typeof (paymentPackage._VAT), 'number', 'VAT is correct type')
        });

        it('active should be correct', () => {
            assert.equal(paymentPackage._active, true, 'active is correct set to true');
            assert.equal(typeof (paymentPackage._active), 'boolean', 'active has correct type');
        });
    });
    describe('test getters', () => {
        let paymentPackage;
        beforeEach(() => {
            paymentPackage = new PaymentPackage('Slavi', 10);
        });

        it('instance should return correct name', () => {
            assert.equal(paymentPackage.name, 'Slavi');
        });

        it('instance should return correct value', () => {
            assert.equal(paymentPackage.value, 10);
        });

        it('test get VAT', () => {
            assert.equal(paymentPackage.VAT, 20);
        });

        it('test get active', () => {
            assert.equal(paymentPackage.active, true);
        });
    });
    describe('test setters', () => {
        let paymentPackage;
        beforeEach(() => {
            paymentPackage = new PaymentPackage('Slavi', 10);
        });
        it('set incorrect type of name', () => {
            assert.throws(() => (new PaymentPackage(10, 10), 'Name must be a non-empty string'));
        });

        it('set empty name', () => {
            assert.throws(() => (new PaymentPackage('', 10), 'Name must be a non-empty string'));
        });

        it('set correct value', () => {
            assert.equal(paymentPackage.name, 'Slavi');
            paymentPackage.name = 'Gosho';
            assert.equal(paymentPackage.name, 'Gosho')
        });

        it('set incorrect value type', () => {
            assert.throws(() => (new PaymentPackage('Slavi', '10'), 'Value must be a non-negative number'));
        });

        it('set neggative value', () => {
            assert.throws(() => (new PaymentPackage('Slavi', -10), 'Value must be a non-negative number'));
        });

        it('set correct value', () => {
            assert.equal(paymentPackage.value, 10);
            paymentPackage.value = 20;
            assert.equal(paymentPackage.value, 20);
            paymentPackage.value = 0;
            assert.equal(paymentPackage.value, 0);
        });

        it('set incorrect VAT type', () => {
            assert.throws(() => (paymentPackage.VAT = 'Gosho'), 'VAT must be a non-negative number');
        });

        it('set incorrect VAT value', () => {
            assert.throws(() => (paymentPackage.VAT = -10), 'VAT must be a non-negative number');
        });

        it('set correct VAT', () => {
            assert.equal(paymentPackage.VAT, 20);
            paymentPackage.VAT = 50;
            assert.equal(paymentPackage.VAT, 50);
        });

        it('set incorrect active value', () => {
            assert.throws(() => (paymentPackage.active = 'Gosho'), 'Active status must be a boolean');
        });
        it('set correct active', () => {
            assert.equal(paymentPackage.active, true);
            paymentPackage.active = false;
            assert.equal(paymentPackage.active, false);
        });
    });
    describe('toString', () => {
        let paymentPackage;
        beforeEach(() => {
            paymentPackage = new PaymentPackage('Slavi', 10);
        });

        it('test active state', () => {
            const output = [
                `Package: Slavi`,
                `- Value (excl. VAT): 10`,
                `- Value (VAT 20%): ${10 * (1 + 20 / 100)}`
            ].join('\n');
            assert.equal(paymentPackage.toString(), output)
        });
        it('test not active state', () => {
            const output = [
                `Package: Slavi (inactive)`,
                `- Value (excl. VAT): 10`,
                `- Value (VAT 20%): ${10 * (1 + 20 / 100)}`
            ].join('\n');
            paymentPackage.active = false;
            assert.equal(paymentPackage.toString(), output)
        })
    });
});
//ВТОРО РЕШЕНИЕ 
// const PaymentPackage = require('../12. Payment Package');
// const { expect } = require('chai');
 
// describe('Tests for PaymentPackage Class', () => {
 
//     describe('Tests for the Name', () => {
 
//         it('constructor', () => {
//             let instance = new PaymentPackage('Name', 100);
 
//             assert.equal(instance._name, 'Name', '1');
//             assert.equal(instance._value, 100, '3');
//             assert.equal(instance._VAT, 20, '4');
//             assert.equal(instance._active, true, '5');
//         });
 
//         it('Should throw errow when the new Name is a number', () => {
//             expect(() => new PaymentPackage(123, 123)).to.throw('Name must be a non-empty string');
//         });
 
//         it('Should throw errow when the new Name is an array', () => {
//             expect(() => new PaymentPackage(['abc'], 123)).to.throw('Name must be a non-empty string');
//         });
 
//         it('Should throw errow when the new Name is empty', () => {
//             expect(() => new PaymentPackage('', 123)).to.throw('Name must be a non-empty string');
//         });
 
//         it('Should return the new Name if the input is good', () => {
//             expect(() => new PaymentPackage('abc', 123)).not.to.throw('Name must be a non-empty string');
//         });
//     });
 
//     describe('Tests for the Value', () => {
 
//         it('Should throw errow when the new Value is a string', () => {
//             expect(() => new PaymentPackage('abc', 'abc')).to.throw('Value must be a non-negative number');
//         });
 
//         it('Should throw errow when the new Value is an array', () => {
//             expect(() => new PaymentPackage('abc', [123])).to.throw('Value must be a non-negative number');
//         });
 
//         it('Should throw errow when the new Value is negative', () => {
//             expect(() => new PaymentPackage('abc', -123)).to.throw('Value must be a non-negative number');
//         });
 
//         it('Should return the new Value if the input is good', () => {
//             expect(() => new PaymentPackage('abc', 123)).not.to.throw('Value must be a non-negative number');
//         });
 
//         it('Set value to null', () => {
//             let instance = new PaymentPackage('Name', 100);
//             assert.doesNotThrow(() => { instance.value = 0 })
//         });
//     });
 
//     describe('Tests for the VAT', () => {
 
//         it('Should throw errow when the new VAT is a string', () => {
//             let flagClass = new PaymentPackage('abc', 123);
//             expect(() => flagClass.VAT = 'abc').to.throw('VAT must be a non-negative number');
//         });
 
//         it('Should throw errow when the new VAT is an array', () => {
//             let flagClass = new PaymentPackage('abc', 123);
//             expect(() => flagClass.VAT = [123]).to.throw('VAT must be a non-negative number');
//         });
 
//         it('Should throw errow when the new VAT is negative', () => {
//             let flagClass = new PaymentPackage('abc', 123);
//             expect(() => flagClass.VAT = -123).to.throw('VAT must be a non-negative number');
//         });
 
//         it('Should return the new VAT if the input is good', () => {
//             let flagClass = new PaymentPackage('abc', 123);
//             expect(() => flagClass.VAT = 123).not.to.throw('VAT must be a non-negative number');
//         });
//     });
 
//     describe('Tests for the Active', () => {
 
//         it('Should throw errow when the new Active is a string', () => {
//             let flagClass = new PaymentPackage('abc', 123);
//             expect(() => flagClass.active = 'abc').to.throw('Active status must be a boolean');
//         });
 
//         it('Should throw errow when the new Active is an array', () => {
//             let flagClass = new PaymentPackage('abc', 123);
//             expect(() => flagClass.active = [123]).to.throw('Active status must be a boolean');
//         });
 
//         it('Should throw errow when the new Active is negative', () => {
//             let flagClass = new PaymentPackage('abc', 123);
//             expect(() => flagClass.active = -123).to.throw('Active status must be a boolean');
//         });
 
//         it('Should return the new Active if the input is good', () => {
//             let flagClass = new PaymentPackage('abc', 123);
//             expect(() => flagClass.active = true).not.to.throw('Active status must be a boolean');
//         });
//     });
 
//     describe('Tests for toString Method', () => {
 
//         it('Should return a string as all the input is correct - 1', () => {
//             let flagClass = new PaymentPackage('abc', 123);
//             let output = [
//                 `Package: abc`,
//                 `- Value (excl. VAT): 123`,
//                 `- Value (VAT 20%): 147.6`
//             ]
//             expect(flagClass.toString()).to.equal(output.join('\n'));
//         });
 
//         it('Should return a string as all the input is correct - 2', () => {
//             let flagClass = new PaymentPackage('abc', 123);
//             flagClass.VAT = 30;
//             let output = [
//                 `Package: abc`,
//                 `- Value (excl. VAT): 123`,
//                 `- Value (VAT 30%): 159.9`
//             ]
//             expect(flagClass.toString()).to.equal(output.join('\n'));
//         });
 
//         it('Should return a string as all the input is correct - 3', () => {
//             let flagClass = new PaymentPackage('abc', 123);
//             flagClass.active = false;
//             let output = [
//                 `Package: abc (inactive)`,
//                 `- Value (excl. VAT): 123`,
//                 `- Value (VAT 20%): 147.6`
//             ]
//             expect(flagClass.toString()).to.equal(output.join('\n'));
//         });
 
//         it('Should return a string as all the input is correct - 4', () => {
//             let flagClass = new PaymentPackage('abc', 123);
//             flagClass.VAT = 30;
//             flagClass.active = false;
//             let output = [
//                 `Package: abc (inactive)`,
//                 `- Value (excl. VAT): 123`,
//                 `- Value (VAT 30%): 159.9`
//             ]
//             expect(flagClass.toString()).to.equal(output.join('\n'));
//         });
//     });
// });