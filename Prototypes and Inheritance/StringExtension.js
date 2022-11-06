(function solve() {
    String.prototype.ensureStart = function (s) {

        let indexOfFirst = this.indexOf(s);
        if (indexOfFirst !== 0) {// if(!this.includes(s)){
            return s + this;//result.concat(this,this)
        } 
            return this.valueOf();
    }
    String.prototype.ensureEnd = function (s) {  
        let indexOfFirst = this.indexOf(s);
            if (this.lastIndexOf(s)!==(this.length-s.length)) {//    if(this.includes(s)){
            return  this + s;
        } else {
            return this.toString();
        }
    };
    String.prototype.isEmpty = function (s) {
        if (this.length == 0) {
            return true;
        } else {
            return false;
        }
    }
    String.prototype.truncate = function (n) {
        let lastSpace = this.lastIndexOf(' ');//?this.substring(0,n-2)
        let result;
        if (n >= this.length) {
            return this.toString()
        } else if (this.length > n && lastSpace != -1) {
            result = this.slice(0, lastSpace) + '...';
            return result;
        } else if (lastSpace === -1 && n >= 4) {
            let result = this.slice(0, (n - 3));
            return result + '...';
        } else if (n < 4) {
            return '.'.repeat(n);
        }
    };
    String.format = function (string, ...params) {

        for (let i = 0; i < params.length; i++) {
            string = string.replace(/\{\d\}/, params[i]);
        }
        return string;
    }
})();

let str = 'my string'
console.log(str = str.ensureStart('my'));
console.log(str = str.ensureStart('hello '));
console.log(str = str.truncate(16));
console.log(str = str.truncate(14));
console.log(str = str.truncate(8));
console.log(str = str.truncate(4));
console.log(str = str.truncate(2));
console.log(str = String.format('The {0} {1} fox', 'quick', 'brown'));
console.log(str = String.format('jumps {0} {1}', 'dog'));