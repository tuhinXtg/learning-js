// console.log('Button clicked')


// login button...............
// // step 1: set event handler 
// document.getElementById('login-btn').addEventListener('click', function(event){

//     // step 2: Prevent default behavior (prevent reloading browser)
//     event.preventDefault();
//     // step 3: get the phone number 
//     const phn_num = document.getElementById('number-input').value;
//     const pin_num = document.getElementById('pin-input').value;
//     console.log(phn_num, pin_num);

//     // though it is not the ideal way...........
//     if(phn_num == '5' && pin_num == '1234'){
//         console.log("You are logged in")
//     }
//     else{
//         alert('Wrong credentials');
//     }
// })

document.getElementById('login-btn')
    .addEventListener('click', function (event) {
        event.preventDefault();
        const phn_num = document.getElementById('number-input').value;
        const pin_num = document.getElementById('pin-input').value;
        
        // not the appropriate way to check.....
        if(phn_num == '5' && pin_num == '123'){
            console.log('You are logged in')
            window.location.href = '/home.html';
        }else{
            alert('Try again. Wrong credentials.')
        }
})