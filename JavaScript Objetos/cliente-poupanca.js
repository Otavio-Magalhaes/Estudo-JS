function Cliente (nome, cpf, email, saldo){
    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.saldo = saldo
    this.depositar = function(valor){
        this.saldo+= valor
    }
}


function ClientePoupanca(nome, cpf,email,saldo,saldoPoup){
    //importei o construtor de cliente para clientePoupança, assim nao preciso repetir o codigo.
    Cliente.call(this, nome, cpf, email,saldo)
    this.saldoPoup = saldoPoup
}

const milena = new Cliente("milena", "00011122242", "milena@email.com", 200)

const otavio = new ClientePoupanca("otavio", "12345678994", "otavio@email.com", 50, 150)



//acessei o prototipo de cliente poupança e criei um novo metodo atraves do modo de ., assim criando o deposito para conta poupanca.
ClientePoupanca.prototype.depositarPoup = function(valor){
    this.saldoPoup+= valor
}