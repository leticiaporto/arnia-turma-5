const publicKey = "b310ed0f69c0ff4e934ce58192d1f2fd" 
const privateKey = "e7651fee67046fd5850b6061c6a166b1734ae3fe"
const timestamp = (new Date()).getTime()
const hash = timestamp + privateKey + publicKey
const hashMd5 = MD5.generate(hash)

const requisicao = fetch(`https://gateway.marvel.com:443/v1/public/characters?ts=${timestamp}&apikey=${publicKey}&hash=${hashMd5}`)

requisicao.then((resposta) => {

    resposta.json().then((respostaJson) => {
        console.log(respostaJson)
        const personagens = respostaJson.data.results
        console.log(personagens)
        const content = document.getElementById('content')

        personagens.forEach((personagem) => {
            const boxPersonagem = `
                <div>
                    <div>
                        <img src="${personagem.thumbnail.path}.${personagem.thumbnail.extension}">
                    </div>
                    <div>
                        <div>${personagem.name}</div>
                    </div>
                </div>
            `

            content.innerHTML = content.innerHTML + boxPersonagem
        })

    }).catch(error => {
        console.log('Erro: ' + error)
    })
    
}).catch(error => {
    console.log('Erro: ' + error)
})



