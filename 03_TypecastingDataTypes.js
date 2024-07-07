let name = "santhosha_K"
let age = 24
let b = true

//use can use type of in two methods
console.log(typeof name);
console.log(typeof(name));

//Converting String to other datatype
//Number
let nameInNumber = Number(name)//conversion fails becouse string can not be converted to int number and give the outpur as NaN
console.log(nameInNumber) //Nan
console.log(typeof nameInNumber)

//Boolean
let nameInboolean = Boolean(name);
console.log(nameInboolean);
console.log(typeof nameInboolean)
console.log("\n\n")

//Notes
// number => number
// String => NaN
// true = > 1 false => 0


//Converting to boolean from other datatype

console.log(Boolean(name))//true
console.log(Boolean(NaN))//false
console.log(Boolean(""))//false - empty string is false in boolean
let num2str = Number(age) //convert and return string value
console.log(num2str + " - typecasted to string value"); // 24
console.log(typeof num2str)
console.log(Number(b))
console.log(Boolean(undefined) + "\n\n")


// Notes
// notEntryString => true, empty => false
// 0 => false, >0 => true
// NaN => false
// undefined => false

// Converting to Number form other datatype
console.log(Number(name)) //Convert and return in string 
// console.log(typeof String(age))
console.log("\n\n")



//Operation in java
console.log(20 + "20");
console.log(20 + "20"); // Outputs: "2020"
// Why "2020"?
// The + operator in JavaScript behaves differently depending on the types of its operands:
// If both operands are numbers, it performs addition.
// If at least one operand is a string, it performs concatenation.
// In this case, since "20" is a string, JavaScript converts 20 to "20" and concatenates it with "20", resulting in "2020".


console.log(10 + 20 + "30"); // Outputs: "3030" here 10 and 20 are numbers so this perform addision so 30 will be give after 30+"30" cancatinate so output is 3030
console.log("10" + 20 + 30); // Outputs: "102030"
