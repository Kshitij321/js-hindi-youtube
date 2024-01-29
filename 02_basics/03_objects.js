//There are 2 ways to create objects in js
// singleton
// 1. Object.create      (here objects created is singleton)[creating objects with constructor]

// 2. object literals    (here object created is not singleton)

const mySym = Symbol("key1")

// Object literal method to create object     [Key-value pair]
const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",
    //mysym: "mykey1",         (WRONG method to use symbol as a key)
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// Two ways to access objects

// 1.console.log(JsUser.email)
// 2.console.log(JsUser["email"])



// console.log(JsUser["full name"])        (VERY IMP)  (we cant access "fullname" key using 1st method hence only with 2nd method)





// see above how symbol is used as a key in object with "[]" brackets,cant use symbol normally(check type of)
// console.log(JsUser[mySym])





JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)                         (so that no one can change any value)
JsUser.email = "hitesh@microsoft.com"            //   ( value not changed)
// console.log(JsUser);

JsUser.greeting = function(){                    // (adding function to the object)
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
