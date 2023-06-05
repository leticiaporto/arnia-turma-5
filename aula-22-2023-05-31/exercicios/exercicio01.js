const io = require('../../io/io')

const login = 'leticiaportosoares'
const senha = 'teste123@'

io.write('Digite o seu login:')
const loginUsuario = io.read()
io.write('Digite a sua senha:')
const senhaUsuario = io.read()

if(loginUsuario === login && senhaUsuario === senha) {
    io.write('Bem vindo ao sistema!')
} else {
    io.write('Dados inválidos.')
}