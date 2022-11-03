function orbit(array) {
    let [rows, cols, startR, startCol] = array.join("");
    rows = Number(rows);
    cols = Number(cols);
    startR = Number(startR);
    startCol = Number(startCol);
    // let rows = array[0];
    //let cols = array[1];
    // let startR = array[2];
    // let startCol = array[3];
    let matrix = [];

    for (let i = 0; i < rows; i++) {
        matrix[i] = [];
    }
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col <cols; col++) {
            matrix[row][col] = Math.max(Math.abs(row - startR), Math.abs(col - startCol)) + 1;
        }
    }
    matrix.forEach(row => {
        console.log(row.join(" "));
    });
}
//orbit([4, 4, 0, 0]);
console.log("--------------")
orbit([5, 5, 2, 2]);