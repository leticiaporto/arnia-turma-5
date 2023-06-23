const mostrarLivros = (livros) => {
    const tabela = document.querySelector('tbody')
    tabela.innerHTML = '' //esvaziando o elemento

    livros.forEach((livro) => {
        const livroHtml = `
      <tr>
          <td>${livro.id}</td>
          <td>${livro.titulo}</td>
          <td>${livro.autor}</td>
          <td>${livro.ano}</td>
      </tr>
    `
        tabela.innerHTML = tabela.innerHTML + livroHtml;
    })
}

const getLivros = async () => {
    const apiResponse = await fetch('http://localhost:3000/livros')
    const livros = await apiResponse.json()
    mostrarLivros(livros)
}

const novoLivro = () => {
    window.location = "cadastrar.html"
}

getLivros()