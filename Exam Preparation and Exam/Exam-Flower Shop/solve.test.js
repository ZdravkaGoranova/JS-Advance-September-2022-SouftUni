let { assert } = require("chai");
let { rentCar } = require("./solve");

describe("Tests rentCar", function () {
    describe("Test searchCar(one array and one string)", function () {
        it("invalid parameters", function () {
            assert.throw(() => { rentCar.searchCar(10, 10) }, "Invalid input!");
            assert.throw(() => { rentCar.searchCar("10", "10") }, "Invalid input!");
            assert.throw(() => { rentCar.searchCar([], []) }, "Invalid input!");
        });
        it("corect parameters", function () {
            assert.equal(rentCar.searchCar(["Volkswagen", "BMW", "Audi", 'Jeep', 'Toyota', 'Mercedes', 'BMW'], 'BMW'), `There is 2 car of model BMW in the catalog!`)
            assert.equal(rentCar.searchCar(["Volkswagen", "BMW", "Audi", 'Jeep', 'Toyota', 'Mercedes', 'Dodge'], 'BMW'), `There is 1 car of model BMW in the catalog!`)
        });
        it("there are no matching elemen", function () {
            assert.throw(() => { rentCar.searchCar(["Volkswagen", "BMW", 'Jeep', 'Toyota', 'Mercedes', 'BMW'], "Audi") }, 'There are no such models in the catalog!');
            assert.throw(() => { rentCar.searchCar(["Volkswagen", "BMW", 'Toyota', 'Mercedes', 'BMW'], 'Jeep') }, 'There are no such models in the catalog!');
        });
    });
    describe("Test calculatePriceOfCar(string and number)", function () {
        it("validation of the input", function () {
            assert.throw(() => { rentCar.calculatePriceOfCar("10", "10") }, "Invalid input!");
            assert.throw(() => { rentCar.calculatePriceOfCar(10, 10) }, "Invalid input!");
            assert.throws(function () { rentCar.calculatePriceOfCar([1, 2, 3], 1.5) }, Error, 'Invalid input')
        });
        it("function returns the model and the price ", function () {
            assert.equal(rentCar.calculatePriceOfCar('BMW', 10), `You choose BMW and it will cost $450!`)
            assert.equal(rentCar.calculatePriceOfCar('Volkswagen', 10), `You choose Volkswagen and it will cost $200!`)
        });
        it("there is no such model", function () {
            assert.throw(() => { rentCar.calculatePriceOfCar("Doge", 5) }, "No such model in the catalog!");
        });
    });
    describe("Test -checkBudget(costPerDay, days, budget) ", function () {
        it("validation of the input", function () {
            assert.throw(() => { rentCar.checkBudget("10", "10", "10") }, "Invalid input!");
            assert.throw(() => { rentCar.checkBudget([], [], []) }, "Invalid input!");
            assert.throw(() => { rentCar.checkBudget({}, {}, {}) }, "Invalid input!");
        });
        it("If the budget is bigger or equal to cost, function return: `You rent a car!`;", function () {
            assert.equal(rentCar.checkBudget(1, 10, 50), `You rent a car!`)
            assert.equal(rentCar.checkBudget(1, 10, 10), `You rent a car!`)
        });
        it("If the budget is less than cost, the function returns the message: 'You need a bigger budget!'", function () { 
            assert.equal(rentCar.checkBudget(10, 10, 50), `You need a bigger budget!`);

        });
    });
});