function listOfNames(array) {
    array.sort((a, b) => a.localeCompare(b))
        .forEach((element, i) => console.log(`${i + 1}.${element}`));
    //второ решение
    // let res = array.sort((a, b) => a.localeCompare(b));
    //for (let i=0;i<res.length;i++){
    //  console.log(`${i + 1}.${res[i]}`)); 
    //}
}
listOfNames(["John", "Bob", "Christina", "Ema"]);
console.log("-----");
