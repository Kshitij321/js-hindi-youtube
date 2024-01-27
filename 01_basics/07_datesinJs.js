// Dates
//Learn about dates definition in MDN
let myDate = new Date()
// All below code gives different types of dates and times
//myDate prints millisecond value from a fixed date(See MDN), also for time , so we need to convert them in different formats for readbility
//but to compare dates and times we do it in milliseconds

// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);


// We can create or print our own date in following ways--
// NOTE- Month start from 0 (january)

// let myCreatedDate = new Date(2023, 0, 23)  [Y-MM-DD]
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14") [YY-MM-DD]
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime()); [to get exact millisecond value from that date(MDN) to our defined date]
// console.log(Math.floor(Date.now()/1000)); [curr value of second from that date (MDN)(IMP)]

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {   // If we want to change default behaviour of the toLocaleString() function
    weekday: "long",    // mon->monday
    
})

