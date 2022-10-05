function colorizeRows() {
    let tableRows = document.querySelectorAll('table tr');

    for (let i = 0; i < tableRows.length; i++) {

        if (i % 2 === 1) {
            tableRows[i].style.background = "teal";
        }
    }

}