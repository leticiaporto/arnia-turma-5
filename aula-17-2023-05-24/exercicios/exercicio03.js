const io = require('../../io/io')

let numero1
let numero2
let resultado

io.write('Digite o primeiro número:')
numero1 = io.readInt()

io.write('Digite o segundo número:')
numero2 = io.readInt()

resultado = numero1 % numero2

io.write('O resultado da operação é: ')
io.write(resultado)

