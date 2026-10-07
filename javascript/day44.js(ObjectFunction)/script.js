// Function with input and without return

function details(Student){
    console.log(Student.name);
    console.log(Student.age);
    console.log(Student.phno);
    console.log(Student["Job"]);
    console.log(Student.address);
    console.log(Student["cource"]);
}

let Student = {
    name: "Neelima",
    age: 22,
    phno: 8106066444,
    Job: "python Developer",
    cource: "python full stack",
    address: {
        vill_name: "kbhp",
        pincode: 500072,
        state: "Telangana"
    }
};

details(Student);


// Function with input and with return

function persons(person){
    console.log(person.name);
    console.log(person.age);
    console.log(person["Job"]);
    console.log(person.address);
    console.log(person.course.course_name);
    console.log(person.course.gmail);

    return person;
}

let person = {
    name: "Anurupa",
    Job: "Software Developer",
    age: 22,
    salary: 30000,

    address: {
        city: "Hyderabad",
    },

    course: {
        course_name: "data analyst",
        course_dur: "6 months",
        gmail: "anurupagurijala@gmail.com",

        fee: {
            total_fee: 45000,
        }
    }
};

let result = persons(person);
console.log(result);