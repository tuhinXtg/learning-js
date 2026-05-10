function getinputfieldvaluebyId(id){
    const input_value = document.getElementById(id).value;
    return parseFloat(input_value);
}

function getTextFieldValueById(id){
    const textValue = document.getElementById(id).innerText;
    return parseFloat(textValue);
}

function showSectionById(id){
    // hide all the sections first
    document.getElementById('add-money-form').classList.add('hidden');
    document.getElementById('cash-out-form').classList.add('hidden');
    document.getElementById('Transaction-form').classList.add('hidden');

    // show the section with the provided id
    document.getElementById(id).classList.remove('hidden');
}