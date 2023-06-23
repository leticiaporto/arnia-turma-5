const timestamp = (new Date()).getTime()
const publicKey = 'insira_sua_chave_publica_aqui'
const privateKey = 'insira_sua_chave_privada_aqui'
const hash = timestamp + privateKey + publicKey
const hashMd5 = MD5.generate(hash)
const url = `https://gateway.marvel.com:443/v1/public/characters?apikey=${publicKey}&ts=${timestamp}&hash=${hashMd5}`

const renderizarPersonagens = (personagens) => {
    const content = document.getElementById('content')
    
    personagens.forEach(personagem => {
        const comics = personagem.comics.items.filter((item, index) => {
            return index < 2
        })
        const series = personagem.series.items.filter((item, index) => {
            return index < 2
        })

        let revistasHTML = ''
        let seriesHTML = ''

        comics.forEach(comic => {
            revistasHTML = revistasHTML + `<li>${comic.name}</li>`
        })
        series.forEach(serie => {
            seriesHTML = seriesHTML + `<li>${serie.name}</li>`
        })

        const personagemHtml = `      
            <div class="box">
                <div class="box-image">
                    <img src="${personagem.thumbnail.path}.${personagem.thumbnail.extension}">
                </div>
                <div class="box-content">
                    <div class="box-title">${personagem.name}</div>
                    <div class="box-section">
                        <div class="box-section-title">
                            Revistas
                        </div>
                        <ul>
                            ${revistasHTML}
                        </ul>
                    </div>
                    <div class="box-section">
                        <div class="box-section-title">
                            Séries
                        </div>
                        <ul>
                            ${seriesHTML}
                        </ul>
                    </div>
                </div>
            </div>`

        content.innerHTML = content.innerHTML + personagemHtml
    })
}

const buscarPersonagens = async () => {
    const request = await fetch(url)
    const result = await request.json()
    renderizarPersonagens(result.data.results)
}

buscarPersonagens()