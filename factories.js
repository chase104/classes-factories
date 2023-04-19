


class Car {
    constructor(make, model, year, price){
        this.make = make;
        this.model = model;
        this.year = year
    }
    honk(){
        console.log('HONKKKKKK');
    }
}


class CarCollection {
    constructor(owner){
        this.owner = owner;
        this.cars = [];
    }
    displayCars(){
        this.cars.forEach((car) => {
            console.log(car.make, car.price);
        })
    }
    addCar(make, model, year, price){
        this.cars.push(new Car(make, model, year, price))
    }
}

let mySportsCars = new CarCollection("Chase");

let myNormalCars = new CarCollection("Bader");




myNormalCars.addCar("hyundai", "sonana", 2023, 25000)
myNormalCars.addCar("ford", "f150", 2023, 26000)

console.log(myNormalCars);


class Course {
    constructor(title, campus, numberOfLearners){
        this.title = title,
        this.campus = campus,
        this.numberOfLearners = numberOfLearners
    }
    getTitle(){
        return this.title;
    }
}


class School {
    constructor(bestInstructor = "Chase", foundingDate){
        this.bestInstructor = bestInstructor,
        this.foundingDate = foundingDate,
        this.courses = []
    }
    addCourse(title, campus, numberOfLearners){
        let newCourse = new Course(title, campus, numberOfLearners);
        this.courses.push(newCourse);
    }
    removeCourse(title){
        let indexOfCourse = this.courses.findIndex((element) => element.title.toLowerCase() === title.toLowerCase());
        this.courses.splice(indexOfCourse, 1)
    }
    getCourse(title){

        let indexOfCourse = this.courses.findIndex((element) => element.title.toLowerCase() === title.toLowerCase());
        console.log(indexOfCourse);
        return this.courses[indexOfCourse]
    }
}

let PerScholas = new School(undefined, 1699);

PerScholas.addCourse("SE101", "Seattle", 16);
PerScholas.addCourse("SE200", "Houston", 15);
PerScholas.addCourse("Help Desk", "Seattle", 30);

let foundCourse = PerScholas.getCourse("SE200")

PerScholas.removeCourse("Help Desk")

console.log(PerScholas);




let HoustonPublicSchools = new School();
let SeattleHigh = new School()