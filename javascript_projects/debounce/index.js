let count = 0;
function getdata() {
    console.log("Getting data when fetching " + count++)
}


function debounces(cb, time) {
    let timer;
    return function (...args) {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
            cb();
        }, time)
    }
}


const betterFunction = debounces(getdata, 1000);




// second appraoch


function debounce(func, delay) {
    let timeoutId;
    return function (...args) {
        clearTimeout(timeoutId);
        setTimeout(() => {
            func();
        }, delay);
    };
}

const button = document.getElementById('myButton');
button.addEventListener('click', debounce(function () {
    console.log('Button clicked!');
}, 1000));
