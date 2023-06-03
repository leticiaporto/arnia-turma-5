const io = require('../io/io')

function somar(num1, num2) {
    console.log('Função soma')
    console.log(num1, num2)

    const soma = num1 + num2
    return soma
}

console.log('Início do programa')

for (let index = 0; index < 5; index++) {
    io.write('Digite um número:')
    const numero1 = io.readInt()
    io.write('Digite outro número:')
    const numero2 = io.readInt()

    const resultado = somar(numero1, numero2)   
    console.log(resultado)    
}