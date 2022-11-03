function sortAanArrayBy2Criteria(array) {
    //второ решение
    //return array.sort((a, b) => {
    //  return a.length !== b.length ? a.length - b.length : a.localeCompare(b)}).join("\n");


    let lengthSort = array.sort((a, b) => {
        if (a.length !== b.length) {
            return a.length - b.length;
        } else {
            return a.localeCompare(b);
        }
    })
    console.log(lengthSort.join("\n"));
}
console.log("-----");
sortAanArrayBy2Criteria(['test',
    'Deny',
    'omen',
    'Default']

);