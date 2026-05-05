const numbers = [23,34,546,76,8,7]

// for (let i =0; i<numbers.length; i++){
//     const number = numbers[i];
//     console.log(number);
// }

for(const number of numbers){
    
}

const products = [
    {id: 1, name: 'walton', price: 1200},
    {id: 2, name: 'xiaomi', price: 12070},
    {id: 3, name: 'iphone', price: 154200},
    {id: 4, name: 'redmi', price: 154200},
    {id: 5, name: 'samsung', price: 12500},
    {id: 6, name: 'itel', price: 12500},
    {id: 7, name: 'honoe', price: 12400},
    {id: 8, name: 'nokia', price: 12500},
]

// for(const product of products){
//     console.log(product)
// }

function matchProduct(products, search){
    const matched = [];
    for(const product of products){
        if(product.name.includes(search)){
            matched.push(product)
        }
    }
    return matched;
}

const result = matchProduct(products, 'itel')
console.log(result)