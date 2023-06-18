const form = document.getElementById('subscribe')

const REQUIRED = 'Campo obrigatório'

/**
 * Função que tem como objetivo colocar conteúdo dentro da tag small que está dentro das sections com
 * a classe field. O input.parentNode serve para pegar a tag que é pai do input passado por parâmetro, 
 * e o querySelector seleciona a primeira tag small que ele encontrar. Além disso, a função também é 
 * responsável por colorir a borda do input, mostrando que está tudo certo ou errado.
 * @param {HTMLInputElement} input Elemento HTML Input em que será mostrada a mensagem
 * @param {string} message String contendo a mensagem que será inserida dentro da tag small
 * @param {string} className Classe para colorir a borda do input, sendo 'success' para sucesso e 'error' para erro
 * @returns {boolean} True ou false a depender da classe recebida
 */
const showMessage = (input, message, className) => {
  const msg = input.parentNode.querySelector('small')
  msg.innerText = message
  input.classList.remove('success')
  input.classList.remove('error')
  input.classList.add(className)
  return className === 'success'
}

/**
 * Função que tem como objetivo verificar se há algum valor dentro do input ou se ele está vazio.
 * Repare que a função trim() serve para retirar os espaços em branco antes e depois da string.
 * @param {HTMLInputElement} input Elemento HTML Input que será verificado 
 * @param {string} message Mensagem de erro caso o elemento esteja vazio
 * @returns 
 */
const hasValue = (input, message) => {
  if (input.value.trim() === '') {
    return showMessage(input, message, 'error')
  }
  return showMessage(input, '', 'success')
}

/**
 * Esta função chamada a partir do elemento form que pegamos lá em cima adiciona um 
 * listener para o evento submit. Quando este evento ocorre, a função que está declarada
 * no segundo parâmetro é disparada. Primeiro, a função previne que o comportamento padrão
 * de um submit seja executado. Segundo, ela pega os elementos HTML de nome e email. Terceiro,
 * ela valida cada um dos campos e por último ela deixa executar o submit caso ambos sejam
 * válidos.
 */
form.addEventListener('submit', (event) => {
  event.preventDefault()

  console.log(form.elements)
  const codigoInput = form.elements['codigo']
  const nomeInput = form.elements['nome']
  const categoriaInput = form.elements['categoria']
  const precoInput = form.elements['preco']
  const quantidadeInput = form.elements['quantidade']

  const codigoValid = hasValue(codigoInput, REQUIRED)
  const nomeValid = hasValue(nomeInput, REQUIRED)
  const categoriaValid = hasValue(categoriaInput, REQUIRED)
  const precoValid = hasValue(precoInput, REQUIRED)
  const quantidadeValid = hasValue(quantidadeInput, REQUIRED)
 
  if (codigoValid && nomeValid && categoriaValid && precoValid && quantidadeValid) {
    const total = parseInt(precoInput.value) * parseInt(quantidadeInput.value)
    
    const card = document.querySelector('.card')
    const cardNome = document.querySelector('.card-nome')
    const cardCategoria = document.querySelector('.card-categoria')
    const cardPreco = document.querySelector('.card-preco')
    const cardQuantidade = document.querySelector('.card-quantidade')
    const cardTotal = document.querySelector('.card-total')

    cardNome.innerHTML = `#${codigoInput.value} - ${nomeInput.value}`
    cardCategoria.innerHTML = `${categoriaInput.value}`
    cardPreco.innerHTML = `R$ ${precoInput.value}`
    cardQuantidade.innerHTML = `${quantidadeInput.value}`
    cardTotal.innerHTML = `R$ ${total}`
    card.classList.add('block')
  }
})