function loadPost() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => displayPost(data))
}

function displayPost(data) {
    const post_container = document.getElementById('Posts-container');
    for (const user of data) {
        const post_div = document.createElement('div');
        post_div.innerHTML = `
            <h4>user- ${user.userId}</h4>
            <h5>Post: ${user.title}</h5>
            <p>Post Description: ${user.body}</p>

        `;
        post_container.appendChild(post_div)
    }
}

loadPost();

