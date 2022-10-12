let aprovado: boolean = true
let reprovado: boolean = false

console.log(aprovado);

console.log(reprovado);

function media(nota1: number, nota2: number, nota3: number) {
    let media = (nota1 + nota2 + nota3) / 3

    if(media >= 7) {
        console.log(`Aprovado. Média maior ou igual a 7 ${media}`);
        
    }else  console.log(`Reprovado. Média menor que 7 ${media}`);
    

}

media(8, 7, 9);
