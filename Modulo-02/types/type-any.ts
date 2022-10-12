// Use any somente em casos extrema necessidade com conciência, pensando nas possibilidade erros em produção

const a: any = 888
const b: any = ['Fabricio']

const result = a * b //NaN
const res = a * b // Concatenar string com número
console.log(result);  // Resultadop inesperado que irá causar bugs


let numero  = 8888  // typescript por padrão vai tipar como any
let namo = 'Fabricio' // typescript por padrão vai tipar como any

const formulario: { [compoFormulario: string]: any } = {
    nome: 'Fabricio',
    segundoNom: 'Castro',
    idades: 34
  }

console.log(formulario);
