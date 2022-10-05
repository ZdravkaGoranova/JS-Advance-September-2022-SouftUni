function extractText() {

    let listItems = document.querySelectorAll('ul li');//илиlet listItems = document.querySelectorAll("ul#items li")
    let textarea = document.getElementById('result');//илиlet textarea = document.getElementById("#result")

    for (let listItem of listItems) {
        textarea.value += listItem.textContent +"\n"; // или  textarea.value += listItem.innerText;
    }
}