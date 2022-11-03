function deleteByEmail() {
    let inputEmail = document.getElementsByName("email")[0].value;
    //let inputEmail = document.getElementsByName("email")[0].value.trim();ако има празни интервали да ги премахнем
    let tableCells = document.querySelectorAll('#customers td:nth-child(2)');
    let found = false;
    for (let cell of tableCells) {
        if (cell.textContent === inputEmail) {
            cell.parentElement.remove();
            found = true;
        }
    }
    let result = document.getElementById("result");
    result.textContent = found ? "Deleted." : "Not found.";
}