const modal = document.getElementById("modal")
const url = 'https://tasty.p.rapidapi.com/recipes'
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '3f6c8a7e1bmshd681b87770d8c21p179c7ajsn427a70193acb',
        'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
    }
}

const openModal = () => {
    modal.style.display = "block"
}

const closeModal = () => {
    modal.style.display = "none"
}

window.addEventListener("click", (event) => {
    if (event.target === modal) {
        closeModal()
    }
})

const mostrarDados = (receitas) => {
    let conteudo = document.getElementById('conteudo')

    receitas.forEach(receita => {
        conteudo.innerHTML = conteudo.innerHTML +
            `
            <div class="receita">
                <div class="titulo-receita">${receita.name}</div>
                <img src="${receita.thumbnail_url}">
                <button class="botao-receita" onclick="carregarDescricao(${receita.id})">Ver descrição</button>
            </div>
        `
    })
}

const mostrarDescricao = (receita) => {
    const titulo = document.querySelector('.titulo-modal')
    const texto = document.querySelector('.texto-modal')
    titulo.innerHTML = receita.name
    texto.innerHTML = receita.description
    openModal()
}

const carregarDados = async () => {
    const response = await fetch(`${url}/list`, options);
    const data = await response.json()
    console.log(data)
    mostrarDados(data.results)
}

const carregarDescricao = async (id) => {
    const response = await fetch(`${url}/get-more-info?id=${id}`, options);
    const receita = await response.json()
    console.log(receita)
    mostrarDescricao(receita)
}

carregarDados()