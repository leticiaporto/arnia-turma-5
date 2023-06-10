const io = require('../../io/io')

const inverterArray = () => {
    let numeros = []
    const quantidade = 5

    for (let i = 0; i < quantidade; i++) {
        io.write(`Digite o ${i + 1}º número:`)
        const numero = io.readInt()

        //o método unshift insere o novo elemento no início do array, enquanto o push insere no final
        numeros.unshift(numero) 
    }

    return numeros
}

const array = inverterArray()
io.write(array)