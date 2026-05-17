const addToLocalStorage = () => {
    const id_input = document.getElementById('storage-id')
    const value_input = document.getElementById('storage-value')

    const id = id_input.value;
    const value = value_input.value;


    if(id && value){
        localStorage.setItem(id, value)
    }
    id_input.value = '';
    value_input.value = '';
}