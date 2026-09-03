//uso do if e else para desvio de fluxo da applicação
//if pode ser usado sozinho, mas o else precisa de um if para funcionar
//else-if pode ser usado para testar mais de uma condição e quantos eu quiser, mas o else precisa ser o último da cadeia de condições
//podemos usar condições compostas com o operador lógico && (and) e || (or) para testar mais de uma condição ao mesmo tempo
//podemos usar condições sem else-if, utilizando apenas if e else, mas nesse caso, o else será executado sempre que a condição do if for falsa, sem testar outras condições
const hora = 20;

if (hora >= 0 && hora < 12) //&& = and
    {
        console.log("Bom dia!");
    }
else if (hora >= 12 && hora < 18)
    {
        console.log("Boa tarde!");
    }
else
    {
        console.log("Boa noite!");
    }

const numero = 20;

if (numero % 2 === 0) // % = módulo (resto da divisão) for impar, o resto da divisão por 2 será 1, se for par, o resto da divisão por 2 será 0 par.
    {
        console.log("O número é par.");
    }
else
    {
        console.log("O número é ímpar.");
    }

//o bloco de if e else if irá fazer a checagem até encontrar a primeira condição verdadeira, e então irá executar o bloco de código correspondente, e não irá mais checar as outras condições, mesmo que elas sejam verdadeiras. Já o bloco de if e else irá checar todas as condições, e irá executar o bloco de código correspondente a cada condição verdadeira.

//quando usamos if e else nao fechamos com ; pois o bloco de código é fechado com chaves {}, mas dentro do bloco de código podemos usar ; para separar as instruções, mas não é obrigatório, pois o JS entende que cada linha é uma instrução, mas é uma boa prática usar ; para evitar erros de interpretação do código.