function calcularMedia(notas) {

    let soma = 0;
    for (c = 0; c < notas.length; c++) {
        soma += notas[c];
    }
    media = soma / notas.length;

    return media;

}

let media; // escopo global

function aprovacao(notas) {
    let media = calcularMedia(notas); // escopo da função

    let condicao = media >= 8 ? "aprovado" : "reprovado";

    return 'Média: ' + media + '- Resultado: ' + condicao;

}

//console.log(aprovacao([9, 8, 7, 6]));

document.addEventListener('submit', function (event) {
    event.preventDefault();

    let formulario = document.getElementById('formulario01');

    let dados = new FormData(formulario);

    let objeto = {};

    let notas = [];

    for (let key of dados.keys()) {
        objeto[key] = dados.get(key);

        // adicionar itens no array
        notas.push(dados.get(key));



    }

    console.log(notas);

    console.log(objeto);

    document.getElementById('resultado').innerHTML = aprovacao(notas);

})