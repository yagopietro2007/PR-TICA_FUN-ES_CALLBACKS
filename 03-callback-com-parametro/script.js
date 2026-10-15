// EXEMPLO 03 - Passar um valor para a função callback.

// Recebe um número e exibe seu dobro.
function mostrarDobro(valor) {
    console.log(valor * 2);
}

// Esta função recebe DUAS coisas: um valor e uma função.
function processar(valor, acao) {
    acao(valor); // Executa o callback e entrega o número a ele.
}

processar(5, mostrarDobro);
// O número 5 chega em processar; depois vai para mostrarDobro.
// SAÍDA: 10