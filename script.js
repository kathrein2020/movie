const movieSearchBox = document.getElementById('movie-search-box');
const searchList = document.getElementById('search-list');
const resultGrid = document.getElementById('result-grid');

//загрузка фильма из сайта
async function loadMovies(searchTerm) {
    const URL = `https://api.tvmaze.com/search/shows/?q=${searchTerm}`;
    const res = await fetch(`${URL}`);
    //перевод в json
    const data = await res.json();
//console.log(data);
if(data.Response == "True") displayMovieList(data.Search);
}

loadMovies('Simpsons');