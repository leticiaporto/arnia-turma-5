const formulario = document.getElementById('formulario')

formulario.addEventListener('submit', (event) => {
    event.preventDefault()
    
    const numero1Input = formulario.elements['numero1']
    const numero2Input = formulario.elements['numero2']

    const soma = parseInt(numero1Input.value) + parseInt(numero2Input.value)

    const resultado = document.getElementById('resultado')
    resultado.innerHTML = `A soma dos números é: ${soma}`
})