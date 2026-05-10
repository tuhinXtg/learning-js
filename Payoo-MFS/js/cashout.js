document.getElementById('cash-out-btn')
    .addEventListener('click', function (event) {
        event.preventDefault();

        const amount = document.getElementById('cashout-amount-input').value;
        const pin = document.getElementById('cashout-pin-number').value;

        if (pin == '111') {
            const balance = document.getElementById('acc-balance').innerText;

            const balance_number = parseFloat(balance);
            const amount_number = parseFloat(amount);
            const new_balance = balance_number - amount_number;

            document.getElementById('acc-balance').innerText = new_balance;
        } else {
            alert('Failed to withdraw, Try again please.')
        }
    })