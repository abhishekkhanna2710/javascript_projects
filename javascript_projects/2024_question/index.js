// 1. Array Rotation
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


// 2. Remove Duplicates
// Problem: Write a function to remove duplicate elements from an array and return the new array. For example, if the input array is [1, 2, 2, 3, 4, 4, 5],
//  the output should be [1, 2, 3, 4, 5].

const array2 = [1, 2, 2, 3, 4, 4, 5];
//                   i  
//                 

let n = array2.length;


var i = 0;
var j = 0;

var result = [];

for (i = 0; i < n; i++) {
    var duplicate = false;
    for (j = 0; j < result.length; j++) {
        if (array2[i] === result[j]) {
            duplicate = true;
            break;
        }

    }

    if (!duplicate) {
        result.push(array2[i]) // 1 2 
    }
}

console.log(result)

// 3. Find Missing Number
// Problem: Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is    missing from the array. For example, if the input array is [3, 0, 1], 
// the output should be 2.


let input = [3, 0, 1, 2, 5]

// output = 2

// 0 1,3,
//   i j

var length = input.length;

input.sort();

var j = 1;
var i = 0;

while (i < n - 1) {
    if (input[j] - input[i] == 1) {
        j++;
        i++
    }
    else {
        console.log(j)
        break;
    }
}

// 4. Move Zeroes
// Problem: Write a function to move all zeroes in an array to the end while maintaining the relative order of the other elements. For example, if the input array is [0, 1, 0, 3, 12], 
// the output should be [1, 3, 12, 0, 0].

let check = [0, 1, 0, 3, 12];

let answer = [];


for (var i = 0; i < check.length; i++) {
    if (check[i] !== 0) {
        answer.push(check[i]);
    }

}

let answerZeros = check.length - answer.length

for (var i = 0; i < answerZeros; i++) {
    answer.push(0);
}

console.log(answer)


// 5  Move zeroes and ones

// input = [0,1,1,1,0,0,1,0,1,0]
// output = [0,0,0,0,0,1,1,1,1]


var valZeroes = [0, 1, 1, 1, 0, 0, 1, 0, 1, 0];

var checkResult = [];

for (var i = 0; i < valZeroes.length; i++) {
    if (valZeroes[i] == 0) {
        checkResult.push(valZeroes[i]);
    }
}

let FillOnes = valZeroes.length - checkResult.length;


for (var i = 0; i < FillOnes; i++) {
    checkResult.push(1);
}


console.log(checkResult)

// 6. Maximum Product of Three Numbers
// Problem: Given an integer array, find three numbers whose product is maximum and return the maximum product. For example, if the input array is [1, 2, 3, 4], 
// the output should be 24 because 2 * 3 * 4 = 24.

let numbers = [1, 2, 3, 4];

var max = -Infinity;

for (let i = 0; i < numbers.length - 2; i++) {
    for (let j = i + 1; j < numbers.length - 1; j++) {
        for (let k = j + 1; k < numbers.length; k++) {
            let product = numbers[i] * numbers[j] * numbers[k];
            if (product > max) {
                max = product;
            }
        }
    }
}

console.log(max); // Output: 24

// 7. Merge Sorted Arrays
// Problem: Write a function to merge two sorted arrays into one sorted array. For example, if the input arrays are [1, 3, 5] and [2, 4, 6],
//  the output should be [1, 2, 3, 4, 5, 6].

const arrt1 = [1, 3, 5];
const arrt2 = [2, 4, 6]

const mergedArray = [];

var i = 0, j = 0;

while (i < arrt1.length && j < arrt2.length) {
    if (arrt1[i] < arrt2[j]) {
        mergedArray.push(arrt1[i])
        i++;
    }
    else {
        mergedArray.push(arrt2[j])
        j++;
    }
}


while (i < arrt1.length) {
    mergedArray.push(arrt1[i])
    i++;
}
while (j < arrt2.length) {
    mergedArray.push(arrt2[j])
    j++;
}


console.log(mergedArray)


// 9. Find the Majority Element
// Problem: Write a function to find the majority element in an array. The majority element is the element that appears more than half the time in the array. For example, if the input array is [3, 2, 3], the output should be 3.


// 3 2 3
// i
//     j
// count = 1
function findMajorityElement(elements) {
    const n = elements.length;

    // Iterate through each element
    for (let i = 0; i < n; i++) {
        let count = 0;

        // Count occurrences of elements[i] in the array
        for (let j = 0; j < n; j++) {
            if (elements[j] === elements[i]) {
                count++;
            }
        }

        // If elements[i] appears more than half the time, it's the majority element
        if (count > n / 2) {
            return elements[i];
        }
    }

    // If no majority element found
    return null;
}

const elements = [3, 2, 3];
const majorityElement = findMajorityElement(elements);
console.log(majorityElement); // Output: 3

//  Remove that nested array


const nestedArray = [[[[1, 2]]]];

let results = nestedArray[0]
results= results[0]
results= results[0]



console.log(results)



// Hello Mam,

// Actually i am looking for the role of MERN Stack developer in your organization

// Experience: 2 years

// Immediate Joiner

// Is there any position available for the same

// Please let me know