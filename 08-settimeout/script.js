// EXEMPLO 08 — Callback que só será executado mais tarde.

function mostrarAviso() {
    console.log("Tempo encerrado!");
}

// Esta mensagem aparece imediatamente.
console.log("Iniciando contagem...");

// setTimeout é uma função pronta do JavaScript.
// Recebe (1) o callback e (2) o tempo de espera em milissegundos.
// 3000 milissegundos = aproximadamente 3 segundos.
setTimeout(mostrarAviso, 3000);

// Esta mensagem também aparece antes do callback, pois o código
// NÃO fica parado aguardando os três segundos.
console.log("O programa continua executando...");