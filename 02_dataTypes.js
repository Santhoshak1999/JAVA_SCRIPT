// "use strict"; treat all JS code as newer version

// alert(3+3) This will not give a alert notification becouse we are using nodejs


// ECMA - European Computer Manufacturers Association
// /This is a standard published by Ecma International. It contains the specification for a general purpose scripting language.

// Data Types
let name = "Santhosha K"
let age = 18
let isLoggedIn = false
let Mysymbol = Symbol("santhoshak");
console.table([name, age, isLoggedIn, Mysymbol]);

//number => updo 2^53
// double = > more that 2^53
// String => true/false
// null => Standalone Value
// Undefined => value not assigned
// Symbol => 

//use "typeof" keyword to know the type of varible
console.table([typeof name, typeof "Santhosh", typeof age, typeof isLoggedIn, typeof Mysymbol, typeof null]);
console.log("In the above table it shows typeof null is an object")