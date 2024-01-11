// const coding = ["js", "ruby", "java", "python"]

// // coding.forEach( function (val){
// //     console.log(val);
// // })

// // coding.forEach(  (item) => {
// //     console.log(item);
// // })

// // function printMe(item){
// //     console.log(item);
// // }

// // coding.forEach(printMe)

// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr);
// })

// const coding = ["js","ruby","java", "python"]

// const values = coding.forEach( (item) => {
//     console.log(item);
// })

// console.log(values);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const newNums = myNums.filter( (num) => num > 5 )

const newNums = []

myNums.forEach( (num) => {
    if(num > 4){
        newNums.push(num)
    }
})
console.log(newNums);
