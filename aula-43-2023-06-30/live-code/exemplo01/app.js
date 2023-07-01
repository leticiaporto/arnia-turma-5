const carregarDados = async () => {
    const resultado = await fetch('http://localhost:3000/pessoas')
    const pessoas = await resultado.json()
    console.log(pessoas)

    const conteudo = document.getElementById('conteudo')

    pessoas.forEach(pessoa => {
        conteudo.innerHTML = conteudo.innerHTML + 
        `
            <div>${pessoa.id} - ${pessoa.nome}</div>
        `
    })
}

carregarDados()