function greatestCommon(number1, number2) {
    let greatestCommonDivisor;
    let minNumber = Math.min(number1, number2);
    let divisorTotal;

    for (let i = 1; i <=minNumber; i++) {
        let divisor1 = number1 % i;
        let divisor2 = number2 % i;
        if (divisor1 === divisor2 && divisor1 ===0 ) {
            divisorTotal = i;
        } 
    }
    console.log(divisorTotal);
}
greatestCommon(15, 5);
greatestCommon(	2154, 458);