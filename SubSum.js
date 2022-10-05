function subSum(array, startIndex, endIndex) {

    if (!Array.isArray(array)) {//if (Array.isArray(array) == false) {
        return NaN;
    }
    if (startIndex < 0) {
        startIndex = 0;
    }
    if (endIndex >= array.length - 1) {
        endIndex = array.length - 1;
    }
    //втори вариянт вместо return array... map...reduce..
    //ler result=0;
    // for (let i=startIndex;i<= endIndex;i++){
    //     result += Number(array[i]);
    // }
    return array
        .slice(startIndex, endIndex + 1)
        .map(Number)
        .reduce((acc, x) => acc + x, 0);
}
console.log(subSum([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1));