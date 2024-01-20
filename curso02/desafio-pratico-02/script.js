// Desafio 01
function exibirMensagem() {
  console.log("Olá, mundo!");
}

exibirMensagem();

// Desafio 02
function exibirNome(nome) {
  console.log(`Olá, ${nome}!`);
}

exibirNome("Juscélia");

// Desafio 03
function calcularDobro(num) {
  return num * 2;
}

let result = calcularDobro(10);
console.log(result);

// Desafio 04
function calcularMedia(num1, num2, num3) {
  return (num1 + num2 + num3) / 3;
}

let media = calcularMedia(8, 16, 20);
console.log(media);

// Desafio 05
function veficarMaiorNumero(num1, num2) {
  if (num1 > num2) return num1;
  else return num2;
}

let maiorNumero = veficarMaiorNumero(10, 20);
console.log(maiorNumero);

// Desafio 06
function calcularProduto(num1) {
  return num1 * num1;
}

let produto = calcularProduto(15);
console.log(produto);
