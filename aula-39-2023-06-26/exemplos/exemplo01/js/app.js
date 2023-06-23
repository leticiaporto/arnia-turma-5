const mostrarLivros = (livros) => {
    const tabela = document.querySelector('tbody')

    livros.forEach((livro) => {
        const livroHtml = `
      <tr>
          <td>${livro.id}</td>
          <td>${livro.titulo}</td>
          <td>${livro.autor}</td>
          <td>${livro.ano}</td>
          <td>
            <button onclick="editarLivro(${livro.id})">Editar</button>
          </td>
      </tr>
    `
        tabela.innerHTML = tabela.innerHTML + livroHtml;
    })
}

const getLivros = async () => {
    const apiResponse = await fetch('http://localhost:3000/livros')
    const livros = await apiResponse.json()
    console.log(livros)
    mostrarLivros(livros)
}

const novoLivro = () => {
    window.location = "cadastrar.html"
}

const editarLivro = (id) => {
    window.location = `editar.html?id=${id}`
}

getLivros()