// EXEMPLO 07 - Executar um callback várias vezes.

// Recebe o número da repetição e mostra na tela do terminal.
function mostrarPasso(numero) {
    console.log("Passo:", numero);
}

// A função repetir sabe quantas vezes deve chamar o callback.
function repetir(quantidade, callback) {
    // O laço começa em 1 e vai até a quantidade desejada.
    for (let i = 1; i <= quantidade; i++) {
        callback(i); // Chama o callback entregando o número atual.
    }
}

repetir(3, mostrarPasso);

// SAÍDA: Passo: 1 / Passo: 2 / Passo: 3