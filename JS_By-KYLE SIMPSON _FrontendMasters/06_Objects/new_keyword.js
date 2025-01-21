// new keyword
//------------
// this will be used to create an object

function ask(quesion){
    console.log(this.teacher, quesion);
}

var newEmptyObjecct = new ask("What is 'new' doing here");
console.log(newEmptyObjecct);

// What new keyword does
// ---------------------
// 1. Create a brand new empty object
function Person(name){
    this.name = name;
}
const person = new Person('empty_akshay');
console.log(person.name)

// 2. Link that object to another object

// 3. Call function with "this" keyword set to the new object
function Person1(name){
    this.name = name; //this refers to the new object
}
const person1 = new Person1("this_akshay");
console.log(person.name); //this_akshay

// 4. if function does not return an object assume return of this
// If the constructor function explicitly returns
// an object, that object is returned instead of 
// the new instance.

function Person2(name){
    this.name = name;
    //not returning anything
}
const person2 = new Person2("akshay");
console.log(person2); // a new object
//function with returning object

function Person3(name){
    return {customName : name}; //returned insted of "this"
}
const person3 = new Person3("Akshay");
console.log(person3);
