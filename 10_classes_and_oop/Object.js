//#2

function multipleBy5(num){

    return num*5
}



//NOTES---------------------------------------------------------------------------------------------------------
//javascript has prototypal inheritance
// js keeps on accessing upper level till it gets null, after object it gets null 
// everything in js is a object, even function,string array means everthing has its own property but we can make everything in js work as objects


multipleBy5.power = 2       //(dot access just like objects)

console.log(multipleBy5(5));
console.log(multipleBy5.power);
console.log(multipleBy5.prototype);

function createUser(username, score){
    this.username = username
    this.score = score
}





// we can inject a property in the prototype as "increment" which holds the function just as other default functions
createUser.prototype.increment = function(){
    this.score++
}
createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`);
}

const chai = new createUser("chai", 25)             //correct approach ,when we use new keyword it binds the prototype and newly created function to the object methods 
const tea = createUser("tea", 250)                  // here the newly created function is not bind to the object

chai.printMe()


/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/
