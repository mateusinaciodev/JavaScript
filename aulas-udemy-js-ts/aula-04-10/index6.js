let nome = "João";
let filho = "Eduardo";
let sobrenome; //Definindo uma variável sem valor inicial
sobrenome = "Silva"; //Atribuindo um valor à variável


console.log(nome, 'nasceu em 1990.');
console.log('Em 2020,', nome, sobrenome, 'conheceu Maria.');
console.log('Maria teve 1 filho com', nome, sobrenome, 'em 2021.');
console.log('O filho de', nome, sobrenome, 'se chama', filho, '.');
console.log("Olá, " + filho + " " + sobrenome + "!"); // Concatenando strings

//Não podemos usar variaveis com palavras reservadas, como por exemplo: let, var, const, function, etc.

//Variaveis precisam ter nomes significativos, que façam sentido para o que a variável representa. Exemplo: let nomeDoUsuario = "João"; // Nome da variável é significativo e faz sentido para o que ela representa

//Não podemos iniciar o nome de uma variável com números, espaços e traços ex: let 1nome = "João"; // Inválido
//let nome do usuário = "João"; // Inválido
//let nome-do-usuario = "João"; // Inválido

//utilizamos camelCase para nomear variáveis, ou seja, a primeira palavra é escrita em minúsculo e as demais palavras começam com letra maiúscula. Exemplo: let nomeDoUsuario = "João"; // Correto

//alem da camelCase, existe a snake_case: let nome_do_usuario = "João"; // Correto, mas não é a forma mais utilizada em JS

//Case sensitive: JS é case sensitive, ou seja, diferencia maiúsculas de minúsculas. Exemplo: let nomeDoUsuario = "João"; // Correto

//não podemos redeclarar variaveis com let e const, mas podemos redeclarar variáveis com var. Exemplo: let nomeDoUsuario = "João"; // Correto

//não utilize var para declarar variáveis, pois ela tem escopo global e pode causar problemas no código. Exemplo: var nomeDoUsuario = "João"; // Correto, mas não recomendado
