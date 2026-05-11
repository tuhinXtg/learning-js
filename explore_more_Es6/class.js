const products = [
    { id: 1, name: 'lenovo', price: 265000 },
    { id: 2, name: 'dell', price: 3365000 },
    { id: 3, name: 'hp', price: 6765000 },
    { id: 4, name: 'apple', price: 657000 },
    { id: 5, name: 'mac', price: 1165000 },
]

// Has some properties, method 
class Product {
    country = 'Bangladesh';
    constructor(name){
        this.name = name;
    }
    speak(talk) {
        console.log(`Talking about ${talk}`)
    }
}

const lenovo = new Product('Lenovo')
// console.log(lenovo)
// lenovo.speak('Lenovo')


class Teacher{
    constructor(name, subject){
        this.name = name;
        this.subject = subject;
    }
    lecture(){
        console.log('Sir is talking')
    }
}

const tapan = new Teacher('Tapan', 'Physics')
console.log(tapan)