

// Exemplos 01 básico de uso do type object

interface PessoaProps {
  name: string
  fistName: string
  funcao: string
  age: number
}

const person: PessoaProps = {
  name: 'Fabricio',
  fistName: 'Castro',
  age: 36,
  funcao: 'Programador front-end'
}

console.log(person);

// // xemplo 02 => object como parâmentros de função e nomeada (eles podem ser anônimos)

function onboarding01(funcionario: {nome: string}){
  return console.log('Seja Bem-vindo' + funcionario.nome);

}

onboarding01({nome: 'Fabricio Castro!!!!'});

// ***********************************************************************

interface ColaboradorProps {
  nome: string
  segundoNome: string
  idade: number
 // email?: string // parâmentro opcional
 readonly email?: string
}

function colaborador(colaborador: ColaboradorProps) {
  return `
    O nomedo do colaborador ${colaborador.nome} e seu sobre nome
    ${colaborador.segundoNome} e sua idade ${colaborador.idade}

  `

}

console.log( colaborador({nome: 'Fabricio Cololaborador', segundoNome: 'Castro', idade: 40}))

// ==> Tipos de extensões (herança)

interface Mae {
  nome: string
}

interface Pai {
  sobreNome: string
}

interface Filho extends Mae, Pai {
    idade: number
}

const filha: Filho = {
  nome: 'Fabrício ',
  sobreNome: 'Castro',
  idade: 70
}

console.log(filha);
