
// Unknown te permite

let valor: unknown

valor = true
valor = 'oi'
valor = []
valor = 1123

//valor2: boolean = valor   // não permite atribuir uma varialvel que unknown a uma outra que esta tipada

console.log(valor);

//valor.toFixed(2) // não te permite utilizar metodos que existiria somente em determinados tipos, Unknown não //possui metodo algum, porque ele não representa nenhum tipo primitivo
