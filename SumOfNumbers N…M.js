function sum(n, m) {
    let numberN = Number(n);
    let numberM = Number(m);
    let result = 0;
    for (let i = numberN; i <= numberM; i++) {
        result += i;
    }
    console.log(result);
}
sum('1', '5');
sum('-8', '20');