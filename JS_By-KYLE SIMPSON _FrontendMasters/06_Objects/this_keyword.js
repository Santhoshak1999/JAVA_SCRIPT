// "use strict";

//this in global space
console.log(this); //this is a global object - window(in web), global(nodeJS)

//this inside a function
function x(){
    console.log(this);
};
x();
// window.x(); //window(in web)

//this in non strict mode - (this substitution)
//---------------------------------------------
//  If the value of this keyword is "undefined or null" 
//  this keyword will be replaced with globalObject
//  only in non strict mode


//this in strict mode - (this substitution)
//-----------------------------------------

//this value depends on how this is called(window)

//this inside a object method
var obj = {
    //here this refers to the obj
    name : "my javaScript",
    x : function(){
        name = "santosh"
        console.log(this.name, name);
    }
}
obj.x();

// call, apply and bind methods(sharing methods / function borrowing)
// -----------------------------------------------------------------
// methods used set the value of this 
// and enable sharing or reusing methods
// across different objects.

var student1 = {
    fname : "santhosh",
    lname : "K",
    getFullName : function () {
        console.log(this.fname + " " + this.lname);
    },
}
student1.getFullName();
var student2 = {
    fname : "Girish",
    lname : "K",
}

student1.getFullName.call(student2);//value of this = student2


//this inside arrow function 
var obj1 = {
    name : "santhosha",
    x : () => {
        console.log(this);
    },
}
obj1.x();


//this inside nested arrow function

//this inside DOM -> The values will reference the HTML elements