// 1. In the events false-> Bubbling and true-> capturing 
// 2. let x=3;
//    const y = x++;
   
//    let a = 3;
//   const b = ++a;
// 3. What is the datatype of Array and Date.
// 4. What is the difference between the primitive and non-primitive data types and 
//    in which kind of memory it is stored. 
// 5. Difference between scope and global scope.
//    What is implicit and explicit?
//    Can we make a loop in HTMLCollections?








// Ans :-
// 1. In the events false-> Bubbling and true-> capturing 
// bubbling travels from the target to the root, and capturing travels 
// from the root to the target. 
// 2. let x=3;
//    const y = x++; //output: x=4, y=3
   
//    let a = 3;
    //   const b = ++a; // output: a=4, b=4

// 3. What is the datatype of Array -> Object.apply
//    Data type of Date.--> Object 

// 4. Primitive -> Stack(Just a copy of a variable.), Non-primitive -> Heap (Same reference)
// 5. Month starts with zero in array 
// Scope and global scope is different for the browser and node.
// Trying to access before is hoisting.
// implicit --> no return()
// explicit --> return{}
// forof not works for objects
// maps are not iteratable.
// No you cannot make a for loop in the HTMLCollection and that's why 
// you first need to conver that into the Array using Array.from----