function solution() {

    let ingredientsStore = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    };
    let recipe = {
        apple: { carbohydrate: 1, flavour: 2 },
        lemonade: { carbohydrate: 10, flavour: 20 },
        burger: { carbohydrate: 5, flavour: 3, fat: 7 },
        eggs: { protein: 5, flavour: 1, fat: 1 },
        turkey: { carbohydrate: 10, flavour: 10, fat: 10, protein: 10 }
    }

    return function manager(string) {//Взимаме подаденото ->console.log(manager("restock flavour 50"));
        let actionHandler = comandOption();//взимаме командите
        let [command, option, quantity] = string.split(" ");
        quantity = Number(quantity);

        return actionHandler[command](option, quantity);//ctionHandler e ОБЕКТ,[command] e() ПРОПЪРТИ НА ОБЕКТА),което е  ФУНКЦИЯ,(option, quantity) са параметрите за функцията [command]  ; извършваме операция според подадената команда и поддадените параметри
    }
    function comandOption() {//опиасни команди
        return {
            restock: (option, quantity) => { ingredientsStore[option] = ingredientsStore[option] + quantity; return `Success`; }, // не може да сложим console.log(`Success`)
            prepare: (option, quantity) => {
                let isDone = true;
                let string = "";
                let coppyIngredientsStore = JSON.parse(JSON.stringify(ingredientsStore));//копираме ingredientsStore и чупим релацията към оригинала като използваме  Json.parse(JSON.stringify()

                for (let [element, queryEl] of Object.entries(recipe[option])) {
                    let needValue = quantity * queryEl;//нужното за бр рецепти

                    if (ingredientsStore[element] < needValue) {
                        isDone = false;
                        string = `Error: not enough ${element} in stock`;
                        break;
                    }
                    coppyIngredientsStore[element] -= needValue//намаляваме количеството от нужните продукти за подадените порции
                }
                if (!isDone) {
                    return string;
                }
                ingredientsStore = coppyIngredientsStore;//ако всичко е минало подаваме новите намалени количества към оригинала
                return `Success`;
            },
            report: (option) => {
                let stringReport = `protein=${ingredientsStore.protein} carbohydrate=${ingredientsStore.carbohydrate} fat=${ingredientsStore.fat} flavour=${ingredientsStore.flavour}`;
                return stringReport;
            }
        }
    }
}
let manager = solution();
console.log(manager("restock flavour 50 "));
console.log(manager("prepare lemonade 4 "));
console.log(manager("restock carbohydrate 10"));
console.log(manager("restock flavour 10"));
console.log(manager("prepare apple 1"));
console.log(manager("restock fat 10"));
console.log(manager("prepare burger 1"));
console.log(manager("report")); 
