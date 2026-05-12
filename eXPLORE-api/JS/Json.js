const user = { id: 1, name: 'Rahim', job: 'actor' }
// JSON = JavaScript Object Notation
const stringified = JSON.stringify(user);
// console.log(stringified)

const shop = {
    owner: 'alia',
    address: {
        street: 'rans',
        city: 'swift',
        country: 'BD'
    },
    products: ['am', 'jam', 'monitor', 'mouse'],
    revenue: 450000,
    isOpen: true,
    isNew: false
}
const shopJson = JSON.stringify(shop)
console.log(shop)
console.log(shopJson)
const shopObj = JSON.parse(shopJson);
console.log(shopObj)

