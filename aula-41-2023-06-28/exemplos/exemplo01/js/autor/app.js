const mostrarAutores = (autores) => {
    const tabela = document.querySelector('tbody')
    tabela.innerHTML = '' //esvaziando o elemento

    autores.forEach((autor) => {
        const autorHtml = `
      <tr>
          <td>${autor.id}</td>
          <td>${autor.nome}</td>
          <td>${autor.editora}</td>
      </tr>
    `
        tabela.innerHTML = tabela.innerHTML + autorHtml;
    })
}

const getAutores = async () => {
    const apiResponse = await fetch('http://localhost:3000/autores')
    const autores = await apiResponse.json()
    mostrarAutores(autores)
}

const novoAutor = () => {
    window.location = "cadastrar.html"
}

const editarAutor = (id) => {
    window.location = `html/autor/editar.html?id=${id}`
}

const excluirAutor = async (id) => {
    await fetch(`http://localhost:3000/autores/${id}`, { method: 'DELETE' })
    getAutores()
}

getAutores()