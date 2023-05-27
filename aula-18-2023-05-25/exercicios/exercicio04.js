const io = require('./../../io/io')

io.write('Digite o valor de a:')
const a = io.readInt()

io.write('Digite o valor de b:')
const b = io.readInt()

io.write('Digite o valor de c:')
const c = io.readInt()

const delta = (b ** 2) - (4 * a * c)
io.write('')

if (delta < 0) {
    io.write('Não existem raízes reais para essa equação.')
} else {
    const raiz1 = (-b + (delta ** (1 / 2))) / (2 * a)
    io.write('A 1ª raiz é: ' + raiz1)

    if (delta > 0) {
        const raiz2 = (-b - (delta ** (1 / 2))) / (2 * a)
        io.write('A 2ª raiz é: ' + raiz2)
    }
}