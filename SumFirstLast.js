function sumFirstLast(array) {
    array = array
        .map(Number);
    let last = array.pop(); // Number(arr[0]);
    let first = array.shift();//Number(arr[arr.length - 1]);
    let sum = last + first;//return first + last;
    //return Number(arr.pop()) + Number(arr.shift());
    console.log(sum);
}
sumFirstLast(['20', '30', '40']);
console.log("-----");
sumFirstLast(['5', '10']);