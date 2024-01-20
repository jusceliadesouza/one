let title = document.querySelector('h1');
title.innerHTML = 'Hora do Desafio'

function ShowMessage() {
  console.log('O botão foi clicado');
}

function ShowAlert() {
  alert('Eu amo JS');
}

function ShowPrompt() {
  let city = prompt('Digite nome de uma cidade brasileira: ');
  alert(`Estive em ${city} e lembrei de você.`);
}

function Sum() {
  let num1 = parseInt(prompt('Digite o primeiro número: '));
  let num2 = parseInt(prompt('Digite o segundo número: '));
  let result = num1 + num2;

  alert(`A soma de ${num1} e ${num2} é igual a ${result}`);
}