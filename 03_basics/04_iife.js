// Immediately invoked function expressions (IIFE)

(function chai(){
    // name IIFE
    console.log(`DB CONNECTED`);
}) ();

( (name) => {
    console.log(`DB Connected TWo ${name}`);
}) ('teesha')