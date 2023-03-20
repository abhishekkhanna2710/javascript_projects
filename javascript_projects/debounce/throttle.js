function throttler(cb, delay) {

    return function (...args) {
        document.getElementById("myButton").disabled = true;
        setTimeout(() => {
            cb();
        }, delay)
    }
}


let button = document.getElementById("myButton");
button.addEventListener("click", throttler(function () {
    document.getElementById("myButton").disabled = false;
    console.log("User clicked!!")
}, 1000))