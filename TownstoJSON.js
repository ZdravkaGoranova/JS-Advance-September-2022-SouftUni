function townstoJSON(array) {
    let info = array.shift();
    let res = {};
    let resArray = [];

    for (let el of array) {
        let [a, b, c] = el.split(" | ");
        a = a.replace("| ", "");
        b = Number(b);
        c = Number(c.replace(" |", ""));
        res = {};

        if (!res.hasOwnProperty(res.Town)) {
            res.Town = a;
            res.Latitude = Number(b.toFixed(2));
            res.Longitude = Number(c.toFixed(2));
            resArray.push(res)
        }
    }
    console.log(JSON.stringify(resArray))
}
townstoJSON(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']);
