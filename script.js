const TMDB_ENDPOINT = 'https://api.themoviedb.org/3';
const API_KEY = '7ddd5c53ebf2b0c8b7c274bebfea64aa';
const IMG_PREFIX = 'https://image.tmdb.org/t/p/w500'
const LINGUAGEM = '&language=pt-BR'

function carregaFilmes(){
    let xhr = new XMLHttpRequest();
    xhr.open('GET', TMDB_ENDPOINT + '/movie/popular?api_key=' + API_KEY + LINGUAGEM);
    xhr.onload = exibeFilmes;
    xhr.send();
}

function emBreveFilmes(){
    let xhr = new XMLHttpRequest();
    xhr.open('GET', TMDB_ENDPOINT + '/movie/upcoming?api_key=' + API_KEY + LINGUAGEM);
    xhr.onload = exibeFilmes;
    xhr.send();
}

function avaliadosFilmes(){
    let xhr = new XMLHttpRequest();
    xhr.open('GET', TMDB_ENDPOINT + '/movie/top_rated?api_key=' + API_KEY + LINGUAGEM);
    xhr.onload = exibeFilmes;
    xhr.send();
}

function pesquisaFilmes(){
    let xhr = new XMLHttpRequest();
    let query = document.getElementById('inputPesquisa').value;
    xhr.open('GET', TMDB_ENDPOINT + '/search/movie?api_key=' + API_KEY + '&query=' + query + LINGUAGEM);
    xhr.onload = exibeFilmes;
    xhr.send();
}

function exibeFilmes(evt){
    let textoHTML = '';
    let filmes = JSON.parse(evt.target.responseText);
    
    for(let i=0; i<filmes.results.length; i++){
        let ident = filmes.results[i].id;
        let linkFilme = 'https://themoviedb.org/movie/' + ident;
        let titulo = filmes.results[i].title;
        let sinopse = filmes.results[i].overview;
        let imagem = IMG_PREFIX + filmes.results[i].poster_path;
        textoHTML += `<div class="card col-xs-6 col-sm-6 col-md-4 col-lg-3">
        <img src="${imagem}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${titulo}</h5>
          <p class="card-text">${sinopse}</p>
          <a href="${linkFilme}" class="btn btn-primary">Mais detalhes</a>
        </div>
    </div>`;
    }
    document.getElementById('tela').innerHTML = textoHTML;
}