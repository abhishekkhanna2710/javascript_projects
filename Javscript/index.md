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
console.log(g)// 0 then it will print 10 Hoisting concept

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

Que 1 - What are the possible ways to create objects in JavaScript ?

      There are many ways to create objects in javascript as below

Object constructor:

The simplest way to create an empty object is using the Object constructor.Currently this approach is not recommended.

var object = new Object();
Object's create method:

The create method of Object creates a new object by passing the prototype object as a parameter

var object = Object.create(null);
Object literal syntax:

The object literal syntax(or object initializer), is a comma - separated set of name - value pairs wrapped in curly braces.

var object = {
name: "Sudheer",
age: 34
};

Object literal property values can be of any data type, including array, function, and nested object.
Note: This is an easiest way to create an object

Function constructor:

Create any function and apply the new operator to create object instances,

      function Person(name) {
            this.name = name;
            this.age = 21;
      }

var object = new Person("Sudheer");
Function constructor with prototype:

This is similar to function constructor but it uses prototype for their properties and methods,

      function Person() { }

Person.prototype.name = "Sudheer";
var object = new Person();
This is equivalent to an instance created with an object create method with a function prototype and then call that function with an instance and parameters as arguments.

function func() { };

new func(x, y, z);
(OR)

// Create a new instance using function prototype.
var newInstance = Object.create(func.prototype)

// Call the function
var result = func.call(newInstance, x, y, z),

      // If the result is a non-null object then use it otherwise just use the new instance.
      console.log(result && typeof result === 'object' ? result : newInstance);

ES6 Class syntax:

ES6 introduces class feature to create the objects

class Person {
constructor(name) {
this.name = name;
}
}

var object = new Person("Sudheer");
Singleton pattern:

A Singleton is an object which can only be instantiated one time.Repeated calls to its constructor return the same instance and this way one can ensure that they don't accidentally create multiple instances.

var object = new (function () {
this.name = "Sudheer";
})();

What is the purpose of the array slice method
The slice() method returns the selected elements in an array as a new array object.It selects the elements starting at the given start argument, and ends at the given optional end argument without including the last element.If you omit the second argument then it selects till the end.

Some of the examples of this method are,

      let arrayIntegers = [1, 2, 3, 4, 5];

let arrayIntegers1 = arrayIntegers.slice(0, 2); // returns [1,2]
let arrayIntegers2 = arrayIntegers.slice(2, 3); // returns [3]
let arrayIntegers3 = arrayIntegers.slice(4); //returns [5]
Note: Slice method won't mutate the original array but it returns the subset as a new array.

⬆ Back to Top

What is the purpose of the array splice method
The splice() method is used either adds / removes items to / from an array, and then returns the removed item.The first argument specifies the array position for insertion or deletion whereas the optional second argument indicates the number of elements to be deleted.Each additional argument is added to the array.

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
Used to pick the elements from array Used to insert or delete elements to / from array

What is the difference between Call, Apply and Bind
The difference between Call, Apply and Bind can be explained with below examples,

      Call: The call() method invokes a function with a given this value and arguments provided one by one

var employee1 = { firstName: "John", lastName: "Rodson" };
var employee2 = { firstName: "Jimmy", lastName: "Baily" };

function invite(greeting1, greeting2) {
console.log(
greeting1 + " " + this.firstName + " " + this.lastName + ", " + greeting2
);
}

invite.call(employee1, "Hello", "How are you?"); // Hello John Rodson, How are you?
invite.call(employee2, "Hello", "How are you?"); // Hello Jimmy Baily, How are you?
Apply: Invokes the function with a given this value and allows you to pass in arguments as an array

var employee1 = { firstName: "John", lastName: "Rodson" };
var employee2 = { firstName: "Jimmy", lastName: "Baily" };

function invite(greeting1, greeting2) {
console.log(
greeting1 + " " + this.firstName + " " + this.lastName + ", " + greeting2
);
}

invite.apply(employee1, ["Hello", "How are you?"]); // Hello John Rodson, How are you?
invite.apply(employee2, ["Hello", "How are you?"]); // Hello Jimmy Baily, How are you?
bind: returns a new function, allowing you to pass any number of arguments

var employee1 = { firstName: "John", lastName: "Rodson" };
var employee2 = { firstName: "Jimmy", lastName: "Baily" };

function invite(greeting1, greeting2) {
console.log(
greeting1 + " " + this.firstName + " " + this.lastName + ", " + greeting2
);
}

var inviteEmployee1 = invite.bind(employee1);
var inviteEmployee2 = invite.bind(employee2);
inviteEmployee1("Hello", "How are you?"); // Hello John Rodson, How are you?
inviteEmployee2("Hello", "How are you?"); // Hello Jimmy Baily, How are you?
Call and apply are pretty interchangeable.Both execute the current function immediately. You need to decide whether it’s easier to send in an array or a comma separated list of arguments.You can remember by treating Call is for comma(separated list) and Apply is for Array.

Whereas Bind creates a new function that will have this set to the first parameter passed to bind().

