const io = require("../../io/io")

function somarNumeros(n1, n2) {
    io.write(n1 + n2)
}

function receberNumeros(somar) {
    io.write('Escreva 1 número: ')
    const numero1 = io.readInt()
    io.write('Escreva outro número: ')
    const numero2 = io.readInt()
    somar(numero1, numero2)
}

receberNumeros(somarNumeros)