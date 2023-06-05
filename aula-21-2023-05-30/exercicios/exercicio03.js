const io = require("../../io/io")

let quantidade = 0

for (let i = 0; i < 10; i++) {
    io.write("Digite um nome: ")
    const nome = io.read()

    if (nome === "Maria") {
        quantidade++
    }
}

io.write("Quantidade de Marias: " + quantidade)