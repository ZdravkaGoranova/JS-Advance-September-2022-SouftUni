function janNotation(array) {
    let numbers = [];
    let operatorsArr = [];
    let res = [];

    array.forEach(element => {
        if (typeof (element) === "number") {
            numbers.push(element);
        } else {
            operatorsArr.push(element);
        }
    });

    if (operatorsArr.length < numbers.length - 1) {
        console.log("Error: too many operands!");
        return;
    } else if (numbers.length === 0 || numbers.length === operatorsArr.length) {
        console.log("Error: not enough operands!");
        return;
    }
    let obj = {
        "+"(a, b) { return a + b },
        "-"(a, b) { return a - b },
        "*"(a, b) { return a * b },
        "/"(a, b) { return a / b },
    }
    for (let opr of array) {
        if (typeof (opr) === "number") {
            res.push(opr);
            continue;
        }
        let numA = res.pop();
        let numB = res.pop();
        let resultOpr = Math.ceil(obj[opr](numB, numA));
        res.push(resultOpr);
    }
    console.log(res.join(""))
}
janNotation([5,
    3,
    4,
    '*',
    '-']
   
);
