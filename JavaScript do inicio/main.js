// var lista = [3, 4,5,7,15,65,32,15,1,3]
// // Ordenamento de lista de forma correta!!
// console.log(lista.sort((a, b)=> a - b));

// const texto = "olá mundo!";

// console.log(texto.length);

// const textoLower = texto.toLocaleLowerCase();
// console.log(textoLower);

// const texUpper = texto.toUpperCase();
// console.log(texUpper);

// const textoSlice = texto.slice(0,4);
// console.log(textoSlice);

// const val1 = 5;
// const val2 = "5";

// if (val1 === val2) {
//     // == ele pega o numero mesmo sendo string, o === só vai ser igual se for do tipo number e o valor for igual.
//     console.log("igual!");  
// }

// else{
//     console.log("diferente!");
// }



// function imprimeTexto(texto) {
//     console.log(texto);
// }

// imprimeTexto("Olá Mundo!");
// imprimeTexto("Seja Bem Vindo!");


// function subtracao(val1, val2) {
//     console.log("Realizando a Subtração")
//     if(val1>=val2){
//         let soma = val1 - val2;
        
//         return soma
//     } else{
        
//         return "valor Negativo não é valido!!!"
//     }
// }

// console.log(subtracao(5,8))


// console.log(Math.random());

// function nomeIDade(nome, idade) {
//     return `Meu nome é ${nome}, e tenho ${idade} anos.`;
// }
// console.log(nomeIDade("otavio", 24));


// const apresentar = nome => `Meu nome é ${nome}`;

// const soma = (num1, num2) =>  num1 + num2;

// console.log(apresentar("otavio"));
// console.log(soma(3,4));


const somaNumerosPequenos = (num1,num2) => {
    if (num1 > 10 || num2 >10) {
        return "somente numeros menores que 10";
    } else{
       return num1 + num2;
    }
}

console.log(somaNumerosPequenos(4,5))