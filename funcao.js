// 01. Caixa alta
function paraCaixaAlta(texto) {
  return texto.toUpperCase();
}

// 02. Par ou ímpar
function verificarParOuImpar(numero) {
  return numero % 2 === 0 ? "Par" : "Ímpar";
}

// 03. Soma de dois números
function somar(a, b) {
  return a + b;
}

// 04. Valor acrescido de uma porcentagem
function acrescimoPercentual(valor, percentual) {
  return valor + (valor * percentual / 100);
}

// 05. Valor com desconto
function aplicarDesconto(valorOriginal, percentualDesconto) {
  return valorOriginal - (valorOriginal * percentualDesconto / 100);
}

console.log(aplicarDesconto(100, 10)); // Resultado: 90


//EXERCICIOS NIVEL MÉDIO


// 06. Área de um círculo
function calcularAreaCirculo(raio) {
  return (Math.PI * Math.pow(raio, 2)).toFixed(2);
}

// 07. Celsius para Fahrenheit
function celsiusParaFahrenheit(celsius) {
  return (celsius * 9/5 + 32).toFixed(2);
}

// 08. IMC
function calcularIMC(peso, altura) {
  return (peso / (altura * altura)).toFixed(2);
}


//EXERICIOS NIVEL DESAFIADOR


//Validar senha
function validarSenha(senha) {
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$/;
  return regex.test(senha);
}

//CPF
function validarCPF(cpf) {
  cpf = cpf.replace(/[^\d]+/g, '');
  if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) return false;

  let soma = 0;
  for (let i = 0; i < 9; i++) soma += parseInt(cpf[i]) * (10 - i);
  let digito1 = (soma * 10) % 11;
  if (digito1 === 10) digito1 = 0;

  if (digito1 !== parseInt(cpf[9])) return false;

  soma = 0;
  for (let i = 0; i < 10; i++) soma += parseInt(cpf[i]) * (11 - i);
  let digito2 = (soma * 10) % 11;
  if (digito2 === 10) digito2 = 0;

  return digito2 === parseInt(cpf[10]);
}


//Montante de investimento
function calcularMontante(capitalInicial, taxaJuros, tempoMeses) {
  const i = taxaJuros / 100;
  const montante = capitalInicial * Math.pow((1 + i), tempoMeses);
  return montante.toFixed(2);
}

