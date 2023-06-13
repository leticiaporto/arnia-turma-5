const io = require('../../io/io')

class Celular {
    modelo
    marca
    valor

    constructor(modelo, marca, valor) {
        this.modelo = modelo
        this.marca = marca
        this.valor = valor
    }

    toString() {
        io.write(`Modelo: ${this.modelo} | Marca: ${this.marca} | Valor: ${this.valor}`)
    }
}


let celulares = []

for (let i = 0; i < 3; i++) {
    io.write(`Digite o ${i + 1}º modelo:`)
    const modelo = io.read()
    io.write(`Digite a ${i + 1}ª marca:`)
    const marca = io.read()
    io.write(`Digite a ${i + 1}º valor:`)
    const valor = io.readFloat()

    const celular = new Celular(modelo, marca, valor)
    celulares.push(celular)
}

celulares.forEach((celular) => {
    celular.toString()
})