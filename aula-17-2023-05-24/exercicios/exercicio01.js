const io = require('../../io/io')

let numero
let raiz

io.write('Digite um número: ')
numero = io.readFloat()

raiz = numero ** (1/2)

io.write('A raiz quadrada é: ' + raiz)

