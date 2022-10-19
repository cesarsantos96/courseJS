
let alunos = [
    [6, 7, 8, 6],
    [8, 5, 6, 8],
    [10, 6, 8, 7]
]

let nota = 0;
aluno = aluno[i];

for (let i = 0; i < alunos.length; i++) {

    nota = 0
    console.log("Aluno: " + aluno);

    for (let j = 0; j < aluno.length; j++);
    nota += alunos[j];

}

media = nota / 4;

if (media >= 7) {
    resultado = "Aprovado";
} else {
    resultado = "Reprovado";
}

console.log("Media: " + media + " - " + resultado);
