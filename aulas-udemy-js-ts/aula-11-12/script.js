let num1 = prompt('Digite o primeiro número:');
let num2 = prompt('Digite o segundo número:');

num1 = Number(num1);
num2 = Number(num2);

const resultado = num1 + num2;
alert(`A soma dos números é: ${resultado}`);

let varA = 'A'; //B
let varB = 'B'; //C
let varC = 'C'; //A

let varTemp = varA;
varA = varB;
varB = varC;
varC = varTemp;

console.log(varA, varB, varC);

[varA, varB, varC] = [varB, varC, varA];
console.log(varA, varB, varC);