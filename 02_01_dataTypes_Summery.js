//2 Types
//Primitive 7 types--> String, Number, Boolean, null, Undefined, Symbol, BigInt
//Reference Type(Non Premitive) --> Array, Objects, Functions


//JavaScript is Dynamically Types ?

/*
JavaScript is a dynamically typed language. This means that variable types are determined at runtime,
and you do not need to explicitly declare the type of a variable before using it. You can assign different types of values to a variable during its lifetime.
For example, in JavaScript, you can do the following:
let x = 10; // x is now a number
x = "Hello"; // x is now a string
x = true; // x is now a boolean
On the other hand, statically typed languages require you to declare the variable's type explicitly, and the type checking is done at compile-time, before the code is executed.
Languages like Java, C++, and TypeScript are statically typed, and they require you to specify the variable type explicitly when declaring them:
int x = 10; // x is a variable of type int
String name = "John"; // name is a variable of type String
JavaScript's dynamic typing allows for more flexibility but can lead to potential runtime errors if not handled carefully.
Static typing, on the other hand, provides better type safety at the cost of some initial verbosity and strictness.
*/

//Symbol ***
/*
Meaning:  It is used to create unique identifiers for object properties.
Symbols are unique and immutable, meaning that each symbol value is distinct and cannot be changed after it's created.

    1. Unique Identifier Storage:

    Each Symbol value is stored uniquely in memory. When you create a Symbol, the JavaScript engine allocates memory to store this unique identifier.

    2. Immutable Nature:

    Symbols are immutable and cannot be changed once created. This immutability ensures that the unique identifier remains constant throughout the program execution.

*/

const id1 = Symbol("1234");
const id2 = Symbol("1234");//even both id and id2 having same value. the memory allowcation of both is different
console.log(id1 == id2);//false

console.log(typeof id1);
//BigInt
a = 1;
console.log(typeof(a));
a =1n;
console.log(typeof(a));

