function fruit(fruit, weight, price) {
    let gramsOfKil = weight / 1000;
    let totalPrice = gramsOfKil * price;
    console.log(`I need $${totalPrice.toFixed(2)} to buy ${gramsOfKil.toFixed(2)} kilograms ${fruit}.`);
}
fruit('orange', 2500, 1.80);
fruit('apple', 1563, 2.35);