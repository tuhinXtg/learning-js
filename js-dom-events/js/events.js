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