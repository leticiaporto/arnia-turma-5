const io = require('../../io/io')

const somarNumeros = () => {
    let numeros = []

    for (let i = 0; i < 3; i++) {
        io.write(`Digite o ${i + 1}º número:`)
        const numero = io.readInt()

        numeros.push(numero)
    }

    return numeros.reduce((acumulador, numero) => acumulador + numero)
}

const soma = somarNumeros()
io.write(`A soma dos números é: ${soma}`)