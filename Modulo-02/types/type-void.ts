

// void quer dizer um vazio, ou ausência de retorno

function mensagem(erro: string): void {
    console.log(erro);

}

mensagem('Required field - name')

const logErrorExample = ( errorMessage: string) => {
  console.log(errorMessage );

}

logErrorExample('Require field - Surname')
