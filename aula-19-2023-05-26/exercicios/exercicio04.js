const io = require('../../io/io')

let anos
let meses
let dias

io.write('Informe os anos:')
anos = io.readInt()
io.write('Informe os meses:')
meses = io.readInt()
io.write('Informe os dias:')
dias = io.readInt()

const resultado = (anos * 365) + (meses * 30) + dias

io.write('A idade em dias é: ' + resultado)