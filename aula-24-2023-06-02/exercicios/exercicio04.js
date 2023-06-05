const io = require('../../io/io')

function ehPar(numero) {
    return numero % 2 === 0
}


io.write('Digite o número:')
const numero = io.readInt()
const resultado = ehPar(numero)
io.write('É par? ' + resultado)