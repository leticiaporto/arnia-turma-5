const io = require('../../io/io')

class Carro {
    nome
    preco
    ano

    constructor(nome, preco, ano) {
        this.nome = nome
        this.preco = preco
        this.ano = ano
    }

    aumentarPreco() {
        this.preco = this.preco + 5000
    }
}


let carros = []

for (let i = 0; i < 3; i++) {
    io.write(`Digite o ${i + 1}º nome:`)
    const nome = io.read()
    io.write(`Digite a ${i + 1}º preço:`)
    const preco = io.readFloat()
    io.write(`Digite a ${i + 1}º ano:`)
    const ano = io.readInt()

    const carro = new Carro(nome, preco, ano)
    carros.push(carro)
}

console.log(carros)

carros.forEach((carro) => {
    carro.aumentarPreco()
})

console.log(carros)