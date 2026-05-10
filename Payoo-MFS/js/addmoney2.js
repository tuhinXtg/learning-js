document.getElementById('add-money-btn')
    .addEventListener('click', function (event) {
        event.preventDefault();

        const adddMoney = getinputfieldvaluebyId('amount-input');
        const pinNumber = getinputfieldvaluebyId('pin-number');

        if(isNaN(adddMoney)){
            alert('Failed to add money.')
            return;
        }

        if(pinNumber == 111){
            const balance = getTextFieldValueById('acc-balance');
            const newBalance = adddMoney + balance;

            document.getElementById('acc-balance').innerText = newBalance;

            // add to transaction history..........
            const p = document.createElement('p');
            p.innerText = `Added:${adddMoney}Tk.  Balance: ${newBalance}`;
            console.log(p);

            // should be a common function..........
            document.getElementById('transaction-container').appendChild(p);

        }else{
            alert('Try again.')
        }
    })