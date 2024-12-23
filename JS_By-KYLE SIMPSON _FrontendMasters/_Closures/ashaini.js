// setTimeout(function, delay, param1, param2, ...);



// function x(){
//     var i = 1;
//     setTimeout(function(){
//         console.log(i);
//     }, 1000 * i);
//     console.log("hi im santhosh");
// }
// x();
// console.log("sjdhffksdjfh"); 



function x(){
    for(var i = 1; i<=5; i++){
        setTimeout(function (){
            console.log(i);
        }, 1000 * i);
    }
    console.log("Namaste");
}
x();

// Namaste
// 6
// 6
// 6
// 6
// 6

// The var keyword has function scope, 
// meaning the same i variable is shared 
// across all iterations of the loop.

// When the callbacks inside setTimeout execute, 
// they access the same i variable, which by then 
// has been incremented to 6.


//each callback has its own copy of i, 
// use let instead of var
function a(){
    for(let i=1;i<=5;i++){//each time i create new variable i
        setTimeout(function (){
            console.log(i);
        }, i * 1000);
    }
    console.log("Namaste");
}
a();

//use closures to solve the same problem
function n(){
    for(var i=0;i<=5;i++){
        function m(i){
            setTimeout(function (){
                console.log(i)
            },
        1000 * i);
        }
        m(i);
    }
}
n();

function get(){
    for(var i=1; i<=5; i++) {
        setTimeout(() => {
          console.log(i);
            i = i + 1;
         },  i*1000);
    }
    console.log("outside: ", i)
    if( i < 10 ) i = 10;
}
get();
