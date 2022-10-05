function mathOperation(a, b, string) {
 
    let result;
    if (string === '+') {
        result = a + b;
    } else if (string === '-') {
        result = a - b;
    } else if (string === '*') {
        result = a * b;
    } else if (string === '/') {
        result = a / b;
    } else if (string === '%') {
        result = a % b;
    } else if (string === '**') {
        result = a ** b;
    }
    console.log(result);
}
mathOperation(5, 6, '+');
mathOperation(3, 5.5, '*');