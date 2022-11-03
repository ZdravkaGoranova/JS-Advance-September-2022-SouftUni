function string(text1, text2, text3) {
    let lengthText1 = text1.length;
    let lengthText2 = text2.length;
    let lengthText3 = text3.length;
    let sum = lengthText1 + lengthText2 + lengthText3;
    let averageLength =Math.floor( sum / 3);
    console.log(sum);
    console.log(averageLength);
}
string('chocolate', 'ice cream', 'cake');
string('pasta', '5', '22.3');