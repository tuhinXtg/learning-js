const addProduct = () => {
    const pr_name = document.getElementById('product-name')
    const pr_quantity = document.getElementById('product-quantity')

    const product = pr_name.value;
    const quantity = pr_quantity.value;
    pr_name.value = ''
    pr_quantity.value = ''

    console.log(product, quantity)
    displayProduct(product, quantity)
    saveProductToLocalStorage(product,quantity)
}

const displayProduct = (product, quantity) => {
    const ul = document.getElementById('product-container')
    const li = document.createElement('li');
    li.innerText = `${product}: ${quantity}`
    ul.appendChild(li)
}

const getStoredShoppingCart = () => {
    let cart = {};
    const stored_card = localStorage.getItem('cart');
    if (stored_card) {
        cart = JSON.parse(stored_card);
    }
    return cart;
}
const saveProductToLocalStorage = (product, quantity) => {
    const cart = getStoredShoppingCart();
    cart[product] = quantity;
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified )
}

const displayProductFromLocalStorage = () => {
    const save_cart = getStoredShoppingCart();
    console.log(save_cart)
    for(const product in save_cart){
        const qnty = save_cart[product]
        console.log(product , qnty)
        displayProduct(product, qnty)
    }
}
displayProductFromLocalStorage();