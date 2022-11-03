function addItem() {
    let inputText = document.getElementById("newItemText");
    let inputValue = document.getElementById("newItemValue");

    let select = document.getElementById('menu');
    let option = document.createElement('option');
    
    option.value = inputValue.value;
    option.textContent = inputText.value;
    select.appendChild(option);
    inputText.value = "";
    inputValue.value = "";
}


//работи частично, след два клика и не трие инпута след като е добавен
// let button = document.getElementsByTagName("input")[2];
 // const btns = Array.from(document.getElementsByTagName('button'));
    // button.addEventListener("click", add);
    // function add() {
    //     let select = document.getElementById('menu');
    //     let option = document.createElement('option');
    //     option.value = inputValue;
    //     option.textContent = inputText;
    //     select.appendChild(option);
    //     inputText = "";
    //     inputValue.textContent = "";
    // }
