const { coffee } = require("transformers");

const user = {
    username: "Teesha",
    price: 1000,

    welcomeMessage: function(){
        console.log(`${this.username}, Welcome to website.`);
        // console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this); //node environemnt --> empty --> this is reffering empty because ther is nothing in global 

// function chai(){
//     let username = "Teesha"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "Teesha"
//     console.log(this.username);

// }
// chai()

const chai = () => {
    let username = "Teesha"
    // console.log(this.username);
}
// chai()

// () => {}

// const addTwo = (num1, num2) => {
//     return num1 + num2
// } //arrow function 

// const addTwo = (num1, num2) => num1 + num2 //implicit 

// const addTwo = (num1, num2) => ( num1 + num2 )
// const addTwo = (num1, num2) => ({username: "Teesha"})