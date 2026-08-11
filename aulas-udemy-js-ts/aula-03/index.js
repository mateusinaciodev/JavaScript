//maneiras de escrever strings em JS//
console.log("Hello, World!");   //string = texto
console.log("Mateus 'Inácio'"); 
console.log('Mateus "Inácio"');
console.log(`'Mateus' "Inácio"`);
console.log(123456, 15.86, -5, -0.5); //number = número
console.log(true, false); //boolean = lógico

//Exercício: Crie uma variável para cada tipo de dado e exiba no console//
let nome = "Mateus";
let idade = 30;
let altura = 1.80;
let estudante = true;
let horas = 10;
console.log(nome);
console.log(idade);
console.log(altura);
console.log(estudante);
console.log(horas);
console.log(typeof nome);
console.log(typeof idade);
console.log(typeof altura);
console.log(typeof estudante);

//para referenciar as variáveis dentro de uma string, podemos utilizar o template string, que é representado pelas crases `` e dentro delas podemos colocar as variáveis entre ${}//
console.log(`Meu nome é ${nome}, tenho ${idade} anos, ${altura} de altura, sou estudante e estou aprendendo JavaScript todos os dias, as ${horas}:00 da manhã!`);
console.log('Meu nome é "Mateus". Estou aprendendo JavaScript todos os dias, as ' + horas + ':00 da manhã!');
console.log('Meu nome é "Mateus". Estou aprendendo JavaScript todos os dias, as', 10,'da manhã!');