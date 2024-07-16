/*
In JavaSript, String can be created either as primitive values or as objects

Primitive Strings ==>
    A Primitive strings are just data types in JavaScript
    Create using 'single' or "double" or `backticks`

String Object ==>
    A String Object is created using `String constructor`

    Note: 
        String objects allow you to attach custom properties and methods directly to the string object
        enabling more complex and object oriented programing techniques that are't possible with primitive strings.
*/
let stringObj = new String("Hello, World!");
stringObj.customProperty = "Custom Value";
console.log(stringObj.customProperty); // Outputs: "Custom Value"
console.log(stringObj.customProperty.length);

//String object allows some buildIn methods
name = "Rocking star YASH"
console.log(name.charAt(1)) //to fetch the charater at index one
console.log(name.indexOf('o')) //to get the index position
console.log(name.substring(1, 5)); //output: ocki bcz last index not count
console.log(name.slice(-8, 1));
name = "    Santhosha K     " //contains spaces at starting and ending positions
console.log(name.trim());; //A new string representing "str" with removing whitespaces from both its beggining and end.
console.log(name.trimEnd()); //remove spaces at end and return a string
console.log(name.trimStart()); //remove spaces at start and return a string

const url = "https://www.github.com/SanthoshaK1999/dsa-java"
console.log(url.replace("dsa-java", "Java_Script"));//replace/change the existing word and return a string.

console.log(url.split("/", 2)); //split the string with the given charater and 2 is the limit to the split, return string

// Template Literals and ${} in JavaScript

// Template Literals: Template literals are a way to create strings in JavaScript using backticks (`) instead of quotes (' or ").
// They are useful because they make it easier to work with strings and add variables or expressions directly into the string.
// ${}: The ${} is used inside template literals to insert variables or expressions into the string. This is called string interpolation.

name = 'Santhosha K'
age = 24
address = 'Davangere'

introduction = `My name is ${name} age is ${age} from ${address}.`; //called as String interpolation - use backtic and ${}
console.log(introduction

);