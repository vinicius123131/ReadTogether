const fs = require('fs');

class Livro {
  constructor(autor, capa, titulo, pessoaPostou, lido) {
    this.autor = autor;
    this.capa = capa;
    this.titulo = titulo;
    this.pessoaPostou = pessoaPostou;
    this.lido = lido;
  }
}

const livro1 = new Livro("Madeline Miller", "https://m.media-amazon.com/images/I/81zvux2QPkL._AC_UF1000,1000_QL80_.jpg", "A Canção de Aquiles", "Manu", false);
const livro2 = new Livro("Tricia Levenseller", "https://m.media-amazon.com/images/I/91S-5RMk6rL._AC_UF350,350_QL50_.jpg", "The Shadows Between Us", "Manu", false);

function salvarLivro(livro, arquivo) {
  if (fs.existsSync(arquivo)) {
    const conteudoAtual = fs.readFileSync(arquivo, 'utf8');
    const livrosExistentes = JSON.parse(conteudoAtual);
    livrosExistentes.push(livro);
    const livrosJSON = JSON.stringify(livrosExistentes);
    const caminhoArquivo = `../bancoDeDados/${arquivo}`;
    fs.writeFileSync(caminhoArquivo, livrosJSON);
  } else {
    const livroJSON = JSON.stringify([livro]);
    const caminhoArquivo = `../bancoDeDados/${arquivo}`;
    fs.writeFileSync(caminhoArquivo, livroJSON);
  }

  console.log(`Livro salvo com sucesso no arquivo ${arquivo}!`);
}

salvarLivro(livro1, 'livros.txt');
salvarLivro(livro2, 'livros.txt');
