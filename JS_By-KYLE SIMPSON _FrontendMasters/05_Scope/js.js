// Scope
// ------

// 1. nested Scope
// 2. Hoisting
// 3. closure
// 4. Modules
var teacher = "santh";

if(true){
    //this does't have block scope
    var teacher = "Kyel";
    let x = 21;
    console.log(x);
    console.log(teacher); 
}
// console.log(x);  Error: x is not defined
console.log(teacher); 

//try let(blockscope) in global
let name = "santhosha";
if(true){
    console.log("Hii", name);
}


//-------------------------------------------------------

var teacher = "Kyel";

function otherClass(){
    var teacher = "Suzy";
    console.log("welcome!");
}
console.log(`The teacher name is ${teacher}`);
function ask(){
    var question = "Why?";
    console.log(question);
}

otherClass();
ask();

console.log(teacher);

//--------------------------
// Dynacmic Global Variables
//--------------------------
//Dynamic global variables are variables that are
//unintentionally created or modified in the global scope 

var teacher = "Kyel";

function otherClass1(){
    teacher = "Suzy";
    topic = "React";
    // Implicitly creates a global variable `topic` 
    // (no `var`, `let`, or `const`).
    console.log("welcome");
}

// console.log(`The topic ${topic}`);
// ReferenceError: topic is not defined
// we not call "otherClss1" to create "topic" variable dynaimically  

otherClass1();
console.log(teacher, topic);

// ------------
// Nested Scope
// ------------

var student = "Santhosh";

function otherClass(){
    var teacher = "Abhishek";

    function ask(question){
        console.log(teacher, question);//The scope of question is ask() function;
    }

    ask("nested scope");
}

otherClass();
ask("?????");

// ------------------------
// Undefined v/s Undeclared
// ------------------------

// undefined -> variable exists but not assigned any value.
// Undeclared -> Nevel created any variable in any scope.

 