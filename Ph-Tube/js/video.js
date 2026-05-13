function getTimeString(time){
    // converting in hour''
    const hour = parseInt(time / 3600);
    const remainingMinute = time % 3600;
    // converting in minute..
    const minute = parseInt(remainingMinute / 60);
    const second = remainingMinute % 60;

    return `${hour}:${minute}:${second}`
}


// button work start
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

// button work end


// videos work start
const loadVideos = () => {
    fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
        .then(res => res.json())
        .then(data => displayVideos(data.videos))
        .catch(err => console.log(err))
}


const displayVideos = (videos) => {
    const video_container = document.getElementById('videos')
    videos.forEach(element => {
        const card = document.createElement('div');
        card.classList = "card bg-base-100 shadow-sm"
        card.innerHTML = `
             <figure class="h-[200px] relative">
                <img
                src=${element.thumbnail}
                alt="videos" class="h-full w-full object-cover" />
                ${
                    element.others.posted_date ? `<span class="absolute right-2 bottom-2 bg-black text-white">${getTimeString(element.others.posted_date)}</span>` : ""
                }
            </figure>
            <div class="px-0 py-4 flex flex-row justify-between">
                <div class = "p-2">
                    <img class="rounded-full w-[70px] h-[70px] object-cover"
                    src=${element.authors[0].profile_picture}
                    alt="videos" class="h-full w-full object-cover" /> 
                </div>
                <div class="w-9/12 justify-between py-2">
                    <h2 class="card-title pb-3 font-semibold">${element.title}</h2>
                    <p class = "text-xs">${element.authors[0].profile_name}</p>
                    <p class = "text-xs">${element.others.views} views</p>
                </div>
            </div>
        `
        video_container.appendChild(card);
    });
}

// videos work end

// called functions
loadCategories()
loadVideos()