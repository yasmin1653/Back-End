//ATIVIDADE1

const pessoa = {
  nome: "Carlos",
  idade: 30,
  profissao: "Desenvolvedor"
};

for (let chave in pessoa) {
  console.log(`Chave: ${chave}, Valor: ${pessoa[chave]}`);
}

//ATIVIDADE2

const numeros = [10, 20, 30, 40, 50];

for (let numero of numeros) {
  console.log(`Valor: ${numero}`);
}


//ATIVIDADE3

const palavra = "JavaScript";

for (let letra of palavra) {
  console.log(`Caractere: ${letra}`);
}
