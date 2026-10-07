//-------------Hierarchiical inheritance----------
//----------Example 1-----------
class Movie {
    constructor(movieName, director) {
        this.movieName = movieName;
        this.director = director;
    }
    displayMovie() {
        console.log("Movie Name =", this.movieName);
        console.log("Director =", this.director);
    }
}
class ActionMovie extends Movie {
    constructor(movieName, director, hero) {
        super(movieName, director);
        this.hero = hero;
    }
    displayActionMovie() {
        super.displayMovie();
        console.log("Hero =", this.hero);
    }
}
class ComedyMovie extends Movie {
    constructor(movieName, director, comedian) {
        super(movieName, director);
        this.comedian = comedian;
    }
    displayComedyMovie() {
        super.displayMovie();
        console.log("Comedian =", this.comedian);
    }
}
let movie1 = new ActionMovie("RRR","S. S. Rajamouli","Ram Charan");
movie1.displayActionMovie();

console.log("----------------");

let movie2 = new ComedyMovie("Jathi Ratnalu","Anudeep KV","Naveen Polishetty");
movie2.displayComedyMovie();


//-------------Example 2------------
class Animal {
    constructor(name) {
        this.name = name;
    }
    displayAnimal() {
        console.log("Animal Name =", this.name);
    }
}
class Dog extends Animal {
    bark() {
        console.log(this.name, "is barking");
    }
}
class Cat extends Animal {
    meow() {
        console.log(this.name, "is meowing");
    }
}
let dog1 = new Dog("Tommy");
dog1.displayAnimal();
dog1.bark();

console.log("----------------");

let cat1 = new Cat("Kitty");
cat1.displayAnimal();
cat1.meow();

//-------------Example 3-------------

class Fruit {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }
    displayFruit() {
        console.log("Fruit Name =", this.name);
        console.log("Color =", this.color);
    }
}
class Apple extends Fruit {
    constructor(name, color, taste) {
        super(name, color);
        this.taste = taste;
    }
    displayApple() {
        super.displayFruit();
        console.log("Taste =", this.taste);
    }
}
class Mango extends Fruit {
    constructor(name, color, season) {
        super(name, color);
        this.season = season;
    }
    displayMango() {
        super.displayFruit();
        console.log("Season =", this.season);
    }
}
let apple1 = new Apple("Apple", "Red", "Sweet");
apple1.displayApple();

console.log("----------------");

let mango1 = new Mango("Mango", "Yellow", "Summer");
mango1.displayMango();

// -------------Example 4---------------
class Vehicle {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }
    displayVehicle() {
        console.log("Brand =", this.brand);
        console.log("Model =", this.model);
    }
}
class Car extends Vehicle {
    constructor(brand, model, fuelType) {
        super(brand, model);
        this.fuelType = fuelType;
    }
    displayCar() {
        super.displayVehicle();
        console.log("Fuel Type =", this.fuelType);
    }
}
class Bike extends Vehicle {
    constructor(brand, model, engineCC) {
        super(brand, model);
        this.engineCC = engineCC;
    }
    displayBike() {
        super.displayVehicle();
        console.log("Engine CC =", this.engineCC);
    }
}
let car1 = new Car("BMW", "M4", "Petrol");
car1.displayCar();

console.log("----------------");

let bike1 = new Bike("Yamaha", "R15", 155);
bike1.displayBike();