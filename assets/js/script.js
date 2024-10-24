const apiUrl = 'https://api.imgflip.com/get_memes';
const memesEl = document.querySelector('.memeContainer');

fetch(apiUrl)
    .then(res => res.json())
    .then(memes => {
        console.log(memes);
        if(memes.success){
            renderMemes(memes.data.memes)
        }
    })
    .catch(err => console.log('Der er sket en fejl', err));

    function renderMemes(memes){
        memes.forEach(meme => {
            memesEl.innerHTML += `
             <article class="memeContent">
                <h2>${meme.name}</h2>
                <img src="${meme.url}" alt="${meme.name}" />
            </article>
            `
        });
    }

    