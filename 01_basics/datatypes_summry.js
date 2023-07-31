//Primitive data types

// string,number,boolean,null,undefined,bigint,symbol

const id = Symbol('123')
const anotherId = Symbol('123')
//when we do make log the answer is not same
//console.log(id === anotherId); answer is false.


// Reference (non- primitive)

//Array, Objects, Functions

//example of arry:-
const heros = ['Hanuman','shaktiman','superman','spiderman']

//objects

const muObj ={
    name: "Manish",
    age: 24,
}

//functions:-

const myFucntion = function(){
    console.log("hello world")
}