
let { expect } = require("chai");
let { lookupChar } = require("./CharLookup");

// If the first parameter is NOT a string or the second parameter is NOT a number - return undefined.
// o If both parameters are of the correct type but the value of the index is incorrect (bigger than or equal to the string length or a negative number) - return "Incorrect index".
// o If both parameters have correct types and values - return the character at the specified index in the string.


describe("Char Lookup-Tests for this task", function () {

    describe("Check the string input", function () {
        it("the first parameter is a string", function () {
            expect(lookupChar("opa", 1)).to.equal("p");
        });
        it("the second parameter is NOT a number-should be undefined", function () {
            expect(lookupChar("1", "1")).to.be.undefined;
        });
    });

    describe("Check the index input", function () {
        it("should be undefined", function () {
            expect(lookupChar(1, 1)).to.be.undefined;
        });
    });

    describe("Check both the string and the index input", function () {
        it("the second parameter is NOT a number", function () {
            expect(lookupChar(1, "1")).to.be.undefined;
        });
    });

    describe("Check the length", function () {
        it("  the index is incorrect bigger than string length", function () {
            expect(lookupChar("love", 5)).to.be.equal("Incorrect index");
            //expect([1, 2, 3]).to.have.lengthOf(4, 'Incorrect index'); ako prowerqwame арр
        });
        it("  the index is incorrect  a negative number", function () {
            expect(lookupChar("love", -1)).to.be.equal("Incorrect index");
        });
    });

    describe("Check if the index is integer", function () {
        it("should be Incorrect index", function () {
            expect(lookupChar("opa", 4.5)).to.be.undefined;
        });
    })
});