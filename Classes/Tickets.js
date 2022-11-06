function solve(array, criterion) {

    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }
    }
    
    let result = [];
    array.forEach(element => {
        //let [destination, price, status] = element.split("|");   //result.push({ destination, price, status }); ако го правим без class
        let info = element.split('|');
        result.push(new Ticket(...info))//не може с  result.push(new Ticket(destination, price, status))
    });

    let sorted = result.sort((a, b) => {
        return (
            isNaN(a[criterion]) ?
                a[criterion].localeCompare(b[criterion]) :
                a[criterion] - b[criterion]
        )
    })
    //console.log(sorted)
    return sorted;

}
solve(['Philadelphia|94.20|available',

    'New York City|95.99|available',

    'New York City|95.99|sold',

    'Boston|126.20|departed'],

    'destination') 