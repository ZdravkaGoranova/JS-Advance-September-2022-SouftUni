let { assert } = require("chai");
let { carService } = require("./CarService");

describe("Tests carService,", function () {
    describe("Test isItExpensive (issue) ", function () {
        it("issue is equal to Engine or Transmission", function () {
            assert.equal(carService.isItExpensive("Engine"), `The issue with the car is more severe and it will cost more money`);
            assert.equal(carService.isItExpensive("Transmission"), `The issue with the car is more severe and it will cost more money`);
        });
        it("if the above conditions are not met", function () {
            assert.equal(carService.isItExpensive("text"), `The overall price will be a bit cheaper`);
        });
    });
    describe("Test discount (numberOfParts, totalPrice)", function () {
        it("validate the input", function () {
            assert.throw(() => { carService.discount("10", "13") }, "Invalid input");
        });
        it("If the numberOfParts is smaller or equal to 2, return:", function () {
            assert.equal(carService.discount(2, 10), "You cannot apply a discount");
            assert.equal(carService.discount(0, 10), "You cannot apply a discount");
        });
        it("numberOfParts is higher than 2 and smaller or equal to 7", function () {
            let result = (15 / 100) * 10;
            assert.equal(carService.discount(3, 10), `Discount applied! You saved ${result}$`);
            assert.equal(carService.discount(7, 10), `Discount applied! You saved ${result}$`);
        });
        it("numberOfParts is higher than 7", function () {
            let result = (30 / 100) * 10;
            assert.equal(carService.discount(10, 10), `Discount applied! You saved ${result}$`);
        });
    });
    describe("Test partsToBuy (partsCatalog, neededParts) ", function () {
        it("validation for the input", function () {
            assert.throw(() => { carService.partsToBuy("10", "13") }, "Invalid input");
            assert.throw(() => { carService.partsToBuy(10, 13) }, "Invalid input");
        });
        it("If partsCatalog is empty, return 0", function () {
            assert.equal(carService.partsToBuy([], ["blowoff valve", "injectors"]), 0);
        });
        it("the total price of all parts needed", function () {
            let totalSum = 0;
            assert.equal(carService.partsToBuy([{ part: "blowoff valve", price: 145 }, { part: "coil springs", price: 230 }], ["blowoff valve", "injectors"]), 145);
            assert.equal(carService.partsToBuy([{ part: "blowoff valve", price: 145 }, { part: "coil springs", price: 230 }], ["blowoff valve", "coil springs"]), 145 + 230);
        });
    });
});