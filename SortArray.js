function solve(array, argument) {

return argument==='asc'?array.sort((a, b) => a - b):array.sort((a, b) => b - a);
}
console.log(solve([14, 7, 17, 6, 8], 'desc'))
//второ решение
    // let result;
    // switch (argument) {
    //     case 'asc':result = array.sort((a, b) => a - b);break;
    //     case 'desc':result = array.sort((a, b) => b - a);break;
    // }
    // console.log(result)
//}
//solve([14, 7, 17, 6, 8], 'desc');