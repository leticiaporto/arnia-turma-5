const io = require('../../io/io')

const mediaNumeros = () => {
    let numeros = []
    const quantidade = 5

    for (let i = 0; i < quantidade; i++) {
        io.write(`Digite o ${i + 1}º número:`)
        const numero = io.readInt()

        numeros.push(numero)
    }

    const soma = numeros.reduce((acumulador, numero) => acumulador + numero)
    return soma / quantidade
}

const media = mediaNumeros()
io.write(`A média dos números é: ${media}`)