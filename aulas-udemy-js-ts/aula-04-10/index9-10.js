//ECMAScript 2015 (ES6) - Variáveis
var name = 'Luiz';
var name = 'Otávio';

name = 'Luiz Otávio'; //não fazer isso, pois o var permite redeclarar a variável, o que pode gerar problemas no código
console.log(name);

//Tipos de dados primitivos em JavaScript: string, number, boolean, null, undefined, symbol, object

const nome = 'Luiz'; //string 
const nome1 = "Luiz"; //string
const nome2 = `Luiz`; //string que permite interpolação de variáveis e expressões
const num1 = 10; //number
const num2 = 10.52; //number
let nomeAluno; //undefined "indefinido" - sem lugar na memória, não aponta para nenhum endereço de memória
const sobrenomeAluno = null; //null = nulo, objeto que não possui nada dentro
//a diferença entre null e undefined é que o null é um objeto que não possui nada dentro, enquanto o undefined é uma variável que não foi inicializada, ou seja, não aponta para nenhum endereço de memória.
const aprovado = true; //boolean

const a = [1, 2, 3]; //object
const b = a; //object

console.log(a, b);
b.push(4);
console.log(a, b); //a e b apontam para o mesmo endereço de memória, então quando alteramos b, a também é alterado
