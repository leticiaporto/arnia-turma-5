const modal = document.getElementById('modal')
const formulario = document.getElementById('formulario')

const openModal = () => {
    modal.style.display = "block"
}

const closeModal = () => {
    modal.style.display = "none"
}
  
window.addEventListener("click", (e) => {
    if (e.target === modal) {
        closeModal()
    }
})

formulario.addEventListener('submit', (e) => {
    e.preventDefault()

    const nome = formulario.elements['nome'].value
    const email = formulario.elements['email'].value

    document.getElementById('nome-modal').innerHTML = nome
    document.getElementById('email-modal').innerHTML = email

    // document.getElementById('nome').value = ''
    // document.getElementById('cpf').value = ''
    // document.getElementById('email').value = ''
    // document.getElementById('senha').value = ''

    openModal()
})
