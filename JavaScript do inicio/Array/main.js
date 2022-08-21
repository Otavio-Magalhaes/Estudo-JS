//medias 10, 6.5, 8, 7.5;

// let nota = 10;
// let nota2 = 6.5;
// let nota3 = 8;
// let nota4 = 7.5;
// let soma = 0;
// const notas = [10,6.5,8,7.5];
// for (let i = 0; i < notas.length; i++) {

//     soma = soma + notas[i] ;
// }

// console.log(notas)
// const media= soma/ notas.length;

// notas.push(23)
// console.log(notas)

// notas.pop()
// console.log(notas)

// notas.splice(1,1)
// console.log(notas);

// const alunos = ['otavio', 'milea', 'sara'];

// const media = [10, 9.5, 8];

// let listaDeAlunosEMedias = [alunos, media];

// console.log(listaDeAlunosEMedias);

// console.log(`${listaDeAlunosEMedias[0][0]}, sua média é: ${listaDeAlunosEMedias[1][0]}`);

// const alunos = ['João', 'julina', 'Caio', 'Ana'];
// const mediaAlunos = [10,7,9,6]

// const listaDeAlunosEMedias = [alunos, mediaAlunos];

// const exibeNomeNota = (nomeDoAluno)=> {
//     if(listaDeAlunosEMedias[0].includes(nomeDoAluno)){
//         let indice = listaDeAlunosEMedias[0].indexOf(nomeDoAluno)
//         return listaDeAlunosEMedias[0][indice] + ` Sua média é: ${listaDeAlunosEMedias[1][indice]}`
//     }
//     else{
//         return `O Aluno ${nomeDoAluno} não está cadastrado.`
//     }
// }
// console.log(exibeNomeNota("Otavio"))




//        FOR EACH         forEach => executa o bloco de codigo, sem retornar nada a nao ser que seja pedido.

// const notas = [10,6.5,8,7.5];

// let  somaNotas = 0;

// notas.forEach( nota => {
//     somaNotas+=nota;
// })
// const mediaNotas = somaNotas/notas.length;
// console.log(mediaNotas)


// const nomes = ["Otavio", "Milena", "João", "Kaluoque"];

// nomes.forEach(nome =>{
//     console.log(nome)
// })


// // ARRAY.MAP           MAP  retornar uma array com novos valores.

// const notas = [10, 9, 8, 7, 6];
// //operador ternario:  se nota for igal a 10    retorna nota  : senao retorna nota +1
// const notasAtualizadas = notas.map(nota => nota ==10 ? nota : ++nota);
// // map sempre retorna algo na array nova.
// console.log(notasAtualizadas);


// const nomes = ["ana Julia", "Caio vinicius", "BIA silva"];

// const nomesAtualizados = nomes.map(nome => nome.toUpperCase());

// console.log(nomesAtualizados)


// .filter()   funciona na base True or False

// const nomes  = ["Ana", "Marcos", "Maria", "Mauro"];

// const notas = [7, 4.5, 8,7.5]
// // const reprovados = nomes.filter((aluno, indice) => notas[indice] < 5)
// // como o parametro aluno nao foi utilizado na function, podemos colocar o _(underline) para mostrarmos que existe um parametro porem ele nao vai ser utilizado.
// const reprovados = nomes.filter((_, indice) => notas[indice] < 5)


// console.log(reprovados)


//Método Reduce() -> reduz toda a array a um unico valor, passando como parametro um acumulador(soma dos valores) + o valor atual(valor da posição[i] onde se encontra no loop, e o segundo parametro é o de valor inicial do acumlador, sendo 0 a melhor opção)
const salaJS = [7,8,8,7,10,6.5,4,10,7];
const salaJava = [6,5,8,9,5,6]
const salaPython = [7,3.5,8,9.5]

function mediaSala(notasDaSala){
    const somaDasNotas = notasDaSala.reduce((acumulador,atual) => atual + acumulador, 0)

    return somaDasNotas / notasDaSala.length;
}

console.log(`A Média da Sala de JavaScript é de ${mediaSala(salaJS)}`)
console.log(`A Média da Sala de Java é de ${mediaSala(salaJava)}`)
console.log(`A Média da Sala de Python é de ${mediaSala(salaPython)}`)