function daysInAMonth(month, year) {
    let text = new Date(year, month, 0).getDate();
    console.log(text);
}
daysInAMonth(1, 2012);
daysInAMonth(2, 2021);