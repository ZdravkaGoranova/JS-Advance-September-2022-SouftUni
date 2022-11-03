function heroicInventory(input) {
    let result = [];
    for (let el of input) {
        let [name, level, items] = el.split(" / ");
        level = Number(level);
        items = items ? items.split(", ") : [];
        result.push({ name, level, items })
    }
   // console.log(result);
    console.log(JSON.stringify(result));;
}
heroicInventory(['Isacc / 25 / ',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']
);