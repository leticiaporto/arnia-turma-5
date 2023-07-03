/* Variável que armazena o objeto DOM que representa o modal */
const modal = document.getElementById("modal")

/* 
    Função responsável por montar uma string com o HTML das notícias e depois adicioná-lo à página
*/
const renderizarNoticias = (noticias) => {
    const content = document.getElementById('content')
    let conteudo = ''

    noticias.forEach((noticia) => {
        conteudo = conteudo + `
      <div class="card">
        <div class="image">
          <img src="${noticia.imagem}" />
        </div>
        <div class="card-content">
          <div class="card-texts">
            <div class="card-title">
              ${noticia.titulo}
            </div>
            <div class="card-text">
              ${noticia.texto}
            </div>
          </div>
          <div class="card-footer">
            <div class="card-autor">${noticia.autor.nome}</div>
            <div class="card-buttons">
              <button class="remove-button" onclick=excluirNoticia(${noticia.id})>Excluir</button>
              <button class="edit-button" onclick=editarNoticia(${noticia.id})>Editar</button>
            </div>
          </div>
        </div>
      </div>
    `
    })

    content.innerHTML = conteudo
}

/* 
    Função responsável por buscar as notícias na API
*/
const getNoticias = async () => {
    const apiResponse = await fetch('http://localhost:3000/noticias')
    const noticias = await apiResponse.json()
    renderizarNoticias(noticias)
}

/* 
    Função responsável por redirecionar para a página de cadastro
*/
const novaNoticia = () => {
  window.location = "html/noticia/cadastrar.html"
}

/* 
    Função responsável por redirecionar para a página de edição
*/
const editarNoticia = (id) => {
  window.location = `html/noticia/editar.html?id=${id}`
}

/* 
    Função responsável por excluir a notícia da API
*/
const excluirNoticia = async (id) => {
  await fetch(`http://localhost:3000/noticias/${id}`, {
      method: 'DELETE'
  })
  getNoticias()
}


getNoticias()