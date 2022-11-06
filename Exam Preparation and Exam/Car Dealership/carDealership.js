class CarDealership {
    constructor(name) {
        this.name = name;
        this.availableCars = [];
        this.soldCars = [];
        this.totalIncome = 0;
    }
    addCar(model, horsepower, price, mileage) {
        if (!model || horsepower < 0 || price < 0 || mileage < 0) {
            throw new Error("Invalid input!");
        }
        this.availableCars.push({ model, horsepower, price, mileage })
        return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(2)} km - ${price.toFixed(2)}$`;
    };
    sellCar(model, desiredMileage) {
        let findIndexModel = this.availableCars.findIndex((c) => c.model === model);

        if (findIndexModel === -1) {
          throw new Error(`${model} was not found!`);
        }
        let currentCar = this.availableCars[findIndexModel];
    
        let horsepower = currentCar.horsepower;
        let availableMileage = currentCar.mileage;
        let soldPrice = currentCar.price;
    
        if (availableMileage > desiredMileage) {
          let difference = availableMileage - desiredMileage;
    
          if (difference <= 40000) {
            soldPrice -= soldPrice * 0.05;
          } else {
            soldPrice -= soldPrice * 0.1;
          }
        }
    
        let soldCar = { model, horsepower, soldPrice };
        this.availableCars.splice(findIndexModel, 1);
        this.soldCars.push(soldCar);
        this.totalIncome += soldPrice;
    
        return `${model} was sold for ${soldPrice.toFixed(2)}$`;

        // let find = this.availableCars.find(car => car.model === model);

        // if (!find) {
        //     throw new Error(`${model} was not found!`);
        // }
     
    };
    currentCar() {
        if (this.availableCars.length === 0) {
            return "There are no available cars";
        }
        let res = '';
        res += `-Available cars:\n`;
        let print = this.availableCars.forEach(car =>
            res += `---${car.model} - ${car.horsepower} HP - ${(car.mileage).toFixed(2)} km - ${(car.price).toFixed(2)}$\n`
        );
        return res.trim();
    }
    salesReport(criteria) {
        let carFind;
        let result = '';
        if (criteria === "horsepower") {
            carFind = this.soldCars.sort(((a, b) => b.horsepower - a.horsepower))
        } else if (criteria === "model") {
            carFind = this.soldCars.sort(((a, b) => (a.model).localeCompare(b.model)));
        } else if (criteria !== "horsepower" && criteria !== "model") {
            throw new Error("Invalid criteria!");
        }
        //или 
        // criteria === "horsepower"
        // ? this.soldCars.sort((a, b) => b.horsepower - a.horsepower)
        // : this.soldCars.sort((a, b) => a.model.localeCompare(b.model));

        result += `-${this.name} has a total income of ${this.totalIncome.toFixed(2)}$\n`;
        result += `-${this.soldCars.length} cars sold:\n`;

        //или 
        // let result = [
        //     `-${this.name} has a total income of ${this.totalIncome.toFixed(2)}$`,
        //     `-${this.soldCars.length} cars sold:`,
        //   ];

        carFind.forEach(car =>
            result += `---${car.model} - ${car.horsepower} HP - ${car.soldPrice.toFixed(2)}$\n`
        )
        return result.trim();
        //или 
        // this.soldCars.map((c) =>
        //     result.push(
        //         `---${c.model} - ${c.horsepower} HP - ${c.soldPrice.toFixed(2)}$`
        //     )
        // );

        // return result.join("\n");
    }
}
let dealership = new CarDealership('SoftAuto');
dealership.addCar('Toyota Corolla', 100, 3500, 190000);
dealership.addCar('Mercedes C63', 300, 29000, 187000);
dealership.addCar('Audi A3', 120, 4900, 240000);
dealership.sellCar('Toyota Corolla', 230000);
dealership.sellCar('Mercedes C63', 110000);
console.log(dealership.salesReport('horsepower'));

