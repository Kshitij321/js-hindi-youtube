// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]
const mixedArray= [1,2,3,4,true,false,"Hello","hi","Bye"]
// JS array copy operation create shallow copies(orignal and copy array both point to same orignal array,since array is a reference type)

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)   (To insert number at start of the array)
// myArr.shift()   (Removes number from start)

// console.log(myArr.includes(9));    (gives true or false)
// console.log(myArr.indexOf(3));  (gives negative if not present)

// const newArr = myArr.join()     (add all element into string with separator and return it)

// console.log(myArr);
// console.log( newArr);


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3) // (l,r) so 'r' not included && no change in orignal array

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3) //(l,r) so'r' included && change in orignal array 1 to 3 element removed from orignal array
console.log("C ", myArr);
console.log(myn2);
