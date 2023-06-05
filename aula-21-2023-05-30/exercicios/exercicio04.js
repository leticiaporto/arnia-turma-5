const io = require("../../io/io")

let numero

io.write("Digite um número: ")
numero = io.readInt()

for (let i = 1; i <= numero; i++) {
    io.write(i)
}