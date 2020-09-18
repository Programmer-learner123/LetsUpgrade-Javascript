window.onunload = function () {
    let initialBusDetails = [];
    if (localStorage.getItem("buses") == null) {
        localStorage.setItem("buses", JSON.stringify(initialBusDetails));
    }

};

function display(superarray = undefined) {

    let tabledata = "";
    if (superarray == undefined) {
        buses = JSON.parse(localStorage.getItem("buses"));

    } else {
        buses = superarray;
    }



    buses.forEach(function (bus, index) {
        // forEach has 2 parameters: object and index
        let currentrow = `
    <tr>
    <td>${index + 1}</td>
    <td>${bus.name}</td>
    <td>${bus.source}</td>
    <td>${bus.destination}</td>
    <td>${bus.number}</td>
    <td>${bus.passengerCapacity}</td>
    <td><button onclick="deleteBusdetails(${index})">delete</button>
    
    </tr>`;
        tabledata += currentrow;
    });
    document.getElementsByClassName("tdata")[0].innerHTML = tabledata;
}

display();

function addBusDetails(event) {
    event.preventDefault();
    let bus = {};
    // preventdefault means stops refreshing
    let name = document.getElementById("name").value;
    let source = document.getElementById("source").value;
    let destination = document.getElementById("destination").value;
    let number = document.getElementById("number").value;
    let passengerCapacity = document.getElementById("passengerCapacity").value;

    bus.name = name;
    bus.source = source;
    bus.destination = destination;
    bus.number = number;
    bus.passengerCapacity = Number(passengerCapacity);

    // superheros.push(superhero);

    let buses = JSON.parse(localStorage.getItem("buses"));
    buses.push(bus);
    localStorage.setItem("buses", JSON.stringify(buses));


    display();
    document.getElementById("name").value = "";
    document.getElementById("source").value = "";
    document.getElementById("destination").value = "";
    document.getElementById("number").value = "";
    document.getElementById("passengerCapacity").value = "";
}

function searchBySourceDestination() {
    let searchValue = document.getElementById("searchBySourcedEstination").value;
    let buses = JSON.parse(localStorage.getItem("buses"));

    let newdata = buses.filter(function (bus) {
        return (bus.source.indexOf(searchValue) != -1) || (bus.destination.indexOf(searchValue) != -1);
    })
    display(newdata);
}

function deleteBusdetails(index) {
    let buses = JSON.parse(localStorage.getItem("buses"));
    buses.splice(index, 1);
    localStorage.setItem("buses", JSON.stringify(buses));
    display();

}

// let updateIndex;

// function copysuperhero(index) {
//     let superheros = JSON.parse(localStorage.getItem("superheros"));
//     updateIndex = index;
//     let superhero = superheros[index];
//     document.getElementById("upname").value = superhero.name;
//     document.getElementById("upage").value = superhero.age;
//     document.getElementById("upplanet").value = superhero.planet;
//     document.getElementById("upheight").value = superhero.height;
// }

// function updateSuperhero(event) {
//     event.preventDefault();
//     let superheros = JSON.parse(localStorage.getItem("superheros"));

//     let superhero = superheros[updateIndex];
//     console.log(superhero);
//     // preventdefault means stops refreshing
//     let name = document.getElementById("upname").value;
//     let age = document.getElementById("upage").value;
//     let planet = document.getElementById("upplanet").value;
//     let height = document.getElementById("upheight").value;

//     superhero.name = name;
//     superhero.age = Number(age);
//     superhero.planet = planet;
//     superhero.height = height;


//     localStorage.setItem("superheros", JSON.stringify(superheros));
//     display(superheros);

//     let modal = document.getElementsByClassName("modal")[0];
//     modal.style.display = "none";
// }

// event is an inbuilt object associated with every function u call
// here inplace of event any other name can be put on
// function showModal(index) {
//     let modal = document.getElementsByClassName("modal")[0];
//     modal.style.display = "block";
//     copysuperhero(index);


// }

// function hideModal(event) {
//     if (event.target.className == "modal") {
//         let modal = document.getElementsByClassName("modal")[0];
//         modal.style.display = "none";

//     }
// }