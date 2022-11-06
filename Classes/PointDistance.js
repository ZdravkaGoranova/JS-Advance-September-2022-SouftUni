class Point {
   static  distance(firstirst, second) {
        let dx = second.x - firstirst.x;
        let dy = second.y - firstirst.y;

        dx **= 2;//вдигане на квадрат
        dy **= 2;
         let result = Math.sqrt(dx +dy);
       return result;
    }
    constructor(x, y) {
        this.x = x,
            this.y = y
    }
}
let p1 = new Point(5, 5);

let p2 = new Point(9, 8);

console.log(Point.distance(p1, p2));