const arr = [7, 3, 12, 2, 7, 8, 6, 1, 9, 10, 11];

function secondLargest(arr) {
    arr.sort((a, b) => b - a);

    return arr[1];
}


const secondElement = secondLargest(arr);

console.log(secondElement)


// Print sum of numbers after 5 secons

function printSumAfterDelay(a, b) {
    setTimeout(() => {
        const sum = a + b;
        console.log(`${a} and ${b} sum is ${sum}`)
    }, 5000)
}

printSumAfterDelay(5, 10);