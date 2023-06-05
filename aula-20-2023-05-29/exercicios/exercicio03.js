const io = require('../../io/io')

let i = 0

while (i < 100) {
    io.write(i)
    i = i + 2
}