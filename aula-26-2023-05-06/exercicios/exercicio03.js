const io = require('../../io/io')

let funcionarios = []

for (let i = 0; i < 3; i++) {
    io.write(`Digite o ${i + 1}º nome:`)
    const nome = io.read()
    io.write(`Digite a ${i + 1}ª matrícula:`)
    const matricula = io.readInt()
    io.write(`Digite a ${i + 1}º cargo:`)
    const cargo = io.read()
    io.write(`Digite a ${i + 1}º salário:`)
    const salario = io.readFloat()

    const funcionario = {
        nome,
        matricula,
        cargo,
        salario
    }

    funcionarios.push(funcionario)
}

console.log(funcionarios)

funcionarios = funcionarios.map((funcionario) => {
    funcionario.salario = funcionario.salario + (funcionario.salario * 0.10)
    return funcionario
})

console.log(funcionarios)

const soma = funcionarios.reduce((aculumador, funcionario) => {
    return aculumador + funcionario.salario
}, 0)

console.log(`Soma: R$ ${soma}`)
