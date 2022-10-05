function createSortedList() {
    let numbers = [];
    let object = {
        add(element) {
            //   add: function (num) {
            numbers.push(element);
            numbers.sort((a, b) => a - b);
            this.size++;
        },
        remove(index) {
            if (index >= 0 && index <= numbers.length - 1) {
                numbers.splice(index, 1)
                this.size--;
            }
        },
        get(index) {
            if (index >= 0 && index <= numbers.length - 1) {
                return numbers[index];
            }
        },
        size: 0,
    }
    return object;
}
let list = createSortedList();
list.add(5);
list.add(6);
//.add(7);
//console.log(list.get(1));
//list.remove(1);
//console.log(list.get(1));
console.log(list.size);