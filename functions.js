function calcularMedia(notas) {

    let soma = 0;
    for (c = 0; c < notas.length; c++) {
        soma += notas[c];
    }
    media = soma / notas.length;

    return media;

}



function aprovacao(media) {

    let condicao = media >= 7 ? "aprovado" : "reprovado";

    return condicao;

}

//console.log

console.log("Média: " + calcularMedia([8, 8]))
console.log(aprovacao(calcularMedia([8, 8])))

console.log("Média: " + calcularMedia([9, 3, 5, 4]))
console.log(aprovacao(calcularMedia([9, 3, 5, 4])))

console.log("Média: " + calcularMedia([10, 10, 10, 8]))
console.log(aprovacao(calcularMedia([10, 10, 10, 8]))) 