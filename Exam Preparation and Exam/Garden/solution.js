class Garden {
    constructor(spaceAvailable) {
        this.spaceAvailable = spaceAvailable;
        this.plants = [];
        this.storage = [];
    }

    addPlant(plantName, spaceRequired) {
        if (this.spaceAvailable < spaceRequired) {
            throw new Error("Not enough space in the garden.");
        }
        let plant = {
            plantName,
            spaceRequired,
            ripe: false,
            quantity: 0,
        }//this.plants.push({ plantName, spaceRequired, ripe: false, quantity: 0 })
        this.plants.push(plant);
        this.spaceAvailable -= spaceRequired;
        return `The ${plantName} has been successfully planted in the garden.`;

    };
    ripenPlant(plantName, quantity) {
        let currentPlant = this.plants.find(plant => plant.plantName === plantName);

        if (!currentPlant) {
            throw new Error(`There is no ${plantName} in the garden.`);
        }
        if (currentPlant.ripe) {
            throw new Error(`The ${plantName} is already ripe.`);
        }
        if (currentPlant.plantName) {
            currentPlant.ripe = true;
            currentPlant.quantity += quantity;
            if (currentPlant.quantity === 1) {
                return `${quantity} ${plantName} has successfully ripened.`;
            } else if (currentPlant.quantity > 1) {
                return `${quantity} ${plantName}s have successfully ripened.`;
            }
        }
        if (currentPlant.quantity <= 0) {
            throw new Error("The quantity cannot be zero or negative.");
        }
    };

    harvestPlant(plantName) {
        let currentPlant = this.plants.find(plant => plant.plantName === plantName);

        if (!currentPlant) {
            throw new Error(`There is no ${plantName} in the garden.`);
        }
        if (!currentPlant.ripe) {
            throw new Error(`The ${plantName} cannot be harvested before it is ripe.`);
        }
        let index = this.plants.indexOf(currentPlant)
        this.plants.splice(index, 1);
        this.storage.push(currentPlant);
        this.spaceAvailable += currentPlant.spaceRequired;
        return `The ${plantName} has been successfully harvested.`
    };

    generateReport() {

        let res = `The garden has ${this.spaceAvailable} free space left.\nPlants in the garden: `
        this.plants.sort((a, b) => a.plantName.localeCompare(b.plantName))
        this.plants.forEach((el) => res += el.plantName + ', ')
        res = res.substring(0, res.length - 2)//защото имаме ,  - общо са2 simbuls
        res += `\nPlants in storage: `
        if (this.storage.length == 0) {
            res += 'The storage is empty.'
        }
        else {
            this.storage.forEach((el) => res += `${el.plantName} ` + `(${el.quantity}), `)
        }
        return res.substring(0, res.length - 2)
    }
}
const myGarden = new Garden(250)
console.log(myGarden.addPlant('apple', 20));
console.log(myGarden.addPlant('orange', 200));
console.log(myGarden.addPlant('raspberry', 10));
console.log(myGarden.ripenPlant('apple', 10));
console.log(myGarden.ripenPlant('orange', 1));
console.log(myGarden.harvestPlant('orange'));
console.log(myGarden.generateReport());
