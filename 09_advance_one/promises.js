const promiseOne = new Promise(function(resolve, reject){                                      //one way to create a promise
    //Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is compelete');                
        resolve()                                                                             // we have to call resolve so that it is called
    }, 1000)
})

promiseOne.then(function(){                                                                   //we consume a promise by .then 
    console.log("Promise consumed");                                                          //then is connected with resolve
})






new Promise(function(resolve, reject){                                                                   //directly created promise without storing in variable
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)

}).then(function(){                                                                                     //directly using .then
    console.log("Async 2 resolved");
})







const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Chai", email: "chai@example.com"})
    }, 1000)
})

promiseThree.then(function(user){                                                                   //to access data from the resolved promise(we can name anything)
    console.log(user);
})










const promiseFour = new Promise(function(resolve, reject){                                             //use of reject also when to reject
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "hitesh", password: "123"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

 promiseFour                                                      //.then is connected to resolve, again .then is chained to access data returned by above promise
                                                                  //.catch is called when promise is rejected and finally always runs 
 .then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))













const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});

async function consumePromiseFive(){                                     //we can also use async await to handle promises,not only .this,.catch,.finally is used
    try {
        const response = await promiseFive                               //we have to await the async task
        console.log(response);                                           //problem with async await, it doesnt handle errors,means it always assume promise is being resolved
    } catch (error) {                                                    //so we have to use try catch method to catch errors
        console.log(error);
    }
}

consumePromiseFive()






// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()







fetch('https://api.github.com/users/hiteshchoudhary')                  //IMP- when promise returns eror-404 or else ,so from where it will come either via resolve or reject, it will come in response 
                                                                       //it will come from reject, only when api call is not able to make
                                                                       //fetch has a high priority queue hence code with fetch runs first than an other api calls
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// promise.all
// yes this is also available, kuch reading aap b kro.
