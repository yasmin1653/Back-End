//ATIVIDADE1

let a = 0, b = 1;

console.log("Os 20 primeiros números da sequência de Fibonacci:");
for (let i = 1; i <= 20; i++) {
  console.log(a);
  let proximo = a + b;
  a = b;
  b = proximo;
}


// ATIVIDADE2

let totalImposto = 0;

for (let i = 1; i <= 10; i++) {
  let nome = prompt(`Digite o nome da pessoa ${i}:`);
  let salario = parseFloat(prompt(`Digite o salário bruto de ${nome}:`));
  let imposto = 0;

  if (salario <= 2100) {
    imposto = 0;
  } else if (salario <= 2800) {
    imposto = salario * 0.075;
  } else if (salario <= 3750) {
    imposto = salario * 0.15;
  } else if (salario <= 4660) {
    imposto = salario * 0.225;
  } else {
    imposto = salario * 0.275;
  }

  totalImposto += imposto;

  console.log(`Nome: ${nome} | Salário: R$ ${salario.toFixed(2)} | Imposto de Renda: R$ ${imposto.toFixed(2)}`);
}

console.log(`\nTotal de Imposto de Renda a ser pago pela turma: R$ ${totalImposto.toFixed(2)}`);
