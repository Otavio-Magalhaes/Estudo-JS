class Cliente{
    constructor (nome, email, cpf, saldo){
        this.nome = nome
        this.email = email
        this.cpf = cpf
        this.saldo = saldo
    }

    sacar(valor){
        this.saldo -= valor

        return console.log(`Você sacou R$ ${valor}, seu saldo atual é: R$ ${this.saldo}`)
    }

    depositar(valor){
        this.saldo += valor

        return console.log(`Você depositou R$ ${valor}, seu saldo atual é: R$ ${this.saldo}`)
    }
}


class ClientePoup extends Cliente {
    constructor(nome,email,cpf,saldo,saldoPoup){
        super(nome, email,cpf,saldo)
        this.saldoPoup = saldoPoup
    }

    depositarPoup(valor){
        this.saldoPoup += valor

        return console.log(`Você depositou R$ ${valor}, seu saldo atual é: R$ ${this.saldoPoup}`)
    }
}

const otavio = new ClientePoup("otavio", "otavio@email.com", "1112223345", 50,150)

console.log(otavio)

otavio.depositarPoup(50)