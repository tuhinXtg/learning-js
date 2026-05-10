// console.log('Home added')

// add an event handler method tho the add money button..........
document.getElementById('add-money-btn')
    .addEventListener('click', function (event) {
        // prevent page reload after submit...........
        event.preventDefault();
        const get_amount = getInputValue('amount-input');
        const pin_number = getInputValue('pin-number');

        if (pin_number == '111') {
            const balance = document.getElementById('acc-balance').innerText;

            const add_money_number = parseFloat(get_amount);
            const balance_number = parseFloat(balance);

            const new_balance = add_money_number + balance_number;

            document.getElementById('acc-balance')
                .innerText = new_balance;
        } else {
            alert('Failed to add money. Tyr again please.')
        }
    })