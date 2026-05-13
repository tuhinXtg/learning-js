const loadCategories = () => {
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
        .then(res => res.json())
        .then(data => displayCategories(data.categories))
        .catch(err => console.log(err))
}

const displayCategories = (data) => {
    const category_container = document.getElementById('categories')
    data.forEach(element => {
        console.log(element)
        // creating button for each category
        const button = document.createElement('button');
        button.classList = "btn bg-slate-300 my-4 p-4";
        button.innerText = element.category;
        category_container.appendChild(button);
    });
}

loadCategories()