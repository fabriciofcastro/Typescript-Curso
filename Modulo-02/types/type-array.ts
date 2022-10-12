
let array: string[] = ['abacaxi', 'Laranja', 'Limão', 'Mamão', 'Uva']

console.log(array[0]);


const array2: Array<string> =  ['abacaxi', 'Laranja', 'Limão', 'Mamão', 'Uva']

console.log(array2[2]);

array2.push('laura')

console.log(array2);


const idiomas: Array<string> = ['Português', 'Inglês', 'Japones', 'Russo', 'Chines']

console.log(idiomas.length);


let listaNumeros = [0, 1, 2, 3, 4, 5]

console.log(listaNumeros);

listaNumeros = [...listaNumeros, 6, 7, 8, 9, 10]

console.log(listaNumeros);


let linguensArrray: string[] = new Array('Javascript', 'C#', 'C++', 'PHP', 'Python')

function funcaoLinguagens( linguensArrray: string[] ){
    for (let i = 0; i < linguensArrray.length; i++) {
        console.log(linguensArrray[i]);
        
    }
}

funcaoLinguagens(linguensArrray)