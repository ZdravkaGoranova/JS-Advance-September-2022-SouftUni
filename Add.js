function solution(a) {
    let num = a;

    return function sum(b) {
        return num + b;
    }
}

let add5 = solution(5);
console.log(add5(2));
console.log(add5(3));