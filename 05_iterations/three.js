// for of

// ["", "", ""]                        (array of strings)
// [{}, {}, {}]                        (array of objects)





//for of loop-------------------------------------------------------------------------------------------------------------------------------

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {                //(for of loop)
    //console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}










// Maps----------------------------------------------------------------------------------------------------------

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


// console.log(map);

for (const [key, value] of map) {                                       //(Traversing map) (FOR OF LOOP)
    // console.log(key, ':-', value);
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }
