let { assert } = require("chai");
let { flowerShop } = require("./flowerShop");

describe("Tests flower Shop", function () {
    describe(" Test calcPriceOfFlowers(flower, price, quantity) ", function () {

        it("Check valid parameters 1", function () {
            let expectText = flowerShop.calcPriceOfFlowers("flower", 10, 2);
            assert.equal(flowerShop.calcPriceOfFlowers("flower", 10, 2), expectText);
        });
        it("Check valid parameters 2", function () {

            assert.equal(flowerShop.calcPriceOfFlowers("flower", 10, 2), `You need $20.00 to buy flower!`);
            assert.equal(flowerShop.calcPriceOfFlowers("flower", 1, 200), `You need $200.00 to buy flower!`);
            assert.equal(flowerShop.calcPriceOfFlowers("flower", 0, 2), `You need $0.00 to buy flower!`);
        });
        it("not correct", function () {
            assert.throw(() => { flowerShop.calcPriceOfFlowers(10, 10, 2) }, "Invalid input!");
            assert.throw(() => { flowerShop.calcPriceOfFlowers([], 10, 2) }, "Invalid input!");
            assert.throw(() => { flowerShop.calcPriceOfFlowers({}, 10, 2) }, "Invalid input!");

            assert.throw(() => { flowerShop.calcPriceOfFlowers("flower", [], 2) }, "Invalid input!");
            assert.throw(() => { flowerShop.calcPriceOfFlowers("flower", {}, 2) }, "Invalid input!");
            assert.throw(() => { flowerShop.calcPriceOfFlowers("flower", "10", 2) }, "Invalid input!");

            assert.throw(() => { flowerShop.calcPriceOfFlowers("flower", 10, "2") }, "Invalid input!");
            assert.throw(() => { flowerShop.calcPriceOfFlowers("flower", 10, {}) }, "Invalid input!");
            assert.throw(() => { flowerShop.calcPriceOfFlowers("flower", 10, []) }, "Invalid input!");
        });
    });

    describe(" Test checkFlowersAvailable", function () {
        it("If present in the array", function () {
            assert.equal(flowerShop.checkFlowersAvailable("Rose", ["Rose", "Lily", "Orchid"]), `The Rose are available!`);
            assert.equal(flowerShop.checkFlowersAvailable("Lily", ["Rose", "Lily", "Orchid"]), `The Lily are available!`);
            assert.equal(flowerShop.checkFlowersAvailable("Orchid", ["Rose", "Lily", "Orchid"]), `The Orchid are available!`);
        });

        it("If  NOT present in the array", function () {
            assert.equal(flowerShop.checkFlowersAvailable("FLOWER", ["Rose", "Lily", "Orchid"]), `The FLOWER are sold! You need to purchase more!`);
            assert.equal(flowerShop.checkFlowersAvailable("flower", ["Rose", "Lily", "Orchid"]), `The flower are sold! You need to purchase more!`);
        });
    });
    describe("Test  sellFlowers", function () {
        it("Check for valid parameters 1", function () {
            assert.throw(() => { flowerShop.sellFlowers("string", "string") }, "Invalid input!");
            assert.throw(() => { flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], "string") }, "Invalid input!");
            assert.throw(() => { flowerShop.sellFlowers("string", 3) }, "Invalid input!");
            assert.throw(() => { flowerShop.sellFlowers("string",["Rose", "Lily", "Orchid"]) }, "Invalid input!");
            assert.throw(() => { flowerShop.sellFlowers(3,3) }, "Invalid input!");

            assert.throw(() => { flowerShop.sellFlowers({}, -3) }, "Invalid input!");
            assert.throw(() => { flowerShop.sellFlowers(3, -3) }, "Invalid input!");
            assert.throw(() => { flowerShop.sellFlowers("3", -3) }, "Invalid input!");
            assert.throw(() => { flowerShop.sellFlowers([], 0) }, "Invalid input!");
        });
        it("Check for valid parameters 2", function () {
        
            assert.equal(flowerShop.sellFlowers(['Rose', 'Orch', 'Lily'], 1), `Rose / Lily`);
            assert.equal(flowerShop.sellFlowers(['Rose', 'Orch', 'Lily'], 2), `Rose / Orch`);
            assert.equal(flowerShop.sellFlowers(['Rose', 'Orch', 'Lily'], 0), `Orch / Lily`);
        });
    });
});