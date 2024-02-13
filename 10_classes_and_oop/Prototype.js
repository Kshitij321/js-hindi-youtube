//#3

// let myName = "hitesh     "
// let mychannel = "chai     "

// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.hitesh = function(){                                                        //we injected the hitesh function in the object hence all objects 
    console.log(`hitesh is present in all objects`);                                         //like array,objects etc. will have access to this function
}

Array.prototype.heyHitesh = function(){
    console.log(`Hitesh says hello`);
}

// heroPower.hitesh()
// myHeros.hitesh()
// myHeros.heyHitesh()
// heroPower.heyHitesh()






// inheritance



const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',                       //we use __proto__ to link 2 objects together or to make one object inherit properties of other object
    fullTime: true,                                        //This is old style code ,now we do this with ".prototype" just as seen before
    __proto__: TeachingSupport                             // "TASupport" has access to all properties of "TeachingSupport"
}

Teacher.__proto__ = User                                   // we can give access to properties to in this way also outside

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)            //NEW way

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){                  // inecting new method "trueLength" in String
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()
