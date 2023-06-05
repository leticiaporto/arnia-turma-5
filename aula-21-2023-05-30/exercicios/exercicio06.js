const io = require("../../io/io")

let maiorValor = 0

for (let i = 0; i < 10; i++) {
    io.write('Digite um número:')
    const numero = io.readInt()

    if (numero > maiorValor) {
        maiorValor = numero
    }
}

io.write('O maior valor é: ' + maiorValor)