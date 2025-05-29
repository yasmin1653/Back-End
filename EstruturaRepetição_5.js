import rl from 'readline-sync';

//ATIVIDADE 1
//let num = rl.question("Informe o número pera gerar a tabuada: ");
//let cont = 1;
//while (cont <= 10) {
    //console.log(`${num} x ${cont} = ${num * cont}`)
//}

//ATIVIDADE 2

import entradaDados from 'readline-sync';

let numAlunos = entradaDados.questionInt("Informe o numero de alunos da turma: ");
let contAlunos = 1;
let somaMedias = 0;

while (contAlunos <= numAlunos) {
console.log(`Aluno ${contAlunos}`);

let contBimestres = 1;
let somaNotas = 0;

while(contBimestres <= 4) {
let nota=entradaDados.questionInt(`informe a nota do ${contBimestres} bimestre do aluno ${contAlunos}: `);
somaNotas += nota;
contBimestres++;
}
let mediaAluno = somaNotas / 4;
somaMedias += mediaAluno;
console.log(`Media do Aluno ${contAlunos}: ${mediaAluno.toFixed(2)}`);
contAlunos++;
}
let mediaGeralTurma = somaMedias / numAlunos;
console.log(`Media geral da turma ${mediaGeralTurma.toFixed(2)}`);



//ATIVIDADE 3

const numAleatorio = Math.floor(Math.random()*100)+1;
let palpite;

do {
    palpite = rl.questionInt("Tente adivinhar o Numero (entre ' a 100): ");
    if (palpite === numAleatorio) {
        console.log("Parabéns! Você adivinhou o numero.")
    } else if(palpite < numAleatorio) {
        console.log("Tente número maior.")
    } else {
        console.log("Tente um número menor.")
    }

} while (palpite !== numAleatorio); 

//ATIVIDADE 4
for (let i =2; i <= 10; i++);

let nome = rl.question(`Informe o nome ${i} pessoa: `)
let salario = entradaDados.questionFloat(`Informe o número da ${nome}: `)
let impostoRenda = 0;

if (salario <= 2100) {
    impostoRenda = 0;

} else if (salario <= 2800) {
    impostoRenda = salario * 0.075;

} else if (salario <= 2000) {
    impostoRenda = salario*0.15

}else if (salario <= 4660) {
    impostoRenda = salario * 0.225;

} else {
    impostoRenda =salario * 0.275;
}

console.log(`\n---Impostos de renda a ser Pago---`);
console.log(`Nome: ${nome} \nImpostos de Renda: R$ ${impostoRenda.toFixed(2)}\n`)


//ATIVIDADE 5

let anterior = 0;
let atual =1;

console.log("---Sequência de Fibonacci---");
console.log("")



//ATIVIDADE6

const pessoa ={
    nome: "Yasmin",
    idade: 25,
    sexo: F
}

for (let dados in pessoa) {
    console.log(`${dados}: ${pessoa[dados]}`)
}

