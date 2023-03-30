

Q1. What is the output of the following code snippet? 🤔

// console.log(typeof typeof 1);

// A) number
// B) string
// C) undefined
// D) NaN

// ANS : B




Q2. What's the output?
function sayHi() {
  console.log(name);
  console.log(age);
  var name = 'Lydia';
  let age = 21;
}

sayHi();
A: Lydia and undefined
B: Lydia and ReferenceError
C: ReferenceError and 21
D: undefined and ReferenceError







<!-- Answer: 
Within the function, we first declare the name variable with the var keyword. This means that the variable gets hoisted (memory space is set up during the creation phase) with the default value of undefined, until we actually get to the line where we define the variable. We haven't defined the variable yet on the line where we try to log the name variable, so it still holds the value of undefined.

Variables with the let keyword (and const) are hoisted, but unlike var, don't get initialized. They are not accessible before the line we declare (initialize) them. This is called the "temporal dead zone". When we try to access the variables before they are declared, JavaScript throws a ReferenceError. D-->




Q3.  What's the output?
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}

for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}
A: 0 1 2 and 0 1 2
B: 0 1 2 and 3 3 3
C: 3 3 3 and 0 1 2








<!-- Answer: 
Because of the event queue in JavaScript, the setTimeout callback function is called after the loop has been executed. Since the variable i in the first loop was declared using the var keyword, this value was global. During the loop, we incremented the value of i by 1 each time, using the unary operator ++. By the time the setTimeout callback function was invoked, i was equal to 3 in the first example.

In the second loop, the variable i was declared using the let keyword: variables declared with the let (and const) keyword are block-scoped (a block is anything between { }). During each iteration, i will have a new value, and each value is scoped inside the loop. C-->





Q4. What's the output?
+true;
!'Lydia';


A: 1 and false
B: false and NaN
C: false and false







<!-- Answer: 
The unary plus tries to convert an operand to a number. true is 1, and false is 0.

The string 'Lydia' is a truthy value. What we're actually asking, is "is this truthy value falsy?". This returns false. A-->







Q5. Which one is true?
const bird = {
  size: 'small',
};

const mouse = {
  name: 'Mickey',
  small: true,
};
A: mouse.bird.size is not valid
B: mouse[bird.size] is not valid
C: mouse[bird["size"]] is not valid
D: All of them are valid



<!-- Answer: 
In JavaScript, all object keys are strings (unless it's a Symbol). Even though we might not type them as strings, they are always converted into strings under the hood.

JavaScript interprets (or unboxes) statements. When we use bracket notation, it sees the first opening bracket [ and keeps going until it finds the closing bracket ]. Only then, it will evaluate the statement.

mouse[bird.size]: First it evaluates bird.size, which is "small". mouse["small"] returns true

However, with dot notation, this doesn't happen. mouse does not have a key called bird, which means that mouse.bird is undefined. Then, we ask for the size using dot notation: mouse.bird.size. Since mouse.bird is undefined, we're actually asking undefined.size. This isn't valid, and will throw an error similar to Cannot read property "size" of undefined.A
 -->






6. What's the output?
let c = { greeting: 'Hey!' };
let d;

d = c;
c.greeting = 'Hello';
console.log(d.greeting);
A: Hello
B: Hey!
C: undefined
D: ReferenceError
E: TypeError

<!-- Answer: 
In JavaScript, all objects interact by reference when setting them equal to each other.

First, variable c holds a value to an object. Later, we assign d with the same reference that c has to the object.A
 -->




7. What's the output?
let a = 3;
let b = new Number(3);
let c = 3;

console.log(a == b);
console.log(a === b);
console.log(b === c);
A: true false true
B: false false true
C: true false false
D: false true true
<!-- 
Answer: 
new Number() is a built-in function constructor. Although it looks like a number, it's not really a number: it has a bunch of extra features and is an object.

When we use the == operator (Equality operator), it only checks whether it has the same value. They both have the value of 3, so it returns true.

However, when we use the === operator (Strict equality operator), both value and type should be the same. It's not: new Number() is not a number, it's an object. Both return false.C -->

8. What's the output?
class Chameleon {
  static colorChange(newColor) {
    this.newColor = newColor;
    return this.newColor;
  }

  constructor({ newColor = 'green' } = {}) {
    this.newColor = newColor;
  }
}

const freddie = new Chameleon({ newColor: 'purple' });
console.log(freddie.colorChange('orange'));
A: orange
B: purple
C: green
D: TypeError


<!-- Answer: 
The colorChange function is static. Static methods are designed to live only on the constructor in which they are created, and cannot be passed down to any children or called upon class instances. Since freddie is an instance of class Chameleon, the function cannot be called upon it. A TypeError is thrown.D -->



9. What's the output?
let greeting;
greetign = {}; // Typo!
console.log(greetign);
A: {}
B: ReferenceError: greetign is not defined
C: undefined


<!-- 
Answer: 
It logs the object, because we just created an empty object on the global object! When we mistyped greeting as greetign, the JS interpreter actually saw this as:

global.greetign = {} in Node.js
window.greetign = {}, frames.geetign = {} and self.greetign in browsers.
self.greetign in web workers.
globalThis.greetign in all environments.
In order to avoid this, we can use "use strict". This makes sure that you have declared a variable before setting it equal to anything. -->



10. What happens when we do this?
function bark() {
  console.log('Woof!');
}

bark.animal = 'dog';
A: Nothing, this is totally fine!
B: SyntaxError. You cannot add properties to a function this way.
C: "Woof" gets logged.
D: ReferenceError

<!-- 
Answer: 
This is possible in JavaScript, because functions are objects! (Everything besides primitive types are objects)

A function is a special type of object. The code you write yourself isn't the actual function. The function is an object with properties. This property is invocable.A -->

