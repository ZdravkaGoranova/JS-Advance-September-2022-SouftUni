function juice(array) {
    ; let obj = {}
    let bottles = {}
    array.forEach((element, index, acc) => {
        let [juiceName, juiceQuantity] = element.split(" => ");

        if (!obj.hasOwnProperty(juiceName)) {
            obj[juiceName] = 0;
        }
        obj[juiceName] += Number(juiceQuantity);
        let count = 0;
        while (obj[juiceName] - 1000 >= 0) {
            count++;
            obj[juiceName] -= 1000;
        }
        if (count > 0) {
            if (!bottles.hasOwnProperty(juiceName)) {
                bottles[juiceName] = count;
            } else {
                bottles[juiceName] += count;
            }
        }
    });
    for (const [key, count] of Object.entries(bottles)) {
        console.log(`${key} => ${count}`);
    }
}
//второ решение 
// function cappy(input = []) {
//     const bottles = new Map();

//     input.reduce((acc, curr) => {
//       let [juice, quantity] = curr.split(" => ");
//       quantity = Number(quantity);

//       if(!acc.hasOwnProperty(juice)) {
//           acc[juice] = 0;
//       }  
//       acc[juice] += quantity;

//       if (acc[juice] > 1000) {
//         if (!bottles.has(juice)) {
//           bottles.set(juice, 0);
//         }

//       bottles.set(juice, bottles.get(juice) + parseInt(acc[juice] / 1000));
//         acc[juice] %= 1000;
//       }

//       return acc;
//     }, {});


//     for(let[juice, quantity] of bottles) {
//         console.log(`${juice} => ${quantity}`);
//     }
//   }

juice(['Kiwi => 234',

    'Pear => 2345',

    'Watermelon => 3456',

    'Kiwi => 4567',

    'Pear => 5678',

    'Watermelon => 6789'])
