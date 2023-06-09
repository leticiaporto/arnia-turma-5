const processarArray = (numeros) => {
    //[1, 2, 3, 4, 5]
    numeros = numeros.filter((numero) => numero % 2 !== 0)

    console.log(numeros) //[1, 3, 5]

    const soma = numeros.reduce((acumulador, numero) => acumulador + numero, 0)

    console.log(soma) //9

    for (let i = 0; i < soma; i++) {
        console.log('JavaScript é muito bom! :)')
    }
}

processarArray([1, 2, 3, 4, 5])