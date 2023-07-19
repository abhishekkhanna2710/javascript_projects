const obj = {
    a: 5,
    myFun: function () {
        console.log(this)
    }
}

obj.myFun();



// wijsoawsjoawsjo


function Person(name) {
    this.name = name;


    this.sayHello = function () {
        console.log("Hello", this, this.name)
    }
}


var james = new Person("jAMES bOND");


james.sayHello();


