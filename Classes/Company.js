class Company {
    constructor() {
        this.departments = {};
    }
    addEmployee(name, salary, position, department) {
        // if (salary === null || salary < 0 || name === undefined || name === "" || position === "" || position === undefined || department === "" || department === undefined) {
        if (!salary || !name || !position || !department || salary < 0) {
            throw new Error(`Invalid input!`);
        }
        if (!this.departments[department]) {
            // this.departments.department(name, salary, position);
            this.departments[department] = {
                avgSalary: 0,
                sumSalary: 0,
                employees: []
            }
        }
        this.departments[department].employees.push({ name, salary, position });
        this.updateDepartmenValues(this.departments[department], salary);

        //this.departments[department].avgSalary += this.departments[department].sumSalary / this.departments[department].employees.length;
        return `New employee is hired. Name: ${name}. Position: ${position}`;
    }
    updateDepartmenValues(department, salary) {
        department.sumSalary += Number(salary);
        department.avgSalary = department.sumSalary / department.employees.length;
    }
    bestDepartment() {
        let bestDepart = Object.entries(this.departments).sort(([depNameOne, depInfoOne], [depNameTwo, depInfoTwo]) => {
            return depInfoTwo.avgSalary - depInfoOne.avgSalary;
        })[0];
        let sortEmp = bestDepart[1].employees = bestDepart[1].employees.sort((a, b) => {
            return b.salary - a.salary || a.name.localeCompare(b.name);
        }
        )

        let buff = `Best Department is: ${bestDepart[0]}`;
        buff += `\nAverage salary: ${bestDepart[1].avgSalary.toFixed(2)}`;
        debugger;

        sortEmp.forEach(emp => {
            buff += `\n${emp.name} ${emp.salary} ${emp.position}`;//Слагаме \n  най-отпред за да няма празен ред или може 
        });
        // for (let i=0;i< sortEmp.length;i++) {
        //     buff += `\n${emp.name} ${emp.salary} ${emp.position}\n`;
        // buff += i===ortEmp.length-1?":`\n`;
        // }
        return buff;
    }
}

// следващо решение 
// class Company {
 
//     constructor() {
//         this.departments = {};
//         this.aveSalaries = {};
//     }
 
//     addEmployee(username, salary, position, department) {
 
//         if ([...arguments].some(a => a === null || a === undefined || a === '') || salary < 0) {
//             throw new Error('Invalid input!');
//         }
 
//         let user = {
//             username: username,
//             salary: salary,
//             position: position
//         };
 
//         if (!this.departments.hasOwnProperty(department)) {
 
//             this.departments[department] = [];
 
//             this.aveSalaries[department] = {
//                 totalEmployees: 0,
//                 totalSalaries: 0,
//                 averageSalary: 0
//             };
//         } 
 
//         this.departments[department].push(user);
//         this.aveSalaries[department].totalEmployees += 1;
//         this.aveSalaries[department].totalSalaries += salary;
        
//         this.aveSalaries[department].averageSalary = 
//             this.aveSalaries[department].totalSalaries / 
//             this.aveSalaries[department].totalEmployees;
        
//         return `New employee is hired. Name: ${username}. Position: ${position}`;
//     }
 
//     bestDepartment() {
 
//         let result = '';
//         let bestDepartment = Object
//             .entries(this.aveSalaries)
//             .sort((a, b) => b[1].averageSalary - a[1].averageSalary)
//             .shift();
 
//         result += `Best Department is: ${bestDepartment[0]}`;
//         result += `\nAverage salary: ${bestDepartment[1].averageSalary.toFixed(2)}`;
 
//         this.departments[bestDepartment[0]]
//             .sort((a, b) => b.salary - a.salary || a.username.localeCompare(b.username));
 
//         this.departments[bestDepartment[0]].forEach(user => {
//             result +=`\n${user.username} ${user.salary} ${user.position}`;
//         });
 
//         return result;
//     }
// }
// второ решение 
// class Company {
//     constructor() {
//         this.departments = new Map();
//     }
//     addEmployee(username, salary, position, department) {
 
//         if (!username || !salary || salary < 0 || !position || !department) {
//             throw new Error("Invalid input!");
//         }
 
//         let newEmployee = { username, salary, position, department };
 
//         if (this.departments.has(department)) {
//             this.departments.get(department).push(newEmployee);
//         } else {
//             this.departments.set(department, [newEmployee]);
//         }
 
//         return `New employee is hired. Name: ${username}. Position: ${position}`;
//     }
 
//     bestDepartment() {
//         let totalSalary = (department) => {
//             let totalSalary = department[1].reduce((acc, b) => { return acc += b.salary }, 0);
//             let averageSalary = (totalSalary / department[1].length).toFixed(2);
//             department.push(averageSalary);
//             return averageSalary;
//         };
//         let bestDepartment = [...this.departments].sort((a, b) => totalSalary(b) - totalSalary(a))[0];
//         let sortBySalaryAndName = bestDepartment[1].sort((a, b) => b.salary - a.salary || a.username.localeCompare(b.username));
 
//         let result = `Best Department is: ${bestDepartment.shift()}\n`;
//         result += `Average salary: ${bestDepartment.pop()}\n`;
//         sortBySalaryAndName.forEach(e => result += `${e.username} ${e.salary} ${e.position}\n`);
 
//         return result.trim();
//     }
// }
//трето решение 
// class Company {
//     #departments;
//     constructor() {
//         this.#departments = [];
//     }

//     addEmployee(username, salary, position, department) {
//         if (!username || !position || !department || !salary || salary < 0) {
//             throw new Error("Invalid input!");
//         }

//         let newEmploy = {
//             username: username,
//             salary: Number(salary),
//             position: position
//         }

//         if (!this.#departments[department]) {
//             this.#departments[department] = [];
//         }
//         this.#departments[department].push(newEmploy);
//         return `New employee is hired. Name: ${username}. Position: ${position}`;
//     }

//     bestDepartment() {
//         let department = '';
//         let maxSalary = 0;
//         Object.entries(this.#departments).forEach(([key, value]) => {
//             let salary = 0;
//             value.forEach(e => {
//                 salary += e.salary;
//             })
//             salary = salary / value.length;
//             if (salary > maxSalary) {
//                 department = key;
//                 maxSalary = salary;
//             }
//         });
//         if (department != '') {
//             let res = `Best Department is: ${department}\nAverage salary: ${maxSalary.toFixed(2)}\n`;
//             Object.values(this.#departments[department]).sort((a, b) => b.salary - a.salary || a.username.localeCompare(b.username)).forEach(e => {
//                 let em = `${e.username} ${e.salary} ${e.position}\n`;
//                 res += em;
//             })
//             return res.trim();
//         }
//     }
// }
let c = new Company();

c.addEmployee("Stanimir", 2000, "engineer", "Construction");

c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");

c.addEmployee("Slavi", 500, "dyer", "Construction");

c.addEmployee("Stan", 2000, "architect", "Construction");

c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");

c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");

c.addEmployee("Gosho", 1350, "HR", "Human resources");

console.log(c.bestDepartment());