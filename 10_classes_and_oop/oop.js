const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }

}





function User(username, loginCount, isLoggedIn){
    this.username = username;                                  //whichever object calls it thats variable is "this.username" and "username" is the variable passed onto the function
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this
}

const userOne = new User("hitesh", 12, true)                  //this way of creating objects from one another is very bad as last one overwrites the previous one hence we use 'new' keyword 
const userTwo = new User("ChaiAurCode", 11, false)            //since "new"  creates new instance every time
console.log(userOne.constructor);
//console.log(userTwo);
