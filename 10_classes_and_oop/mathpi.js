//#10


const descripter = Object.getOwnPropertyDescriptor(Math, "PI")                //this tells about properties of the "property" of the object,whether they are iterable,enumerable etc

// console.log(descripter);

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("chai nhi bni");
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, 'name', {                               //"Object.defineProperty" is used to change the property of the properties of objects
    //writable: false,                                              //sometimes we dont want that some people acces to do something with the our objects so we can change their properties
                                                                    // like "enumerable"(not loopable) and writable(not changeable)
    enumerable: true,
    
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        
        console.log(`${key} : ${value}`);
    }
}
