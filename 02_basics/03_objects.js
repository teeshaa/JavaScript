// singleton

// object literals 
// Object.create -> Singleton // Constructor method

const mySym = Symbol("key1")

const JsUser = {
    name: "Teesha",
    "full name": "Teesha Ghevariya", 
    [mySym]: "mykey1",
    age: 20,
    location: "Surat",
    email: "tishaghevariya@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(typeof JsUser.mySym);
// console.log(JsUser[mySym]);
// console.log(typeof JsUser[mySym]);


JsUser.email = "tishaghevariya@microsoft.com"
// Object.freeze(JsUser)
// console.log(JsUser);
JsUser.email = "tishaghevariya@uber.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello js user ");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
console.log(JsUser.greeting);