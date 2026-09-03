/*Operadores de comparação:
> (maior que)
< (menor que)
>= (maior ou igual a)
<= (menor ou igual a)
= (atribuição)
== (igual a) //checa o valor, mas não o tipo do dado
=== (estritamente igual a) //aqui compara o valor e o tipo do dado
!= (diferente de) //checa o valor, mas não o tipo do dado
!== (estritamente diferente de) //aqui compara o valor e o tipo do dado
*/

const a = 10;
const b = '10';
const comp = a == b; //coerção de tipo, o JS converte o valor de b que é uma string para number e compara com a, retornando true
const comp2 = a === b; //aqui o JS compara o valor e o tipo do dado, retornando false, pois a é number e b é string
console.log(comp);
console.log(comp2);

/*Operadores lógicos:
&& (AND) - retorna true se ambos os operandos forem true
|| (OR) - retorna true se pelo menos um dos operandos for true
! (NOT) - retorna true se o operando for false e vice-versa
*/

const expressaoAnd = true && true && true; //retorna true, pois todos os operandos são true
const expressaoOr = true || false || false; //retorna true, pois pelo menos um dos operandos é true
const expressaoNot = !true; //retorna false, pois o operando é true
console.log(expressaoAnd);
console.log(expressaoOr);
console.log(expressaoNot);

/*avaliação de curto-circuito:
FALSY - 0, '', null, undefined, NaN
TRUTHY - qualquer valor que não seja FALSY

&& (AND) - se o primeiro operando for false, o segundo operando não será avaliado, pois o resultado da expressão será false
|| (OR) - se o primeiro operando for true, o segundo operando não será avaliado, pois o resultado da expressão será true
*/

/*Operadores ternários:
? (condição) - retorna um valor se a condição for true e outro valor se a condição for false
*/

/*Operadores de incremento e decremento:
++ (incremento) - incrementa o valor da variável em 1
-- (decremento) - decrementa o valor da variável em 1
*/

/*Operadores aritméticos:
+ (adição)
- (subtração)
* (multiplicação)
/ (divisão)
% (módulo) - retorna o resto da divisão
** (exponenciação) - retorna o resultado da base elevada ao expoente
*/

/*Operadores de atribuição:
= (atribuição) - atribui um valor a uma variável
+= (atribuição de adição) - adiciona um valor à variável e atribui o resultado à variável
-= (atribuição de subtração) - subtrai um valor da variável e atribui o resultado à variável
*= (atribuição de multiplicação) - multiplica a variável por um valor e atribui o resultado à variável
/= (atribuição de divisão) - divide a variável por um valor e atribui o resultado à variável
%=(atribuição de módulo) - atribui o resto da divisão à variável */

/*Operadores de string:
+ (concatenação) - concatena duas ou mais strings
+= (atribuição de concatenação) - concatena uma string à variável e atribui o resultado à variável
*/

/*Operadores de tipo:
typeof - retorna o tipo do dado da variável
instanceof - verifica se um objeto é uma instância de uma determinada classe
*/

/*Operadores bit a bit:
& (AND) - realiza a operação AND bit a bit entre dois números
| (OR) - realiza a operação OR bit a bit entre dois números
^ (XOR) - realiza a operação XOR bit a bit entre dois números
~ (NOT) - realiza a operação NOT bit a bit em um número
<< (deslocamento à esquerda) - desloca os bits de um número para a esquerda
>> (deslocamento à direita) - desloca os bits de um número para a direita
*/

/*Operadores de vírgula:
, (vírgula) - permite a execução de múltiplas expressões em uma única linha, retornando o valor da última expressão
*/

/*Operadores de agrupamento:
() (parênteses) - permite agrupar expressões e alterar a ordem de precedência dos operadores
*/

/*Operadores de spread:
... (spread) - permite expandir elementos de um array ou objeto em elementos individuais
*/

/*Operadores de destructuring:
[] (destructuring de array) - permite extrair valores de um array e atribuí-los a variáveis individuais
{} (destructuring de objeto) - permite extrair valores de um objeto e atribuí-los a variáveis individuais
*/

/*Operadores de coalescência nula:
?? (nullish coalescing) - retorna o valor do operando da esquerda se ele não for null ou undefined, caso contrário, retorna o valor do operando da direita
*/

/*Operadores de encadeamento opcional:
?. (optional chaining) - permite acessar propriedades de um objeto sem causar um erro se a propriedade não existir, retornando undefined em vez disso
*/

/*Operadores de atribuição lógica:
&&= (atribuição lógica AND) - atribui o valor do operando da direita à variável se o operando da esquerda for true
||= (atribuição lógica OR) - atribui o valor do operando da direita à variável se o operando da esquerda for false
??= (atribuição lógica nullish coalescing) - atribui o valor do operando da direita à variável se o operando da esquerda for null ou undefined
*/