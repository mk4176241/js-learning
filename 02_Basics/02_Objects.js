//OBJECT LITERALS:-

const mysym = Symbol()

const jsuser = {
    Name : "Manish",
    [mysym]: "xyz",
    Age : 24,
    Location: "Delhi",                  // how to create object
    email: "manish@google.com",
    isLoggedIn: false,
    LastLogin: ["Monday","saturday"]
}

//how to access object:-
//there is two different mehtods to access objects:-
//1 is:-
//console.log(jsuser.Name)
//second is:_
//console.log(jsuser["Name"]) // this method name is square notation:-

//replce a value in objects

jsuser.email = "Manishyadav@yahoo.in"
//console.log(jsuser.email)

//FREEZE THE VALUE:-

Object.freeze(jsuser) // for no make changes 
jsuser.email = "Manishyadav@posify.in"
console.log(jsuser)


//if you want to add a symbol as a property in object:-
//first declare a symbol:_

//  const mysym = Symbol()

// const user = {
//     n1: "maanish",
//     [mysym]:"Manish", // it is a synbol in a object as a property
//     age: 23
// }

// console.log(user[mysym])



