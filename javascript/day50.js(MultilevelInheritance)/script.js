//----------Multilevel Inheritance---------
//-------Example 1-------

class Product {
    constructor(name) {
        this.name = name;
    }
    product() {
        console.log("Product:", this.name);
    }
}
class Electronic extends Product {
    constructor(name, type) {
        super(name);
        this.type = type;
    }
    electronic() {
        super.product();
        console.log("Type:", this.type);
    }
}
class Television extends Electronic {
    constructor(name, type, brand) {
        super(name, type);
        this.brand = brand;
    }
    tv() {
        super.electronic();
        console.log("Brand:", this.brand);
    }
}
let obj = new Television("Television", "Electronic", "Samsung");

obj.tv();

//-------Example 2-------

class Country {
    constructor(name) {
        this.name = name;
    }

    countryName() {
        console.log("Country:", this.name);
    }
}
class State extends Country {
    constructor(name, state) {
        super(name);
        this.state = state;
    }
    stateName() {
        super.countryName();
        console.log("State:", this.state);
    }
}
class City extends State {
    constructor(name, state, city) {
        super(name, state);
        this.city = city;
    }

    cityName() {
        super.stateName();
        console.log("City:", this.city);
    }
}
let obj2 = new City("India", "Andhra Pradesh", "Vijayawada");

obj2.cityName();

//-------------Example 3-------------
class Food {
    constructor(name) {
        this.name = name;
    }
    taste() {
        console.log("Food:", this.name);
    }
}
class FastFood extends Food {
    constructor(name, price) {
        super(name);
        this.price = price;
    }
    tasteFastFood() {
        super.taste();
        console.log("Price:", this.price);
    }
}
class Pizza extends FastFood {
    constructor(name, price, size) {
        super(name, price);
        this.size = size;
    }

    tastePizza() {
        super.tasteFastFood();
        console.log("Size:", this.size);
    }
}
let obj3 = new Pizza("Pizza", 250, "Large");

obj3.tastePizza();

//-------------Example 3-------------
class School {
    constructor(name) {
        this.name = name;
    }

    show() {
        console.log("School:", this.name);
    }
}
class Class extends School {
    constructor(name, section) {
        super(name);
        this.section = section;
    }
    showClass() {
        super.show();
        console.log("Section:", this.section);
    }
}
class Student extends Class {
    constructor(name, section, student) {
        super(name, section);
        this.student = student;
    }

    showStudent() {
        super.showClass();
        console.log("Student:", this.student);
    }
}
let obj4 = new Student("ABC School", "10-A", "Ravi");

obj4.showStudent();