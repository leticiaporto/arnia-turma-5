const io = require('../../io/io')

let num1
let num2
let produto

io.write('Digite o 1º valor: ')
num1 = io.readInt()

io.write('Digite o 2º valor: ')
num2 = io.readInt()

produto = num1 * num2
if (produto > 10) {
    io.write('O produto é maior que 10!')
} else {
    io.write('O produto não é maior que 10!')
}