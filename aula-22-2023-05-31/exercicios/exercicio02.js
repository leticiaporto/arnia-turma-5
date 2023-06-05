const io = require('../../io/io')

let contador = 100

while (contador > 0) {
    io.write(contador)
    contador--
}