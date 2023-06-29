function saveForm() {
    // Obter os valores dos campos do formulário
    var autor = document.getElementById('autor').value;
    var capa = document.getElementById('capa').value;
    var titulo = document.getElementById('titulo').value;
    var pessoaPostou = document.getElementById('pessoaPostou').value;
    var lido = document.getElementById('lido').checked;
    var categoria = document.getElementById('categoria').value;
  
    // Construir o objeto de dados
    var body = {
      banco: {
        autor: autor,
        capa: capa,
        titulo: titulo,
        pessoaPostou: pessoaPostou,
        lido: lido,
        categoria: categoria
      }
    };
  
    // URL da API
    var url = 'https://api.sheety.co/ba7cb9e46abee3f6b81e7ea9579b41ef/banco/banco';
  
    // Enviar a requisição POST usando fetch
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
      .then(function(response) {
        if (!response.ok) {
          throw new Error('Erro ao enviar a solicitação. Status: ' + response.status);
        }
        return response.json();
      })
      .then(function(json) {
        // Limpar os campos do formulário
  document.getElementById('autor').value = '';
  document.getElementById('capa').value = '';
  document.getElementById('titulo').value = '';
  document.getElementById('pessoaPostou').value = '';
  document.getElementById('lido').checked = false;
  document.getElementById('categoria').value = '';
  
      })
      .catch(function(error) {
        console.log('Ocorreu um erro:', error);
      });
  }