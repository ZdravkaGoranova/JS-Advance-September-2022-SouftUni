function lowestPricesInCities(array) {
    let result = {};

    array.forEach((element) => {
        let [town, product, price] = element.split(" | ");
        price = Number(price);

        if (!result.hasOwnProperty(product)) {
            result[product] = { price, town };
        }
        let currentPrice = result[product].price;//let currentPrice = result[product]["price"]
        if (currentPrice > price) {
            result[product] = { price, town };
        }
    });
    for (let [product, value] of Object.entries(result)) {
        console.log(`${product} -> ${value.price} (${value.town})`)
    }
}
lowestPricesInCities(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']
);