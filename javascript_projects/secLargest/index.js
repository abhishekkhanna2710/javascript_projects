const arr = [7, 3, 12, 2, 7, 8, 6, 1, 9, 10, 11];

function secondLargest(arr) {
    arr.sort((a, b) => b - a);

    return arr[1];
}


const secondElement = secondLargest(arr);

console.log(secondElement)