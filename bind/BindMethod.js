// let's discuss bind method

//reference https://www.javascripttutorial.net/javascript-bind/#:~:text=The%20bind()%20method%20creates,as%20function%20borrowing%20in%20JavaScript. 



let person = {
    name: 'John Doe',
    getName: function() {
        console.log(this.name);
    }
};

//setTimeout(person.getName, 1000);
//let f = person.getName;
//setTimeout(f, 1000); // lost person context

setTimeout(function () {
    person.getName();
}, 1000);

let f = person.getName.bind(person);
setTimeout(f, 1000);

let runner = {
    name: 'Runner',
    run: function(speed) {
        console.log(this.name + ' runs at ' + speed + ' mph.');
    }
};

let flyer = {
    name: 'Flyer',
    fly: function(speed) {
        console.log(this.name + ' flies at ' + speed + ' mph.');
    }
};

let run = runner.run.bind(flyer, 20);
run();


let student = {
    name:'Amit',
    print: function(){
        let num =3; 
        for (i=0; i<num; i++)
        console.log(this.name)
    }
}
let teacher = {
    name: 'Harish',
}

let p = student.print.bind(teacher, 2); 
student.print(3); 
p(); 
let q =student.print;

setTimeout (q,2000); 