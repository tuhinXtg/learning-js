const { createElement, use } = require("react")

function loadUsers2() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => displayData(data))
}
function displayData(data) {
    const ul = document.getElementById('user-list');
    for (const user of data) {
        const li = document.createElement('li')
        li.innerText = user.id;
        ul.appendChild(li);
    }
}