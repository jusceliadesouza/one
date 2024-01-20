// Desafio 01
let diaDaSemana = prompt('Digite o dia da semana: ')
switch (diaDaSemana) {
  case 'Sábado':
  case 'Domingo':
    alert('Bom final de semana')
    break
  case 'Segunda':
  case 'Terça':
  case 'Quarta':
  case 'Quinta':
  case 'Sexta':
    alert('Boa semana')
    break 
}

// Desafio 02
let numero = prompt('Digite um número: ')
numero > 0 ? alert('Número positivo') : alert('Número negativo')

// Desafio 03
let pontuacao = 400
pontuacao >= 100 ? console.log('Parabéns, você venceu!') : console.log('Tente novamente!')

// Desafio 04
let saldo = 1000
console.log(`O saldo da conta é R$ ${saldo}.`)

// Desafio 05
let nome = prompt('Digite seu nome: ')
alert(`Bem vindo(a), ${nome}!`)
