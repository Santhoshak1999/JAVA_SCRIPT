const num = 400;
console.log(num);//400
console.log(typeof(num));//number

const num1 = new Number(20);//create object of number. it allows to use build in methods
console.log(num1);//[Number: 20]
console.log(typeof num1);//object

//coonvert number to string
strnum = num1.toString();
console.log(typeof(strnum));//string

//int.toFixed(digit); 
//Rounds and formats a number to fixed decimal places.
//digit shows how many decimal number it has to rounded after the decimal
console.log("toFixed()");
nums3 = 234.55645556343;
console.log(nums3.toFixed(5));
console.log(nums3.toFixed(2));//return a string representing a number
console.log(typeof nums3.toFixed(5))

console.log("toPrecision()");
//int.toPricision()
//it returns a string representing a number
const nums4 = 123.533434;   
console.log(nums4.toPrecision(4)); //it will start presizing the value from numbers(it include decimal also);
console.log(nums4.toPrecision(3)); 


/*-------------------------------Maths-------------------------- */
// Math is can object in js
console.log(Math);
console.log(Math.abs(-100));
console.log(Math.round(23.54));
console.log(Math.ceil(12.09));
console.log(Math.floor(12.54));
console.log(Math.round(Math.random() * 9));//give random number between 0.0 to 0.9
console.log((Math.round((Math.random()*10) + 1)))
console.log(Math.fround(21.23));
console.log(Math.pow(3,2));
console.log(Math.max(2,4, 2, 32, 12));
console.log(Math.min(2,4, 1, 0, 3));
