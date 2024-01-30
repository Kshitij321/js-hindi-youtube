// Immediately Invoked Function Expressions (IIFE) (Means declaration and calling is same)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();



( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')              //parameter passed in this in last bracket


//V.V.I-->  when we write two IIFE we use semicolon between them to avoid error (see above)

