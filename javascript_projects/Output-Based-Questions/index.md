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

Q3. What's the output?
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

Q11. What's the output?
function Person(firstName, lastName) {
this.firstName = firstName;
this.lastName = lastName;
}

const member = new Person('Lydia', 'Hallie');
Person.getFullName = function() {
return `${this.firstName} ${this.lastName}`;
};

console.log(member.getFullName());
A: TypeError
B: SyntaxError
C: Lydia Hallie
D: undefined undefined
Answer

<!-- Answer:
In JavaScript, functions are objects, and therefore, the method getFullName gets added to the constructor function object itself. For that reason, we can call Person.getFullName(), but member.getFullName throws a TypeError.

If you want a method to be available to all object instances, you have to add it to the prototype property:

Person.prototype.getFullName = function() {
  return `${this.firstName} ${this.lastName}`;
}; -->

12. What's the output?
    function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    }

const lydia = new Person('Lydia', 'Hallie');
const sarah = Person('Sarah', 'Smith');

console.log(lydia);
console.log(sarah);
A: Person {firstName: "Lydia", lastName: "Hallie"} and undefined
B: Person {firstName: "Lydia", lastName: "Hallie"} and Person {firstName: "Sarah", lastName: "Smith"}
C: Person {firstName: "Lydia", lastName: "Hallie"} and {}
D: Person {firstName: "Lydia", lastName: "Hallie"} and ReferenceError
Answer

<!-- Answer:
For sarah, we didn't use the new keyword. When using new, this refers to the new empty object we create. However, if you don't add new, this refers to the global object!

We said that this.firstName equals "Sarah" and this.lastName equals "Smith". What we actually did, is defining global.firstName = 'Sarah' and global.lastName = 'Smith'. sarah itself is left undefined, since we don't return a value from the Person function.A -->

Q13. What are the three phases of event propagation?
A: Target > Capturing > Bubbling
B: Bubbling > Target > Capturing
C: Target > Bubbling > Capturing
D: Capturing > Target > Bubbling

<!-- Answer:
During the capturing phase, the event goes through the ancestor elements down to the target element. It then reaches the target element, and bubbling begins.D -->

14. All object have prototypes.
    A: true
    B: false

<!--
Answer:
All objects have prototypes, except for the base object. The base object is the object created by the user, or an object that is created using the new keyword. The base object has access to some methods and properties, such as .toString. This is the reason why you can use built-in JavaScript methods! All of such methods are available on the prototype. Although JavaScript can't find it directly on your object, it goes down the prototype chain and finds it there, which makes it accessible for you.B -->

15. What's the output?
    function sum(a, b) {
    return a + b;
    }

sum(1, '2');
A: NaN
B: TypeError
C: "12"
D: 3

<!--
Answer:
JavaScript is a dynamically typed language: we don't specify what types certain variables are. Values can automatically be converted into another type without you knowing, which is called implicit type coercion. Coercion is converting from one type into another.C

 In this example, JavaScript converts the number 1 into a string, in order for the function to make sense and return a value. During the addition of a numeric type (1) and a string type ('2'), the number is treated as a string. We can concatenate strings like "Hello" + "World", so what's happening here is "1" + "2" which returns "12". -->

16. What's the output?
    let number = 0;
    console.log(number++);
    console.log(++number);
    console.log(number);
    A: 1 1 2
    B: 1 2 2
    C: 0 2 2
    D: 0 1 2

<!-- Answer:
The postfix unary operator ++:

Returns the value (this returns 0)
Increments the value (number is now 1)
The prefix unary operator ++:

Increments the value (number is now 2)
Returns the value (this returns 2)
This returns 0 2 2.C -->

17. What's the output?
    function getPersonInfo(one, two, three) {
    console.log(one);
    console.log(two);
    console.log(three);
    }

const person = 'Lydia';
const age = 21;

getPersonInfo`${person} is ${age} years old`;
A: "Lydia" 21 ["", " is ", " years old"]
B: ["", " is ", " years old"] "Lydia" 21
C: "Lydia" ["", " is ", " years old"] 21

<!--
Answer:
If you use tagged template literals, the value of the first argument is always an array of the string values. The remaining arguments get the values of the passed expressions! -->

