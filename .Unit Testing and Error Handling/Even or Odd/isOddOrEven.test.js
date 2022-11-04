let {assert} = require("chai");

let { isOddOrEven } = require("./isOddOrEven");

///describe("test  sOddOrEvenfunctionality ", () => {
    describe("test  isOddOrEven  with incorrec value ", () => {

        it("Result shuld be undefine with array", () => {
            assert.equal(isOddOrEven  ([]), undefined)
        });

        it("Result shuld be undefine with empty  object argument", () => {
            assert.equal(isOddOrEven ({}), undefined)
        });

        it("Result shuld be undefine with empty  object argument", () => {
            assert.equal(isOddOrEven ({ name: "Pesho" }))
        });
        it("Result shuld be undefine with empty  number argument", () => {
            assert.equal(isOddOrEven (1), undefined)
        });
        it("Result shuld be undefine with empty boolean argument", () => {
            assert.equal(isOddOrEven(true), undefined)
        });

    });

    describe("test  IsOddOrEven with correct value ", () => {

        it("Result shuld be even with `Love`", () => {
            assert.equal(isOddOrEven ("love"), "even")
        });
        it("Result shuld be even with `Todor`", () => {
            assert.equal(isOddOrEven ("Todor"), "odd")
        });
    });
//});
