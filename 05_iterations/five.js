//FOR EACH LOOP-----------------------------------------------------------------------------------------------------
//(This loop is most used with arrays)
const coding = ["js", "ruby", "java", "python", "cpp"]

//For each loop takes callback function as argument (function to execute for each element of array and without name)

// coding.forEach( function (val){                               //(way to call foreach)
//     console.log(val);
// } )

// coding.forEach( (item) => {                                  //(arrow function way to call foreach)
//     console.log(item);
// } )

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)                                       //(directly passing a funcion(callback) written anywhere)

// coding.forEach( (item, index, arr)=> {                        //(item gives value,index gives index and arr gives complete array)
//     console.log(item, index, arr);
// } )










//Traversing the array of objects with for each loop)
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )
