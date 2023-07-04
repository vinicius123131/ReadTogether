let url = 'https://api.sheety.co/ba7cb9e46abee3f6b81e7ea9579b41ef/banco/banco';

function fetchDados(url){
    return fetch(url)
    .then(function(response){
        return response.json();
    })
    .catch(function(error){
        console.log('Ocorreu um erro ao buscar: ', url, 'error: ', error)
    });
}

function createLivros(livro){
    var livroItem = document.createElement('figure')
    livroItem.className= 'product-style'

    var img = document.createElement('img');
    img.src = livro.capa;
    img.alt = 'Books';
    img.className = 'product-item';

    var button = document.createElement('button');
    button.type = 'button';
    button.className = 'add-to-cart';
    button.setAttribute('data-product-tile', 'add-to-cart');
    button.textContent = 'Detalhes';

    var figcaption = document.createElement('figcaption');
  
    var h3 = document.createElement('h3');
    h3.textContent = livro.titulo;
  
    var p = document.createElement('p');
    p.textContent = livro.autor;
  
    var div = document.createElement('div');
    div.className = 'item-price';
    div.textContent = livro.pessoaPostou;

    figcaption.appendChild(h3);
    figcaption.appendChild(p);
    figcaption.appendChild(div);

    livroItem.appendChild(img);
    livroItem.appendChild(button);
    livroItem.appendChild(figcaption);

    return livroItem;

}

function renderLivros(data) {
    var livros = document.getElementById('livros');

    data.banco.forEach(function(livro){
        var livroItem = createLivros(livro);
        livros.appendChild(livroItem);
    })
}

fetchDados(url)
  .then(function(data){
    renderLivros(data)
  })