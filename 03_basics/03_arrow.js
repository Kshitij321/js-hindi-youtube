const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);                   //(Here "this" refer to current object,which is being currently used)
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()










//IMP---------------------------------------------------------------------------------------------------------------------------
// console.log(this);                                                         //"this" in node environment refers to empty object {}
                                                                              //"this" in browser environment refers to window object 

// function chai(){                                                          //Here "this" prints undefined(means we cant use it here
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "hitesh"                                                  //Here "this" prints undefined(means we cant use it here
//     console.log(this.username);
// }

const chai =  () => {
    let username = "hitesh"                                                    //Here we get empty object {}(ARROW FUNCTION)
    console.log(this);
}


// chai()









//EXPLICIT VS IMPLICIT RETURN-------------------------------------------------------------------------------------------------------
// const addTwo = (num1, num2) => {                     
//     return num1 + num2                                                    (Explicit return)
// }

// const addTwo = (num1, num2) =>  num1 + num2                               (Implicit return)

// const addTwo = (num1, num2) => ( num1 + num2 )                           (Implicit return)

const addTwo = (num1, num2) => ({username: "hitesh"})                       //(we must return an object when wrapped in brackets "()")


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()
