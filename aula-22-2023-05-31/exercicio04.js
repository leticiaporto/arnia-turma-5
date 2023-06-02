const io = require('../io/io')

io.write('Informe um número natural:')
const numero = io.readInt() // 10

let contador = 1

while (contador <= numero) {
    if (numero % contador === 0) {
        io.write(contador)
    }
    contador++
}

