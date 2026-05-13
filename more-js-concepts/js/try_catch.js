function checkAge() {
    const ageFiled = document.getElementById('age');
    const ageValue = ageFiled.value;
    const errortag = document.getElementById('error')
    try {
        console.log(1111)
    } catch (err) {
        console.log('Error:', err)
        errortag.innerHTML = `something wrong`
    }finally{
        console.log('All Done')
    }
    console.log('brrr')

}