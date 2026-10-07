let innomatics = {
    instituteName: "Innomatics Research Labs",
    location: {
        area : "kukatpally",
        city: "Hyderabad",
        state: "Telangana",
        buliding : {
            floor : 4,
            rooms : {
                classroom1 : {
                    course : "python fullstack",
                }

            }
        }
    },
    Branches:["Hyderbad", "Bengulur", "Pune"],
    contact: {
        phone: "9876543210",
        email: "info@innomatics.in",
        website: "www.innomatics.in"
    },
    courses: {
        dataScience: {
            duration: "6 Months",
            mode: "Online & Offline",
            fee: 45000,
            skills: ["Python", "SQL", "Machine Learning", "Power BI"]
        },

        java: {
            duration: "6 Months",
            mode: "Online & Offline",
            fee: 40000,
            skills: ["HTML", "CSS", "JavaScript", "React", "Node.js"]
        },

        python: {
            duration: "3 Months",
            mode: "Online & Offline",
            fee: 30000,
            skills: ["Python", "SQL", "CSS", "javascript"]
        }
    },
    facilities: {
        classrooms: 10,
        placementSupport: True,
    },
    faculty: {
        python: {
            name: "vineeth sir",
            experience: "3 Years",
            subject: "python",
        },
    },

}
// accessing data
console.log(innomatics);
console.log(innomatics.instituteName);
console.log(innomatics["courses"]);
console.log(innomatics["Branches"]);
console.log(innomatics.courses.python.duration);

// update
innomatics.courses.python.fee = 40000;
console.log("After updation =", innomatics.courses.python.fee);

// delete
delete innomatics.facilities;
console.log("After deletion =", innomatics.facilities);
console.log(innomatics);