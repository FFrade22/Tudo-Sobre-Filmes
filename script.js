function exibeFilmes(){
    let textoHTML = '';
    let filmes = [
        {titulo: 'Star Wars', sinopse: 'alguma coisa coisa coisa coisa coisa coisa coisa'},
        {titulo: 'Harry Potter', sinopse: 'alguma coisa coisa coisa coisa coisa coisa coisa'},
        {titulo: 'Cruella', sinopse: 'alguma coisa coisa coisa coisa coisa coisa coisa'},
        {titulo: 'Os Vingadores', sinopse: 'alguma coisa coisa coisa coisa coisa coisa coisa'},
    ]
    for(let i=0; i<filmes.length; i++){
        let titulo = filmes[i].titulo;
        let sinopse = filmes[i].sinopse;
        textoHTML += `<div class="card col-xs-6 col-sm-6 col-md-4 col-lg-3">
        <img src="https://source.unsplash.com/random/200x150" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${titulo}</h5>
          <p class="card-text">${sinopse}</p>
          <a href="#" class="btn btn-primary">Ver mais</a>
        </div>
    </div>`;
    }
    document.getElementById('tela').innerHTML = textoHTML;
}