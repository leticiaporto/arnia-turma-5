const io = require('../io/io')

function idadeEmDias(anos, meses, dias) {
    return (anos * 365) + (meses * 30) + dias
}

io.write('Digite os Anos')
const anos = io.readInt()

io.write('Digite os meses')
const meses = io.readInt()

io.write('Digite em dias')
const dias = io.readInt()

const idade = idadeEmDias(anos, meses, dias)
console.log('A idade em dias é: ' + idade)