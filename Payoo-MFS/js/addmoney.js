document.getElementById('add-money-btn')
    .addEventListener('click', function (event) {
        event.preventDefault();

        // const addmoney = document.getElementById('amount-input').value;
        // const addmoney = parseFloat(addmoney);
        // getInputFieldValueById();

        const add_money = getInputFieldValueById('amount-input');
        const pin_num = getInputFieldValueById('pin-number');
        console.log(add_money, pin_num)
    })