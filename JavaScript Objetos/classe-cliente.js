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


const otavio = new Cliente("otavio", "otavio@emal", "12345678996", 150)

console.log(otavio)

otavio.sacar(50)

otavio.depositar(100)