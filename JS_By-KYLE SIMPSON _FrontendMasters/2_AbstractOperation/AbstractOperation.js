// Coercion -> automatic conversion of values from one data type to another

var numStudents = 16;

//                converting numStudents(Number) to String Type(Coercion)
console.log(`There are ${numStudents} students`);

var msg1 = "There are ";
var msg2 = " Students.";
console.log(msg1 + numStudents + msg2);

console.log(`There are ${numStudents + ""} numStudents` )

let numStudentsVal = "16";

function addAstudent(numsStudents){
    return numsStudents + 1;
}

function subAstudent(numsStudents){
    return numsStudents - 1;
}
console.log("--------------------------------");
console.log(addAstudent(+numStudentsVal)); //161
// Quesion: why "+" converts to number this is an operator not type converter right ?
// Great question! The unary + operator in JavaScript is a special case—it is both an
// operator and a type converter when applied to a non-number.
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

/*-----------------------------------------------------------------------------------------*/

//Corner cases of coersion
//-> Every language has type conversion corner cases

Number("");                    //0 
Number("    \t\n");            //0
Number(null);                  //0
Number(undefined);             //NaN
Number([]);                    //0
Number([1,2,3]);               //NaN
Number([null]);                //0
Number([undefined]);           //0
Number({});                    //NaN

String(-0);                   //"0"
String(null);                 //"null"
String(undefined);            //"undefined"
String([null]);               //""
String([undefined]);          //""


Boolean(new Boolean(false));  //true
Number(true);                 //1
Number(false);                //0

1 < 2;                         //true
2 < 3;                         //true
1 < 2 < 3;                     //true   (but....)
// how this working
(1 < 2) < 3;
(true) < 3;
 1 < 3;                        //true

3 > 2;                         //true
2 > 1;                         //true
3 > 2 > 1;                     //false 
// how this working
3 > 2 > 1;
(true) > 1;
 1 > 1;                        //false

 /*-----------------------------------------------------------------------------------------*/


//Coercion : implicit can be good(sometimes)
var numStudents = 16;
console.log(
                //explicitly converting
    `There are ${String(numStudents)} students`
)
//There are 16 students
console.log(
    `There are ${numStudents} students`
);

var workshopEnrollement1 = "20";
var workshopEnrollement2 = "50";

if(Number(workshopEnrollement1) < Number(workshopEnrollement2)){
    console.log(true);

}

if(workshopEnrollement1 < workshopEnrollement2){
    console.log(true);
} 