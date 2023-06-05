const io = require("../../io/io")

let numero

io.write("Digite um número: ")
numero = io.readInt()

for (let i = 0; i < numero; i=i+2) {
    io.write(i)
}