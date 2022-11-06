// function soleve() {
class Figure {
    constructor(units = 'cm') {
        this.units = units; 
        if (new.target === Figure) {// може и this.constructor === Figure
            // позволява да определите дали дадена функция или конструктор са били извикани с помощта на оператора new.
            // В конструкторите и функциите, извикани чрез оператора new, 
            //new. target връща референция към конструктора или функцията. При нормални извиквания на функции new. target е неопределен.
            throw new TypeError('Figure class is abstract');
        }
    }
    changeUnits(value) {
        this.units = value;
    };
    scaleParam(param) {
        switch (this.units) {//1 Сантиметра = 0.01 Метра;1 Сантиметра = 10 Милиметър
            case 'm': param /= 10; break;
            case 'cm': break;
            case 'mm': param *= 10; break;
            default: break;
        }
        return param;
    }
    toString() {
        return `Figures units: ${this.units}`;
    };
}
class Circle extends Figure {
    constructor(radius, units) {
        super(units);
        this._radius = Number(radius);
    }
    get area() {
        return Math.PI * this.radius * this.radius;
    }
    get radius() {
        return this.scaleParam(this._radius);
    }
    toString() {
        return `${super.toString()} Area: ${this.area} - radius: ${this.radius}`
        //Ако искате методът toString() на Rectangle винаги да бъде s${super.toString()} Area: ${this.area} ..,
        // така че когато промените toString() на Figure, toString() на  Rectangle да се промени, тогава това е правилният начин-super.toString().
        // Ако обаче искате toString() на Rectangle да не зависи от toString() на Figure, тогава не включвайте извикване на Super.
        //super не се извлича динамично от стойността this, а лексикално от дефиницията на метода
    }
}

class Rectangle extends Figure {
    constructor(width, height, units) {
        super(units);
        this._width = Number(width);
        this._height = Number(height);
    }
    get area() {
        return this.width * this.height;
    };
    get width() {
        return this.scaleParam(this._width);
    };
    get height() {
        return this.scaleParam(this._height);
    }
    toString() {
        return ` ${super.toString()} Area: ${this.area} - width: ${this.width}, height: ${this.height}`;
    }
};
//     return {
//         Figure,
//         Circle,
//         Rectangle
//     };
// }

let c = new Circle(5);
console.log(c.area); // 78.53981633974483
console.log(c.toString()); // Figures units: cm Area: 78.53981633974483 - radius: 5

let r = new Rectangle(3, 4, 'mm');
console.log(r.area); // 1200 
console.log(r.toString()); //Figures units: mm Area: 1200 - width: 30, height: 40

r.changeUnits('cm');
console.log(r.area); // 12
console.log(r.toString()); // Figures units: cm Area: 12 - width: 3, height: 4

c.changeUnits('mm');
console.log(c.area); // 7853.981633974483
console.log(c.toString()) // Figures units: mm Area: 7853.981633974483 - radius: 50
