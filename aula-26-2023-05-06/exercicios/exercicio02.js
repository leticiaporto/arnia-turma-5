const io = require('../../io/io')

let alunos = []

for (let i = 0; i < 3; i++) {
    io.write(`Digite o ${i + 1}º nome:`)
    const nome = io.read()
    io.write(`Digite a ${i + 1}ª matrícula:`)
    const matricula = io.readInt()
    io.write(`Digite a ${i + 1}ª nota:`)
    const nota = io.readFloat()

    const aluno = {
        nome,
        matricula,
        nota
    }

    alunos.push(aluno)
}

console.log(alunos)

alunos = alunos.map((aluno) => {
    if (aluno.matricula > 1000) {
        aluno.nota = aluno.nota + (aluno.nota * 0.10)
    }
    return aluno
})

console.log(alunos)