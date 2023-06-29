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

function createLivroLendoCapa(livro){
    var livroItem = document.createElement('div');
    livroItem.className = 'col-md-6';

    var figure = document.createElement('figure')
    figure.className = 'products-thumb';

    var img = document.createElement('img');
    img.src = livro.capa;
    img.alt = 'book';
    img.className = 'single-image';

    figure.appendChild(img);
    livroItem.appendChild(figure);

    return livroItem;

}
function createLivroLendoDados(livro){
    var livroItem = document.createElement('div');
    livroItem.className = 'col-md-6';

    var div = document.createElement('div')
    div.className = 'product-entry';

    var h2 = document.createElement('h2');
    h2.className = 'section-title divider';
    h2.textContent = 'Livro Escolhido';

    var divInfor = document.createElement('div')
    divInfor.className = 'products-content';

    var autor = document.createElement('div');
    autor.className= 'author-name';
    autor.textContent = livro.autor;

    var p = document.createElement('p')
    p.textContent = "Esse livro foi selecionado em conjunto para ser lido"

    var title = document.createElement('h3');
    title.className='item-title';
    title.textContent = livro.titulo;

    var dono = document.createElement('div');
    dono.className = 'item-price'
    dono.textContent = livro.pessoaPostou;

    div.appendChild(h2);
    divInfor.appendChild(autor);
    divInfor.appendChild(title);
    divInfor.appendChild(p);
    divInfor.appendChild(dono);
    div.appendChild(divInfor);
    livroItem.appendChild(div);


    return livroItem;

}
function createLivro(livro) {
    var productItem = document.createElement('div');
    productItem.className = 'col-md-3';
  
    var figure = document.createElement('figure');
    figure.className = 'product-style';
  
    var img = document.createElement('img');
    img.src = livro.capa;
    img.alt = 'Books';
    img.className = 'product-item';
  
    var button = document.createElement('button');
    button.type = 'button';
    button.className = 'add-to-cart';
    button.setAttribute('data-product-tile', 'add-to-cart');
    button.textContent = 'Read';
  
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
  
    figure.appendChild(img);
    figure.appendChild(button);
    figure.appendChild(figcaption);
  
    productItem.appendChild(figure);
  
    return productItem;
  }
  function renderLivros(data, quantidade) {
    var productRow = document.getElementById('product-row');
    
    data.banco.slice(0, quantidade).forEach(function(livro) {
      var productItem = createLivro(livro);
      productRow.appendChild(productItem);
    });
  }
  function renderLivro(data){
    var livroLido = document.getElementById('livro-lido');
    var livroItemCapa = createLivroLendoCapa(data.banco);
    var livroItemIDados = createLivroLendoDados(data.banco);
    livroLido.appendChild(livroItemCapa);
    livroLido.appendChild(livroItemIDados);
  }

  fetchDados(url)
  .then(function(data){
    renderLivros(data, 4)
  })

  fetchDados(url+'/6')
  .then(function(data){
    renderLivro(data)
  })

