const io = require('../../io/io')

let jogadores = []

for (let i = 0; i < 3; i++) {
    io.write(`Digite o ${i + 1}º nome:`)
    const nome = io.read()
    io.write(`Digite a ${i + 1}ª time:`)
    const time = io.read()
    io.write(`Digite a ${i + 1}ª salário:`)
    const salario = io.readFloat()

    const jogador = {
        nome,
        time,
        salario
    }

    jogadores.push(jogador)
}

console.log(jogadores)

jogadores = jogadores.filter((jogador) => {
    return jogador.salario > 100000
})

console.log(jogadores)