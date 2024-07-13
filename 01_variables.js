/*
let, var and const -> variable declarations or variable declaration keywords

use to  define the scope of variable 
and prevent accidental creation of global variables.*/
const accountId = 12345432178
let accoutholdername = "Santhosha K"
/*
Prefer not to use var
becouse of issue in block scope and functional scope
if(){
    This is a block scope;
}
*/
var accountPassword = "1234567"
branch = "davangere"

//TypeError: Assignment to constant variable.
// accountId = 1234

accoutholdername = "Girish - changed value"
accountPassword = "asdfjklj; - change value"

// Lets the variables declare with const
// Always use let or const to declare variables and avoid creating globals by mistake
//
branch = "bengalore"
console.log(accountId)
console.log(accoutholdername)
console.log(accountPassword)
console.log(branch)

/* Lets see that a variable withouth defining anthing in js

 */
let accountType

//you can use console.table method to print value 
// console.table()
// If data is an array, the (index) column will show array indices.
// If data is an object, it will show property names.
// Note: In Firefox, console.table is limited to 1000 rows.

console.table([accountId, accoutholdername, accountPassword, branch, accountType])
