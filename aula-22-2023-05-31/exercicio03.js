const io = require('../io/io')

let executar = true
let quantidade = 0
let soma = 0

while (executar) {
    io.write('Digite o número:')
    const numero = io.readFloat()

    if (numero > 0) {
        quantidade++
        soma = soma + numero
    } else {
        executar = false
    }

    io.write('Teste')
}

const media = soma / quantidade

io.write('Quantidade de números: ' + quantidade)
io.write(`Média: ${media}`)