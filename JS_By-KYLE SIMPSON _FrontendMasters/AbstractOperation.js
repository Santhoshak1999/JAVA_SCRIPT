// Coercion -> automatic conversion of values from one data type to another

var numStudents = 16;

//                converting numStudents to String Type(Coercion)
console.log(`There are ${numStudents} students`);

var msg1 = "There are ";
var msg2 = " Students.";
console.log(msg1 + numStudents + msg2);

console.log(`There are ${numStudents + ""} numStudents` )

numStudentsVal = "16";

function addAstudent(numsStudents){
    return numsStudents + 1;
}

function subAstudent(numsStudents){
    return numsStudents - 1;
}
console.log(addAstudent(numStudentsVal)); //161
console.log(addAstudent(Number(numStudentsVal)));17
console.log(subAstudent(numStudents)); //if the value negative then it will substract

/*-----------------------------------------------------------------------------------------*/


// Boxing
//--------
// Boxing in JavaScript refers to the process of converting a primitive value 
// (like a string, number, or boolean) into its corresponding object wrapper 
// so that it can access object-like methods and properties. This process is 
// done automatically by JavaScript when you try to use a method or property 
// on a primitive value.


let str = "Santhosha K";
console.log(str.toUpperCase()); // Temporary String object is created.

// Wrapper Objects for Primitives: 
// When you use methods on primitive values, 
// JavaScript temporarily converts them to objects (e.g., new String, new Number).