var workshop = {
    teacher : "Kyel",
    ask : function ask(quesion){
        console.log(this.teacher, quesion);
    },
};

new (workshop.ask.bind(workshop))("What does this do");
// undefined What does this do

var workshop1 = {
    teacher : "Kyel",
    ask(quesion){
        setTimeout(() => {
            console.log(this.teacher, quesion);
            console.log(this);
        });
    },
}

// Arrow functions cannot be used as constructors 
// because they don’t have a [[Construct]] internal 
// method. So instance of arrow function can not be created.
// Use the arrow function when user dont want lexical scopes

workshop1.ask("Is this lexical 'this' ? ");
var sum = ((a, b) => {
    return a+b;
});

console.log(sum(2,5));
  
