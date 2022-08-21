console.log("Trabalhando com Variáveis!!");
// Js é case sensitive 
// cons é um tipo Constante de varíavel, é IMUTAVEL
// let é um tipo let de variavel, é mutavel, pode sempre mudar; ex: variavel contadora; ex: let contadora / contadora = contadora +1;


//let idade = 26;
//const nome = "Otavio"
//const sobrenome = "Florentino Magalhães"
//console.log(`Meu nome é: ${nome} ${sobrenome}`);

// const lista = new Array(
//     `otavio`,
//     `humberto`, 
//     `Milena`, 
//     `Jaqueline`, 
//     `Marcio`
// );

// lista.push(`Raia`); // Push Serve Para adicionar coisas dentro da lista
// lista.push(`Olaf`);


// console.log("Pessoas da familia");
// console.log(lista);

// lista.splice(6,1); //SPLICE SERVE PARA REMOVER UM ITEM DA LISTA, PRIMEIRO COLOCA A POSIÇÃO DO ITEM NA LISTA E DEPOIS QUANTOS ELEMENTOS DESEJA REMOVER;

// console.log(lista);

// lista.push(`Olaf`);

// console.log("Olaf retornou");

// console.log(lista[0], "É principal da familia");
const destino = "Salvador"
const idadeComprador = 18;
let temPassagemComprada = false;
const estaAcompanhada = true;

const listaDeDestinos = new Array (
    `São Paulo`,
    `Salvador`,
    `Rio De Janeiro`,
)


console.log("\nDistinos Possiveis!");
console.log(listaDeDestinos);


// if(idadeComprador >= 18 || estaAcompanhada){   
//     console.log("\n Comprador Maior de Idade!")
//     listaDeDestinos.splice(1,1);
//     console.log(listaDeDestinos);
// }
// else{
//     console.log("\n Comprador Menor de Idade, Compra cancelada!")
//     console.log(listaDeDestinos);
// }

let contador = 0;

while(contador < 3){
    console.log(listaDeDestinos[contador]);

    if(destino == listaDeDestinos[contador]){
        console.log("É igual!");
        break;
    }
    else{
        console.log("Não é igual!");
    }
    contador+=1;
}


