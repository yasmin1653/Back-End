//1
nome='Yasmin Vitoria Paiano';
idade=15;
console.log("Olá, meu nome é",nome,"e tenho ",idade," anos")

//2
let texto ="Yasmin"
let textoMinusculo = texto.toLocaleLowerCase();
let textoMaiusculo=texto.toLocaleUpperCase();
console.log(textoMinusculo);
console.log(textoMaiusculo);

//3
console.log(typeof idade);

//4
let peso=48;
let altura=1.62;
let imc=(peso/(altura*altura)).toFixed(2);
console.log("Seu IMC é " +imc);