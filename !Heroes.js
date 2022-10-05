function solve() {
    let object = {//или return {
        mage(name) {
            return obj = {
                name,
                health: 100,
                mana: 100,
                cast(spell) {
                    obj.mana--;
                    console.log(`${name} cast ${spell}`);
                }
            }
        },
        fighter(name) {
            //  fighter: (name) => {
            return obj = {
                name,
                health: 100,
                stamina: 100,
                fight() {
                    obj.stamina--;
                    console.log(`${name} slashes at the foe!`);
                }
            }
        }
    }
    return object;
}

solve();
let create = solve();
const scorcher = create.mage("Scorcher");
scorcher.cast("fireball")
scorcher.cast("thunder")
scorcher.cast("light")

const scorcher2 = create.fighter("Scorcher 2");
scorcher2.fight()

console.log(scorcher2.stamina);
console.log(scorcher.mana);
