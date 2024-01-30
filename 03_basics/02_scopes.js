//var c = 300                        (we cant declare variables with "var" as when variable defined with var works as global variable)
                                     //(global and local scope is different in node environment and browser)
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c);













// BASICS ONLY..................................................
function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);









// ++++++++++++++++++ interesting ++++++++++++++++++

// Two ways to declare variable
console.log(addone(5))              //(If function declared without variable then we can call it even from before declaration)

function addone(num){
    return num + 1
}



addTwo(5)                          //(if we declare function with variable then we cant call it before its declaration)
const addTwo = function(num){
    return num + 2
}
