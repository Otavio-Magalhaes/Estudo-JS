const listaLivros = require('./array.js')

function encontraMenores(pivo, array) {
    let menores = 0;
    for(let atual = 0 ; atual < array.length; atual++){
        let produtoAtual = array[atual]

        if(produtoAtual.preco < pivo.preco){
            menores++
        }
    }
                //lista   //inteiro no index do pivo    //numero de menores
    trocaLugares(array,  array.indexOf(pivo),       menores);

    return array
}

function trocaLugares(array, de ,para){
    let elem1 = array[de];
    let elem2 = array[para]

    array[para] = elem1
    array[de] = elem2
    
}

function divideNoPivo(array){
    // pegando um prduto aleatorio que se encontra no meio do array.
    let pivo = array[Math.floor(array.length / 2)] 

    encontraMenores(pivo,array);
    let valoresMenores = 0;
 
    
    for(let analisando = 0; analisando < array.length; analisando++){
        let atual = array[analisando]

        if(atual.preco <= pivo.preco && atual!==pivo ){

            trocaLugares(array, analisando, valoresMenores);
            valoresMenores++
        }

    }

    return array
}

// console.log(divideNoPivo(listaLivros));


module.exports = trocaLugares;