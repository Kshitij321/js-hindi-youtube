//#4

function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
}


//call method is used to call a method ,where we can pass an object to tell from which object this function will be called
// other paramas will be params given to the function (if function takes parameter)
// apply() method does same thing as call() just for the function parameters it takes values enclosed in "[]";

function createUser(username, email, password){
    SetUsername.call(this, username)
   
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")  //creating new object by calling a function
console.log(chai);
