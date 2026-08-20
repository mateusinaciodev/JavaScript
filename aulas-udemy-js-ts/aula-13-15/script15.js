//aprendendo sobre o obj Math
let num5 = 9.54578;
console.log(Math.floor(num5)); //arredonda o número para baixo, então o resultado é 9
let num6 = 9.54578;
console.log(Math.ceil(num6)); //arredonda o número para cima, então o resultado é 10
let num7 = 3.54578;
console.log(Math.round(num7)); //arredonda o número para o inteiro mais próximo, então o resultado é 4 

console.log(Math.PI); // Math.PI retorna o valor de PI
console.log(Math.E); // Math.E retorna o valor de E
console.log(Math.round(4.5)); // Math.round arredonda o número para o inteiro mais próximo
console.log(Math.max(1, 5, 3, 9, 2)); // Math.max retorna o maior valor entre os números fornecidos
console.log(Math.min(1, 5, 3, 9, 2)); // Math.min retorna o menor valor entre os números fornecidos
const random = Math.round(Math.random() * (10 - 5) + 5); // Math.random retorna um número aleatório entre 0 e 1, então multiplicamos por (10 - 5) e somamos 5 para obter um número aleatório entre 5 e 10
console.log(random); // Math.random retorna um número aleatório entre 0 e 1
let num8 = 16;
console.log(Math.sqrt(num8)); // Math.sqrt retorna a raiz quadrada do número, então o resultado é 4
let num9 = 9;
console.log(num9 ** 0.5); // operador ** retorna a raiz quadrada do número, então o resultado é 3 