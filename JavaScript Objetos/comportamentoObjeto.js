const cliente = {
    nome: "otavio",
    idade: "24",
    contaCorrente: "123456",
    dependentes: [
        {
            nome: "milena",
            parentesco: "esposa",
            dataNasc: "01/11/1998"},
        {
            nome: "Marcio",
            parentesco: "Pai",
            dataNasc: "11/09/1970"}
    ],
    saldo: 100,





    depositar: function(valor){
        this.saldo +=  valor
    },

    sacar: function(valor){
        this.saldo -=  valor
        
    }
}   


console.log(cliente.saldo)

cliente.depositar(30)

console.log(cliente.saldo)

cliente.sacar(80)

console.log(cliente.saldo)