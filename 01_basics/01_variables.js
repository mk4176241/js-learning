const accountId = 144553
let accountEmail = "manish@gmail.com"
var accountPassword = "12345"
accountCity = "delhi"

// accountId = "121212" const is not allowed assignment 


accountEmail = "yadav@yahoo.com"
accountPassword = "0101010"
accountCity = "Mumbai"

/*
Prefer not to use var
beacuse of issue in block scope and fucntional scope
*/

// there is a new keywords to get all variables in a console print.
console.table([accountId, accountEmail, accountPassword, accountCity])