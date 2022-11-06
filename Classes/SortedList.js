class List {
    constructor() {
        this.list = [];
        this.size = this.list.length;
    }
    add(element) {
        this.list.push(element);
        this.list = this.list.sort((a, b) => a - b);
        this.size++;
        return this.list;
    }
    remove(index) {
        if (index > this.size - 1  || index < 0) {
            throw new Error("error");
        }
        this.list.splice(index, 1,);
        this.size--;
        return this.list;
    }
    get(index) {
        if (index > this.size - 1 || index < 0) {
            throw new Error("error");
        }
        return this.list[index];;
    }
}

let list = new List();
list.add(4);
list.add(6);
list.add(2);
console.log(list.get(1));
list.remove(1); console.log(list.get(1))