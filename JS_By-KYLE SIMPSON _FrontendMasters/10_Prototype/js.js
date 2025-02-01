// function Workshop(teacher){
//     this.teacher = teacher;
// }
// Workshop.prototype.ask = function(quesion){
//     console.log(this.teacher, quesion);
// }

// var deeJS = new Workshop("Kyel");
// var reactJS = new Workshop("suzy");

// deeJS.ask("Is 'prototype' a class");
// reactJS.ask("Isn't 'prototype' ugly");




// prototype shadowing
// -------------------
// describes what happens when an object 
// and its prototype both define a property
// with the same name.

function Workshop1(teacher){
    this.teacher = teacher,
    //this method will also be store in prototype
    this.ask = function(quesion){
        console.log(quesion.toUpperCase());
        console.log("Heyy Object method is called")
    }
}
//same ask method in prototype
Workshop1.prototype.ask = function(quesion){
    console.log(this.teacher, quesion);
    console.log("Heyy proto is called")

}
var deeJS1 = new Workshop1("Kyle");
deeJS1.ask("Opps which prototype will call or Object");


//OLOO : Object Linked to Other Objects - By kyel simpson
// class Wordshop {
//     constructor(teacher){
//         this.teacher = teacher;
//     }
//     ask(quesion){
//         console.log(this.teacher);
//     }
// }

// class AnotherWorkshop extends Workshop {
//     speakUp(msg){
//         this.ask(msg);
//     }
// }

function Workshop(teacher){
    this.teacher = teacher;
}
Workshop.prototype.ask = function(quesion){
    console.log(this.teacher, quesion);
}
function AnotherWorkshop(teacher){
    Workshop.call(this, teacher);
}
AnotherWorkshop.prototype = Object.create(Workshop.prototype);
AnotherWorkshop.prototype.speakUp = function(msg){
    this.ask(msg.toUpperCase());
};

var JSRecentParts = new AnotherWorkshop("kyel");
JSRecentParts.speakUp("Isn't this ugly");

// Akshay saini
// ------------
/* 
let object = {
    name: "Santhosha",
    city: "dvg",
    getInfo : function (){
        console.log(`name is ${this.name} from ${this.city}`);
    }
}

let object2 = {
    name : "akshay", f
}

object2.__proto__ = object;
*/
