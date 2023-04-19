



// this will make Employee objects (that have access to the methods)
class Employee {
    constructor(name, salary, experienceYears){
        this.name = name;
        this.salary = salary;
        this.experienceYears = experienceYears;

    }
    checkSalary(){
        // show us the salary of the employee
        // this inside a method refers to the OBJECT that CALLS THE METHOD
        console.log(this.salary);
   
    }
    getEmployeeInformationString(){
        // tell us important info about employee as a string
        console.log(`Employee info: ${this.name} ${this.experienceYears} ${this.salary}`)
    }
    greetOtherEmployee(otherEmployee) {
        console.log(`${this.name} says hello to ${otherEmployee.name}`)
    }
    compareSalaries(otherEmployee){
        let nameOfHigherSalary = this.salary > otherEmployee.salary ? this.name : otherEmployee.name;
        let nameOfLowerSalary = nameOfHigherSalary === this.name ? otherEmployee.name : this.name;

        console.log(`${nameOfHigherSalary}'s salary is higher than ${nameOfLowerSalary}`)

    }
    isSalaryHigher(otherEmployee){
        let trueOrFalse = this.salary > otherEmployee.salary
        return trueOrFalse;
        // return this.salary > otherEmployee.salary
    }
}

let goOnVacation = () => {
    console.log("Bye!");
}
let James = new Employee('James', 70000, 2);
let Brit = new Employee('Brit', 71000, 3);

James.getEmployeeInformationString()
James.greetOtherEmployee(Brit)
James.compareSalaries(Brit)

James.isSalaryHigher(Brit)

if (James.isSalaryHigher(Brit)){
    console.log("James has a higher salary");
} else {
    console.log("James does not have higher salary");
}

// Brit.goOnVacation = () => {}

Brit.checkSalary()

console.log(James);
console.log(Brit);

James.checkSalary();


class Person {
    constructor(name, age, occupation) {
        this.name = name;
        this.age = age;
        this.occupation = occupation
    }
    introduce(){
        console.log(`Hi! I'm ${this.name}`);
    }
}

let person1 = new Person("James", 44, "Pilot")
let person2 = new Person("Sasha", 400, "Witch")
let Jerry = new Person("Jerry", 40, "Pilot")

console.log(typeof new Date());