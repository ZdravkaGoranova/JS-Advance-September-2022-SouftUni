function printEveryNthElementFromAnArray(arr, n) {
    // let result = [];
    // for (let i = 0; i < arr.length; i += n) {
    //     result.push(arr[i]);
    // }
    //console.log(result);
    // return result;
    //второ решение
    return arr.filter((element, i) => {
        //let filterArr=  arr.filter((element, i) => {
        if (i % n == 0) {
            return element;
        }
    });
    //console.log(filterArr);
}
printEveryNthElementFromAnArray(['5',
    '20',
    '31',
    '4',
    '20'],
    2
);
console.log("-----");
printEveryNthElementFromAnArray(['dsa',
    'asd',
    'test',
    'tset'],
    2
);
console.log("-----");
printEveryNthElementFromAnArray(['1',
    '2',
    '3',
    '4',
    '5'],
    6

);