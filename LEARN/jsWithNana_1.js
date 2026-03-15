let name = "Mugabo Andre";
let Age = "42";
let school = {
    "primary": "APE Rugunga",
    "secondary": "Ecole secondaire scientifique Islamique",
    "University": "Kist"
}
let totalPrice = 19

if(totalPrice >= 20){
    console.log("free shipping")
} else{
    console.log("you will be charged of shipping")
}

console.log("school", school.primary);



function shippingCost(totalPrice){
    if(totalPrice <= 10){
        shippingCost = 5;
    } else if (totalPrice <= 20){
        shippingCost = 3;
    } else {
        shippingCost = 0;
    }

    console.log(`shippingCost: ${shippingCost}`);
}

shippingCost(totalPrice);

const printName = (name) => console.log(name);

printName("Mugabo Andre");