document.getElementById('cash-out-btn')
    .addEventListener('click', function (event) {
        event.preventDefault();

        const amount = getinputfieldvaluebyId('cashout-amount-input');
        const pin = getinputfieldvaluebyId('cashout-pin-number');

        if (pin == 111) {
            const balance = getTextFieldValueById('acc-balance');
            const new_balance = balance - amount;

            document.getElementById('acc-balance').innerText = new_balance;

            const div = document.createElement('div');
            div.classList.add('text-center');
            div.innerHTML = `
                <h5 class="font-semibold">Cash Out</h5>
                <p>Cash out:${amount} New balance:${new_balance}</p>
            `

            document.getElementById('transaction-container').appendChild(div);
        } else {
            alert('Please try again.')
        }
    })