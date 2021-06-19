const TMDB_ENDPOINT = 'https://developers.themoviedb.org/3';
const API_KEY = '7ddd5c53ebf2b0c8b7c274bebfea64aa';
const IMG_PREFIX = 'https://image.tmdb.org/t/p/w500'

function carregaFilmes(){
    let xhr = new XMLHttpRequest();
    xhr.open('GET', TMDB_ENDPOINT + '/movie/popular?api_key=' + API_KEY);
    xhr.onload = exibeFilmes;
    xhr.send();
}

function exibeFilmes(evt){
    let textoHTML = '';
    let filmes = JSON.parse(evt.target.responseText);
    for(let i=0; i<filmes.results.length; i++){
        let titulo = filmes.results[i].title;
        let sinopse = filmes.results[i].overview;
        let imagem = IMG_PREFIX + filmes.results[i].poster_path;
        textoHTML += `<div class="card col-xs-6 col-sm-6 col-md-4 col-lg-3">
        <img src="${imagem}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${titulo}</h5>
          <p class="card-text">${sinopse}</p>
          <a href="#" class="btn btn-primary">Ver mais</a>
        </div>
    </div>`;
    }
    document.getElementById('tela').innerHTML = textoHTML;
}