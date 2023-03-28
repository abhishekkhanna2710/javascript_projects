var div = document.querySelector("div");
var button = document.querySelector("button");
var anchor = document.querySelector("a");

div.addEventListener("click", () => {
    console.log("div")
})
//************Event bubbling***********

// button.addEventListener("click", () => {
//     console.log("button")
// })

anchor.addEventListener("click", (event) => {
    event.stopPropagation();
    event.preventDefault();
    console.log("anchor")
})

//**********Stop prpogation code***********

button.addEventListener("click", (event) => {
    // event.stopPropagation();
    console.log("button")
})

// Immmediate Propagation
button.addEventListener("click", (event) => {
    event.stopImmediatePropagation();
    console.log("button1")
})

// ************** Event Capturing ***********

// button.addEventListener("click", () => {
//     console.log("button")
// }, true)

// ***********Theory***********
// In event bubbling : it goes from child to parent
// In event Capturing : it goes from parent to child => just put true 