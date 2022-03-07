const BASE_URL = "https://www.omdbapi.com/?s=batman&apikey=f6e256e1";

window.addEventListener("DOMContentLoaded", (event) => {
    fetch(BASE_URL).then(function(res) {
        if (res.ok) {
            return res.json();
        }
    }).then(data => {
        console.log(data);
        data.Search.forEach(elt => {

            let div = document.createElement('div');
            let poster = document.createElement('img');
            let title = document.createElement('h2');
            let gender = document.createElement('span');
            let year = document.createElement('h3');

            title.textContent = elt.Title;
            poster.src = elt.Poster;
            gender.textContent = elt.Type;
            year.textContent = elt.Year;
            div.id = elt.imdbID;

            div.appendChild(poster);
            div.appendChild(title);
            div.appendChild(gender);
            div.appendChild(year);
            document.querySelector('.display').appendChild(div);

            poster.addEventListener('click', (event) => {
                detailsInfos(elt.imdbID);
            })
            title.addEventListener('click', (event) => {
                detailsInfos(elt.imdbID);
            })
        });
    })
});

function detailsInfos(id) {
    fetch("https://www.omdbapi.com/?s=&apikey=f6e256e1&?i=" + id).then(function(res){
        if (res.ok) {
            return res.json();
        }
    }).then(data => {
        data.id.forEach(elt => {
            let div = document.createElement('div');
            let poster = document.createElement('img');
            let title = document.createElement('h2');
            let gender = document.createElement('span');
            let year = document.createElement('h3');

            title.textContent = elt.Title;
            poster.src = elt.Poster;
            gender.textContent = elt.Type;
            year.textContent = elt.Year;

            div.appendChild(poster);
            div.appendChild(title);
            div.appendChild(gender);
            div.appendChild(year);
            document.querySelector('.display').appendChild(div);
        })
    });
}
