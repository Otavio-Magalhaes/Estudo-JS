// const personagem ={
//     nome: "Eldarian",
//     classe: "mago",
//     level: "30",
//     aliado: {
//         nome: "Lima",
//         classe: "assasino"
//     },
//     status: "desaparecido"
// }


// console.log(personagem.aliado.classe)   


//colocando um objeto dentro de outro objeto usando lista

const cliente = {
    nome: "otavio",
    idade: "24",
    contaCorrente: "123456",
    dependentes: [{
        nome: "milena",
        parentesco: "esposa",
        dataNasc: "01/11/1998"
    }]
}

//usando o metodo push para colocar o objeto no final do array(lista)
cliente.dependentes.push({
    nome: "Marcio",
    parentesco: "Pai",
    dataNasc: "11/09/1970"
})




const pai = cliente.dependentes.filter(dependente => dependente.parentesco==="Pai")

//como eu utilizo um metodo de array para criar  a const pai. ela é salva como um array também.  
//deste modo o retorno no console é um array.

console.log(pai)





