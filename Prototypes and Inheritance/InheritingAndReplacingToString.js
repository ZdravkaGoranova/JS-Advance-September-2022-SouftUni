//function toStringExtension() {
    class Person {
        constructor(name, email) {
            this.name = name;
            this.email = email;
        }
     
        toString() {
            let className = this.constructor.name;
            return `${className} (name: ${this.name}, email: ${this.email})`;
        }
    }
     
    class Teacher extends Person {
        constructor(teacherName, teacherEmail, subject) {
            super(teacherName, teacherEmail);
            this.subject = subject;
        }
     
        toString() {
            let base = super.toString().slice(0, -1);//.slice(0, -1) за да премехне  скобата след  ivan@ivan.bg)=>Teacher (name: Ivan, email: ivan@ivan.bg), subject: history)
            return `${base}, subject: ${this.subject})`;
        }
    }
     
    class Student extends Person {
        constructor(studentName, studentEmail, course) {
            super(studentName, studentEmail);
            this.course = course;
        }
     
        toString() {
            let base = super.toString().slice(0, -1);
            return `${base}, course: ${this.course})`;
        }
    }
 
    // return {
    //     Person,
    //     Teacher,
    //     Student
    // }
//}
let person = new Person("Maria", "maria@yahoo.bg");
let teacher = new Teacher("Ivan", "ivan@ivan.bg", "history");
let student = new Student("Pesho", "pesho@gmail.com", "Math");
console.log(person.toString());
console.log(teacher.toString());
console.log(student.toString());
