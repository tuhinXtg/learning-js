console.log('This is separate js file')

//add onclick function
function makeRed() {
    document.body.style.backgroundColor = 'red';
}

// option 3:  
const makebluebtn = document.getElementById('make-blue');
makebluebtn.onclick = makeble;
function makeble() {
    document.body.style.backgroundColor = 'blue';
}

// option 4
const pinkbutton = document.getElementById('make-pink')
pinkbutton.addEventListener('click', makepink)

function makepink() {
    document.body.style.backgroundColor = 'pink';
}

// another option 4
const makegreen = document.getElementById('make-green')
makegreen.addEventListener('click', function makeGreen() {
    document.body.style.backgroundColor = 'green';
})

// option 4: Final version 
// Important approach 
document.getElementById('make-golden').addEventListener('click', function () {
    document.body.style.backgroundColor = 'goldenrod'
})