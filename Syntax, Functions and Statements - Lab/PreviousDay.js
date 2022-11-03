function previousDay(year, month, day) {
    let myDate = new Date(year, month - 1, day);
    // вторе решение:let pattern= `${year}/${month}/${day}`-обяснение->
    // let myDate = new Date("2016/9/30");-обяснение->
    //Ако го подадем като string, не е нувно да слагаме -1.Месеците започват от 0 в JS.
    // let myDate = new Date(pattern);
    //......
   
    myDate.setDate(myDate.getDate() - 1);

    // console.log(myDate);
    //Добавяме ${myDate.getMonth()+1} защото започва от 0 месец,който з анас е 1-ви.
    console.log(`${myDate.getFullYear()}-${myDate.getMonth() + 1}-${myDate.getDate()}`);
}

previousDay(2016, 9, 30);
previousDay(2016, 10, 1);