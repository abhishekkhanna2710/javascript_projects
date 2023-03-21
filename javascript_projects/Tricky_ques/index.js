// Logical operators
console.log(1 || 0); // 1 op operator always check truthy value, if not present it will written falsy value
console.log(0 || null || 1); // 1
console.log("" || 0 || null); // null 

// falsy value = null, nan,undefined,null, "",0

var x = NaN;
if (x) {
    console.log("Truthy")
}
else {
    console.log("Falsy")
}

// And operator => It will serach for falsy value

console.log(1 && 0)// 0
console.log(1 && 2 && 3)// 3


let z = false || "Sachin" || "raj"

console.log(z);

console.log(null || (2 && 3) || 4);

// ******************* currying

function a() {
    function b() {
        function c() {
            return "hello world"
        }
        return c;
    }
    return b;
}
console.log(a()()());

// ***********************

function fun(A, B, C) {
    return A + B + C
}

console.log(fun(2, 3, 4))


// ***********************

function fun2(a) {
    return function run(b) {
        return function sun(c) {
            return a + b + c
        }
    }
}

let A = (a) => (b) => (c) => a + b + c;


console.log(fun2(2)(3)(4))
console.log(A(2)(3)(4))


function sum2() {
    console.log(arguments)
}

sum2(1, 2, 3) // key value pair

// the 
function sum(a, b, c) {
    console.log(a + a + a)
    console.log(a + b + c)
    console.log(a, b, c)
}

sum(1, 2, 3)



// Diffrence between normal function and array function
// hoisting diffrence



// ***** Event Bubbling and Event Capturing