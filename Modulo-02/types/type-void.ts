

// void quer dizer um vazio, ou ausência de retorno

function mensagem(erro: string): void {
    console.log(erro);

}

mensagem('Required field - name')

const logErrorExample = ( errorMessage: string) => {
  console.log(errorMessage );

}

logErrorExample('Require field - Surname')

let exampleVoid: void


// exampleVoid = boolean   --- O tipo 'boolean' não pode ser atribuído ao tipo 'void'
// exampleVoid = 'oi'   --- O tipo 'string' não pode ser atribuído ao tipo 'void'
// exampleVoid = 1   --- O tipo 'number' não pode ser atribuído ao tipo 'void'
// exampleVoid = null     --- O tipo 'number' não pode ser atribuído ao tipo 'void'.
exampleVoid = undefined  // O tipo 'undefined' pode ser atribuído ao tipo 'void'
