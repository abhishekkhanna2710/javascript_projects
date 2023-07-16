//Tricky js questions

(function () {
    // b = 3 comes under global scope
    // var a = b // block scope
    var a = b = 3;
})();

console.log(typeof (a))// undefined 
console.log(typeof (b))// number


// 2nd questions 

function foo() {
    return// becoz when you consider it will show that return statemnt is half
    {
        name: "Abhishek"
    }
}
console.log(foo()) // undefined

// 3rd questions

console.log(1 + "2" + "2") // 122
console.log(1 + +"2" + "2") // 32 after put + it convert string into integer
console.log(1 + -"1" + +"2") // 2
console.log("A" - "B" + "2")// NAN2 Because we cannot minus string from string 
console.log("A" - "B" + 2)// NAN


// 4th question

var g = 0;
function c() {
    g = 10;
    return;
    // var g=function(){}
}

c();
console.log(g)// 0 then it will print 10  Hoisting concept


// question 5

console.log({} === {})// false// it compare memory location
var d = {};
var e = d;
console.log(e == d)// true becoz it shares same memory location


// Question 6

function test() {
    function foo() {
        return 100;
    }
    return foo();

    function foo() {
        return 10
    }
}

console.log(test());// 10 foo overwrite another function hoisting use

