//Funções
function saudacao(nome)
{
    return `Ótimo dia ${nome}!`;
}
    
//tudo que estiver dentro da função está protected(protedigo)
//{
    //console.log(`Bom dia, ${nome}... Pronto para aprender mais sobre JS hoje ?`);
    //return 'Que fome'; //no return o que voce definir retornará para o parametro de saudacao dentro da variavel
//}

const variavel = saudacao('Mateus');
console.log(variavel);
//valor 'Mateus' será exibido no parametro(nome)
//para executar a função preciso referenciar com parenteses

function soma(x, y) //funcao soma que recebe dois parametros
{
    const resultado = x + y; //variavel constante que recebe a soma de x e y
    return resultado; //retorna o resultado da soma
}

console.log(soma(5, 5)); //retorna o output para o usuário da função somada de x e y que receberam os valores 5 + 5.

//apos usarmos o return a engine do JS não irá ler mais nada, ou seja, chegou no return ela encerra o processamento

const raiz = function(num) //no caso de função anônima se usa ;
{
    return num ** 0.5;
};

console.log(raiz(132)); //chamando a função e passando 9 como parametro e exibindo na tela o resultado

//uso da função com arrow-function => neste caso nao se usa a palavra função
const subtracao = (x, y) =>
    {
        const result = x - y;
        return result;
    }

const potencia = x => x ** 50; //arrow-function

console.log(potencia(5));
console.log(subtracao(50, 5));