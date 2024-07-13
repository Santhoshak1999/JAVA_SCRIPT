// Comparison using ==
console.log("Comparison using ==");
console.log(5 == '5');         // true, '5' is converted to number 5
console.log(0 == false);       // true, false is converted to number 0
console.log(null == undefined); // true, null is loosely equal to undefined
console.log('' == 0);          // true, empty string is converted to number 0
console.log([1,2] == '1,2');   // true, array [1,2] is converted to string '1,2'

// Comparison using ===
console.log("Comparison using ===");
console.log(5 === '5');        // false, different types (number vs string)
console.log(0 === false);      // false, different types (number vs boolean)
console.log(null === undefined); // false, different types (null vs undefined)
console.log('' === 0);         // false, different types (string vs number)
console.log([1,2] === '1,2');  // false, different types (array vs string)

// Comparison using >, <, >=, <=
console.log("Comparison using >, <, >=, <=")
console.log(5 > '4');          // true, '4' is converted to number 4
console.log('12' < 20);        // true, '12' is converted to number 12
console.log('2' >= 2);         // true, '2' is converted to number 2
console.log('02' < 1);         // true, '02' is converted to number 2
console.log('5' <= 5);         // true, '5' is converted to number 5

// Special case with null
console.log("Special case with null");
console.log(null > 0);         // false, null is converted to 0, 0 > 0 is false
console.log(null < 1);         // true, null is converted to 0, 0 < 1 is true
console.log(null >= 0);        // true, null is converted to 0, 0 >= 0 is true
console.log(null <= 0);        // true, null is converted to 0, 0 <= 0 is true
console.log(null == 0);        // false, null is not loosely equal to 0
console.log(null == undefined); // true, null is loosely equal to undefined

// Explicit type conversion
console.log("Explicit type conversion")
console.log(Number('02') > 1); // true, '02' explicitly converted to number 2
console.log(String(5) === '5'); // true, 5 explicitly converted to string '5'

// Comparing array to string
console.log("\n\n");
let array = [1, 2];
let str = '1,2';

console.log(array == str);      // true, array [1,2] is converted to string '1,2'
console.log(array === str);     // false, different types (array vs string)

// Comparing boolean to number
let bool = false;
let num = 0;

console.log(bool == num);       // true, false is converted to number 0
console.log(bool === num);      // false, different types (boolean vs number)

// Comparing boolean to string
let strBool = 'false';

console.log(bool == strBool);   // false, different types and no implicit conversion here
console.log(bool === strBool);  // false, different types (boolean vs string)
