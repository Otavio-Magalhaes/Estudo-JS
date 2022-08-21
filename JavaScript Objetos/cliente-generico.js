 
 
 function Cliente (nome, cpf, email, saldo){
    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.saldo = saldo
    this.depositar = function(valor){
        this.saldo+= valor
    }
}


const otavio = new Cliente("Otavio", 13995497748, "otavio@email.com", 100)


