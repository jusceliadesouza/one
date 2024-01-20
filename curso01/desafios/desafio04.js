// Desafio 01
console.log("Seja bem vindo(a)!");

// Desafio 02
let nome = "Juscélia";
console.log(`Olá, ${nome}!`);

// Desafio 03
alert(`Olá, ${nome}!`);

// Desafio 04
let linguagemQueMaisGosta = prompt(
  "Qual a linguagem de programação que você mais gosta"
);
console.log(`A linguagem que eu mais gosto é ${linguagemQueMaisGosta}`);

// Desafio 05
let valor1 = prompt("Digite o primeiro valor: ");
let valor2 = prompt("Digite o segundo valor: ");
let resultado = valor1 + valor2;

console.log(`A soma de ${valor1} e ${valor2} é igual a ${resultado}`);

// Desafio 06
valor1 = prompt("Digite o primeiro valor: ");
valor2 = prompt("Digite o segundo valor: ");
resultado = valor1 - valor2;

console.log(`A diferença entre ${valor1} e ${valor2} é igual a ${resultado}`);

// Desafio 07
let idade = prompt("Digite sua idade: ");

if (idade >= 18) console.log("Você é maior de idade");
else console.log("Você é menor de idade");

// Desafio 08
let numero = parseFloat(prompt("Digite um número: "));

if (numero > 0) console.log("O número é positivo");
else if (numero < 0) console.log("O número é positivo");
else console.log("O número é zero");

// Desafio 09
numero = 1;
while (numero <= 10) {
  console.log(numero);
  numero++;
}

// Desafio 10
let nota = 9;

if(nota >= 7) console.log("Aprovado");
else console.log("Reprovado");

// Desafio 11
let numeroAleatorio = Math.random();
console.log(numeroAleatorio);

// Desafio 12
numeroAleatorio = (Math.random() * 10) + 1;
console.log(numeroAleatorio);

// Desafio 13
numeroAleatorio = (Math.random() * 1000) + 1;
console.log(numeroAleatorio);
