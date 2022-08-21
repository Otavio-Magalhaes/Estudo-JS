import {cliente} from "./cliente.js";
import {contaCorrente} from "./contaCorrente.js";




const cliente1 = new cliente("Ricardo",11122233309);
const cliente2 = new cliente("Alice", 88822233309);


const contaCorrenteRicardo = new contaCorrente(1001, cliente1);
const conta2 = new contaCorrente(102, cliente2);



contaCorrenteRicardo.depositar(500);

let valor = 200;
contaCorrenteRicardo.transferir(valor, conta2);



console.log(contaCorrenteRicardo);
console.log(conta2);
console.log("Existem: ",contaCorrente.numeroDeContas);