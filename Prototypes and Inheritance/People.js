function solution() {
    class Employee {
        constructor(name, age) {
            this.name = name;
            this.age = age;
            this.salary = 0;//Може и така да се подадът стойности
            this.tasks = [];//  [this.name, this.age, this.salary, this.tasks] = [name, age, 0, []];

            if (new.target === Employee) {//АБСТРАКТЕН КЛАС ,МОЖЕ И  if (this.constructor === Employee)
                throw new Error("Cannot make instance of abstract class Employee.");//
            };
        }collectSalary() {
        console.log(`${this.name} received ${this.salary} this month.`);//
        };
        work() {
            let current = this.tasks.shift();
            console.log(`${current}`);
            //  console.log(`${this.name} ${current}`);Ако ги слепваме ще се промени и таск=> // this.tasks = ["is working on a simple task."];
            this.tasks.push(current);
        };
        // getSalary() {//ako imame this._salary тогава ще извикаме get salary()
        //     return this.salary;
        // }
    };
    class Junior extends Employee {
        constructor(name, age) {
            super(name, age);
            //let listTask=[`${this.name} is working on a simple task.`]
            //super.tasks=listTask; вместо this.tasks 
            this.tasks = [`${this.name} is working on a simple task.`];// this.tasks = ["is working on a simple task."];
        }
    };
    class Senior extends Employee {
        constructor(name, age) {
            super(name, age);
            this.tasks = [
                `${this.name} is working on a complicated task.`,
                `${this.name} is taking time off work.`,
                `${this.name} is supervising junior workers.`
            ]
        }
    };
    class Manager extends Employee {
        constructor(name, age) {
            super(name, age);
            this.dividend = 0;
            this.tasks = [
                `${this.name} scheduled a meeting.`,
                `${this.name} is preparing a quarterly report.`
            ];
        };

        collectSalary() {
            console.log(`${this.name} received ${this.salary + this.dividend} this month.`);//
            };
        // getSalary() {
        //     return super.getSalary() + this.dividend;
        //     // kym klas  class Employee -> collectSalary() {
        //         //можем да използваме на едно място да се изчислява заплатата 
        //         //вместо отдлно на мениджъра 
        //         // let currentSalary= this.dividend?this.salary +this.dividend :this.salary
        // }
    };
    return {
        Employee,
        Junior,
        Senior,
        Manager
    };
};
const classes = solution();
const junior = new classes.Junior('Ivan', 25);

junior.work();
junior.work();

junior.salary = 5811;
junior.collectSalary();

const sinior = new classes.Senior('Alex', 31);

sinior.work();
sinior.work();
sinior.work();
sinior.work();

sinior.salary = 12050;
sinior.collectSalary();

const manager = new classes.Manager('Tom', 55);

manager.salary = 15000;
manager.collectSalary();
manager.dividend = 2500;
manager.collectSalary();  


//второ решение 
// function solution() {
//     class Employee {
//         constructor(name, age, salary, tasks, work, collectSalary) {
//             this._name = name;
//             this._age = age;
//             this.salary = salary;
//             this._tasks = tasks;
    
//             if (new.target === Employee) {
//                 throw new Error("Cannot make instance of abstract class Employee.");
//             };
//             [this.name, this.age, this.salary, this.tasks] = [name, age, 0, []];
//         }

//         collectSalary() {
//             console.log(`${this._name} received ${this.getSalary()} this month.`);
//         };
//         work() {
//             let current = this._tasks.shift();
//             console.log(`${this._name} ${current}`);
//             this._tasks.push(current);
//         };
//         getSalary() {
//             return this.salary;
//           }
//     };
//     class Junior extends Employee {
//         constructor(name, age) {
//             super(name, age);
//             this._tasks = ["is working on a simple task."];//Тоша не работи=>'[${this._name} is working on a simple task.]';
//         }
//     };
//     class Senior extends Employee {
//         constructor(name, age) {
//             super(name, age);
//             this._tasks = [
//                 'is working on a complicated task.',
//                 'is taking time off work.',
//                 'is supervising junior workers.'
//             ]
//         }
//     };
//     class Manager extends Employee {
//         constructor(name, age) {
//             super(name, age);
//             this.dividend = 0;
//             this._tasks = [
//                 'scheduled a meeting.',
//                 'is preparing a quarterly report.'
//             ];
//         };
//         getSalary() {
//             return super.getSalary() + this.dividend;
//           }
//     };
//     return {
//         Employee,
//         Junior,
//         Senior,
//         Manager
//     };
// };