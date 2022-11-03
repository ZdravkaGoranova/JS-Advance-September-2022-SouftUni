function lastKNumbersSequence(n, k) {
    let result = [1];

    for (let i = 1; i < n; i++) {
        result[i] = sumLastK(result, k);
    }
    function sumLastK(array = result, k) {
        k = array.length > k ? k : array.length;
        let sum = 0;
        for (let i = 1; i <= k; i++) {
            let index = array.length - i;
            sum += array[index];
        }
        return sum;
    }
    //console.log(result);
    return result;
}
lastKNumbersSequence(6, 3);
console.log("-----");
lastKNumbersSequence(8, 2);

//второ решение
function lastKNumbersSequence(n, k) {
    let result = [1];

    for (let i = 1; i < n; i++) {
        let arrK = result.slice(-k);

        if (arrK.length === 1) {
            result.push(1)
        } else {
            let sum = arrK.reduce((a, b) => a + b);
            result.push(sum)
        }
    }
    //console.log(result);
    return result;
}
lastKNumbersSequence(6, 3);
console.log("-----");
lastKNumbersSequence(8, 2);