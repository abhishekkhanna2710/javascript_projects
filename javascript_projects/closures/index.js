// Closures in javascript

function outer() {
    var name = "Abhishek"
    function inner(num) {
        console.log(name, num)
    }
    return inner;
}
outer()(4);


// ques1 =  What will be the output of function

let count = 0;
(function printCount() {
    if (count === 0) {
        let count = 1;
        console.log(count)
    }

    console.log(count)
})();

// ques2 : Write a function that allow you to do this

// Write your Code here

function createBase(a) {
    return function (b) {
        console.log(a + b);
    }
}
var addSix = createBase(6);
addSix(10);
addSix(21);

// ques 3 Time Optimization

function find() {
    let a = [];
    for (let i = 0; i < 100000; i++) {
        a[i] = i * i;
    }

    // optimze using closures

    return function (index) {
        console.log(a[index])

    }
}
const clousres = find();
console.time("6")
clousres(6)
console.timeEnd("6")
console.time("12")
clousres(12)
console.timeEnd("12")
console.time("50")
clousres(50)
console.timeEnd("50")

//Block scope and set timeout

function output() {

    for (var i = 0; i < 3; i++) {
        setTimeout(((i) => {
            return function () {
                console.log(i)
            }
        })(i), i * 1000)
    }
}

output();

// How would you use a closure to create a private counter

function counter() {
    var count = 0;

    function add(inc) {
        count += inc;
    }

    function retrieve() {
        return "Counter = " + count;
    }

    return {
        add,
        retrieve
    }
}

const c = counter();

c.add(5);
c.add(10);

console.log(c.retrieve())

