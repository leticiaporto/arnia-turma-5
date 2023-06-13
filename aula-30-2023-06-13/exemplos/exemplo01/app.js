const alertarInicio = () => {
    console.log('Elemento terminou de carregar')
    window.alert('Bem vindo!')
}

const alertarClique = (elemento) => {
    console.log(elemento, 'foi clicado')
    window.alert('O elemento foi clicado!')
}

const modificarP = () => {
    const firstParagraph = document.getElementById('first')
    firstParagraph.innerHTML = 'Teste teste'
}

const inserirHtmlDiv = () => {
    document.getElementById('content').innerHTML = `
    <p>Este é um parágrafo.</p>
    <b>Este é um texto em negrito</b>`
}

const mudarCorTitulo = () => {
    const title = document.getElementById('title')
    title.className = 'title2'
}

const alterarParagrafos = () => {
    const elements = document.getElementsByTagName('p')
    console.log(elements)

    const elementsArray = Array.from(elements)

    elementsArray.forEach((elemento) => {
        elemento.innerHTML = elemento.innerHTML + 'TESTE'
    })
}

const mudarDescricao = (id) => {
    const elemento = document.getElementById(id)
    const descricao = elemento.querySelector('.descricao')
    descricao.classList.add('bold')
}