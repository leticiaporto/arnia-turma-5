const io = require('../../io/io')

let pessoas = []

for (let i = 0; i < 3; i++) {
    io.write('Digite o nome:')
    const nome = io.read()
    io.write('Digite a idade:')
    const idade = io.readInt()
    io.write('Digite o documento:')
    const documento = io.read()

    const pessoa = { nome: nome, idade, documento: documento }

    pessoas.push(pessoa)
}

console.log(pessoas)

const maioresDeIdade = pessoas.filter((pessoa) => {
    return pessoa.idade > 18
})

console.log(maioresDeIdade)