const io = require('../../io/io')

let vetor = []
let soma = 0

for (let i = 0; i < 10; i++) {
    io.write('Insira o preço:')
    const preco = io.readInt()
    vetor.push(preco)
    soma = soma + preco
}

const media = soma / 10

io.write('Média: ' + media)

io.write('Preços acima da média: ')

//percorre o vetor
for (let i = 0; i < 10; i++) {
    const preco = vetor[i]

    //verifica se o preço está acima da média e imprime
    if (preco > media) {
        io.write(preco)
    }
}