/*function meuEscopo() 
//forma de proteger o código, não deixando vazar para o escopo global
{
 const form = document.querySelector('.form'); //seleciona o formulário
 /*form.onsubmit = function (evento) //cria um evento para quando o formulário for enviado
 {
    evento.preventDefault(); //previne o comportamento padrão do formulário, que é enviar os dados e recarregar a página
    alert('Formulário enviado'); //exibe um alerta

 };*/
 //quando usamos "=" precisamos colocar o ";" no final, pois estamos atribuindo uma função a uma variável.

//let contador = 0; //cria uma variável para contar quantas vezes o formulário foi enviado
/*form.addEventListener('submit', recebeEventoForm); //adiciona um evento para quando o formulário for enviado, chamando a função recebeEventoForm
function recebeEventoForm(evento)
//cria uma função para receber o evento do formulário
{
evento.preventDefault();
//previne o comportamento padrão do formulário, que é enviar os dados e recarregar a página
console.log(`Formulário não enviado. Contador: ${contador}`); //exibe uma mensagem no console
contador++; //incrementa a variável contador
}
    
}
meuEscopo(); //chama a função para executar o código.*/

function meuEscopo()
{
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    const pessoas = []; //array vazio para armazenar os objetos de pessoas que o usuario preencha no formulário

    function recebeEventoForm(evento)
    {
        evento.preventDefault();

        const nome = form.querySelector('.nome');
        const idade = form.querySelector('.idade');
        const sexo = form.querySelector('.sexo');
        const profissao = form.querySelector('.profissao');

        pessoas.push({
            nome: nome.value,
            idade: idade.value,
            sexo: sexo.value,
            profissao: profissao.value
        }); //aqui estamos criando um objeto com as informações do formulário e adicionando ao array pessoas

        console.log(pessoas);

        resultado.innerHTML += `<p>Nome: ${nome.value} | Idade: ${idade.value} | Sexo: ${sexo.value} | Profissão: ${profissao.value}</p>`; //exibe as informações do formulário na tela
    }

    form.addEventListener('submit', recebeEventoForm);
}
meuEscopo();