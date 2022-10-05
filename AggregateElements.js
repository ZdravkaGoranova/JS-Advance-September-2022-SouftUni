
function aggregateElements(input) {
    let elements = input.map(Number);
    aggregate(elements, 0, (a, b) => a + b);// console.log(aggregate(array, 0, x => a + b));
    aggregate(elements, 0, (a, b) => a + 1 / b);//console.log(aggregate(array, 0, x => a + b));

    aggregate(elements, "", (a, b) => a + b);//console.log(aggregate(array, 0, x => x.toString()));

    function aggregate(arr, initVal, func) {
        let val = initVal;
        for (let i = 0; i < arr.length; i++) {
            val = func(val, arr[i]);
        }
        console.log(val);
    }
}

aggregateElements([10, 20, 30]);