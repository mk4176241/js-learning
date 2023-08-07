// // Array

const myArray = [0,1,2,3,4,5];
const my_Heros = ["Hanuman","Superman","Shaktiman","Spiderman","Ironman","Marvel"];

console.log(myArray[3]);


// // Array methods---

  myArr.push(5)  // add the new value in the last one
  myArr.pop()     // remove only one value in the last one

  myArr.unshift("Manish") // Add the value on the first position
  myArr.shift() // fort remove the value from the first position
  console.log(myArray.includes(9)) // knowing for the value is exist or not & answer is only for the boolean value.
  console.log(myArray.indexOf(9))  // in which position value is exist


  const newArray = myArray.join()
//  console.log(myArray)
//  console.log(newArray)
  console.log(typeof newArray)

// // SLICE & SPLICE---

 const myn1 = myArray.slice(1, 3) // slice working with index value if we put the index value of 1,3 it means slice 
 // find the value between 1 & 3(1 and 2 only not received the vlue of three).


 console.log(myn1)
 console.log("B ", myArray)
 const myn2 = myHeros.splice(1,3) // if we are put the find value of index 1,3(value of 1,2,3) and manupulate the real 
// //value.

// console.log(myn2)
// console.log(myHeros)

const marvelHeros = ["thor","ironman","spiderman"]
const dcHeros = ["superman","Flash","batman"]


 marvelHeros.push(dcHeros)// push is working existing array
 console.log(marvelHeros[3][1])

 const allHeros = marvelHeros.concat(dcHeros)//concat() is return  new length of array
 console.log(allHeros)

//SPREAD VALUE IS FOR ALTERNET VALUE OF CONCAT()

 const myHeros = [...marvelHeros, ...dcHeros,]//spread is alternate of concat() because spread has taken more than 2 values. 
 console.log(myHeros)
 console.log(typeof myHeros)

 const anotherArray = [1,2,3,[4,5,6,[4,5]]]//there is a situtation 
 const realValue = anotherArray.flat(Infinity)//there is a solution if merge more than 2 array in single array used flat()
 console.log(realValue)

 console.log(Array.from ("Manish")) //to convert as a Array.
console.log(Array.isArray("Manish")) // false answer

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3)) // this method to use create a array from the variables.




