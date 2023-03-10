function getData() {
    const url = "https://jsonplaceholder.typicode.com/todos";

    fetch(url)
        .then(res => res.json())
        .then(data =>
            // console.log(data[0])
            displayData(data)
        )
        .catch(err => {
            console.log(err)
        })
}

getData();


function displayData(data) {
    let todoData = document.getElementById("todo");

    let ul = document.createElement('ul');

    data.forEach(e => {
        let li = document.createElement('li');
        li.innerHTML = `${e.id} - ${e.title} - ${e.completed}`;
        ul.appendChild(li);

    })
    todoData.appendChild(ul)

}