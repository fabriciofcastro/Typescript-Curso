
//Numeric Enums ( Enums Numéricos)

enum Idiomas {
  Português,
  Espanhol,
  Ingles,
  Frances
}

console.log(Idiomas);

const brasil: Idiomas = Idiomas.Português
console.log(brasil);


enum Dias {
  Segunda = 'SEG',
  Terca = 'TER',
  Quarta = 'QUA',
  Quinta = 'Quit',
  Sexta = ' SEX',
  Sabado = 'SAB',
  Domingo = 'DOM'
}

console.log(Dias.Domingo);

const enum Comida {
  Hamburger ='Hamburger',
  Massa = 'Hamburger',
  Torta = 'Torta',
  Churrasco = 'Churrasco',
  Pizza = 'Churrasco'
}

function comida(c: Comida) {
  const tipoComida = c
  return `Comida muito apetitosa ${tipoComida}`
}

console.log(comida(Comida.Churrasco));
console.log(comida(Comida.Pizza));
//console.log(comida(5));

enum Tarefa {
  Todo,
  Progress,
  Done,
}

const concluidaTarefa = {
  id: 1,
  status: Tarefa.Done,
  descricao: 'Parabens! Tarefa concluída com sucesso!',
}

if (concluidaTarefa.status === Tarefa.Done) {
  console.log('Enviando e-mail... Tarefa concluída!');

}