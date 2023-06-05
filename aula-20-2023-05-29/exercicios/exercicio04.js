const io = require('../../io/io')

let numero
let i = 5

io.write('Digite o número: ')
numero = io.readInt()

while (i <= numero) {
    io.write(i)
    i = i + 5
}