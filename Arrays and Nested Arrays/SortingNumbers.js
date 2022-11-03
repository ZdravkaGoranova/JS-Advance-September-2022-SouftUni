function sortingNumbers(arrNum) {
    let sortArr = arrNum.sort((a, b) => a - b);
    let result = [];
    while (sortArr.length > 0) {
        result.push(sortArr.shift());
        result.push(sortArr.pop());
    }
    return result;

    function sort(arr) {
        let descendingOrder = arr.slice().sort((a, b) => b - a);
        //the initial arr will be sorted in ascending order
        arr = arr.sort((a, b) => a - b);
        //console.log(descendingOrder);
        //console.log(arr);
        const output = [];
        for (let i = 0; i < arr.length / 2; i++) {
            output.push(arr[i]);

            output.push(descendingOrder[i]);
        }
        if (output.length !== arr.length) {
            output.pop();
        }
        return output;
    }
}
console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));
//второ решение
function sort(arr) {
    let descendingOrder = arr.slice().sort((a, b) => b - a);
    //the initial arr will be sorted in ascending order
    arr = arr.sort((a, b) => a - b);
  
    const output = [];
    for (let i = 0; i < arr.length / 2; i++) {
        output.push(arr[i]);
        output.push(descendingOrder[i]);
    }
    if (output.length !== arr.length) {
        output.pop();
    }
    return output;
}
console.log(sort([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));