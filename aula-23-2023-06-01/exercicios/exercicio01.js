const io = require('../../io/io')

const vetor = []

for (let i = 0; i < 10; i++) {
    io.write('Insira um número')
    const numero = io.readInt()
    vetor.push(numero)
}

io.write('Números: ')
io.write(vetor)

io.write('Sucessores: ')

for (let i = 0; i < 10; i++) {
    const numero = vetor[i]
    const sucessor = numero + 1
    io.write(sucessor)
}