function sum() {
    let firstNumber = document.getElementById('first').value;
    let secondNumber = document.getElementById('second').value;

    let result = Number(firstNumber) + Number(secondNumber);
    //document.getElementById('result').innerText = `Result:  ${result}`;
    document.getElementById('result').textContent = `Result:  ${result}`;
}