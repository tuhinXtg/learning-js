const products = [
    {name: 'shampo', price: 400, quanity: 3},
    {name: 'oil', price: 100, quanity: 1},
    {name: 'chips', price: 40, quanity: 4},
    {name: 'pant', price: 800, quanity: 2},
]

function carttotal(products){
    let totaal = 0;
    for(const product of products){
        const eachProduct = product.price * product.quanity;
        totaal = totaal + eachProduct;
    }
    return totaal;
}

const shoppingCost = carttotal(products);
console.log(shoppingCost);