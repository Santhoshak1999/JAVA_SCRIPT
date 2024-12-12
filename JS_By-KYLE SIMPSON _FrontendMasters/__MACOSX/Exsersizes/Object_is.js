if(Object.is){
    Object.is = function ObjectIs(x, y){
        var zNegZero = isItNegzero(x);
        var yNegZero = isItNegzero(y);

        if(zNegZero || yNegZero){
             return zNegZero && yNegZero;
        }
        else if(isItNaN(x) && isItNaN(y)){
            return true;
        }
        else{
            return x === y;
        }


        return false;
        
        function isItNegzero(v){
            return v == 0 && (1/v) == -Infinity;
        }
        function isItNaN(v){
            //in javascript NaN is the only value not equals to itself 
            //(so compare v with itself)
            return v!==v;//NaN !== NaN
        }
    }
}
console.log(Object.is(42,42) === true);
console.log(Object.is("foo","foo") === true);
console.log(Object.is(false,false) === true);
console.log(Object.is(null,null) === true);
console.log(Object.is(undefined,undefined) === true);
console.log(Object.is(NaN,NaN) === true);
console.log(Object.is(-0,-0) === true);
console.log(Object.is(0,0) === true);

console.log(Object.is(-0,0) === false);
console.log(Object.is(0,-0) === false);
console.log(Object.is(0,NaN) === false);
console.log(Object.is(NaN,0) === false);
console.log(Object.is(42,"42") === false);
console.log(Object.is("42",42) === false);
console.log(Object.is("foo","bar") === false);
console.log(Object.is(false,true) === false);
console.log(Object.is(null,undefined) === false);
console.log(Object.is(undefined,null) === false);
