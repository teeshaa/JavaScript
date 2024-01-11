// const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// // const newNums = myNumbers.map( (num) => num + 10)

// const newNums = myNumbers
//   .map((num) => num * 10)
//   .map((num) => num + 1)
//   .filter((num) => num >= 40);
// console.log(newNums);

// reduce

const myNums = [1, 2, 3];

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval:${currval}`);
//   return acc + currval;
// }, 0);

const myTotal = myNums.reduce((acc, curr)=> (acc + curr),0)

const shoppingCart = [
    {
        itemname: "JS Course",
        price: 2999
    },
    {
        itemname: "Python Course",
        price: 1999
    },
    {
        itemname: "Swift Course",
        price: 5000
    }
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + (item.price),0)
console.log(priceToPay);
// console.log(myTotal);
