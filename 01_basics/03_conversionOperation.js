
let score = null 
// when the put true=1 and false=0, undefined value is NaN,a nd null value is object.
// string is also showing NaN when convert to number from the string.


// find the type of the variables methods is typeof():-
console.log(typeof(score))


// convert the value from number to string and vice versa for the number:-Number()
let value = Number(score)
console.log(typeof(value))

// number to boolean:-

let isBooleanIn = 1
console.log(Boolean(isBooleanIn))

// aslo assign a value in varables like this:-

let booleanIsLoggedIn = Boolean(isBooleanIn)
console.log(booleanIsLoggedIn)

// boolean to number

let boolToNum = true
console.log(Number(boolToNum))

/*

1 => true
0 => false
"" => false
"Manish" => true   
*/



/***************************************OPERATIONS******************************* */

//when we first put the stirng then number, so the code is react as a string Like this:
console.log("1" +2+2); 
//but when put the number first the code react as a number first then string
console.log(2+2+"1");