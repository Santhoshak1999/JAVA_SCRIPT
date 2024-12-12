/*Working With Coercion
In this exercise, you will define some validation functions 
that check user inputs (such as from DOM elements).
You'll need to properly handle the coercions of the various
value types.

#Instructions
------------
Define an isValidName(..) validator that takes one parameter, name. 
The validator returns true if all the following match the parameter
(false otherwise):
        Must be a string
        Must be non-empty
        Must contain non-whitespace of at least 3 characters

Define an hoursAttended(..) validator that takes two parameters,
attended and length. The validator returns true if all the 
following match the two parameters (false otherwise):
        Either parameter may only be a string or number
        Both parameters should be treated as numbers
        Both numbers must be 0 or higher
*/

function isValidName(name){
    //name.trim().length -> will count spaces between characters in the string.
    if(typeof name == "string" && name.trim().length > 3) {
        return true;
    }
    return false;

}

function hoursAttended(attended,length){
    if(typeof attended == "string" && attended.trim() != ""){
        attended = Number(attended);
    }
    if(typeof length == "string" && length.trim() != ""){
        length = Number(length);
    }
    if(attended == "number"
        && length == "number" 
        && attended >= 0
        && length >= 0
        && Number.isInteger(attended)
        && Number.isInteger(length)
        && attended <= length
    ){
        return true;
    }
    return false;
}

console.log(isValidName("Frank") === true);
console.log(hoursAttended(6,10) === true);
console.log(hoursAttended(6,"10") === true);
console.log(hoursAttended("6",10) === true);
console.log(hoursAttended("6","10") === true);

console.log(isValidName(false) === false);
console.log(isValidName(null) === false);
console.log(isValidName(undefined) === false);
console.log(isValidName("") === false);
console.log(isValidName("  \t\n") === false);
console.log(isValidName("X") === false);
console.log(hoursAttended("",6) === false);
console.log(hoursAttended(6,"") === false);
console.log(hoursAttended("","") === false);
console.log(hoursAttended("foo",6) === false);
console.log(hoursAttended(6,"foo") === false);
console.log(hoursAttended("foo","bar") === false);
console.log(hoursAttended(null,null) === false);
console.log(hoursAttended(null,undefined) === false);
console.log(hoursAttended(undefined,null) === false);
console.log(hoursAttended(undefined,undefined) === false);
console.log(hoursAttended(false,false) === false);
console.log(hoursAttended(false,true) === false);
console.log(hoursAttended(true,false) === false);
console.log(hoursAttended(true,true) === false);
console.log(hoursAttended(10,6) === false);
console.log(hoursAttended(10,"6") === false);
console.log(hoursAttended("10",6) === false);
console.log(hoursAttended("10","6") === false);
console.log(hoursAttended(6,10.1) === false);
console.log(hoursAttended(6.1,10) === false);
console.log(hoursAttended(6,"10.1") === false);
console.log(hoursAttended("6.1",10) === false);
console.log(hoursAttended("6.1","10.1") === false);
