// json => stringify and parse()
const student = {
    name: 'tuhin',
    age: 43,
    movies: ['cdskc', 'cisi', 'iscsn']
}

// const studentJSON = JSON.stringify(student);
// console.log(student)
// console.log(studentJSON)

// // fetch

// fetch('url')
//     .then(res => res.json())
// //     .then(data => console.log(data))

// //     // keys, values
// const keys = Object.keys(student)
// console.log(keys)

// const values = Object.values(student)
// console.log(values)

// const numbers = [1,2,3,4,5,6,7]
// numbers.forEach(element => {
//     console.log(element)
// });


// add or remove from an array
const products = [
  { name: 'laptop', price: 40434, brand: 'lenovo' },
  { name: 'phone', price: 2000, brand: 'samsung' },
  { name: 'tablet', price: 15000, brand: 'apple' },
  { name: 'monitor', price: 12000, brand: 'dell' },
  { name: 'keyboard', price: 2000, brand: 'logitech' },
  { name: 'mouse', price: 1200, brand: 'hp' },
  { name: 'speaker', price: 5000, brand: 'sony' },
];

const new_product = { name: 'huaway', price: 1000, brand: 'Microsoft' }

// add new product 
const new_products = [...products, new_product]
console.log(new_products)

// remove 
const remaining = products.filter(p => p.name !== 'phone' )
console.log(remaining)

// Filter is used only for removing items 