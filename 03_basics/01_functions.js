function sayMyName(){
    console.log("T");
    console.log("E");
    console.log("E");
    console.log("S");
    console.log("H");
    console.log("A");    
}

// sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result
    return number1 + number2
    // console.log("Teesha"); // nothing will execute after the return 
}

const result = addTwoNumbers(2, 2)

// console.log("Result:",result);

function loginUserMessage(username = "Teesha"){
    if (username === undefined) {
        console.log("Please enter a username.");
        return
        
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage());

function calculateCartPrice(...num1){
    return num1
}

// console.log(calculateCartPrice(200,100,25,100));

const user = {
    username: "Teesha",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and Price is ${anyobject.price}`);
}

// handleObject(user)

handleObject({
    username: "Teeshaa",
    price: 19999
})

const myNewArray = [100,200,500,400,555]

function returnSecondValue(getArray){
    return getArray[4]
}

console.log(returnSecondValue(myNewArray));