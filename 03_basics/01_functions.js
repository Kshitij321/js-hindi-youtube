
function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName()                          (function name is a reference but with paranthesis is function calling)
                                        // (values in function definition is called parameters and with calling is called arguments)

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }





function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);


function loginUserMessage(username = "sam"){
    if(!username){                                              //(it means if username is undefined)
        console.log("PLease enter a username"); 
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))                        (when we dont pass any argument then we get undefined there NOT "null")
// console.log(loginUserMessage("hitesh"))











// REST PARAM------------------------------------------------------------------------------------------------------

function calculateCartPrice(val1, val2, ...num1){                             //(Suppose we want to give more arguments but we only defined one param
                                                                              // so we use rest operator "..." to put any number of arguments in it  
                                                                              // REST and spread both has same syntax but depends on usecase
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))                      (200,400 goes in val1,val2  and rest goes in num1)






const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){                              //(We must check here data type and if object's key value exist? [advantage of typescript]
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({                                                 //(direct call function with object definition)
    username: "sam",
    price: 399
})







const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));
