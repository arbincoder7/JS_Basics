//console log
console.log(".");

let name ;
console.log(name);

name = 'a';
console.log(name);

let b = null;
console.log(typeof(b))

let person = {
    name: 'something',
    age: 30
}

console.log(typeof person.name)

let colors = [];
colors.push('red');
colors.push('green');
colors.push('blue');
console.log(colors);

function greet(n){
    console.log('Hello ' + n)
}

function greet(n,m){
    console.log('Hello ' + n + " " + m)
}

greet('Yo');
greet('Yo','Bo')
