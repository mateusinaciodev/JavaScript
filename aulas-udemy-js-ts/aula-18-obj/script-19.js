/*
Primitivos (imutáveis) - string, number, boolean, undefined, null (bigint, symbol) - valores copiados

Referência (mutável) - array, object, function - passados por referência
*/

let a = [1, 2, 3];
let b = [...a]; // Spread operator - copia os valores do array a para o array b
let c = b; // c recebe a referência de b

a.push(4);
console.log(a, b);

b.pop(); // remove o último elemento do array b
console.log(a, b);

a.push('Mateus');
console.log(a, b, c); // c aponta para b, então quando b é alterado, c também é alterado

const ah = 
{
    nome: 'Lucas',
    sobrenome: 'Silva'
};

const be = {...ah}; // Spread operator - copia os valores do objeto ah para o objeto be
ah.nome = 'João';
console.log(ah,be);
