const io = require("../../io/io")

let maiorIdade = 0
let soma = 0

for (let i = 0; i < 5; i++) {
    io.write("Insira a idade: ")
    const idade = io.readInt()
    io.write("Insira a altura: ")
    const altura = io.readFloat()

    if (idade > maiorIdade) {
        maiorIdade = idade
    }

    soma = soma + altura
}

const media = soma / 5

io.write('A maior idade é: ' + maiorIdade)
io.write('A média das alturas é: ' + media)