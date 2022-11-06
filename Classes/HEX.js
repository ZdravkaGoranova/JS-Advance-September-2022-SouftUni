class Hex {
    constructor(value) {
        this.value = Number(value);
    }
    valueOf() {
        return this.value;
        
    } toString() {
        let hexString = this.value.toString(16).toUpperCase();
        return  "0x" + hexString;
       // return `0x${(this.value.toString(16)).toUpperCase()}`;
    } plus(value) {
        let result = (this.value + Number(value.valueOf()));
        return new Hex(result);
        // let result = this.value + num;//прешръщаме ги към число
        // return `0x${result.toString(16).toUpperCase()}`;

    } minus(value) {
        let result = (this.value - Number(value.valueOf()));
        return new Hex(result);
        // let result = this.value - num;
        // return `0x${result.toString(16).toUpperCase()}`;
    } parse(text) {
        return parseInt(text, 16);
    }
}
let FF = new Hex(255);
console.log(FF.toString());
FF.valueOf() + 1 == 256;
let a = new Hex(10);
let b = new Hex(5);
console.log(a.plus(b).toString());
console.log(a.plus(b).toString() === '0xF');
console.log(FF.parse('AAA'));