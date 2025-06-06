// Gera um número aleatório entre 1 e 100
let numeroSecreto = Math.floor(Math.random() * 100) + 1;
let tentativa;
let tentativas = 0;

do {
  tentativa = parseInt(prompt("Adivinhe o número (entre 1 e 100):"));
  tentativas++;

  if (tentativa > numeroSecreto) {
    alert("Tente um número menor!");
  } else if (tentativa < numeroSecreto) {
    alert("Tente um número maior!");
  } else if (tentativa === numeroSecreto) {
    alert(`Parabéns! Você acertou em ${tentativas} tentativas.`);
  } else {
    alert("Por favor, digite um número válido.");
  }
} while (tentativa !== numeroSecreto);
