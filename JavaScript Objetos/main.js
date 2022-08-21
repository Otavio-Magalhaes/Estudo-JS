const cliente ={
    nome: "Otavio",
    idade: "24",
    contaCorrente: "12345",
    cpf: "13995497748",
    _saldo: 0
}

// console.log(`meu cpf é: ${cliente.cpf.substring(8,12)}`)

/*Acessando um ojeto com colchetes*/ 

/* Crio uma variavel com os nomes das chaves do objeto e passo ela como parametro no console.log, deste modo:  */

const chaves = ["nome","idade","contaCorrente", "cpf", "_saldo"]

// console.log(`Nome Do cliente: ${cliente[chaves[0]]}`);

//             index seria o elemento nas posições dentro do array
chaves.forEach(index => console.log(cliente[index]))