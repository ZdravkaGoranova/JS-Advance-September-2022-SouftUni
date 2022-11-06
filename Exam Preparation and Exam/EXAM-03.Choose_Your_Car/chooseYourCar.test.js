let { assert } = require("chai");
let { chooseYourCar } = require("./chooseYourCar");

describe("Tests chooseYourCar", function () {
    describe("Test choosingType (type, color, year) ", function () {
        it("If the year is less than 1900 and the year is more than 2022", function () {
            assert.throw(function () { chooseYourCar.choosingType("Sedan", "color", 1898) }, "Invalid Year!");
            assert.throw(function () { chooseYourCar.choosingType("Sedan", "color", 2023) }, "Invalid Year!");
        });
        it("If the value of the string type is different from Sedan", function () {
            assert.throw(function () { chooseYourCar.choosingType("text", "color", 2022) }, "This type of car is not what you are looking for.");
            assert.throw(function () { chooseYourCar.choosingType("text", "color", 2000) }, "This type of car is not what you are looking for.");
        });
        it("If the year of the car is greater or equal to 2010, return ", function () {
            assert.equal(chooseYourCar.choosingType("Sedan", "color", 2010), "This color Sedan meets the requirements, that you have.");
            assert.equal(chooseYourCar.choosingType("Sedan", "color", 2020), "This color Sedan meets the requirements, that you have.");
        });
        it(" if the above conditions are not met, return ", function () {
            assert.equal(chooseYourCar.choosingType("Sedan", "color", 2000), "This Sedan is too old for you, especially with that color color.");
            assert.equal(chooseYourCar.choosingType("Sedan", "color", 2005), "This Sedan is too old for you, especially with that color color.");
        });
    });

    describe("Test brandName (brands, brandIndex) ", function () {
        it("need for validation for the input, an array and index may not always be valid. In case of submitted invalid parameters, throw an error ", function () {
            assert.throw(function () { chooseYourCar.brandName("text", 10) }, "Invalid Information!");
            assert.throw(function () { chooseYourCar.brandName(10, 10) }, "Invalid Information!");
            assert.throw(function () { chooseYourCar.brandName({}, 10) }, "Invalid Information!");

            assert.throw(function () { chooseYourCar.brandName(["BMW", "Toyota"], "2") }, "Invalid Information!");
            assert.throw(function () { chooseYourCar.brandName(["BMW", "Toyota"], 2) }, "Invalid Information!");
            assert.throw(function () { chooseYourCar.brandName(["BMW", "Toyota"], 2.2) }, "Invalid Information!");
            assert.throw(function () { chooseYourCar.brandName(["BMW", "Toyota"], -2) }, "Invalid Information!");
        });
        it("You must remove an element (brand) from the array that is located on the index specified as a parameter", function () {
            assert.equal(chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], 2), "BMW, Toyota");
            assert.equal(chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], 0), "Toyota, Peugeot");
        });
    });
    describe("Test carFuelConsumption (distanceInKilometers, consumptedFuelInLitres) ", function () {
        it("need to validate the input, if the distanceInKilometers   and consumptedFuelInLitres are not a numbers, or are a negative numbers, throw ", function () {
            assert.throw(function () { chooseYourCar.carFuelConsumption(-2, -2) }, "Invalid Information!");
            assert.throw(function () { chooseYourCar.carFuelConsumption(0, 0) }, "Invalid Information!");
            assert.throw(function () { chooseYourCar.carFuelConsumption("0", "0") }, "Invalid Information!");
            assert.throw(function () { chooseYourCar.carFuelConsumption({}, {}) }, "Invalid Information!");
            assert.throw(function () { chooseYourCar.carFuelConsumption([], []) }, "Invalid Information!");
        });
        it("	If the liters/100km is less or equal to 7L. return ", function () {
            
            assert.equal(chooseYourCar.carFuelConsumption(100, 7), "The car is efficient enough, it burns 7.00 liters/100 km.");
            assert.equal(chooseYourCar.carFuelConsumption(100, 6), "The car is efficient enough, it burns 6.00 liters/100 km.");
        });
        it("litersPerHundredKm > 7", function () {
            assert.equal(chooseYourCar.carFuelConsumption(50, 100), "The car burns too much fuel - 200.00 liters!");
            assert.equal(chooseYourCar.carFuelConsumption(20, 100), "The car burns too much fuel - 500.00 liters!");

        });
    });
});