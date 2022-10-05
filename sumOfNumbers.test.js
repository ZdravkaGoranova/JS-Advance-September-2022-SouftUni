let { expect } = require("chai");
const { sum } = require("./sumOfNumbers");


    
it('return correct sum', () => {
    let expected = 210;
    let numbers = [10, 20, 30, 40, 50, 60];

    let actualSum = sum(numbers);

    expect(actualSum).to.equal(expected);
});

it('return NaN', () => {
    let expected = NaN;
    let numbers = [10, 20, 'ttt', 40, 50, 60];

    let actualSum = sum(numbers);

    expect(isNaN(actualSum)).to.equal(true);
});

it('return correct value', () => {

    let numbers = [10, 20, 30, 40, 50, 60];
    let expected = numbers[0];

    for (let index = 1; index < numbers.length; index++) {
        expected += numbers[index];
    }

    expected -= numbers[5]

    let actualSum = sum(numbers);

    expect(actualSum).to.not.equal(expected);
});

it('return incorrect value when array include one element', () => {

    let numbers = [10];
    let expected = numbers[0];

    let actualSum = sum(numbers);

    expect(actualSum).to.equal(expected);
});
