/*const nome = "João";
const idade = 25;
const cidade = "São Paulo";
const profissao = "Desenvolvedor";

// Utilizando template literals para criar uma mensagem
const mensagem = `Olá, meu nome é ${nome}, tenho ${idade} anos, moro em ${cidade} e trabalho como ${profissao}.`;
console.log(mensagem);*/

const primeiroNumero = 10;
const segundoNumero = 5;
const resultado = primeiroNumero + segundoNumero;
console.log(`A soma de ${primeiroNumero} e ${segundoNumero} é igual a ${resultado}.`);
console.log(`A subtração de ${primeiroNumero} e ${segundoNumero} é igual a ${primeiroNumero - segundoNumero}.`);
console.log(`A multiplicação de ${primeiroNumero} e ${segundoNumero} é igual a ${primeiroNumero * segundoNumero}.`);
console.log(`A divisão de ${primeiroNumero} e ${segundoNumero} é igual a ${primeiroNumero / segundoNumero}.`);

const resultadoDuplicado = resultado * 2;
console.log(`O resultado da soma duplicado é igual a ${resultadoDuplicado}.`);
let resultadoTriplicado = resultado * 3;
console.log(`O resultado da soma triplicado é igual a ${resultadoTriplicado}.`);
resultadoTriplicado = resultadoTriplicado + 10;
console.log(`O resultado da soma triplicado mais 10 é igual a ${resultadoTriplicado}.`);
// Utilizando template literals para criar uma mensagem com operações matemáticas

console.log(typeof resultado); // number