function calcImposto (valor) {
    return valor * 0.12;
}

let vetor = [];
let tabela = document.getElementById("tabela");

function preencherVetor () {

    let nome = document.getElementById("nome").value;
    let valor = document.getElementById("valor").value;
    let imposto = calcImposto(valor);
    vetor.push({
        nome,
        valor,
        imposto
    })
    exibirTabela();
}
function exibirTabela () {
    tabela.innerHTML = `
    <tr>
        <th>Id</th>
        <th>Nome</th>
        <th>Valor</th>
        <th>Valor imposto</th>
    </tr>
    `
    for( i = 0; i <= vetor.length; i++) {
        tabela.innerHTML += `
        <tr>
            <td>${i+1}</td>
            <td>${vetor[i].nome}</td>
            <td>${vetor[i].valor}</td>
            <td>${vetor[i].imposto}</td>
            </tr>
          `
    }
    ;
}

function apagarTabela() {
    vetor = [];
    exibirTabela();

}

function removerTabela () {
    vetor.pop();
    exibirTabela();
}
