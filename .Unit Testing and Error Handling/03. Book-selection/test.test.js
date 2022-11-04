let { assert } = require("chai");
let { bookSelection } = require("./solution");

describe("Tests Book selection", function () {
    describe("Test isGenreSuitable", function () {
        // it("TODO …", function () { TEST дали работи
        //     assert.equal(1,1)
        // });

        function concatText(genre, age) {
            return `Books with ${genre} genre are not suitable for kids at ${age} age`;
        };
        it("Thriller - Horror", function () {
            let expectText = concatText("Thriller", 12);
            assert.equal(bookSelection.isGenreSuitable("Thriller", 12), expectText);

            expectText = concatText("Horror", 12);
            assert.equal(bookSelection.isGenreSuitable("Horror", 12), expectText);

        });
        it("not correct", function () {
            let expText = `Those books are suitable`;
            assert.equal(bookSelection.isGenreSuitable("Thriller", 13), expText);
            assert.equal(bookSelection.isGenreSuitable("Thriller", 25), expText);
            assert.equal(bookSelection.isGenreSuitable("Horror", 13), expText);
            assert.equal(bookSelection.isGenreSuitable("Horror", 25), expText);
        });

    }); describe("Test isItAffordable", function () {
        it("if the price and budget are not a number", () => {
            assert.throw(function () { bookSelection.isItAffordable("10", 13) }, "Invalid input");
            assert.throw(() => { bookSelection.isItAffordable("pesho", "gosho") }, "Invalid input");
            assert.throw(() => { bookSelection.isItAffordable("10", "13") }, "Invalid input");
            assert.throw(() => { bookSelection.isItAffordable(10, "13") }, "Invalid input");
        });

        it("don't have enough money", function () {
            assert.equal(bookSelection.isItAffordable(11, 10), "You don't have enough money");
            assert.equal(bookSelection.isItAffordable(61, 60), "You don't have enough money");
        });
        it("if the above conditions are not met", function () {
            assert.equal(bookSelection.isItAffordable(11, 11), "Book bought. You have 0$ left");
            assert.equal(bookSelection.isItAffordable(61, 63), "Book bought. You have 2$ left");
            assert.equal(bookSelection.isItAffordable(61, 71), "Book bought. You have 10$ left");
        });

    });
    describe("Test suitableTitles", function () {
        it("an array and string may not always be valid", function () {
            assert.throw(() => { bookSelection.suitableTitles("10", "13") }, "Invalid input");
            assert.throw(() => { bookSelection.suitableTitles(10, "13") }, "Invalid input");
            assert.throw(() => { bookSelection.suitableTitles({}, "13") }, "Invalid input");

            assert.throw(() => { bookSelection.suitableTitles([{ title: "The Da Vinci Code", genre: "Thriller" }], 13) }, "Invalid input");
            assert.throw(() => { bookSelection.suitableTitles([{ title: "The Da Vinci Code", genre: "Thriller" }], []) }, "Invalid input");
            assert.throw(() => { bookSelection.suitableTitles([{ title: "The Da Vinci Code", genre: "Thriller" }], {}) }, "Invalid input");

            assert.throw(function () { bookSelection.suitableTitles([],) }, "Invalid input");
            assert.throw(() => { bookSelection.suitableTitles("10", "13") }, "Invalid input");
            assert.throw(() => { bookSelection.suitableTitles("10", "13") }, "Invalid input");
            assert.throw(() => { bookSelection.suitableTitles(10, 13) }, "Invalid input");
            assert.throw(() => { bookSelection.suitableTitles({}, {}) }, "Invalid input");
        });

        it("corect data", function () {
            let input = [
                { title: "The Da Vinci Code", genre: "Thriller" },
                { title: "The Da Vinci Code1", genre: "Horror" },
                { title: "The Da Vinci Code2", genre: "Thriller" }
            ]
            let output =["The Da Vinci Code","The Da Vinci Code2"]
                assert.equal(bookSelection.suitableTitles(input,"Thriller").join(" ") , output.join(" "));
                output =["The Da Vinci Code1"]
                assert.equal(bookSelection.suitableTitles(input,"Horror").join(" ") , output.join(" "));
        });
    });
});
