
// never não contem valores. Abaixo é um exemplo de uso de never

function error(message: string): never {
  throw new Error(message)
}

console.log(error('Insira um caracter válido!'));
