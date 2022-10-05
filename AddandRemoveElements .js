function addandRemoveElements(array) {
    let result = [];
    let num = 1;
    
    array.filter((command, i) => {
        //command === 'add'? result.push(num)num++;: result.pop(); num++;
        if (command === 'add') {
            result.push(num); num++;
        } else if (command === 'remove') {
            result.pop(); num++;
        }
    });
    //второ решение
    //  for (let command of array) {
    //   switch (command) {
    //       case 'add': result.push(num); num++; break;
    //      case 'remove': result.pop(); num++; break;
    //    }
    // }
    // if (result.length === 0) {
    //   console.log("Empty");
    // } else {
    //     console.log(result.join("\n"));
    // }
    const final = result.length === 0 ? console.log("Empty") : console.log(result.join("\n"));;
}
addandRemoveElements(['remove',
    'remove',
    'remove']

);
console.log("-----");
addandRemoveElements(['add',
    'add',
    'remove',
    'add',
    'add']
);