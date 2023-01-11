
//https://www.javascripttutorial.net/javascript-call/



function show() {
    console.log('Show function');
 }

 show(); 
 show.call(); 

function display(){
    console.log(this); 
 }
// display(); 

function add(a, b) { 
    return a + b;
}

let result = add.call(this, 10, 20);
console.log(result);
let sum = add.call( 10, 20);
console.log(sum);
let out = add( 10, 20);
console.log(out);

let greeting = 'Hi';
let messenger = {
    greeting: 'Hello'
}

function say(name) {
    console.log(this.greeting + ' ' + name);
}

say.call(this, 'amit');
console.log(greeting);
say.call(messenger, 'amit');
say( 'amit');