const nome = 'Mateusz';
const idade = 30;
const cidade = 'São Paulo';
const peso = 82;
const altura = 1.80;
let anoNascimento = 2026 - idade;

let imc = peso / (altura * altura);
console.log(`Olá, meu nome é ${nome}, tenho ${idade} anos, moro em ${cidade}, meu peso é ${peso}kg, minha altura é ${altura}m e meu IMC é ${imc.toFixed(2)}.`);
//.toFixed(2) é utilizado para limitar o número de casas decimais do resultado do IMC para 2 casas.
console.log(`Eu nasci em ${anoNascimento}.`);
console.log("Olá, meu nome é " + nome + ", tenho " + idade + " anos, moro em " + cidade + ", meu peso é " + peso + "kg, minha altura é " + altura + "m e meu IMC é " + imc.toFixed(2) + "."); //concatenação de strings