18. What's the output?
    function checkAge(data) {
    if (data === { age: 18 }) {
    console.log('You are an adult!');
    } else if (data == { age: 18 }) {
    console.log('You are still an adult.');
    } else {
    console.log(`Hmm.. You don't have an age I guess`);
    }
    }

checkAge({ age: 18 });
A: You are an adult!
B: You are still an adult.
C: Hmm.. You don't have an age I guess

<!--

Answer:
When testing equality, primitives are compared by their value, while objects are compared by their reference. JavaScript checks if the objects have a reference to the same location in memory.

The two objects that we are comparing don't have that: the object we passed as a parameter refers to a different location in memory than the object we used in order to check equality.

This is why both { age: 18 } === { age: 18 } and { age: 18 } == { age: 18 } return false. -->

19. What's the output?
    function getAge(...args) {
    console.log(typeof args);
    }

getAge(21);
A: "number"
B: "array"
C: "object"
D: "NaN"

<!--

Answer:
The rest parameter (...args) lets us "collect" all remaining arguments into an array. An array is an object, so typeof args returns "object"C -->

20. What's the output?
    function getAge() {
    'use strict';
    age = 21;
    console.log(age);
    }

getAge();
A: 21
B: undefined
C: ReferenceError
D: TypeError
Answer

<!-- Answer:
With "use strict", you can make sure that you don't accidentally declare global variables. We never declared the variable age, and since we use "use strict", it will throw a reference error. If we didn't use "use strict", it would have worked, since the property age would have gotten added to the global object. C -->

21. What's the value of sum?
    const sum = eval('10*10+5');
    A: 105
    B: "105"
    C: TypeError
    D: "10*10+5"
    Answer
22. How long is cool_secret accessible?
    sessionStorage.setItem('cool_secret', 123);
    A: Forever, the data doesn't get lost.
    B: When the user closes the tab.
    C: When the user closes the entire browser, not only the tab.
    D: When the user shuts off their computer.
    Answer
    Answer: B
    The data stored in sessionStorage is removed after closing the tab.

If you used localStorage, the data would've been there forever, unless for example localStorage.clear() is invoked.

23. What's the output?
    var num = 8;
    var num = 10;

console.log(num);
A: 8
B: 10
C: SyntaxError
D: ReferenceError
Answer
Answer: B
With the var keyword, you can declare multiple variables with the same name. The variable will then hold the latest value.

You cannot do this with let or const since they're block-scoped.

24. What's the output?
    const obj = { 1: 'a', 2: 'b', 3: 'c' };
    const set = new Set([1, 2, 3, 4, 5]);

obj.hasOwnProperty('1');
obj.hasOwnProperty(1);
set.has('1');
set.has(1);
A: false true false true
B: false true true true
C: true true false true
D: true true true true
Answer
Answer: C
All object keys (excluding Symbols) are strings under the hood, even if you don't type it yourself as a string. This is why obj.hasOwnProperty('1') also returns true.

It doesn't work that way for a set. There is no '1' in our set: set.has('1') returns false. It has the numeric type 1, set.has(1) returns true.

25. What's the output?
    const obj = { a: 'one', b: 'two', a: 'three' };
    console.log(obj);
    A: { a: "one", b: "two" }
    B: { b: "two", a: "three" }
    C: { a: "three", b: "two" }
    D: SyntaxError
    Answer
    Answer: C
    If you have two keys with the same name, the key will be replaced. It will still be in its first position, but with the last specified value.

26. The JavaScript global execution context creates two things for you: the global object, and the "this" keyword.
    A: true
    B: false
    C: it depends
    Answer
    Answer: A
    The base execution context is the global execution context: it's what's accessible everywhere in your code.

27. What's the output?
    for (let i = 1; i < 5; i++) {
    if (i === 3) continue;
    console.log(i);
    }
    A: 1 2
    B: 1 2 3
    C: 1 2 4
    D: 1 3 4
    Answer
    Answer: C
    The continue statement skips an iteration if a certain condition returns true.

28. What's the output?
    String.prototype.giveLydiaPizza = () => {
    return 'Just give Lydia pizza already!';
    };

