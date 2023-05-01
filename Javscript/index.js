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