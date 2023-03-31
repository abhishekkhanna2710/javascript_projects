const set = new Set();
set.add(1);
set.add('Lydia');
set.add({ name: 'Lydia' });


for (let item of set) {
    console.log(item + 2)
}

// 

const user = { name: 'Lydia', age: 21 };
const admin = { admin: true, ...user }

console.log(admin)

// 
function addToLIst(item, list) {
    return list.push(item);
}

const result = addToLIst('apple', ['banana'])

console.log(result + "Hello")


// clg
console.log("____________________________________________")


var name = "masai"

function test() {
    var temp = 1
}

test()


console.log("_______________________________________")


var users = "Arya";

function sayHello() {
    return `Hello ${users}`;
}

var userMsg = sayHello(users);


console.log(userMsg)


console.log("_______________________________________")


function sayHi() {
    var name = 'Lydia';
    var age = 21;
    console.log(name);
    console.log(age);
}

sayHi();


console.log("_______________________________________")



console.log('First');
setTimeout(() => console.log('Second'), 0);
console.log('Third');





console.log("_______________________________________")





console.log('First');
function secondCall() {
    console.log('Second');
}
setTimeout(secondCall, 2000);
setTimeout(() => console.log('Third'), 0);
console.log('Third');




console.log("_______________________________________")



console.log('First');
function secondCall() {
    console.log('Second');
}
setTimeout(secondCall, 1000);
setTimeout(() => console.log('Third'), 0);
console.log('Fourth');



console.log("_______________________________________")




function main() {
    console.log('A');
    setTimeout(function display() {
        console.log('B');
    }, 0);
    console.log('C');
}
main();


let x = 10;
x++;
console.log(x)