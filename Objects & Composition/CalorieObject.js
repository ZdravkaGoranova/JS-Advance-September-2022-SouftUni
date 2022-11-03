function calorieObject(array) {
    let obj = {};
    array.forEach((element, index) => {
        if (index % 2 == 0) {
            obj[element] = Number(array[index + 1]);
        }
    });
    //второ решение
    // for(let i=0;Int8Array.length;i+=2){
    //    obj[array[i]]=Number(array[index + 1]);
    //}

    //трето решение не е правилно
    //array.reduce((acc, currentValue, i) => {
    //   if (i % 2 == 0) {
    //      return acc[currentValue] = Number(array[i + 1]);
    // }
    // }, {});
    
    console.log(obj)
}
calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);
console.log("-----------")
calorieObject(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']);