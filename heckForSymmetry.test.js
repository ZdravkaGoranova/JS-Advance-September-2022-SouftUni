let { expect } = require("chai");
let { isSymmetric } = require('./heckForSymmetry');

describe("Symmetric Checker", () => {

    it("works with symmetrick numeric array", () => {
        expect(isSymmetric([1, 2, 2, 1])).to.be.true;
    });

    it("returns false for  non symmetrick numeric array", () => {
        expect(isSymmetric([1, 2, 3])).to.be.false;
    });

    it("returns false for  non  array", () => {
        expect(isSymmetric(5)).to.be.false;
    });
    
    it("works whti symmetrick odd-length array ", () => {
        expect(isSymmetric([1, 2, 1])).to.be.true;
    });
    it("works whti symmetrick string array ", () => {
        expect(isSymmetric(['a', 'b', 'b', 'a'])).to.be.true;
    });

    it("returns false for  string param", () => {
        expect(isSymmetric('adanj')).to.be.false;
    });
    it("returns false for  type mismatched elements", () => {
        expect(isSymmetric([1, 2, '3'])).to.be.false;
    });
    it("returns false for  type  elements string", () => {
        expect(isSymmetric([1, 2, '2',1])).to.be.false;
    });
});