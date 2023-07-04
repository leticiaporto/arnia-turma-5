const editarPessoa = (id) => {
    window.location = `html/editar.html?id=${id}`
}

const carregarDados = async () => {
    //busca os dados na API
    const resultado = await fetch('http://localhost:3000/pessoas')
    const pessoas = await resultado.json()
    
    //recupera a div
    const conteudo = document.getElementById('conteudo')

    //passa pelo array de dados vindo da API e acrscenta o conteúdo no HTML
    pessoas.forEach(pessoa => {
        conteudo.innerHTML = conteudo.innerHTML + 
        `
            <div>
                ${pessoa.id} - ${pessoa.nome}
                <button onclick="editarPessoa(${pessoa.id})">Editar</button>
            </div>
        `
    })
}

carregarDados()