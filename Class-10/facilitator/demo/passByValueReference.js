// Pass by Reference:
let person = {
	name: "John Doe",
	age: 27,
	gender: "male"
}

let newPerson = person;

newPerson.name = "Jane Doe" // "Tom Doe"
console.log(newPerson)
//{name: "Jane Doe", age: 27, gender: "male"}
console.log(person)
// {name: "Jane Doe", age: 27, gender: "male"}


// Pass by Reference Example2:
let workDays = ["Sunday", "Monday", "Tuesday"]

let newDays = workDays
// We will add a new work day to the array.
newDays.push("Wednesday")
console.log(newDays)
//["Sunday", "Monday", "Tuesday", "Wednesday"]
console.log(workDays)
//["Sunday", "Monday", "Tuesday", "Wednesday"]

// Pass by value:
let greeting = "Hello";

let newGreeting = "Hello From Jordan";

console.log(greeting); // "Hello"

console.log(newGreeting); // 
