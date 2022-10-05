function sameNumbers(number) {
    let isRigth = true;
    let numberToString = number.toString();//number +"";
    let lengthString = numberToString.length;
    let sum = Number(numberToString[0]);;

    for (let i = 1; i < numberToString.length; i++) {
        let currentNum = Number(numberToString[i]);
        let firstNum = Number(numberToString[0]);
        let type = typeof currentNum;

        if (firstNum !== currentNum) {
            isRigth = false;
            sum += currentNum;
        } else {
            isRigth = true;
            sum += currentNum;
        }
    }
    console.log(isRigth);
    console.log(sum);
}
sameNumbers(2222222);
sameNumbers(1234);