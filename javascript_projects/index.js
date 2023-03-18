// async function getData() {
//     const url = "https://jsonplaceholder.typicode.com/posts";

//     // fetch(url)
//     //     .then(res => res.json())
//     //     .then(data =>
//     //         // console.log(data[0])
//     //         displayData(data)
//     //     )
//     //     .catch(err => {
//     //         console.log(err)
//     //     })


//     // await async

//     const response = await fetch(url);

//     const data = await response.json();
//     console.log(data)
//     if (response) {
//         hideloader();
//     }
//     displayData(data);

// }

// getData();

// function hideloader() {
//     document.getElementById('loading').style.display = 'none'
// }


// function displayData(data) {
//     let todoData = document.getElementById("todo");

//     let ul = document.createElement('ul');

//     data.forEach(e => {
//         let li = document.createElement('li');
//         li.innerHTML = `${e.id} - ${e.title} - ${e.body}`;
//         ul.appendChild(li);

//     })
//     todoData.appendChild(ul)

// }


// function value(b) {
//     const a = 100;
//     a = b;
//     return a;
// }


// console.log(value(100))


let fname = "Masai"
let lname = "School"

const person = { fname, lname }

console.log(person)


// ******************************

const arr = ['albert', 'shnat', "rtex"];

arr[0] = "yogesh"

console.log(arr[0])

// ******************************

function getName() {
    names = 'albert'
}

getName();
console.log(names)


var isAuth;

console.log(isAuth)


var str = 'Abhishek'

var { length } = str;


// *********************************************
function getname() {
    var status = false;

    if (status) {
        const rext = 'masai'
    }
    console.log(rext)

}

getname();