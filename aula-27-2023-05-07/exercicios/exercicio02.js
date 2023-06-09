const filtrarPares = (vetor) => {
    return vetor.filter((numero) => numero % 2 === 0)
}

const numerosPares = filtrarPares([54, 76, 34, 56, 12, 98, 57, 32])

console.log(numerosPares)

