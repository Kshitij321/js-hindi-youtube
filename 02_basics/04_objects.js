 const tinderUser = new Object()          // singleton object
const tinderUser = {}                     // non singleton object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {                      //   (object in object nesting)
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}






 console.log(regularUser.fullname?.userfullname.firstname);         //(question mark to check if object exist? then only access)





//MERGE OBJECTS--------------------------------------------------------------------------------------------
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }                                      (object in object problem same as array)
// const obj3 = Object.assign({}, obj1, obj2, obj4)                 (to merge all objects together in one , see the "{}"  this is optional we assume braces as target andall other objects as source)

const obj3 = {...obj1, ...obj2}                               // simple approach to merge objects spread operator
// console.log(obj3);







// IMP FUNCTIONS OF OBJECT-----------------------------------------------------------------------------------
// Data comes from database as array of objects below
const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// to get keys,values,entries  (one key value as an array) as an array 

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));                     (To ask if object has any property?)







//OBJECT DESTRUCTURING------------------------------------------------------------------

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor                     

const {courseInstructor: instructor} = course                      //(destructuring the object, means taking out value)
                                                                  //(since, we dont want to write course.courseinstructor to acces key values)
                                                                  //(We can give it as any name we like in above we can call "instructor")

// console.log(courseInstructor);
console.log(instructor);








//JSON--------------------------------------------------------------
// (This is how we get response from APIS, in object form or array form)

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]

