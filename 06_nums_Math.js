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
nums3 = 234.55645556343;
console.log(nums3.toFixed(5));
console.log(nums3.toFixed(2));//return a string representing a number
console.log(typeof nums3.toFixed(5))


//int.toPricision()
//it returns a string representing a number
const nums4 = 123.533434;
console.log(nums4);
console.log(nums4.toPrecision(4)); //it will start presizing the value from numbers(it include decimal also);
console.log(nums4.toPrecision(3)); 