What is the purpose of the array splice method
The splice() method is used either adds / removes items to / from an array, and then returns the removed item.The first argument specifies the array position for insertion or deletion whereas the optional second argument indicates the number of elements to be deleted.Each additional argument is added to the array.

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
Used to pick the elements from array Used to insert or delete elements to / from array
⬆ Back to Top

How do you compare Object and Map
Objects are similar to Maps in that both let you set keys to values, retrieve those values, delete keys, and detect whether something is stored at a key.Due to this reason, Objects have been used as Maps historically.But there are important differences that make using a Map preferable in certain cases.

The keys of an Object are Strings and Symbols, whereas they can be any value for a Map, including functions, objects, and any primitive.
The keys in Map are ordered while keys added to Object are not.Thus, when iterating over it, a Map object returns keys in order of insertion.
You can get the size of a Map easily with the size property, while the number of properties in an Object must be determined manually.
A Map is an iterable and can thus be directly iterated, whereas iterating over an Object requires obtaining its keys in some fashion and iterating over them.
An Object has a prototype, so there are default keys in the map that could collide with your keys if you're not careful. As of ES5 this can be bypassed by using map = Object.create(null), but this is seldom done.
A Map may perform better in scenarios involving frequent addition and removal of key pairs.
⬆ Back to Top

What is the difference between == and === operators
JavaScript provides both strict(===, !==) and type - converting(==, !=) equality comparison.The strict operators take type of variable in consideration, while non - strict operators make type correction/conversion based upon values of variables. The strict operators follow the below conditions for different types,

Two strings are strictly equal when they have the same sequence of characters, same length, and same characters in corresponding positions.
Two numbers are strictly equal when they are numerically equal.i.e, Having the same number value.There are two special cases in this,
NaN is not equal to anything, including NaN.
Positive and negative zeros are equal to one another.
Two Boolean operands are strictly equal if both are true or both are false.
Two objects are strictly equal if they refer to the same Object.
Null and Undefined types are not equal with ===, but equal with ==.i.e, null === undefined-- > false but null == undefined-- > true
Some of the example which covers the above cases,

      0 == false // true

0 === false // false
1 == "1" // true
1 === "1" // false
null == undefined // true
null === undefined // false
'0' == false // true
'0' === false // false
[] == [] or[] === [] //false, refer different objects in memory
{ }== {} or { }=== {} //false, refer different objects in memory

What is the difference between let and var
You can list out the differences in a tabular format

var let
It is been available from the beginning of JavaScript Introduced as part of ES6
It has function scope It has block scope
Variables will be hoisted Hoisted but not initialized
Let's take an example to see the difference,

function userDetails(username) {
if (username) {
console.log(salary); // undefined due to hoisting
console.log(age); // ReferenceError: Cannot access 'age' before initialization
let age = 30;
var salary = 10000;
}
console.log(salary); //10000 (accessible due to function scope)
console.log(age); //error: age is not defined(due to block scope)
}
userDetails("John");
⬆ Back to Top

What is the reason to choose the name let as a keyword
let is a mathematical statement that was adopted by early programming languages like Scheme and Basic.It has been borrowed from dozens of other languages that use let already as a traditional keyword as close to var as possible.

⬆ Back to Top

How do you redeclare variables in switch block without an error
If you try to redeclare variables in a switch block then it will cause errors because there is only one block.For example, the below code block throws a syntax error as below,

      let counter = 1;

switch (x) {
case 0:
let name;
break;

      case 1:
            let name; // SyntaxError for redeclaration.
            break;

}
To avoid this error, you can create a nested block inside a case clause and create a new block scoped lexical environment.

let counter = 1;
switch (x) {
case 0: {
let name;
break;
}
case 1: {
let name; // No SyntaxError for redeclaration.
break;
}
}
⬆ Back to Top

What is the Temporal Dead Zone
The Temporal Dead Zone is a behavior in JavaScript that occurs when declaring a variable with the let and const keywords, but not with var.In ECMAScript 6, accessing a let or const variable before its declaration (within its scope) causes a ReferenceError.The time span when that happens, between the creation of a variable’s binding and its declaration, is called the temporal dead zone.

      Let's see this behavior with an example,

function somemethod() {
console.log(counter1); // undefined
console.log(counter2); // ReferenceError
var counter1 = 1;
let counter2 = 2;
}
⬆ Back to Top

