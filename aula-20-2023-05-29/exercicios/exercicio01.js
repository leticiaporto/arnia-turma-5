const io = require('../../io/io')

let numero
let frase
let contador = 0

io.write("Digite um número")
numero = io.readInt()
io.write("Escreva uma frase")
frase = io.read()

io.write("----- FRASES -----")
while (contador < numero) {
    io.write(frase)
    contador++ // é o mesmo que: contador = contador + 1
}