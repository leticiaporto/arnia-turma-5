const io = require("../../io/io")

function saudacao(nome) {
    io.write('Olá ' + nome)
}

function processaEntrada(saudacaoCb) {
    io.write("Digite o seu nome")
    const nome = io.read()
    saudacaoCb(nome)
}
  
processaEntrada(saudacao)
