//#11

// in js we use set ang get keyword for making getter and setter functions for a variable in class,both must be present not single,name should be same as variable

class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()                                //it returns the email even if inside it is written "_email" since function name is same
    }
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}hitesh`
    }

    set password(value){
        this._password = value
    }
}

const hitesh = new User("h@hitesh.ai", "abc")                       
//So, when you access hitesh.email, it invokes the getter method, 
//which returns this._email.toUpperCase(). Even though _email isn't directly defined in the class, it's accessible because it's implicitly created when you set this.email = 
//value in the setter method. This is how JavaScript handles getters and setters behind the scenes.
console.log(hitesh.email);
