//Example 1

class College {
    // Static variables
    static college_Name = "Kallam Haranadhreddy institute of technology";
    static city = "guntur";
    // Create instance variables
    set_data(roll_no, student_name, course, age, marks) {
        this.roll_no = roll_no;
        this.student_name = student_name;
        this.course = course;
        this.age = age;
        this.marks = marks;
    }

    // Display student data
    displayDetails() {
        console.log("College Name :", College.college_Name);
        console.log("City :", College.city);
        console.log("Roll Number :", this.roll_no);
        console.log("Student Name :", this.student_name);
        console.log("Course :", this.course);
        console.log("Age :", this.age);
        console.log("Marks :", this.marks);
    }
}

// Create objects
let student1 = new College();
let student2 = new College();
let student3 = new College();
let student4 = new College();

console.log("-------- Student 1 ----------");
student1.set_data(101, "Neelima", "B.Tech", 21, 85);
student1.displayDetails();

console.log("\n-------- Student 2 ----------");
student2.set_data(102, "Janaki", "B.Com", 22, 90);
student2.displayDetails();

console.log("\n-------- Student 3 ----------");
student3.set_data(103, "Anurupa", "BBA", 21, 88);
student3.displayDetails();

console.log("\n-------- Student 4 ----------");
student4.set_data(104, "Anantha", "BCA", 23, 92);
student4.displayDetails();


//Example 2

class Hospital {

    // Static variables
    static hospital_Name = "Apollo Hospital";
    static city = "Hyderabad";

    // Create instance variables
    set_data(patient_id, patient_name, age, disease, room_no) {
        this.patient_id = patient_id;
        this.patient_name = patient_name;
        this.age = age;
        this.disease = disease;
        this.room_no = room_no;
    }

    // Display patient data
    displayDetails() {
        console.log("Hospital Name :", Hospital.hospital_Name);
        console.log("City :", Hospital.city);
        console.log("Patient ID :", this.patient_id);
        console.log("Patient Name :", this.patient_name);
        console.log("Age :", this.age);
        console.log("Disease :", this.disease);
        console.log("Room Number :", this.room_no);
    }
}


// Create objects
let patient1 = new Hospital();
let patient2 = new Hospital();
let patient3 = new Hospital();
let patient4 = new Hospital();

console.log("-------- Patient 1 ----------");
patient1.set_data(101, "Ravi", 21, "Fever", 201);
patient1.displayDetails();

console.log("\n-------- Patient 2 ----------");
patient2.set_data(102, "Venkat", 25, "Cold", 202);
patient2.displayDetails();

console.log("\n-------- Patient 3 ----------");
patient3.set_data(103, "Kalyan", 23, "Headache", 203);
patient3.displayDetails();

console.log("\n-------- Patient 4 ----------");
patient4.set_data(104, "Ashok", 27, "Diabetes", 204);
patient4.displayDetails();


// Example 3

class PhoneShop {

    // Static variables
    static shop_Name = "Smart Mobile Store";
    static location = "Hyderabad";

    // Create instance variables
    set_data(phone_id, model, customer_name, price, payment, warranty) {
        this.phone_id = phone_id;
        this.model = model;
        this.customer_name = customer_name;
        this.price = price;
        this.warranty = warranty;
    }

    // Display phone purchase details
    displayDetails() {
        console.log("Shop Name :", PhoneShop.shop_Name);
        console.log("Location :", PhoneShop.location);
        console.log("Model :", this.model);
        console.log("Customer Name :", this.customer_name);
        console.log("Price :", this.price);
        console.log("Warranty :", this.warranty);
    }
}


// Create objects
let customer1 = new PhoneShop();
let customer2 = new PhoneShop();
let customer3 = new PhoneShop();
let customer4 = new PhoneShop();


console.log("-------- Customer 1 ----------");
customer1.set_data("Samsung S24", "Neelima", 65000, "1 Year");
customer1.displayDetails();

console.log("\n-------- Customer 2 ----------");
customer2.set_data("iPhone 15", "Janaki", 60000, "1 Year");
customer2.displayDetails();

console.log("\n-------- Customer 3 ----------");
customer3.set_data("OnePlus 12", "Anurupa", 55000, "2 Years");
customer3.displayDetails();

console.log("\n-------- Customer 4 ----------");
customer4.set_data("Vivo V40", "Sravani", 35000, "1 Year");
customer4.displayDetails();