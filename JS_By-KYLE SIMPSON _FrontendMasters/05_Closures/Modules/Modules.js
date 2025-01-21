var workshop = {
    teacher : "Kyel",
    ask(quesion){
        console.log(this.teacher, quesion);
    }
}

workshop.ask("Is this a module"); //No This is not a module
console.log(workshop.teacher);//we can access the data inside the workshop


// so what is modules then
// Module "encapsulate" and behaviour(method)
// together. The state(data) of a module is held 
// by its methods via closure
// ** You dont have a module if you dont have a closure


var workshop1 = (function Module(teacher){
    var publicApI = {ask};
    return publicApI;

    function ask(quesion){
        console.log(teacher, quesion);
    }
})("Kyel");//the teacher name is private to this module, you can not access outside this

workshop1.ask("It's a module, right");  
console.log(workshop1.teacher); 

function workshop2(teachername){
    return {ask, };

    function ask(quesion){
        console.log(teachername, quesion);
    }
}

var ws = workshop2("Kyel");
console.log(ws.teachername);//udefine in ask object