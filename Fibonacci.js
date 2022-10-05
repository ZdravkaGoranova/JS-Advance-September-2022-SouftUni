function getFibonator() {
    let firstNum = 0;
    let secondNum = 1;
    return function () {
        let sum = firstNum + secondNum;//0+1/1+1=2/1+2/
        firstNum=secondNum//0=1=>1/1=1=>1/2
        secondNum = sum;//1=1=>1/1=2=>2/3
        return firstNum;//1/1/2
    }
}
let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13
