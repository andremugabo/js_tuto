//Loops
var names = [
    "Alex",
    "Jamilla",
    "Joe",
    "Aisha",
    "Bob"
]


for (var  i = 0; i <= 10; i++){
    console.log(i)
    if (i == 5){
        break;
    }
}
  
console.log("\n")


console.log("i\n")
      
for (var i = 0; i < names.length; i++){
    console.log(names[i]);
}


console.log("\n")



console.log("for of \n");

for (const name of names) {
    console.log(name)
}

console.log("\n")

console.log(" foreach \n");

names.forEach(function(name){
    console.log(name);
})