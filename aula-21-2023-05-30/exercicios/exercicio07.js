const io = require("../../io/io")

let numero
let menor

for (let i = 0; i < 10; i++) {
    io.write("Digite um número: ")
    numero = io.readInt()
    if (i === 0 || numero < menor) {// i === 0 para verificar se é a primeira iteração do for
        menor = numero
    }
}

io.write("O menor número é: " + menor)