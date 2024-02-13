//#8

class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){                                           //static methods are methods which are of class and not for an instance of class
        return `123`                                             // hence they can only be called using class name 
    }
}

const hitesh = new User("hitesh")
// console.log(hitesh.createId())







class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
console.log(iphone.createId());
