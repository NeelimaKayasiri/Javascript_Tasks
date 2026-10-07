// 1. Hospital

class Hospital {

    static hospitalName = "Apollo Hospital";
    static city = "Hyderabad";

    constructor(id, name, age, disease, doctor, room) {
        this.patientId = id;
        this.patientName = name;
        this.age = age;
        this.disease = disease;
        this.doctor = doctor;
        this.room = room;
    }

    displayDetails() {
        console.log("Hospital Name ", Hospital.hospitalName);
        console.log("City ", Hospital.city);
        console.log("Patient ID ", this.patientId);
        console.log("Patient Name ", this.patientName);
        console.log("Age ", this.age);
        console.log("Disease ", this.disease);
        console.log("Doctor ", this.doctor);
        console.log("Room ", this.room);
    }
}

let patient1 = new Hospital(101, "Arjun", 25, "Fever", "Dr. Ravi", 101);
console.log("----- Patient 1 -----");
patient1.displayDetails();

let patient2 = new Hospital(102, "Priya", 30, "Headache", "Dr. Anil", 102);
console.log("----- Patient 2 -----");
patient2.displayDetails();

let patient3 = new Hospital(103, "Rahul", 35, "Diabetes", "Dr. Kumar", 103);
console.log("----- Patient 3 -----");
patient3.displayDetails();

let patient4 = new Hospital(104, "Sneha", 28, "Asthma", "Dr. Suresh", 104);
console.log("----- Patient 4 -----");
patient4.displayDetails();

// 2. College

class College {

    static collegeName = "ABC Engineering College";
    static city = "Hyderabad";

    constructor(id, name, branch, year, cgpa, section) {
        this.studentId = id;
        this.studentName = name;
        this.branch = branch;
        this.year = year;
        this.cgpa = cgpa;
        this.section = section;
    }

    displayDetails() {
        console.log("College Name ", College.collegeName);
        console.log("City ", College.city);
        console.log("Student ID ", this.studentId);
        console.log("Student Name ", this.studentName);
        console.log("Branch ", this.branch);
        console.log("Year ", this.year);
        console.log("CGPA ", this.cgpa);
        console.log("Section ", this.section);
    }
}

let student1 = new College(201, "Arjun", "CSE", 3, 8.5, "A");
console.log("----- Student 1 -----");
student1.displayDetails();

let student2 = new College(202, "Priya", "ECE", 2, 9.1, "B");
console.log("----- Student 2 -----");
student2.displayDetails();

let student3 = new College(203, "Rahul", "IT", 4, 8.8, "A");
console.log("----- Student 3 -----");
student3.displayDetails();

let student4 = new College(204, "Sneha", "EEE", 1, 9.3, "C");
console.log("----- Student 4 -----");
student4.displayDetails();

// 3. Movie

class Movie {

    static production = "Sun Pictures";
    static language = "Telugu";

    constructor(id, name, hero, director, rating, year) {
        this.movieId = id;
        this.movieName = name;
        this.hero = hero;
        this.director = director;
        this.rating = rating;
        this.year = year;
    }

    displayDetails() {
        console.log("Production ", Movie.production);
        console.log("Language ", Movie.language);
        console.log("Movie ID ", this.movieId);
        console.log("Movie Name ", this.movieName);
        console.log("Hero ", this.hero);
        console.log("Director ", this.director);
        console.log("Rating ", this.rating);
        console.log("Year ", this.year);
    }
}

let movie1 = new Movie(301, "Movie A", "Arjun", "Ravi", 4.5, 2024);
console.log("----- Movie 1 -----");
movie1.displayDetails();

let movie2 = new Movie(302, "Movie B", "Rahul", "Kiran", 4.2, 2023);
console.log("----- Movie 2 -----");
movie2.displayDetails();

let movie3 = new Movie(303, "Movie C", "Vijay", "Suresh", 4.7, 2025);
console.log("----- Movie 3 -----");
movie3.displayDetails();

let movie4 = new Movie(304, "Movie D", "Karthik", "Anil", 4.1, 2022);
console.log("----- Movie 4 -----");
movie4.displayDetails();