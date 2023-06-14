const carregarEstilo = () => {
    console.log('Body foi carregado!')
    const body = document.getElementById('body')
    // body.className = 'conteudo'
    body.classList.add('conteudo')

    const titulo = document.getElementById('title')
    titulo.classList.add('titulo')

    const section = document.getElementById('section')
    section.classList.add('secao')

    const paragrafos = document.getElementsByTagName('p')
    console.log(paragrafos)

    const paragrafosArray = Array.from(paragrafos)

    paragrafosArray.forEach((paragrafo) => {
        paragrafo.classList.add('paragrafo')
    })
}