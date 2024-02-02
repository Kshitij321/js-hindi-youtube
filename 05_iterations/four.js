//(FOR IN LOOP)-----------------------------------------------------------------------------------

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}



for (const key in myObject) {                                                                   //(Traverse the object)
    //console.log(`${key} shortcut is for ${myObject[key]}`);
}



const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {                                             //(Traverse the array, it gives indexes when we print key and programming[key] gives actual value)
    //console.log(programming[key]);
}




// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {                                                     // (for in loop) does not work for map
//     console.log(key);
// }
