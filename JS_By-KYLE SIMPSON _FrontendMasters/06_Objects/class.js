class workshop {
    constructor(teacher){
        this.teacher = teacher;
    }

    ask(quesions){
        console.log(this.teacher, quesions);
    }
}

var deepJS = new workshop("Kyel");
var reactJs = new workshop("Suzy");

deepJS.ask("Is 'class' a class ?")
reactJs.ask('Is this class OK ? ')


//extend the class to a child
class AnotherWorkshop extends workshop {
    speakUp(msg){
        super.ask(msg);
    }
}
//                        getting super+current(Kyek)
var JSRecentParts = new AnotherWorkshop("Kyel");
JSRecentParts.speakUp("Are classes getting better ?");