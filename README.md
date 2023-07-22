Que 1- What are the possible ways to create objects in JavaScript?

There are many ways to create objects in javascript as below

Object constructor:

The simplest way to create an empty object is using the Object constructor. Currently this approach is not recommended.

var object = new Object();
Object's create method:

The create method of Object creates a new object by passing the prototype object as a parameter

var object = Object.create(null);
Object literal syntax:

The object literal syntax (or object initializer), is a comma-separated set of name-value pairs wrapped in curly braces.

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

function Person() {}
Person.prototype.name = "Sudheer";
var object = new Person();
This is equivalent to an instance created with an object create method with a function prototype and then call that function with an instance and parameters as arguments.

function func() {};

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

A Singleton is an object which can only be instantiated one time. Repeated calls to its constructor return the same instance and this way one can ensure that they don't accidentally create multiple instances.

var object = new (function () {
this.name = "Sudheer";
})();

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
Call and apply are pretty interchangeable. Both execute the current function immediately. You need to decide whether it’s easier to send in an array or a comma separated list of arguments. You can remember by treating Call is for comma (separated list) and Apply is for Array.

Whereas Bind creates a new function that will have this set to the first parameter passed to bind().
