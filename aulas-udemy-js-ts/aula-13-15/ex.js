//let numero = prompt("Digite um número: ");
//numero = Number(numero);
const numero = Number(prompt('Digite um número inteiro positivo: '))
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;

texto.innerHTML = '';
texto.innerHTML = `<p>Raiz quadrada do seu número é: ${numero ** 0.5}.</p>`;
texto.innerHTML += `<p>${numero} inteiro é: ${Number.isInteger(numero)}.</p>`;
texto.innerHTML += `<p>O seu número é NaN?: ${Number.isNaN(numero)}.</p>`;
texto.innerHTML += `<p>O arredondamento para baixo do seu número é: ${Math.floor(numero)}.</p>`;
texto.innerHTML += `<p>O arredondamento para cima do seu número é: ${Math.ceil(numero)}.</p>`;
texto.innerHTML += `<p>Seu número com duas casas decimais é: ${numero.toFixed(2)}.</p>`;