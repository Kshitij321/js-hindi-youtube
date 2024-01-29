const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)          [moves dc_heroes as element in array]

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)            [Properly merges two arrays and returns new array]
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]          // Spread Operator (break the glass, each element becomes glass pieces)

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]] 

const real_another_array = another_array.flat(Infinity)        // To spread out alll elemenrs of the all different nesting and levels
// another_array=[1,2,3,4,5,6,7,6,7,4,5](OUTPUT)
console.log(real_another_array);



console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))                   // creates array from characters of string
console.log(Array.from({name: "hitesh"}))             // interesting,if it cant create array returns an empty array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));                  // to create array from variables
