//Tricky js questions

(function () {
    // b = 3 comes under global scope
    // var a = b // block scope
    var a = b = 3;
})();

console.log(typeof (a))// undefined 
console.log(typeof (b))// number


// 2nd questions 

function foo(){
    return
     {
        name:"Abhishek"
    }
}

console.log(foo())