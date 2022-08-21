import { cliente } from "./cliente.js";

export class contaCorrente{
    static numeroDeContas = 0;
    agencia;
    _cliente;
    _saldo = 0;

// construtor da contaCorrente


constructor(agencia,cliente ){
    this.agencia = agencia;
    this._cliente = cliente;
    contaCorrente.numeroDeContas += 1;
}

    
// Acessores do atribudo _Cliente

    set cliente (novoValor){
        if(novoValor instanceof cliente){
            this._cliente = novoValor;
        }
    }

    get cliente(){
        return this._cliente;
    }

// - fim


// Acessores e modulos do atributo saldo

    get saldo(){
        return this._saldo;
    }

    sacar(valor){
        if(this._saldo >= valor){
            this._saldo -= valor;
            return valor;
        }else{
            return "Saldo insuficiente";
        }
    }


    depositar(valor){
        if(valor <= 0){
            return;
        }
        
        this._saldo += valor;
    }

    transferir(valor, conta){
            const valorSacado = this.sacar(valor);
            conta.depositar(valorSacado);
    }
}
