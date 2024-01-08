// Primitive 

// 7 Types : String, Number, Boolean, null(empty), 
// undefined, symbol, BigInt


const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId); //false -- not same

// Reference (Non Primitive)

// Array, Objects, Functions

const heros = ["teesha2", "teesha1", "teesha3"]
let myObj = {
    name: "teesha",
    age: 22,
}

const myFunction = function(){
    console.log("Hello World");
}
// console.log(myObj)

// ++++++++++

// Stack--> Primitive 
// Heap --> Non-primitive 

let myName = "Teesha"

let anotherName = myName
anotherName = "tisha"

console.log(myName);
console.log(anotherName);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "teesha@google.com"
console.log(userOne.email);
console.log(userTwo.email);