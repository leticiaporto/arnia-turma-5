/*
A sequência de Fibonacci é a sequência de números naturais  onde os dois primeiros são 1 e o próximo é a soma dos dois anteriores. Faça um programa que imprime os 50 primeiros termos dessa sequência
*/
let contador = 0
let elemento = 1
let anterior = 0

while(contador < 50){ // 1ª - 2ª - 3ª - 4ª
    console.log(elemento) // 1 - 1 - 2 - 3

    let anteriorTemporario = elemento // 1 - 1 - 2 - 3
    elemento = elemento + anterior // 1 - 2 - 3 - 5
    anterior = anteriorTemporario // 1 - 1 - 2 - 3

    contador++
}