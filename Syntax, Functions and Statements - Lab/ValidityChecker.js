function validityChecker(a, b, c, d) {

    distance(a, b, 0, 0);
    distance(c, d, 0, 0);
    distance(a, b, c, d);

    function distance(x1, y1, x2, y2) {

        let grup1 = Math.pow((x2 - x1), 2);//(x2 - x1)**2
        let grup2 = Math.pow((y2 - y1), 2);//(y2 - y1)**2
        let formuls = Math.sqrt(grup1 + grup2);

        if (Number.isInteger(formuls)) {
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
        }else{
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`); 
        }
    }
}
validityChecker(3, 0, 0, 4);
console.log("---------")
validityChecker(2, 1, 1, 1);