//1. Single Inheritance------> Method Overriding
class Vehicle {
    start() {
        console.log("Vehicle is starting");
    }
}
class Car extends Vehicle {
    start() {
        console.log("Car starts with a key");
    }
}
let vehicle = new Vehicle();
vehicle.start();

let car = new Car();
car.start();

//2. Multilevel Inheritance--------> Method Overriding
class Food {
    prepare() {
        console.log("Preparing food");
    }
}
class tiffins extends Food {
    prepare() {
        console.log("Preparing fast food");
    }
}
class fastfoods extends tiffins {
    prepare() {
        console.log("Preparing noodles");
    }
}
let tiffin = new tiffins();
tiffin.prepare();

let fastfood = new fastfoods();
fastfood.prepare();

//3.Hierarchical Inheritance -------> Method Overriding
class Animal {
    sound() {
        console.log("Animal makes a sound");
    }
}
class Dog extends Animal {
    sound() {
        console.log("barks....");
    }
}
class Cat extends Animal {
    sound() {
        console.log("meows....");
    }
}
let dog = new Dog();
dog.sound();

let cat = new Cat();
cat.sound();