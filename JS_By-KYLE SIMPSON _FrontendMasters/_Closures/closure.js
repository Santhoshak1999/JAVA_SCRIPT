//Lexical Scope - > 
// means a function can use variables defined 
// outside of it(parent), in the place where it was written.


function x(){
    let a = 22;
    function y(){
        console.log(a);
    }
    y();
}
x();

// The above code already demonstrates a closure,
// where the inner function y has access to the
// variable a from the outer function x, even 
// though x has finished executing after calling y.


//what are closures ?
// A closure is a combination of a "function
// bundled together(enclosed) with references
// to its surrouding" StaticRange(the lexical environment)


function a(){
    var y = 50;
    var month = "Dec";
    function b(){
        console.log(y);
    }
    return b; //returning a function with its lexical scope
}
var closurefunction = a();
closurefunction();



function m(){
    var x = 22;
    function n(){
        console.log(x);
    }
    x = 2000;//x refercing to 2000
    n();//return y along with its lexical scope reference not value
}
m();
//lexical scope is bound to references rather than values.


function q(){
    let s = 100;
    function w(){
        let d = 200;
        function e(){
            console.log(s,d);
        }
        e();
    }
    w();
}
q();
