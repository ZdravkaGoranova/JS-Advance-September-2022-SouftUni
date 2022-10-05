function tic(input) {

    let initialDashboard = [[false, false, false],
    [false, false, false],
    [false, false, false]];

    let firstPlayer = true;

    for (let cordinates of input) {
        let [x, y] = cordinates.split(" ");

        if (initialDashboard[x][y]) {
            console.log(`This place is already taken. Please choose another!`);
            continue;
        }
        let marker = firstPlayer ? "X" : "O";
        initialDashboard[x][y] = marker;
        if (checkWin(initialDashboard, marker)) {
            console.log(`Player ${marker} wins!`);
            printTable(initialDashboard);
            return;
        }
        if (!checkFreeSpase(initialDashboard)) {
            console.log(`The game ended! Nobody wins :(`);
            printTable(initialDashboard);
            return;
        }
        firstPlayer = !firstPlayer;
    }

    function checkFreeSpase(initialDashboard) {
        for (let row = 0; row < initialDashboard.length; row++) {
            for (let col = 0; col < initialDashboard[row].length; col++) {
                if (!initialDashboard[row][col]) {
                    return true;
                }
            }
        }
        return false;
    }

    function printTable(initialDashboard) {
        initialDashboard.forEach(row => console.log(row.join("\t")));
    }
    
    function checkWin(initialDashboard, marker) {
        for (let i = 0; i < initialDashboard.length; i++) {
            if (initialDashboard[i][0] === marker &&
                initialDashboard[i][1] === marker &&
                initialDashboard[i][2] === marker) {
                return true;
            } else if (initialDashboard[0][i] === marker &&
                initialDashboard[1][i] === marker &&
                initialDashboard[2][i] === marker) {
                return true;
            } else if (initialDashboard[0][2] === marker &&
                initialDashboard[1][1] === marker &&
                initialDashboard[2][0] === marker) {
                return true;
            } else if (initialDashboard[0][0] === marker &&
                initialDashboard[1][1] === marker &&
                initialDashboard[2][2] === marker) {
                return true;
            }
        }
        return false;
    }

}
tic(["0 1",
    "0 0",
    "0 2",
    "2 0",
    "1 0",
    "1 1",
    "1 2",
    "2 2",
    "2 1",
    "0 0"]
);
