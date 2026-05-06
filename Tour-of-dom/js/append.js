// const { createElement } = require("react");

const mainContainer = document.getElementById('main-content');
// console.log(mainContainer)

// what to be added
const section = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = 'My food list';
section.appendChild(h1);

const ul = document.createElement('ul');
const li1 = document.createElement('li');
li1.innerText = 'Biriyani';
ul.appendChild(li1);
const li2 = document.createElement('li');
li2.innerText = 'Kacchi';
ul.appendChild(li2);

section.appendChild(ul);

mainContainer.appendChild(section);



// const section2 = document.createElement('section');
// section2.innerHTML =
// <h1>MY new dress</h1>
// <ul>
        
// </ul>