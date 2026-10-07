// Example 1 on single inheritance
// Using extends

class Hospital {
    openHospital() {
        console.log("Hospital is open");
    }
}
class Doctor extends Hospital {
    startDuty() {
        console.log("Doctor is starting duty");
    }
}
let doctor = new Doctor();

doctor.startDuty();
doctor.openHospital();

// ---------Example 2----------
// constructor
// super()
// super.method()

class Book {
    constructor(bookName, author) {
        this.bookName = bookName;
        this.author = author;
    }
    displayDetails() {
        console.log("Book Name =", this.bookName);
        console.log("Author Name =", this.author);
    }
}
class EBook extends Book {
    constructor(bookName, author, fileSize, format) {
        super(bookName, author);       // using super() keyword
        this.fileSize = fileSize;
        this.format = format;
    }

    displayEBookDetails() {
        super.displayDetails();       // using super keyword
        console.log("File Size =", this.fileSize);
        console.log("Format =", this.format);
    }
}
let obj = new EBook("The Alchemist","Paulo Coelho","5 MB","PDF");
obj.displayEBookDetails();

//----------Example 3----------
class Plant {
    constructor(plantName, type) {
        this.plantName = plantName;
        this.type = type;
    }

    displayDetails() {
        console.log("Plant Name =", this.plantName);
        console.log("Plant Type =", this.type);
    }
}
class IndoorPlant extends Plant {
    constructor(plantName, type, sunlight, waterRequirement) {
        super(plantName, type);          // using super() keyword
        this.sunlight = sunlight;
        this.waterRequirement = waterRequirement;
    }
    displayIndoorDetails() {
        super.displayDetails();          // using super keyword
        console.log("Sunlight =", this.sunlight);
        console.log("Water Requirement =", this.waterRequirement);
    }
}
let obj1 = new IndoorPlant(
    "Money Plant",
    "Climbing Plant",
    "Low",
    "Twice a week"
);

obj1.displayIndoorDetails();

//---------Example 4----------

class RRR {
    constructor(movieName, director, heroName) {
        this.movieName = movieName;
        this.director = director;
        this.heroName = heroName;
    }
    displayDetails() {
        console.log("Movie Name =", this.movieName);
        console.log("Director Name =", this.director);
        console.log("Hero Name =", this.heroName);
    }
}
class RRRCharacters extends RRR {
    constructor(movieName, director, heroName, characterName, heroineName) {
        super(movieName, director, heroName); // using super() keyword
        this.characterName = characterName;
        this.heroineName = heroineName;
    }
    displayCharacterDetails() {
        super.displayDetails(); // using super keyword
        console.log("Character Name =", this.characterName);
        console.log("Heroine Name =", this.heroineName);
    }
}
let obj2 = new RRRCharacters("RRR","S. S. Rajamouli","N. T. Rama Rao Jr.","Komaram Bheem","Janhvi Kapoor");
obj2.displayCharacterDetails();