class VegetableStore {
    constructor(owner, location) {
        this.owner = owner,
            this.location = location,
            this.availableProducts = []
    }
    loadingVegetables(vegetables) {
        this.vegetables = vegetables;
        this.vegetables.forEach(vege => {
            let [type, quantity, price] = vege.split(" ");
            quantity = Number(quantity);
            price = Number(price);
            let find = this.availableProducts.find(a => a.type === type);
            if (find) {
                let old = find.quantity
                find.quantity += quantity;
                if (find.price < price) {
                    find.price = price
                };
            } else {
                this.availableProducts.push({ type, quantity, price })
            }
        });
        let buff = "Successfully added ";
        this.availableProducts.forEach(element => {
            buff += `${element.type}, `
        });
        return buff.substring(0, buff.length - 2);
    };

    buyingVegetables(selectedProducts) {
        this.selectedProducts = selectedProducts;
        let totalPrice = 0;
        this.selectedProducts.forEach(vege => {
            let [type, quantity] = vege.split(" ");
            quantity = Number(quantity);

            let selectPr = this.availableProducts.find(a => a.type === type);
            if (!selectPr) {
                throw new Error(`${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`);
            } if (selectPr.quantity < quantity) {
                throw new Error(`The quantity ${quantity} for the vegetable ${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`);
            };
            let currentPrice = quantity * selectPr.price;
            selectPr.quantity -= quantity;
            totalPrice += currentPrice;
        });
        return `Great choice! You must pay the following amount $${totalPrice.toFixed(2)}.`
    };
    rottingVegetable(type, quantity) {
        let selectType = this.availableProducts.find(a => a.type === type);
        if (!selectType) {
            throw new Error(`${type} is not available in the store.`);
        } if (selectType.quantity < quantity) {
            selectType.quantity = 0;
            return `The entire quantity of the ${type} has been removed.`;
        };
        selectType.quantity -= quantity;
        return `Some quantity of the ${type} has been removed.`;

    };
    revision() {
        let res = '';
        res += `Available vegetables:\n`
        let sort = this.availableProducts.sort((a, b) => a.price - b.price);
        let text = sort.forEach(el => res += `${el.type}-${el.quantity}-$${el.price}\n`);
        res += `The owner of the store is ${this.owner}, and the location is ${this.location}.`
        return  res;
    };
}
let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
console.log(vegStore.rottingVegetable("Okra", 1));
console.log(vegStore.rottingVegetable("Okra", 2.5));
console.log(vegStore.buyingVegetables(["Beans 8", "Celery 1.5"]));
console.log(vegStore.revision());
