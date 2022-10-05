function townPopulation(array) {
    let towns = {};
    //второ решение
    //let townData=array.map(element=>{
    /// let data = element.split(" <-> ");
    //return {
    //name:data[0];
    //population:Number(data[1])
    //};
    //})
    //.reduce((result,ttown)=>{
    //if (result[name] === undefined) {
    //   { result[name] = ttown.population; }
    //} else {
    //    result[name] += ttown.populationpopulation;
    //return result;
    //},{});


    for (let town of array) {
        let [name, population] = town.split(" <-> ");
        population = Number(population);

        if (towns[name] === undefined) {
            { towns[name] = population; }
        } else {
            towns[name] += population
        }
    }
    for (let town in towns) {
        console.log(`${town} : ${towns[town]}`);
    }
}
townPopulation(
    ['Sofia <-> 1200000',
        'Sofia <-> 20000',
        'New York <-> 10000000',
        'Washington <-> 2345000',
        'Las Vegas <-> 1000000']
);
console.log("---------------");
townPopulation(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000']
);