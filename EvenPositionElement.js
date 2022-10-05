function evenPositionElement(array) {

    let result = '';
    //второ решение
    //let newArray=[];
    //for (let i = 0; i < array.length; i ++) {
    // if(i%2==0){
    //newArray.push(array[i])
    //}
    for (let i = 0; i < array.length; i += 2) {
        result += array[i] + " "
    }
    console.log(result.trim());
    //console.log(result.join(" "));

}
evenPositionElement(['20', '30', '40', '50', '60']);
console.log("---------------")
evenPositionElement(['5', '10']);