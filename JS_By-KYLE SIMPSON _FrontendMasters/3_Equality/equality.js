var studentName1 = "Frank";
var studentName2 = `${studentName1}`;

var workshopEnrollment1 = 16;
var workshopEnrollment2 = workshopEnrollment1 + 0;

studentName1 == studentName2;           //true
studentName1 === studentName2;          //true

workshopEnrollment1 == workshopEnrollment2; //true
workshopEnrollment1 === workshopEnrollment2;//true


//Double Equals algorithm
workshopEnrollment1 = 16;
workshopEnrollment2 = "16"
if(Number(workshopEnrollment1) === Number(workshopEnrollment2)){
    console.log("xyz");
}

//Ask: what do we know about the types here ?
// (==) prefers numeric comparison 
// so string will be coersive to number 
//  In == condition coersion will happen only if the both the datatype are not same
//  otherwise == operator just do comparision.

//                      Number(workshopEnrollment2)
if(workshopEnrollment1 == workshopEnrollment2){
    console.log("double equals");
}
var workshop1Count = 42;
var workshop2Count = [42];

// if(workshop1Count == workshop2Count)
// if(42 == "42")
// if(42 === 42)
if(workshop1Count == workshop2Count){           //true
    //Yep (hmm..)
}


// == corner cases 
[] == ![]                   //true

var workshop1Student = [];
var workshop2Student = [];

// if(workshop1Student == !workshop2Student){
// if([] == !)


//Avoid == 
// 1. == with 0 or "" (or even " ")
// 2. == with non-primitives
// 3. == true or ==false : allow

