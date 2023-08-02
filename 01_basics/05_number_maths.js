// Number:-

const num = 100 // the JS is auto defined the dat type of number but here is some extr methods to use it:-

const score = new Number(100) // the new object is defined the data type:-
console.log(score); // the answer is:- [Number: 100]

/*

constructor: ƒ Number()
toExponential: ƒ toExponential()
toFixed: ƒ toFixed()
toLocaleString: ƒ toLocaleString()
toPrecision: ƒ toPrecision()
toString: ƒ toString()
valueOf: ƒ valueOf()

*/

console.log(score.toString().length) // toSring method to use convert the data types

console.log(score.toFixed(1)) // toFixed method to use how many digits wants to after decimal.

const othernumber = 129.3878
console.log(othernumber.toPrecision(4)) // to use for the round off;-

const hundreds = 1000000
console.log(hundreds.toLocaleString())// to use the comma for the us standard
console.log(hundreds.toLocaleString('en-IN')) // for the Indian number system.


//*****************************************MATHS************************************ */

console.log(Math) 
console.log(Math.abs(-4)) // for the convert positive value from the negetive and positive value does not change.
console.log(Math.round(2.6)) // fir the use only rounf off the value. 
console.log(Math.ceil(2.3)) // same works like the round off but if put the any positive value after the decimal it is showing before decimal answer.
console.log(Math.floor(2.9)) // if the put 0-9 fter the decimal it is showing answer before the decemal.
console.log(Math.min(4,2,9,4,6))// for the find which number is minimum.

console.log(Math.random())
console.log(Math.random()*10 +1) // *10 means number shift instead of zero and +1 is for avoiding 0. it is showing 1.7899 to 9.4898.
console.log(Math.floor(Math.random()*10) + 1) 

//some extra example:-
const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max-min + 1))+ min)

