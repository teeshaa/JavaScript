// const uberUser = new Object() //Singleton object 
const uberUser = {} //non-singleton object 

uberUser.id = "123abc"
uberUser.anme = "Sunny"
uberUser.isLoggedIn = false


// console.log(uberUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Teesha",
            lastname: "Ghevariya"

        }
    }
}

// console.log(regularUser.fullname.userfullname.lastname);

const obj1 = {1: "a", 2:"b"}
const obj2 = {3: "a", 4:"b"}

const obj3 = Object.assign(obj1, obj2)

// console.log(obj3);

const users = [
    {
        id: 1,
        email: "t@gmail.com"
    },
]

// users[1].email
// console.log(uberUser);

// console.log(Object.keys(uberUser));
// console.log(Object.values(uberUser));
// console.log(Object.entries(uberUser));

// console.log(uberUser.hasOwnProperty('isLoggedIn'));

const course = {
    coursename: "JS Course",
    price: "1000",
    courseInstructor: "Teesha Ghevariya"
}

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

const navbar = ({company}) => {

}

navbar(company = "Teesha")

// {
//     "name": "Teesha",
//     "coursename": "JS Course",
//     "price": "free"
// }
//JSON as object 

[
    {},
    {},
    {}
]
//JSON as Array