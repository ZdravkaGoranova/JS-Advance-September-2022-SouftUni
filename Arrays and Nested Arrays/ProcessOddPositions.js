function processOddPositions(array) {

    let newArr = [];
    for (let i = 0; i < array.length; i++) {
        if (i % 2 !== 0) {
            newArr.push(array[i]);
        }
    }
    newArr = newArr.map(n => n * 2)
        .reverse();
    console.log(newArr);
    return newArr;

    //или 
    //newArr = array.filter((n, i) => i % 2 !== 0)
    //.map(n => n * 2)
    //.reverse();
    //console.log(newArr);
    //return newArr;
}
processOddPositions([10, 15, 20, 25]);
console.log("-----");
processOddPositions([3, 0, 10, 4, 7, 3]);