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

let relatorio = ""

for (let info in cliente){
    if( typeof cliente[info] === "object" || typeof cliente[info] ==="function"){
        continue
    } else{
        relatorio += ` ${info} : ${cliente[info]} \n`
    }
}




