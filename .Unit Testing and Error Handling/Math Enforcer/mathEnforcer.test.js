
let { expect } = require("chai");
let { mathEnforcer } = require("./mathEnforcer");

// •	addFive(num) - A function that accepts a single parameter:
// o	If the parameter is NOT a number, the function should return undefined.
// o	If the parameter is a number, add 5 to it, and return the result.
// •	subtractTen(num) - A function that accepts a single parameter:
// o	If the parameter is NOT a number, the function should return undefined.
// o	If the parameter is a number, subtract 10 from it, and return the result.
// •	sum(num1, num2) - A function that accepts two parameters:
// o	If any of the 2 parameters is NOT a number, the function should return undefined.
// o	If both parameters are numbers, the function should return their sum. 


describe("Math Enforcer", () => {
    //addFive(num)
    describe("Math Enforcer-addFive(num)", () => {
        it("with a string - undefined", function () {
            let result = mathEnforcer.addFive("5");
            expect(result).to.be.undefined;
        });
 
        it("with positive number", function () {
            let result = mathEnforcer.addFive(5);
            expect(result).to.equal(10);
        });
 
        it("with negative number", function () {
            let result = mathEnforcer.addFive(-5);
            expect(result).to.equal(0);
        });
 
        it("with floating number", function () {
            let result = mathEnforcer.addFive(3.12);
            expect(result).to.be.closeTo(8.12, 0.01);
        });
    });
    //subtractTen(num)
    describe("Math Enforcer-subtractTen(num)", () => {
        it("with a string - undefined", function () {
            let result = mathEnforcer.subtractTen("5");
            expect(result).to.be.undefined;
        });
 
        it("with positive number", function () {
            let result = mathEnforcer.subtractTen(20);
            expect(result).to.equal(10);
        });
 
        it("with negative number", function () {
            let result = mathEnforcer.subtractTen(-20);
            expect(result).to.equal(-30);
        });
 
        it("with floating number", function () {
            let result = mathEnforcer.subtractTen(3.12);
            expect(result).to.be.closeTo(-6.88, 0.01);//може и .to.equal
        });
    });
    //sum(num1, num2)
    describe("Math Enforcer-sum(num1, num2)", () => {
        it("with a 2 parameters is NOT a number-undefined", () => {
            let result = mathEnforcer.sum("1", "0");
            expect(result).to.be.undefined;
        });
        it("with a second parameters is NOT a number-undefined", () => {
            let result = mathEnforcer.sum(1,"1");
            expect(result).to.be.undefined;
        });
        it("with a first  parameters is NOT a number-undefined", () => {
            let result = mathEnforcer.sum("1", 0);
            expect(result).to.be.undefined;
        });
        it("If both parameters are pozitive numbers-sum", () => {
            let result = mathEnforcer.sum(1, 0);
            expect(result).to.equal(1);
        });
        it("If both parameters are negative numbers-sum", () => {
            let result = mathEnforcer.sum(-10, -5);
            expect(result).to.equal(-15);
        });
        it("with floating  positive number", function () {
            let result = mathEnforcer.sum(15.36,15.36);
            expect(result).to.be.closeTo(30.72, 0.01);//може и .to.equal
        });
        it("with floating  negative number", function () {
            let result = mathEnforcer.sum(-15.36,-15.36);
            expect(result).to.be.closeTo(-30.72, 0.01);//може и .to.equal
        });

    });
});