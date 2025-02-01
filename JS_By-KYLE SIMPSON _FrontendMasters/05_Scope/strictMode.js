//By default js engine has non-stric mode

"use strict"; //enable strict mode

// What is Strict Mode ?
// Strict Mode is a feature in javascript 
// that allows you to place a program, 
// or a function, in a "strict" operating constext.

// This strict context prevents certain 
// actions from being taken and throws more exceptions

// Here are some key reasons to use Strict Mode:

// 1. Catches Common Coding Mistakes
// ---------------------------------

// x = 10; //ReferenceError: x is not defined

// 2. Eliminates Silent Errors
// ---------------------------
// NaN = 5; //Some errors in JavaScript fail silently in non-strict mode.
// console.log(NaN);

// 3. Improves Security:
// ---------------------
// Prevents the use of this in the
// global scope (in non-strict mode, 
// this refers to the global object, 
// which can lead to security issues).
function test(){
    console.log(this);// 'this' is undefined in strict mode
}
test();