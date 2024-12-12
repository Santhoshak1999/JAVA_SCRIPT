var v;      
typeof v;   //undefined - currently doesnt have a value later it will be store
v = "1"; 
typeof v;                //String
v = 2;
typeof v;                //Number
v = true;                
typeof v;                //Boolean
v = {};                   
typeof v;                //Object
v = Symbol();
typeof v;                //symbol

// console.log(typeof doesntExist);

v = null;                 
typeof null;              //Object
v = function(){};
typeof v;                 //function
v = [1,2,3];
typeof v;                 //Object
v = 42n;
typeof v;                 //BigInt


/*--------------------------------------------------------------*/

// Kinds(Types) of Emptyness
//-------------------------
// undefined v/s Undeclared

// Undefined -> The variable has 
// been declared but not assign 
// any value
var a;

//Undeclared -> The variable has
// been not declared before trying
// to use or access it

// console.log(b); 
// b is using but no declared

/*--------------------------------------------------------------*/


//Special Values(Nan and isNan)
//-----------------------------
// 1. Nan(Not a number)
// a math calculation doesn’t make sense or not possible
var myAge = Number(0o46);       //38
var MyNextAge = Number(39);     //39
var myCatAge = Number("n/a");   //NaN

//subraction
myAge - "my son's age";         //NaN
// anything - NaN = Nan

//Nan is notquals itself
myCatAge === myCatAge;         //false OOPS!
// NaN === Nan

isNaN(myAge);                   //false
isNaN(myCatAge);                  //true
isNaN("my son's age");          //true

//But Undifined is equals to itself
var z;
var c;
console.log(z === c);
console.log(undefined === undefined)

Number.isNaN(myCatAge);         //true
Number.isNaN("my son's age");   //false

var  n = undefined;     
console.log(isNaN(n));          //true

n = false;
console.log(isNaN(n));          //false

n = -1;
console.log(isNaN(n));          //false

n = null;
console.log(isNaN(n));          //false

n = 0;
console.log(isNaN(n));          //false

//Negative Zero(-0)
//-----------------


/*--------------------------------------------------------------*/


//Fundamental Object 
//  Build-In Objects
//  Native Functions

// Use new:
/*
*   Object()
*   Array()
*   Funtion()
*   Date()
*   RegExp()
*   Error() 
 */

//Dont use new:
/**
 *  Number()
 *  String()
 *  Boolean()
 */


var yesterday = new Date("December 6, 2024");
console.log(yesterday)
console.log(yesterday.toUTCString());



/*--------------------------------------------------------------*/


