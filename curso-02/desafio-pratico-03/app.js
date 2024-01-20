// Desafio 01
function calculaIMC(altura, peso) {
  return peso / Math.pow(altura, 2);
}

let imc = calculaIMC(1.7, 60);
console.log(`O IMC é ${imc}`);

// Desafio 02
function calculaFatorial(num) {
  let fatorial = 1;

  for (let i = 2; i <= num; i++) {
    fatorial *= i;
  }

  return fatorial;
}

let num = 8;
let result = calculaFatorial(num);
console.log(`O fatorial de ${num} é ${result}`);

// Desafio 03
function converteDolarEmReal(dolar) {
  let cotacao = 4.8;
  return (cotacao * dolar).toFixed(2);
}

let valorEmDolar = 50;
let valorEmReal = converteDolarEmReal(valorEmDolar);
console.log(`US$ ${valorEmDolar} equilave a R$ ${valorEmReal}`);

// Desafio 04
function calculaArea(largura, altura) {
  return largura * altura;
}

function calculaPerimetro(largura, altura) {
  return 2 * (largura + altura);
}

let area = calculaArea(10, 5);
let perimetro = calculaPerimetro(10, 5);
console.log(`A área da sala é ${area} m² e o perímetro é ${perimetro} m`);

// Desafio 05
function calculaAreaCircular(raio) {
  return (Math.PI * Math.pow(raio, 2)).toFixed(2);
}

function calculaPerimetroCircular(raio) {
  return (2 * Math.PI * raio).toFixed(2);
}

let raio = 5;
let areaCircular = calculaAreaCircular(raio);
let perimetroCircular = calculaPerimetroCircular(raio);
alert(`A área da sala circular é ${areaCircular} m² e o seu perímetro é ${perimetroCircular} m`);

// Desafio 06
function exibirTabuada(num) {
  for (let i = 0; i <= 10; i++) {
    console.log(`${num} x ${i} = ${num * i}`);
  }
}

num = 9;
exibirTabuada(num);
