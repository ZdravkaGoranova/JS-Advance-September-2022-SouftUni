
let list = document.getElementById("items");//хубаво е да се изкарва тук за да не се извиква всеки път 
function addItem() {
    let list = document.getElementById("items");
    let input = document.getElementById("newItemText");
    let newItemValue = input.value;
    let liItem = document.createElement("li");
    liItem.textContent = newItemValue;// важно е да не пишем innerHTML!!!!!!
    list.appendChild(liItem);
    input.value = "";// всеки път след като напишем нешо да се изчиства и да е готово за следащ текс от потребителя

}

//второ решение
function addItem() {
    let text = document.getElementById('newItemText').value;
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(text));
    document.getElementById("items").appendChild(li);
      //clearing the input:
    document.getElementById('newItemText').value = '';
  } 
  