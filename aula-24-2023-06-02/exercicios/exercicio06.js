const io = require('../../io/io')

function ehPar(numero) {
    return numero % 2 === 0
}

for (let i = 0; i < 5; i++) {
    io.write('Digite um número:')
    const numero = io.readInt()

    const resultado = ehPar(numero)

    io.write('É par? ' + resultado)
}