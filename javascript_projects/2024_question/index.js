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

for(i= 0; i<n;i++){
    var duplicate = false;
    for(j = 0; j<result.length;j++){
        if(array2[i] === result[j]){
            duplicate = true;
            break;
        }

    }

    if(!duplicate){
        result.push(array2[i]) // 1 2 
    }
}

console.log(result)

// 3. Find Missing Number
// Problem: Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is    missing from the array. For example, if the input array is [3, 0, 1], 
// the output should be 2.


let input = [3, 0, 1, 2,5]

// output = 2

// 0 1,3,
//   i j

var length = input.length;

input.sort();

var j = 1;
var i = 0;

while (i<n-1){
    if(input[j] - input[i] == 1){
        j++;
        i++
    }
    else{
        console.log(j)
        break;
    }
}

  

