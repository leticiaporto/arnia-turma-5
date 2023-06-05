const io = require('../../io/io')

let prazo = 0
let vista = 0

for (let i = 0; i < 3; i++) {
    io.write('Digite o código: ')
    const codigo = io.read()

    io.write('Digite o valor: ')
    const valor = io.readFloat()
    
    if(codigo === 'V') {
        vista = vista + valor
    } else if(codigo === 'P') {
        prazo = prazo + valor
    }
}

const total = prazo + vista

io.write('O valor total das compras à vista: ' + vista)
io.write('O valor total das compras à prazo: ' + prazo)
io.write('O valor total das compras efetuadas: ' + total)
