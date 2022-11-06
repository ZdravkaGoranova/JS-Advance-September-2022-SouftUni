// function solve(array) {
//     let obj = {};

//     array.forEach((element, index, acc) => {
//         let [carBrand, carModel, producedCars] = element.split(" | ");
//         producedCars = Number(producedCars);
//         if (!obj.hasOwnProperty(carBrand)) {//if (!obj[carBrand]) {
//             obj[carBrand] = [{ carModel, producedCars }];
//         } else if (obj[carBrand].some(car => car.carModel === carModel)) {
//             let targetCar = obj[carBrand].find(car => car.carModel === carModel);
//             targetCar.producedCars += producedCars;
//         } else {
//             obj[carBrand].push({ carModel, producedCars });
//         }
//     });
//     for (let [key, value] of Object.entries(obj)) {
//         console.log(`${key}`);
//         for (let i = 0; i < value.length; i++) {//for (let  currentCar of Object.values(obj)) {
//             console.log(`###${value[i].carModel} -> ${value[i].producedCars}`);// console.log(`###${currentCar.carModel} -> ${currentCar.producedCars}`);
//         }
//     }
// }
//второ решение
function solve(input) {
    let mapCars = new Map();
    for (const line of input) {
        let [brand, model, produced] = line.split(' | ');
        if (!mapCars.has(brand)) {
            mapCars.set(brand, new Map());
        }
        let mapModels = mapCars.get(brand);
        if (!mapModels.has(model)) {
            mapModels.set(model, 0);
        }
        mapModels.set(model, mapModels.get(model) + Number(produced));
    }
    for (const brand of mapCars.keys()) {
        console.log(brand);
        let mapModels = mapCars.get(brand);
        for (const model of mapModels.keys()) {
            console.log(`###${model} -> ${mapModels.get(model)}`);
        }
    }
}
solve(["Mercedes-Benz | 50PS | 123",
    "Mini | Clubman | 20000",
    "Mini | Convertible | 1000",
    //"Mercedes-Benz | 60PS | 3000",
    // "Hyunday | Elantra GT | 20000",
    "Mini | Countryman | 100",
    //  "Mercedes-Benz | W210 | 100",
    "Mini | Clubman | 1000",
    "Mercedes-Benz | W163 | 200"]);