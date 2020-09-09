var citizens = [{
        Name: "Ankita Panjwani",
        Age: 25,
        Country: "India",
        Hobbies: ["Painting", "Sketching", "Paperquilling", "Singing"]

    },
    {
        Name: "Sanjana Vadgama",
        Age: 35,
        Country: "Europe",
        Hobbies: ["Dancing", "Painting"]

    },
    {
        Name: "Bindiya",
        Age: 28,
        Country: "India",
        Hobbies: ["Reading", "Coding", "Sketching"]

    },

];

function displayAge() {
    for (i = 0; i < citizens.length; i++) {
        if (citizens[i].Age < 30) {
            console.log(citizens[i]);
        }
    }
}

function displayCountry() {
    for (i = 0; i < citizens.length; i++) {
        if (citizens[i].Country == "India") {
            console.log(citizens[i]);
        }
    }
}