function extractIncreasingSubsetFromArray(array) {
    let biggest = array[0];
    let res = [];
    //първо решение
    // array.forEach(element => {
    //     {
    //        if (element >= biggest) {
    //             res.push(element)
    //            biggest = element;
    //        }
    //    }
    // });
    //console.log(res);
    //   return res;

    //второ решение
    res = array.reduce((acc, currentElement) => {
        if (biggest <= currentElement) {
            acc.push(currentElement);
            biggest = currentElement;
        }
        return acc;
    }, []);
    console.log(res);
    return res;
}
extractIncreasingSubsetFromArray([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]
);
console.log("-----");
extractIncreasingSubsetFromArray([1,
    2,
    3,
    4]
);
console.log("-----");
extractIncreasingSubsetFromArray([20,
    3,
    2,
    15,
    6,
    1]
);