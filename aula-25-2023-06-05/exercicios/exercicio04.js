const alteraArray = (numeros) => {
    const novoArray = numeros.map((numero) => {
        if(numero % 2 === 0) {
            const novoNumero = numero * 4
            return novoNumero
        } else {
            const novoNumero = numero * 3
            return novoNumero
        }
    })
    console.log(novoArray)
}

const array = alteraArray([34, 67, 89, 23, 45])