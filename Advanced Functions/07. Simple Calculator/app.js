function calculator() {
    let selector1;
    let selector2;
    let resultSelector;
  
    let obj = {
        init: (firstSelector, secondSelector, resSelector) => {
            selector1 = document.querySelector(firstSelector);//когато имаме # в '#num1' означчава,че селектираме с querySelector.Ако искаме да селетираме по getElementById(),трябва да напишем =>Number(document.getElementById('num1').value);
            selector2 = document.querySelector(secondSelector);//не може да му зададем директно  Number(document.querySelector(firstSelector).value)
            resultSelector = document.querySelector(resSelector);
        },
        add: () => {
            let first = Number(selector1.value);
            let second = Number(selector2.value);
            let sum = first + second;
            resultSelector.value = sum;
        },
        subtract: () => {
            let first = Number(selector1.value);
            let second = Number(selector2.value);
            let res = first- second;
            resultSelector.value = res;//тук не слагаме innerText или textContent
        },
    }
    return obj;
    debugger;
}
calculator();
const calculate = calculator();
calculate.init('#num1', '#num2', '#result');




