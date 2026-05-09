// console.log('Button clicked')


// login button...............
// step 1: set event handler 
document.getElementById('login-btn').addEventListener('click', function(event){

    // step 2: Prevent default behavior (prevent reloading browser)
    event.preventDefault();
    console.log('Login button clicked')

    // step 3: get the phone number 
    const phn_num = document.getElementById('number-input').value;
    console.log(phn_num);
})