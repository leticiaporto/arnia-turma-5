const divisao = (divisor, dividendo) => {
    let quociente = 0
    let resto = 0

    while (divisor > 0) {
        divisor = divisor - dividendo
        if (divisor > 0) {
            quociente++
            resto = divisor
        }
    }

    return [quociente, resto]
}

console.log(divisao(5, 2))