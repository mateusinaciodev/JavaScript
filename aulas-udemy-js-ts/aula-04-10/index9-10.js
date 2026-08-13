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

//  Aritmetic Operators + - / * % **
//  + = adição e concatenação(unir dois valores)
//  ** = potenciação, % = resto da divisão

// ordem de precedência: () ** * / % + -

/*  Operadores de atribuição = += -= *= /= **= %=
    = atribuição simples, += atribuição de adição, -= atribuição de subtração, *= atribuição de multiplicação, /= atribuição de divisão, **= atribuição de potenciação, %= atribuição de resto da divisão

    Operadores de comparação == != === !== > < >= <= 
    == compara apenas o valor, != compara apenas o valor, === compara o valor e o tipo, !== compara o valor e o tipo, > maior que, < menor que, >= maior ou igual a, <= menor ou igual a */

    let contador = 1;
    console.log(contador);
    contador++; //incremento, contador = contador + 1
    console.log(contador);
    contador--; //decremento, contador = contador - 1
    console.log(contador);

    let contador2 = 2;
    console.log(++contador2); //incremento, contador2 = contador2 + 1
    console.log(contador2);
    
    const passo = 2;
    let contador3 = 0;

    contador3 += passo; //contador3 = contador3 + passo
    console.log('o número é: ' + contador3);
    contador3 += passo;
    console.log('o número é: ' + contador3);
    contador3 += passo;
    console.log('o número é: ' + contador3);

    // NaN = Not a Number, quando tentamos realizar uma operação matemática com um valor que não é um número, o JavaScript retorna NaN. Exemplo: 10 * 'Luiz' = NaN
    const number1 = 10;
    const number2 = Number('5'); //Number() converte uma string em um número
    const number3 = parseInt('5'); //parseInt() converte uma string em um número inteiro
    const number4 = parseFloat('5.2'); //parseFloat() converte uma string em um número de ponto flutuante