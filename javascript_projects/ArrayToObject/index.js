const obj = { a: 1, b: 2, c: 3 };

// convert object into array

const arr = Object.values(obj);
const arr1 = Object.keys(obj);
const arr3 = Object.entries(obj);

console.log(arr)
console.log(arr1)
console.log(arr3)


console.log("Custom function method ---")

//  Now we have to make custom function

function objectTOArray(obj) {
    const arr = [];

    for (let key in obj) {
        arr.push(key, obj[key]);
    }

    return arr;
}


const result = objectTOArray(obj);

console.log(result)