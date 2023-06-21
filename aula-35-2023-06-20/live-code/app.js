const publicKey = "b310ed0f69c0ff4e934ce58192d1f2fd" 
const privateKey = "e7651fee67046fd5850b6061c6a166b1734ae3fe"
const timestamp = (new Date()).getTime()
const hash = timestamp + privateKey + publicKey
const hashMd5 = MD5.generate(hash)
const url = `https://gateway.marvel.com:443/v1/public/characters?ts=${timestamp}&apikey=${publicKey}&hash=${hashMd5}`

const carregarPersonagens = (personagens) => {
    const content = document.getElementById('content')

    personagens.forEach((personagem) => {
        const series = personagem.series.items.filter((serie, index) => index < 2)
        const revistas = personagem.comics.items.filter((comic, index) => index < 2)
        let serieHtml = ''
        let revistaHtml = ''

        series.forEach((serie) => {
            serieHtml = serieHtml + 
            `
                <div>
                    ${serie.name}
                </div>
            `
        })

        revistas.forEach((revista) => {
            revistaHtml = revistaHtml + 
            `
                <div>
                    ${revista.name}
                </div>
            `
        })

        const boxPersonagem = `
            <div>
                <div>
                    <img src="${personagem.thumbnail.path}.${personagem.thumbnail.extension}">
                </div>
                <div>
                    <div>${personagem.name}</div>
                    <div>
                        <div>Séries:</div>
                        ${serieHtml}
                    </div>
                    <div>
                        <div>Revistas:</div>
                        ${revistaHtml}
                    </div>
                </div>
            </div>
        `

        content.innerHTML = content.innerHTML + boxPersonagem
    })
}

const buscarDados = async () => {
    const requisicao = await fetch(url)
    const requisicaoJson = await requisicao.json()
    const personagens = requisicaoJson.data.results
    carregarPersonagens(personagens)
}

buscarDados()