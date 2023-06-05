const io = require('../../io/io')

let divisores = 0
let contador = 1

io.write("Digite um número: ")
const numero = io.readInt()

while (contador <= numero) {
    if (numero % contador === 0) { // numero é divisível por contador?
        divisores++
    }
    contador++
}

if (divisores === 2) {
    io.write("Este é um número primo.")
} else {
    io.write("Este não é um número primo.")
}