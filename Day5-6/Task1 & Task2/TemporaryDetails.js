let employees = [{
        name: "Ankita Panjwani",
        age: 21,
        city: "Anand",
        salary: "3lpa"
    },
    {
        name: "Shweta Patil",
        age: 22,
        city: "Godhra",
        salary: "4lpa"
    },
    {
        name: "Rohan Rai",
        age: 25,
        city: "Mumbai",
        salary: "5lpa"
    },
    {
        name: "Madhu Harwani",
        age: 30,
        city: "Kolkata",
        salary: "6lpa"
    },
    {
        name: "Natasha mithiborwala",
        age: 27,
        city: "Banglore",
        salary: "7lpa"
    }

];

function display(superarray) {
    let tabledata = "";
    let srno = 1;
    superarray.forEach(function (employee, index) {
        // forEach has 2 parameters: object and index
        let currentrow = `
    <tr>
    <td>${srno}</td>
    <td>${employee.name}</td>
    <td>${employee.age}</td>
    <td>${employee.city}</td>
    <td>${employee.salary}</td>
    <td><button onclick="deleteSuperhero(${index})">delete</button>
    
    </tr>`;
        tabledata += currentrow;
        srno++;
    });
    document.getElementsByClassName("tdata")[0].innerHTML = tabledata;
}

display(employees);

function addEmployeeDetails(event) {
    event.preventDefault();
    let employee = {};
    // preventdefault means stops refreshing
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let city = document.getElementById("city").value;
    let salary = document.getElementById("salary").value;

    employee.name = name;
    employee.age = Number(age);
    employee.city = city;
    employee.salary = salary;

    employees.push(employee);
    display(employees);
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("city").value = "";
    document.getElementById("salary").value = "";
}

function searchByname() {
    let searchValue = document.getElementById("searchName&City").value;
    let newdata = employees.filter(function (employee) {
        return (employee.name.indexOf(searchValue) != -1) ||
            (employee.city.indexOf(searchValue) != -1);
    })
    display(newdata);
}

function searchBycity() {
    let searchValue = document.getElementById("searchName&City").value;
    let newdata = employees.filter(function (employee) {
        return employee.city.indexOf(searchValue) != -1;
    })
    display(newdata);
}

function deleteSuperhero(index) {
    employees.splice(index, 1);
    display(employees);

}

// let updateIndex;

// function copysuperhero(index) {
//     updateIndex = index;
//     console.log(updateIndex);
//     let employee = employees[index];
//     document.getElementById("upname").value = employee.name;
//     document.getElementById("upage").value = employee.age;
//     document.getElementById("upplanet").value = employee.city;
//     document.getElementById("upheight").value = employee.salary;
// }

// function updateSuperhero(event) {
//     event.preventDefault();
//     let superhero = superheros[updateIndex];
//     // preventdefault means stops refreshing
//     let name = document.getElementById("upname").value;
//     let age = document.getElementById("upage").value;
//     let planet = document.getElementById("upplanet").value;
//     let height = document.getElementById("upheight").value;

//     employee.name = name;
//     employee.age = Number(age);
//     employee.planet = city;
//     employee.height = salary;


//     display(employees);
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