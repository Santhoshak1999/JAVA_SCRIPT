function setsMatch(arr1, arr2){
    if(Array.isArray(arr1) && Array.isArray(arr2)){
        for(let v of arr2){
            if(!arr1.includes(v)){
                return false;
            }
        }
        return true;
    }
    return false;
}



function findAll(match, arr){
    var ret = []

    for(let v of arr){
        if(Object.is(match, v)){
            ret.push(v);
        }
        else if(match == null && v==null){
            ret.push(v);
        }
        else if(typeof match == "boolean" && typeof v == "boolean"){
            if(match == v){
                ret.push(match);//v
            }
        }
        else if(typeof match == "string" && match.trim()!="" && typeof v == "number")
    }
    return ret;
}

// var myObj = { a: 2 };

// var values = [
// 	null, undefined, -0, 0, 13, 42, NaN, -Infinity, Infinity,
// 	"", "0", "42", "42hello", "true", "NaN", true, false, myObj
// ];

var myObj = {a : 2};
var values = [
    null, undefined, -0, 0, 13, 42, NaN, -Infinity, Infinity,
    "", "0", "42", "42hello", "true", "NaN", true, false, myObj
]


console.log(setsMatch(findAll(null,values),[null,undefined]) === true);
console.log(setsMatch(findAll(undefined,values),[null,undefined]) === true);
console.log(setsMatch(findAll(0,values),[0,"0"]) === true);
console.log(setsMatch(findAll(-0,values),[-0]) === true);
console.log(setsMatch(findAll(13,values),[13]) === true);
console.log(setsMatch(findAll(42,values),[42,"42"]) === true);
console.log(setsMatch(findAll(NaN,values),[NaN]) === true);
console.log(setsMatch(findAll(-Infinity,values),[-Infinity]) === true);
console.log(setsMatch(findAll(Infinity,values),[Infinity]) === true);
console.log(setsMatch(findAll("",values),[""]) === true);
console.log(setsMatch(findAll("0",values),[0,"0"]) === true);
console.log(setsMatch(findAll("42",values),[42,"42"]) === true);
console.log(setsMatch(findAll("42hello",values),["42hello"]) === true);
console.log(setsMatch(findAll("true",values),["true"]) === true);
console.log(setsMatch(findAll(true,values),[true]) === true);
console.log(setsMatch(findAll(false,values),[false]) === true);
console.log(setsMatch(findAll(myObj,values),[myObj]) === true);

console.log(setsMatch(findAll(null,values),[null,0]) === false);
console.log(setsMatch(findAll(undefined,values),[NaN,0]) === false);
console.log(setsMatch(findAll(0,values),[0,-0]) === false);
console.log(setsMatch(findAll(42,values),[42,"42hello"]) === false);
console.log(setsMatch(findAll(25,values),[25]) === false);
console.log(setsMatch(findAll(Infinity,values),[Infinity,-Infinity]) === false);
console.log(setsMatch(findAll("",values),["",0]) === false);
console.log(setsMatch(findAll("false",values),[false]) === false);
console.log(setsMatch(findAll(true,values),[true,"true"]) === false);
console.log(setsMatch(findAll(true,values),[true,1]) === false);
console.log(setsMatch(findAll(false,values),[false,0]) === false);
