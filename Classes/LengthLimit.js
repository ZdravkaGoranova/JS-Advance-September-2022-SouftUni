class Stringer {
    constructor(str, len) {
        this.innerString = str;
        this.innerLength = len;
    }
    set innerLength(value) {
        if (value < 0) {
            this._innerLength = 0;
        } else {
            this._innerLength = value;
        }
    }
    get innerLength() {
        return this._innerLength;
    }
 
    increase(value) {
        this.innerLength += value;
    }
    decrease(value) {
        this.innerLength -= value;
    }
    toString() {
        if (this.innerString.length < this.innerLength) {
            return this.innerString;
        } else if (this.innerString.length === this.innerLength) {
            return this.innerString.substring(0, this._innerLength);
        } else {
            return this.innerString.substring(0, this._innerLength) + '...';
        }
    }
}


//не работи защото не запазваме първоначалната стойност на стринга
// class Stringer {
//     constructor(string, length) {
//         this.string = string,
//             this.length = Number(this.string.length);
//     }
//     increase(length) {
//         this.string
//     }
//     decrease(length) {
//         this.string = this.string.slice(0,-length);
//         this.length = Number(this.string.length);
//         if (this.length < 0) {
//             this.length = 0;
//             this.string ="...";
//         }else if(this.length >0){
//             this.string = this.string +"..."
//         }
//         return this.string;
//     } toString() {
//         return this.string;
//     }
// }
let test = new Stringer("Test", 5);

console.log(test.toString()); // Test

test.decrease(3);

console.log(test.toString()); // Te...

test.decrease(5);

console.log(test.toString()); // ...

test.increase(4);

console.log(test.toString()); // Test