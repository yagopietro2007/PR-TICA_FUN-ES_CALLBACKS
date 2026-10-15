// EXEMPLO 01 - Callback básico
// Objetivo: entender que podemos ENTREGAR uma função para outra função.

// Esta função sabe qual mensagem deve mostrar.
function dizerOla() {
    console.log("Olá, turma!");
}

// O parâmetro "funcaoRecebida" receberá uma função.
// O nome do parâmetro é livre: não precisa se chamar "callback".
function executar(funcaoRecebida) {
    funcaoRecebida(); // Os parênteses fazem a função recebida EXECUTAR.
}

// Sem parênteses: entregamos a função dizerOla, sem executá-la aqui.
executar(dizerOla);
// SAÍDA: Olá, turma!