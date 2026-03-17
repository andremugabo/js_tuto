// a collection of properties

var person = { 
    firstName : "Jamila",
    age : 21, 
    isFemale: true, 
    balance: 1000.32, 
    dob: new Date(2000, 1, 28).toJSON(), 
    address: {
    city: "London",
    postCode: "SW9"
} }

console.log(person)
console.log(person.address.city);
console.log(Object.values(person))
console.log(Object.keys(person));
console.log("==============================")
console.log(JSON.stringify(person))