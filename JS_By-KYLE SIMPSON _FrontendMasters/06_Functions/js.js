// You all know functions Right ?
// Then what is Expression in front of it ?

// Expression ? SomeThing new word right ? lets understand whats that

a =  5 + 1; //The evaluation of 5+1 is an Expression

// Expression = Something that gets evaluated to a value.
// Expression = Evaluate  -----------------------> Assign

// Function Expression: A function assigned to a 
// variable.This can be anonymous (no name) or named.

function teacher () {

}


var myTeacher = function anotherTeacher(){
    console.log(anotherTeacher);
    // var name = "santhosh";
}

console.log(teacher);
console.log(myTeacher);
// console.log(anotherTeacher);

// -------------------------------------------
// Function Expression vs Function Declaration
// -------------------------------------------

//Declares a function with a name is function declaration
function greet(){
    console.log("Function Declaration");
}

// A function assigned to a variable.
// This can be anonymous (no name) or named.
// called function expression
var greet1 = function (){
    console.log("anonymous function assining to ")
}

// The Main Difference b/w Expression and Declaration

// 1. Function Declaration -> A function declaration hoisted entirly,
// -------------------------- meaning you can call it before it appears 
//                            in the code

hello(); //✅ Works fine, even though it's called before the definition

function hello(){
    console.log("Hoisted to the top during compilation phase");
}

// 2. Function Expression -> A Function Expression is not Hoisted
// ------------------------- the same way. The variable is hoisted,
//                           it remains undefined until the interpreter
//                           reaches that line

// sayHoistedButUndefined(); //❌ ERROR: sayHoistedButUndefined still a variable with undefined not a function 

var sayHoistedButUndefined = function (){
    console.log(`Only the variable sayHoistedButUndefined is hoisted,
        not the function itself. Since sayHoistedButUndefined is 
        undefined at the time of calling, it throws an error.`);
}

sayHoistedButUndefined(); // ✅ Works fine here

// Type
// ----
// 1. Anonymous FE
// 2. Named FE

// -----------------------------
// Anonymous Function Expression
// -----------------------------
// A function without a name assigned to a variable
const greet3 = function(){
    console.log(`Hello`);
}
// greet3();
// greet3();

// ----------------------------
// 1. Named Function Expression
// ----------------------------

var keyHadler = function keyHadler(){
    console.log("named function");
}


// ----------------------------------------------------------------------------