const name = 'Lydia';

console.log(name.giveLydiaPizza())
A: "Just give Lydia pizza already!"
B: TypeError: not a function
C: SyntaxError
D: undefined
Answer
Answer: A
String is a built-in constructor, which we can add properties to. I just added a method to its prototype. Primitive strings are automatically converted into a string object, generated by the string prototype function. So, all strings (string objects) have access to that method!

29. What's the output?
    const a = {};
    const b = { key: 'b' };
    const c = { key: 'c' };

a[b] = 123;
a[c] = 456;

console.log(a[b]);
A: 123
B: 456
C: undefined
D: ReferenceError
Answer
Answer: B
Object keys are automatically converted into strings. We are trying to set an object as a key to object a, with the value of 123.

However, when we stringify an object, it becomes "[object Object]". So what we are saying here, is that a["[object Object]"] = 123. Then, we can try to do the same again. c is another object that we are implicitly stringifying. So then, a["[object Object]"] = 456.

Then, we log a[b], which is actually a["[object Object]"]. We just set that to 456, so it returns 456.

30. What's the output?
    const foo = () => console.log('First');
    const bar = () => setTimeout(() => console.log('Second'));
    const baz = () => console.log('Third');

bar();
foo();
baz();
A: First Second Third
B: First Third Second
C: Second First Third
D: Second Third First
Answer
Answer: B
We have a setTimeout function and invoked it first. Yet, it was logged last.

This is because in browsers, we don't just have the runtime engine, we also have something called a WebAPI. The WebAPI gives us the setTimeout function to start with, and for example the DOM.

After the callback is pushed to the WebAPI, the setTimeout function itself (but not the callback!) is popped off the stack.

Now, foo gets invoked, and "First" is being logged.

foo is popped off the stack, and baz gets invoked. "Third" gets logged.

The WebAPI can't just add stuff to the stack whenever it's ready. Instead, it pushes the callback function to something called the queue.

This is where an event loop starts to work. An event loop looks at the stack and task queue. If the stack is empty, it takes the first thing on the queue and pushes it onto the stack.

bar gets invoked, "Second" gets logged, and it's popped off the stack.

What is the purpose of the array slice method
The slice() method returns the selected elements in an array as a new array object. It selects the elements starting at the given start argument, and ends at the given optional end argument without including the last element. If you omit the second argument then it selects till the end.

Some of the examples of this method are,

let arrayIntegers = [1, 2, 3, 4, 5];
let arrayIntegers1 = arrayIntegers.slice(0, 2); // returns [1,2]
let arrayIntegers2 = arrayIntegers.slice(2, 3); // returns [3]
let arrayIntegers3 = arrayIntegers.slice(4); //returns [5]
Note: Slice method won't mutate the original array but it returns the subset as a new array.

⬆ Back to Top

What is the purpose of the array splice method
The splice() method is used either adds/removes items to/from an array, and then returns the removed item. The first argument specifies the array position for insertion or deletion whereas the optional second argument indicates the number of elements to be deleted. Each additional argument is added to the array.

Some of the examples of this method are,

let arrayIntegersOriginal1 = [1, 2, 3, 4, 5];
let arrayIntegersOriginal2 = [1, 2, 3, 4, 5];
let arrayIntegersOriginal3 = [1, 2, 3, 4, 5];

let arrayIntegers1 = arrayIntegersOriginal1.splice(0, 2); // returns [1, 2]; original array: [3, 4, 5]
let arrayIntegers2 = arrayIntegersOriginal2.splice(3); // returns [4, 5]; original array: [1, 2, 3]
let arrayIntegers3 = arrayIntegersOriginal3.splice(3, 1, "a", "b", "c"); //returns [4]; original array: [1, 2, 3, "a", "b", "c", 5]
Note: Splice method modifies the original array and returns the deleted array.

⬆ Back to Top

What is the difference between slice and splice
Some of the major difference in a tabular form

Slice Splice
Doesn't modify the original array(immutable) Modifies the original array(mutable)
Returns the subset of original array Returns the deleted elements as array
Used to pick the elements from array Used to insert or delete elements to/from array
