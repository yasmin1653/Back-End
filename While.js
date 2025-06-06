//ATIVIDADE1

let numero = parseInt(prompt("Digite um número para ver a tabuada:"));
let i = 1;

// Loop while para gerar a tabuada de 1 a 10
while (i <= 10) {
  console.log(`${numero} x ${i} = ${numero * i}`);
  i++;
}

//ATIVIDADE2

let numAlunos = parseInt(prompt("Digite o número de alunos da turma:"));
let somaMedias = 0;

for (let i = 1; i <= numAlunos; i++) {
  let somaNotas = 0;


  for (let bimestre = 1; bimestre <= 4; bimestre++) {
    let nota = parseFloat(prompt(`Digite a nota do ${bimestre}º bimestre do aluno ${i}:`));
    somaNotas += nota;
  }

  let mediaAluno = somaNotas / 4;
  somaMedias += mediaAluno;

  console.log(`Média do aluno ${i}: ${mediaAluno.toFixed(2)}`);
}

let mediaTurma = somaMedias / numAlunos;
console.log(`Média geral da turma: ${mediaTurma.toFixed(2)}`);
