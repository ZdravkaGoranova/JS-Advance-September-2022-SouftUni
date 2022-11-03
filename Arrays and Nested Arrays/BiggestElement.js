function biggestElement(array) {

    let newArr = [];
    array.forEach(maxRow);

    let biggestElement = Math.max.apply(null, newArr);
    
    function maxRow(row) {
        let currentMax = Math.max(...row);

        // const currentMax = row.reduce((a, b) => Math.max(a, b), -Infinity);
        //return Math.max.apply(null, row);
        
        newArr.push(currentMax);
    }
    //console.log(biggestElement);
    return biggestElement;
}
biggestElement([[20, 50, 10],
[8, 33, 145]]
);
console.log("-----");

biggestElement([[3, 5, 7, 12],
[-1, 4, 33, 2],
[8, 3, 0, 4]]
);