const mustang = {
    color: "Midnight Blue",
    year: 1976,
    length: 120,
    width: 62,
    height: 47
}

// You have already learned how to access object properties with dot notation and square bracket notation. So if you wanted to get the color of your Mustang, you could write any of the following code.

// Dot notation
console.log(mustang.color)

// Square bracket notation
console.log(mustang["color"])

// Dynamic square bracket notation
const colorProperty = "color"
console.log(mustang[colorProperty])


// Now you're going to learn how to work with all of the keys and values. You are tasked with taking an array of objects, and displaying all of the values in each one. For example, you work for a car dealership and the manager, Randall, wants to have a report that quickly shows the details of each car. Here's your array of cars.

const allCars = [
    {
        model: "Mustang",
        color: "Midnight Blue",
        year: 1976,
        length: 120,
        width: 62,
        height: 47
    },
    {
        model: "Xterra",
        color: "Forest Green",
        year: 2011,
        length: 144,
        width: 71,
        height: 55
    },
    {
        model: "Thunderbird",
        color: "Red",
        year: 2005,
        length: 115,
        width: 58,
        height: 42
    },
    {
        model: "Suburban",
        color: "Grey",
        year: 2015,
        length: 149,
        width: 73,
        height: 58
    }
]

// Since you just need the values of each object, you can use the Object.values() method. Here is how you would start.

// Iterate the array of cars with forEach().
// Use Object.values() to iterate the values of each car.

//For this to work, you will need an HTML element in your index.html with an id of app. Then you will use a for..of loop to display all the values.

const outputElement = document.querySelector("#app")

// Iterate the array of cars. Individual objects stored in `car`.
allCars.forEach(car => {

    // Iterate all of the values of the current car
    
    for (const value of Object.values(car)) {
      outputElement.innerHTML += `<div>${value}</div>`
    }
    outputElement.innerHTML += `<br>`
})



// Lightning Exercise 1: Create an object that represents a bill from your doctor's office. It should have the following properties: officeName, streetAddress, doctorName, patientName, visitDate, amountBilled, dueDate. You provide example values for each one.

const dateVisited = "visitDate"
const owed = "amountBilled"
const patient = "patientName"

const doctorBill = {
    officeName:"Buzz Orthodontics",
    streetAddress:"4565 Buzz Ave",
    doctorName:"Dr. Buzz",
    patientName:"Gideon Gallegos",
    visitDate:"June 1, 2019",
    amountBilled:"$400.00",
    dueDate:"July 1, 2019"
}

// Lightning Exercise 2: Copy the code below and paste it above your object.

// const dateVisited = "visitDate"
// const owed = "amountBilled"
// const patient = "patientName"

// Use square bracket notation to output the value of those three properties to the console in Chrome.

console.log(doctorBill[dateVisited])
console.log(doctorBill[owed])
console.log(doctorBill[patient])

// Dynamic square bracket notation
// const colorProperty = "color"
// console.log(mustang[colorProperty])

// Lightning Exercise 3: Use Object.values() to output all the property values to the console in Chrome.

const allDoctorBillValues = Object.values(doctorBill)

console.log(allDoctorBillValues)


// For Of with Object.keys()
// At this point, you proudly show Randall the results of your hard work, and as usual, changes are immediately requested.

// Randall: "Ok this is good, but those numbers listed there aren't helpful unless I know what they mean. Like, is that the horsepower, engine size, and wheel base? Can you fix that?"

// Of course you can! It's time for you to list all of the properties at the top of the page so that Randall knows the labels for all of the values on each of the objects.

/*
    Just get a reference to the first object since
    they all have the same properties
*/
const firstCar = allCars[0]

// Now iterate its keys
outputElement.innerHTML += "<h1>Properties</h1>"
for (const key of Object.keys(firstCar)) {
  outputElement.innerHTML += `<div>${key}</div>`
}

// Iterate the array of cars. Individual objects stored in `car`.
outputElement.innerHTML += "<h1>Car List</h1>"
allCars.forEach(car => {

    // Iterate all of the values of the current car
    for (const value of Object.values(car)) {
      outputElement.innerHTML += `<div>${value}</div>`
    }
    outputElement.innerHTML += `<br>`
})

// Lightning Exercises
// Lightning Exercise 1: Output all of the key names from your doctor's office bill to the console in Chrome.
const doctorBillKeys = Object.keys(doctorBill)
console.log(doctorBillKeys);

// Lightning Exercise 2: Output all of the key names from your doctor's office bill to the DOM inside a parent <section> element. Wrap each one in a <span> element.

const keysforDocBill = doctorBillKeys[0]

outputElement.innerHTML += "<section>Key names</section>"
for(const key of Object.keys(keysforDocBill)) {
    outputElement.innerHTML += `<span>${key}</span>`
}

outputElement.innerHTML += "<section>text</section>"
doctorBillKeys.forEach(doctorBill => {

    for (const value of Object.keys(doctorBill)) {
        outputElement.innerHTML += `<span>${value}</span>`
    }
})

