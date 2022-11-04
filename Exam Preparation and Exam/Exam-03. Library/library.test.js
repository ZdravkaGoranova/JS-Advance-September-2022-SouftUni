let {  expect } = require("chai");
let { library } = require("./library");

describe("Tests library", function () {
    describe("Test calcPriceOfBook (nameOfBook, year) ", function () {
        it('should throw an error if input is invalid', () => {
            expect(() => { library.calcPriceOfBook('', 3.3) }).to.throw('Invalid input');
            expect(() => { library.calcPriceOfBook('', -3.3) }).to.throw('Invalid input');
            expect(() => { library.calcPriceOfBook('', '') }).to.throw('Invalid input');
            expect(() => { library.calcPriceOfBook('', []) }).to.throw('Invalid input');
            expect(() => { library.calcPriceOfBook('', {}) }).to.throw('Invalid input');
            expect(() => { library.calcPriceOfBook('', undefined) }).to.throw('Invalid input');
            expect(() => { library.calcPriceOfBook('', true) }).to.throw('Invalid input');

            expect(() => { library.calcPriceOfBook(1, 2022) }).to.throw('Invalid input');
            expect(() => { library.calcPriceOfBook([], 2022) }).to.throw('Invalid input');
            expect(() => { library.calcPriceOfBook({}, 2022) }).to.throw('Invalid input');
            expect(() => { library.calcPriceOfBook(undefined, 2022) }).to.throw('Invalid input');
            expect(() => { library.calcPriceOfBook(true, 2022) }).to.throw('Invalid input');
            expect(() => { library.calcPriceOfBook(1.1, 2022) }).to.throw('Invalid input');
        });
        it('expect 50% discount of book', () => {
            expect(library.calcPriceOfBook('book', 1900)).to.equal('Price of book is 10.00');
            expect(library.calcPriceOfBook('book', 1980)).to.equal('Price of book is 10.00');
        });
        it("book is 20 BGN", function () {
            expect(library.calcPriceOfBook('book', 2000)).to.equal('Price of book is 20.00');
            expect(library.calcPriceOfBook('book',1981)).to.equal('Price of book is 20.00');
        });
    });
    describe("Test findBook (booksArr, desiredBook)", function () {
        it("If the length of the booksArr array is zero, throw ", function () {
            expect(() => { library.findBook([], "Troy") }).to.throw("No books currently available");
        });
        it("If present in the array, the function", function () {
            expect(library.findBook(["Troy", "Life Style", "Torronto"],"Troy")).to.equal("We found the book you want.");
        });
        it("Otherwise the function return", function () {
            expect(library.findBook(["Life Style", "Torronto"],"Troy")).to.equal("The book you are looking for is not here!");
        });
    });
    describe("Test arrangeTheBooks (countBooks) ", function () {
        it("validate the input, if the countBooks is not an integer number, or is a negative number, throw an error", function () {
            expect(() => { library.arrangeTheBooks(3.3) }).to.throw('Invalid input');
            expect(() => { library.arrangeTheBooks(-3) }).to.throw('Invalid input');
        });
        it("If all the books are arranged on the shelves", function () {
            expect(library.arrangeTheBooks(40)).to.equal("Great job, the books are arranged.");
            expect(library.arrangeTheBooks(20)).to.equal("Great job, the books are arranged.");
        });
        it("Otherwise, if no space has been reached", function () {
            expect(library.arrangeTheBooks(41)).to.equal("Insufficient space, more shelves need to be purchased.");
        });
    });
});