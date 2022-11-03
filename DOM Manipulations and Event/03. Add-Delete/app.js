function addItem() {
    let list = document.getElementById("items");
    // let list = document.getElementById("items").value;
    let input = document.getElementById("newItemText").value;

    let listItem = document.createElement('li');
    listItem.textContent = input;
    list.appendChild(listItem);

    //  if (input.length === 0) return; може да се направи проверка

    let deletBtn = document.createElement("a");
    deletBtn.textContent = "[Delete]";// let linkText = document.createTextNode("[Delete]");  deletBtn.appendChild(linkText);

    deletBtn.href = "#";
    deletBtn.addEventListener('click', remItem)

    function remItem(event) {
        event.target.parentElement.remove();//или listItem.remove();
    }
    listItem.appendChild(deletBtn)
    document.getElementById("newItemText").value = "";//да се изтрие полетo за следващо въвеждане

}