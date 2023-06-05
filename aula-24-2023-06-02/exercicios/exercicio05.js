const io = require('../../io/io')

function mediaNumeros() {
    let soma = 0
    let quantidade = 0
    let executar = true

    while (executar) {
        io.write('Digite um número:')
        const numero = io.readInt()

        if (numero > -1) {
            soma = soma + numero
            quantidade++
        } else {
            executar = false
        }
    }

    return soma / quantidade
}

const resultado = mediaNumeros()
io.write('A média dos números é: ' + resultado)