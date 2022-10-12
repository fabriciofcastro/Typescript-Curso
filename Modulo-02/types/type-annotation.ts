let nome: string = 'Fabricio Castro'
console.log(nome);

let animais: string[] = ['Elefante', 'Cachorro', 'Panda', 'Gato']
console.log(animais);

let carro: {
    nome: string,
    ano: number,
    preco: number
}

carro = {nome: 'Toyota Corola', ano: 2022, preco: 120000 }
console.log(carro);

function multiplicarNumeros(n: number, n2: number) {
        return n * n2 
}

console.log( multiplicarNumeros(2, 5));
