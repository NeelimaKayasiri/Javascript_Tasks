//Creating object
let person = new Object();
//Access - Retriving
console.log("Before");
console.log(person);

//Add the data 

person.name = "Neelima";
person["Age"] = 21;
person.address = "kphb";
person.salary = 50000;
console.log("After");
console.log(person);

//updated
person["Age"] = 22;
console.log(person);

// delete
delete person.height;
console.log(person);