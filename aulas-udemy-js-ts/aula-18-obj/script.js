const array = [1, 2, 3]; //constante com array de numeros
array.push(4); //adiciona o numero 4 ao final do array
array[0] = 'Mateusz'; //altera o valor do primeiro elemento do array para 'Mateusz'
console.log(array);

//aprendizado sobre objetos com JS
const pessoa1 = //[] se usa para arrays e {} se usa para objetos
{
    nome: 'José',
    sobrenome: 'Silva',
    idade: 30
};

pessoa1.nome = 'João'; //altera o valor da propriedade nome do objeto pessoa1 para 'João'
//o '.' é usado para acessar as propriedades do objeto
console.log(pessoa1.nome); //imprime o valor da propriedade nome do objeto pessoa1
console.log(pessoa1.sobrenome);
console.log(pessoa1.idade);

//outra forma de criar um objeto
const pessoa2 = new Object(); //cria um novo objeto vazio
pessoa2.nome = 'Maria';
pessoa2.sobrenome = 'Souza';
pessoa2.idade = 25;
console.log(pessoa2.nome);
console.log(pessoa2.sobrenome);
console.log(pessoa2.idade);

//forma de criar um objeto com função construtora(factory)
function criaPessoa(nome, sobrenome, idade)
{
    return
    {
        //quando os paramentros e os nomes das propriedades são iguais, podemos usar apenas o nome do parametro
        nome, 
        sobrenome,
        idade
    };
}
const pessoa3 = criaPessoa('João', 'Pereira', 40);


function criarPessoa(nome, sobrenome, idade)
{
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
}

const cachorro = 
{
    name: 'Olly',
    last_name: 'Neguinha',
    age: 3,
    latir() 
    //método do objeto cachorro que imprime 'Au Au' no console
    {
        console.log(`${this.name} ${this.last_name} está latindo: Au Au`); 
        //usamos this para acessar e refenciar as propriedades do objeto cachorro, neste caso name e last_name, no contexto do método latir
    },

    increntarIdade()
    {
        this.age++; //incrementa a idade do cachorro em 1 cada vez que o método é chamado
    },

    comer()
    {
        console.log(`${this.name} ${this.last_name} está comendo.`);
    }
};

cachorro.latir(); //chama o método latir do objeto cachorro
cachorro.increntarIdade(); //chama o método increntarIdade do objeto cachorro, que incrementa a idade do cachorro em 1
console.log(cachorro.age);