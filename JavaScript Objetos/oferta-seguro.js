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
    }
}



function oferecerSeguro(obj){
    const propsClientes = Object.keys(obj)

    if(propsClientes.includes("dependentes")){
        console.log(`Oferta de Seguro de vida para ${obj.nome}`)
    }
}

oferecerSeguro(cliente)

// console.log(Object.values(cliente))
console.log(Object.entries(cliente))