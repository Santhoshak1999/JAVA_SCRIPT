// Memory allowcation
    //Stack -> Primitive  
    //Heap  -> Non Primitive(Reference)

let Name1 ="Santhosha K"  //store in stack
let Name2 = Name1//copy of name 1 will be store in the stack not its reference
console.log(Name2);

Name2 = "Girish" //Changing the Copied value 
console.log(Name2);


// Refence DT stores in Heap
arr1 = [1, 2, 3, 4, 5]; // arr will store in Heap memory and it reference will store in the stack
arr2 = arr1; //same reference is coping to arr2(any changes made in the arr2 will be affect on arr1)
// Note : If you create a new array it will create new heap refence
console.log("Arrays before changing its refernce");
console.log(arr2);
console.log(arr1);


//lets change the values using its reference arr2
arr2 = [1, 2, 3, 4, 5];
//check whether the same arr1 is affected or not
console.log("After Changing the refenced value");
console.log(arr1);
console.log(arr2);