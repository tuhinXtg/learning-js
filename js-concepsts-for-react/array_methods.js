const products = [
  { name: 'laptop', price: 40434, brand: 'lenovo' },
  { name: 'phone', price: 2000, brand: 'samsung' },
  { name: 'tablet', price: 15000, brand: 'apple' },
  { name: 'monitor', price: 12000, brand: 'dell' },
  { name: 'keyboard', price: 2000, brand: 'logitech' },
  { name: 'mouse', price: 1200, brand: 'hp' },
  { name: 'speaker', price: 5000, brand: 'sony' },
];

// const brands = products.map(products => products.name)
// console.log(brands)

// products.forEach(element => {
//     console.log(element.price)
// });


const cheap = products.filter(products => products.price < 5000)
console.log(cheap)