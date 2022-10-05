function add(num) {
    let sum = num;

    function calc(num2) {
        sum += num2;
        return calc;
    }

    calc.toString = function () { return sum };
    //Обяснение
    //Функцията "add" ще върне друга функция "calc", която, когато бъде извикана,
    // просто връща себе си (не наистина себе си, а по-скоро копирана версия на себе си).
    // Това означава, че тя винаги ще връща функция, така че как да получите стойността? 
    //Всяка функция има функция Function. prototype. toString(), която може да бъде променена, за да връща сумата.
    //Единственият недостатък на този метод е, че върнатата стойност typeof ще бъде "function", а не "number", както бихте очаквали.
    //За тази цел добавих условие If, така че сега, ако поставите () в края, върнатата стойност typeof ще бъде сума.
    return calc;
}
add(1)(6)(-3)
//второ решение 
// function add(a) {
//     var sum = a
    
//     function add_and_repeat(b) {
//     if(b){
//     sum += b
//     return add_and_repeat
//     }
//     else
//     return sum;
//     }
    
//     add_and_repeat.toString = function() { return sum }
    
//     return add_and_repeat
//     }

//трето предложение за решение,това не работи в judj
// function add() {
//     var slice = Array.prototype.slice,
//     sum = 0,
//     closure = function() {
//     var cargs = slice.call(arguments);
//     for (var i = 0, l = cargs.length; i < l; i++) {
//     sum += cargs[i]*1;
//     }
//     return cargs.length ? closure : sum;
//     };
//     return closure.apply(null, slice.call(arguments));
//     }


//четвърто предложение за решение,това не работи в judj
// let add= a => b => b ? add(a + b) : a;
// console.log(add(1)(6)(-3)());  
