// Acessando o valor da Tuplas
let pessoa: [string, number, string, boolean]
pessoa = ['Fabricio', 36, 'Programador', true]
console.log(pessoa);

// Tuplas com labels
let pessoas2: [nome: string, posicao: string, idade: number]  = ['Fabricio', 'Cloud Advocate Javascript', 34]
console.log(pessoas2);

// Usando Tuplas com Spread operator
let ListaFrutas: [string, ...string[]] = ['laranja', 'limão', 'uva', 'morango', 'limão', 'caju', 'Melancia' ]
console.log(...ListaFrutas);

// Lista Heterogênea de Tuplas
let listaFrutas2: [number, boolean, ...string[] ] = [ 20, true, ...ListaFrutas]
console.log(listaFrutas2);

// Tuplas em funções
function listaPessoas(nome:string[], idades: number[]) {
    return [...nome, ...idades]
}

let resultado = listaPessoas(['Fabricio', 'Eloá'], [36, 1])

console.log(resultado);


type Nome =
    |
        [primeiroNome: string, sobreNome: string]
    |
        [primeiroNome: string, nomeMeio: string, sobreNome: string]

function criarPessoa(...nome: Nome) {
    return [...nome]
}

console.log(criarPessoa('Fabricio', 'Feitosa de Castro'));
console.log(criarPessoa('Fabricio', 'Feitosa', 'de Castro'));



// Generic     ///******************** */

type Usuario = { 
  nome: string
  email: string
}

type Admin = {
  nome: string
  email: string
  admin: true
}

const usuario : Usuario = {
  nome: 'Fabricio',
  email: 'fabriciofeitosacastro@gmail.com',
}

const admin: Admin = {
  nome: 'Fabricio',
  email: 'fabriciofeitosacastro@gmail.com',
  admin: true
}

function acessarSistama<T>(usuario: T): T {
    return usuario
}

console.log(acessarSistama<Usuario>(usuario))
console.log(acessarSistama<Admin>(admin));
