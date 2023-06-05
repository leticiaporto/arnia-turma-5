const io = require('../../io/io')

function calcularPotencia(x, z) {
    let potencia = 1
    // multiplicar x por ele mesmo z vezes
    for (let i = 0; i < z; i++) {
        potencia = potencia * x
    }

    return potencia
}

io.write('Calculando a potência de 3²')
const resultado = calcularPotencia(3, 2)
io.write('O resultado é: ' + resultado)