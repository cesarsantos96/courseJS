function calcularMedia(notas) {

    let soma = 0;
    for (c = 0; c < notas.length; c++) {
        soma += notas[c];
    }
    media = soma / notas.length;

    return media;

}

let media; //escopo global

function aprovacao(notas) {

    let media = calcularMedia(notas);
    let condicao = media >= 7 ? "aprovado" : "reprovado";

    return condicao;

}

//console.log

console.log("Média: " + calcularMedia([8, 8]))
console.log(aprovacao(calcularMedia([8, 8])))