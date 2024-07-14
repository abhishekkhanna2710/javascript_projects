// Write a function to rotate an array to the right by a given number of steps.
//  For example, if the input array is [1, 2, 3, 4, 5] and the number of steps is 2,
//   output should be [4, 5, 1, 2, 3].

function rotateArray(arr, steps) {
    const len = arr.length;
    const rotatedArray = [];

    // Add the last 'steps' elements to the rotatedArray
    for (var i = len - steps; i < len; i++) {
        rotatedArray.push(arr[i]);
    }

    // Add the remaining elements to the rotatedArray
    for (var i = 0; i < len - steps; i++) {
        rotatedArray.push(arr[i]);
    }

    return rotatedArray;
}

const arr = [1, 2, 3, 4, 5];
const steps = 2;
console.log(rotateArray(arr, steps)); // Output: [4, 5, 1, 2, 3]