What is IIFE(Immediately Invoked Function Expression)
IIFE(Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined.The signature of it would be as below,

      (function () {
            // logic here
      })();

The primary reason to use an IIFE is to obtain data privacy because any variables declared within the IIFE cannot be accessed by the outside world.i.e, If you try to access variables with IIFE then it throws an error as below,

      (function () {
            var message = "IIFE";
            console.log(message);
      })();

console.log(message); //Error: message is not defined

What is scope in javascript
Scope is the accessibility of variables, functions, and objects in some particular part of your code during runtime.In other words, scope determines the visibility of variables and other resources in areas of your code.

⬆ Back to Top

What is a service worker
A Service worker is basically a script(JavaScript file) that runs in the background, separate from a web page and provides features that don't need a web page or user interaction. Some of the major features of service workers are Rich offline experiences(offline first web application development), periodic background syncs, push notifications, intercept and handle network requests and programmatically managing a cache of responses.

⬆ Back to Top

How do you manipulate DOM using a service worker
Service worker can't access the DOM directly. But it can communicate with the pages it controls by responding to messages sent via the postMessage interface, and those pages can manipulate the DOM.

⬆ Back to Top

How do you reuse information across service worker restarts
The problem with service worker is that it gets terminated when not in use, and restarted when it's next needed, so you cannot rely on global state within a service worker's onfetch and onmessage handlers.In this case, service workers will have access to IndexedDB API in order to persist and reuse across restarts.

⬆ Back to Top

What is IndexedDB
IndexedDB is a low - level API for client - side storage of larger amounts of structured data, including files / blobs.This API uses indexes to enable high - performance searches of this data.

⬆ Back to Top

What is web storage
Web storage is an API that provides a mechanism by which browsers can store key / value pairs locally within the user's browser, in a much more intuitive fashion than using cookies. The web storage provides two mechanisms for storing data on the client.

Local storage: It stores data for current origin with no expiration date.
Session storage: It stores data for one session and the data is lost when the browser tab is closed.
⬆ Back to Top

What is a post message
Post message is a method that enables cross - origin communication between Window objects.(i.e, between a page and a pop - up that it spawned, or between a page and an iframe embedded within it).Generally, scripts on different pages are allowed to access each other if and only if the pages follow same - origin policy(i.e, pages share the same protocol, port number, and host).

⬆ Back to Top

What is a Cookie
A cookie is a piece of data that is stored on your computer to be accessed by your browser.Cookies are saved as key / value pairs.For example, you can create a cookie named username as below,

      document.cookie = "username=John";

Screenshot

⬆ Back to Top

Why do you need a Cookie
Cookies are used to remember information about the user profile(such as username).It basically involves two steps,

      When a user visits a web page, the user profile can be stored in a cookie.

Next time the user visits the page, the cookie remembers the user profile.
⬆ Back to Top

What are the options in a cookie
There are few below options available for a cookie,

      By default, the cookie is deleted when the browser is closed but you can change this behavior by setting expiry date(in UTC time).
            document.cookie = "username=John; expires=Sat, 8 Jun 2019 12:00:00 UTC";

By default, the cookie belongs to a current page.But you can tell the browser what path the cookie belongs to using a path parameter.
document.cookie = "username=John; path=/services";
⬆ Back to Top

How do you delete a cookie
You can delete a cookie by setting the expiry date as a passed date.You don't need to specify a cookie value in this case. For example, you can delete a username cookie in the current page as below.

document.cookie =
"username=; expires=Fri, 07 Jun 2019 00:00:00 UTC; path=/;";
Note: You should define the cookie path option to ensure that you delete the right cookie.Some browsers doesn't allow to delete a cookie unless you specify a path parameter.

⬆ Back to Top

What are the differences between cookie, local storage and session storage
Below are some of the differences between cookie, local storage and session storage,

      Feature Cookie Local storage Session storage

Accessed on client or server side Both server - side & client - side client - side only client - side only
Lifetime As configured using Expires option until deleted until tab is closed
SSL support Supported Not supported Not supported
Maximum data size 4KB 5 MB 5MB
⬆ Back to Top

What is the main difference between localStorage and sessionStorage
LocalStorage is the same as SessionStorage but it persists the data even when the browser is closed and reopened(i.e it has no expiration time) whereas in sessionStorage data gets cleared when the page session ends.

What is a promise
A promise is an object that may produce a single value some time in the future with either a resolved value or a reason that it’s not resolved(for example, network error).It will be in one of the 3 possible states: fulfilled, rejected, or pending.

The syntax of Promise creation looks like below,

const promise = new Promise(function (resolve, reject) {
// promise description
});
The usage of a promise would be as below,

const promise = new Promise(
(resolve) => {
setTimeout(() => {
resolve("I'm a Promise!");
}, 5000);
},
(reject) => { }
);

promise.then((value) => console.log(value));

What is the difference between null and undefined
Below are the main differences between null and undefined,

Null Undefined
It is an assignment value which indicates that variable points to no object. It is not an assignment value where a variable has been declared but has not yet been assigned a value.
Type of null is object Type of undefined is undefined
The null value is a primitive value that represents the null, empty, or non-existent reference. The undefined value is a primitive value used when a variable has not been assigned a value.
Indicates the absence of a value for a variable Indicates absence of variable itself
Converted to zero (0) while performing primitive operations Converted to NaN while performing primitive operations

Q- What is event bubbling
Ans- Event bubbling is a type of event propagation where the event first triggers on the innermost target element, and then successively triggers on the ancestors (parents) of the target element in the same nesting hierarchy till it reaches the outermost DOM element.
