const lista = require('./listaLivros')
const troca = require("./troca")

console.log(lista)
//usando o codigo cru, sem função para trocar os livros de lugar
// for(let atual = 0; atual < lista.length; atual++){
//     let analise = atual;
//     while(analise > 0 && lista[analise].preco < lista[analise -1].preco){     
//         let itemAnalise = lista[analise];
//         let itemAnterior = lista[analise - 1];
       
//         lista[analise] = itemAnterior
//         lista[analise - 1] = itemAnalise 
//         analise--
//     }
// }


//usando a função de troca de posição dos livros
for(let atual = 0; atual < lista.length; atual++){
    let analise = atual;
    while(analise > 0 && lista[analise].preco < lista[analise -1].preco){     
        troca(lista, analise)
        analise--
    }
}


console.log(lista)