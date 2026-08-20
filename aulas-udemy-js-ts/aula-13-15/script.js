let umaString = "Um texto";
let umaString2 = "O rato roeu a roupa do rei de Roma";

console.log(umaString[0]); // U
console.log(umaString.charAt(6)); //usamos o charAt para pegar o caractere na posição 6, que é "t"
console.log(umaString.concat(" em", " um", " lindo dia.")); // concatenando strings
console.log(`${umaString} em um lindo dia.`); // interpolando strings


console.log(umaString.indexOf("texto")); // indexOf retorna a posição do primeiro caractere da palavra "texto", que é 3
console.log(umaString.lastIndexOf("o")); // lastIndexOf retorna a posição do último caractere da palavra "o", que é 7
console.log(umaString.match(/[a-z]/g)); // match retorna um array com todas as letras minúsculas da string
console.log(umaString.search(/x/)); // search retorna a posição do primeiro caractere da palavra "x", que é 5
console.log(umaString.replace("Um", "Outro")); // replace substitui a palavra "Um" por "Outro"
console.log(umaString2.replace(/r/g, "#")); // replace substitui todas as ocorrências da letra "r" por "#"
console.log(umaString2.length); // length retorna o comprimento da string, que é 34
console.log(umaString.slice(2, 6)); // slice retorna a substring da posição 2 até a posição 6, que é "text"
console.log(umaString2.split(" ")); // split retorna um array com as palavras da string, separadas pelo espaço
console.log(umaString.toUpperCase()); // toUpperCase retorna a string em maiúsculas
console.log(umaString.toLowerCase()); // toLowerCase retorna a string em minúsculas
console.log(umaString2.trim()); // trim remove os espaços em branco do início e do fim da string  

//Conteudo Aula 26 - Padrão motor JS - IEEE 754-2008
let num1 = 10;
let num2 = 2.5;
console.log(num1.toString() + num2); // toString converte o número em string, então o resultado é "102.5"
console.log(num1.toString(2)); // toString(2) converte o número em binário, então o resultado é "1010"
console.log(num1.toFixed(2)); // toFixed retorna o número com 2 casas decimais, então o resultado é "10.00"
console.log(Number.isInteger(num1)); // isInteger verifica se o número é inteiro, então o resultado é true
let num3 = 0.7;
let num4 = 0.1;
num3 += num4;
num3 += num4;
num3 += num4;
console.log(num3); // 0.999999
console.log(num3.toFixed(1));