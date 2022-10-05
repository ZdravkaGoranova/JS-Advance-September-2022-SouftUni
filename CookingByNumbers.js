//function cookingByNumbers(inputNumber, oper1, oper2, oper3, oper4, oper5,) {
function cookingByNumbers(inputNumber, ...commands) {

    for (let i = 0; i < commands.length; i++) {
        inputNumber = manipulator(inputNumber, commands[i]);
    }
    // начин да заменим for 
    //commands.forEach(x=>{
    //inputNumber = manipulator(inputNumber, x);
    //})

    //втори начин на не пишем редовете 5 пъти и да не пишем oper1 до oper5

    // inputNumber = manipulator(inputNumber, oper1);
    // inputNumber = manipulator(inputNumber, oper2);
    // inputNumber = manipulator(inputNumber, oper3);
    //inputNumber = manipulator(inputNumber, oper4);
    // inputNumber = manipulator(inputNumber, oper5);

    function manipulator(number, command) {
        switch (command) {
            case 'chop': number /= 2; console.log(number); break;// number /= 2
            case 'dice': number = Math.sqrt(number); console.log(number); break;
            case 'spice': number += 1; console.log(number); break;
            case 'bake': number *= 3; console.log(number); break;
            case 'fillet': number = number - (number * 0.2); console.log(number); break;//number *= 0.8
        }
        return number;
    }
}
cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');
console.log("------------------------")
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');


//Второ решение 
function cookingByNumbers(string, oper1, oper2, oper3, oper4, oper5,) {
    let number = Number(string);
    let result;
    switch (oper1) {

        case 'chop': result = number / 2; number = result; console.log(result); break;// number /= 2
        case 'dice': result = Math.sqrt(number); number = result; console.log(result); break;
        case 'spice': result = number + 1; number = result; console.log(result); break;
        case 'bake': result = number * 3; number = result; console.log(result); break;
        case 'fillet': result = number - (number * 0.2); number = result; console.log(result); break;//number *= 0.8
    }
    switch (oper2) {
        case 'chop': result = number / 2; number = result; console.log(result); break;
        case 'dice': result = Math.sqrt(number); number = result; console.log(result); break;
        case 'spice': result = number + 1; number = result; console.log(result); break;
        case 'bake': result = number * 3; number = result; console.log(result); break;
        case 'fillet': result = number - (number * 0.2); number = result; console.log(result); break;
    }
    switch (oper3) {
        case 'chop': result = number / 2; number = result; console.log(result); break;
        case 'dice': result = Math.sqrt(number); number = result; console.log(result); break;
        case 'spice': result = number + 1; number = result; console.log(result); break;
        case 'bake': result = number * 3; number = result; console.log(result); break;
        case 'fillet': result = number - (number * 0.2); number = result; console.log(result); break;
    }
    switch (oper4) {
        case 'chop': result = number / 2; number = result; console.log(result); break;
        case 'dice': result = Math.sqrt(number); number = result; console.log(result); break;
        case 'spice': result = number + 1; number = result; console.log(result); break;
        case 'bake': result = number * 3; number = result; console.log(result); break;
        case 'fillet': result = number - (number * 0.2); number = result; console.log(result); break;
    }
    switch (oper5) {
        case 'chop': result = number / 2; number = result; console.log(result); break;
        case 'dice': result = Math.sqrt(number); number = result; console.log(result); break;
        case 'spice': result = number + 1; number = result; console.log(result); break;
        case 'bake': result = number * 3; number = result; console.log(result); break;
        case 'fillet': result = number - (number * 0.2); number = result; console.log(result); break;
    }
}
cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');
