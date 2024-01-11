const myObject = {
    js: "javascript",
    cpp: "C++",
    py: "python",
    swift: "swift"
}

for (const key in myObject) {
    // console.log(`${key} for ${myObject[key]}`);
}

const arr = [1, 2, 3, 4, 5]

for (const key in arr) {
    // console.log(arr[key]);
}

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")

// for (const key in map) {
//     console.log(key);
// }
// map is not iteratable 