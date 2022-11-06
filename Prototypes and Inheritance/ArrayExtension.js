(function solve() {
    let array = [1, 2, 3, 4, 5, 6];

    Array.prototype.last = function () {
        return this[this.length -1]; //return this.pop()-ДАВА 75/100  В JUDJ защото променя дължината на масива
    };
    //console.log(array.last());
    Array.prototype.skip = function (n) {
        return this.slice(n);
    };
    //console.log(array.skip(2));
    Array.prototype.take = function (n) {
        return this.slice(0, n);
    };
    //console.log(array.take(2));
    Array.prototype.sum = function () {
        return this.reduce((a, b) => a + b);
    };
    //console.log(array.sum());
    Array.prototype.average = function () {
        return this.sum() / this.length;
    };
    //console.log(array.average());
})();

(function solve() {
    Array.prototype.last = function () {
        return this.pop();//return this[this.length -1];
    };
    Array.prototype.skip = function (n) {
       // return this.slice(n + 1);
        let result = [];
        for (var i = n; i < this.length; i++) {
            result.push(this[i]);
        }
        return result;
    };
    Array.prototype.take = function (n) {
        let result = [];
        for (var i = 0; i < n; i++) {
            result.push(this[i]);
        }
        return result;
    };
    Array.prototype.sum = function () {
        let result = 0;
        for (var i = 0; i < this.length; i++) {
            result += this[i];
        }
        return result;
    };
    Array.prototype.average = function () {
        let sum = this.sum();
        return sum / this.length;
    };
})();

var myArr = [1, 2, 3, 4];
console.log(myArr.last());
console.log(myArr.skip(2));
console.log(myArr.take(2));
console.log(myArr.sum());
console.log(myArr.average());