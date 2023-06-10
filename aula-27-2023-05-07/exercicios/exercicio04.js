const io = require('../../io/io')

let alunos = []

const estaAprovado = (nota) => {
    return nota > 7
}

for (let i = 0; i < 3; i++) {
    io.write(`Digite o ${i + 1}º nome:`)
    const nome = io.read()
    io.write(`Digite a ${i + 1}ª nota:`)
    const nota = io.readFloat()

    const aluno = {
        nome,
        nota
    }

    alunos.push(aluno)
}

console.log(alunos)

alunos = alunos.map((aluno) => {
    aluno.aprovado = estaAprovado(aluno.nota)
    return aluno
})

console.log(alunos)