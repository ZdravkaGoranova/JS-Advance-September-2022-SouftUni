let { expect } = require("chai");
const { rgbToHexColor } = require("./rGBtoHex");

describe("rgbToHexColor", () => {

    it("black", () => {
        expect(rgbToHexColor(0,0,0)).to.equal('#000000');
    });
    it("white", () => {
        expect(rgbToHexColor(255,255,255)).to.equal('#FFFFFF');
    });

    it("blue SoftUni", () => {
        expect(rgbToHexColor(35,68,101)).to.equal('#234465');
    });
    it("15 15 15 #0F0F0F", () => {
        expect(rgbToHexColor(15,15,15)).to.equal('#0F0F0F');
    });

    it("return  undefind for missing params", () => {
        expect(rgbToHexColor(0,0)).to.be.undefined;
        expect(rgbToHexColor(0)).to.be.undefined;
        expect(rgbToHexColor()).to.be.undefined;
    });
    it("return  undefind for out of lower bound", () => {
        expect(rgbToHexColor(-1,0,0)).to.be.undefined;
        expect(rgbToHexColor(0,-1,0)).to.be.undefined;
        expect(rgbToHexColor(0,0,-1)).to.be.undefined;
    });
    it("return  undefind for out of upper bound", () => {
        expect(rgbToHexColor(256,0,0)).to.be.undefined;
        expect(rgbToHexColor(0,256,0)).to.be.undefined;
        expect(rgbToHexColor(0,0,256)).to.be.undefined;
    });
    it("return  undefind for floads bound", () => {
        expect(rgbToHexColor(1.1,0,0)).to.be.undefined;
        expect(rgbToHexColor(0,1.1,0)).to.be.undefined;
        expect(rgbToHexColor(0,0,1.1)).to.be.undefined;
    });
    it("return  undefind for string bound", () => {
        expect(rgbToHexColor("1",0,0)).to.be.undefined;
        expect(rgbToHexColor(0,"1",0)).to.be.undefined;
        expect(rgbToHexColor(0,0,"1")).to.be.undefined;
    });

});