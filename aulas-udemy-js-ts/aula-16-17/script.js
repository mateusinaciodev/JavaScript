//arrays são indexados por elementos ou seja:
//Luiz é o elemento ou indice 0, Maria 1, João 2.
const alunos = ['Luiz', 'Maria', 'João']; //array(lista) de nomes

console.log(alunos[0]); //aqui voce usa o método log para chamar no console do vscode o array de alunos no indice 0, sempre que for procurar um indice em uma lista use [].
console.log(alunos[2]);

alunos[0] = 'Pedro'; //agora atualizei o indice 0 para o nome Pedro

alunos[3] = 'Mateus'; //agora adicionei no indice 3 o nome Mateus

alunos[alunos.length] = 'Igor'; //outro método para adicionar
alunos[alunos.length] = 'Cauê';
alunos[alunos.length] = 'Jorge';

//para um array muito grande voce pode descobrir seu tamanho usando a propriedade .length
console.log(alunos.length);

//método .push para adicionar um elemento no fim do array
alunos.push('Gabriel');

//metodo para adicionar no indice 0(inicio) do array 
alunos.unshift('Pietra');

//metodo para remover um elemento no final do array | é possivel guardar os elementos removidos em uma variavel
alunos.pop('Gabriel');
const removido = alunos.pop(); 
console.log(removido);

delete alunos[2]; //para remover o elemento do indice 2

console.log(alunos.slice[0, 2]); //fatiamento do array por indices

console.log(typeof alunos); //pedindo o tipo de dado de uma array
console.log(alunos instanceof Array); //[] = array