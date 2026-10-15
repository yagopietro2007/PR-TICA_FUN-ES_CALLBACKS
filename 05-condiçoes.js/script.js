// EXEMPLO 04 - Callback anônimo e arrow function.

function executar(acao) {
    acao(); // Executa a função que vier como argumento.
}

// Aqui criamos uma função SEM NOME diretamente dentro da chamada.
executar(function () {
    console.log("Funcionou com função anônima!");
});

// Arrow function é uma escrita mais curta para criar uma função.
// O símbolo => pode ser lido como "vai executar isto" neste exemplo.
executar(() => {
    console.log("Funcionou com arrow function!");
});

// Nos dois casos, a função só é executada porque executar() chama acao().