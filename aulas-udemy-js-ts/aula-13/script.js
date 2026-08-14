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