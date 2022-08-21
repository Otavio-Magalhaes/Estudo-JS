const clientes = [
    {
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
                dataNasc: "11/09/1970"
            }],  
    },
    {
        nome: "milena",
        idade: "23",
        contaCorrente: "010203",
        dependentes: [
            {
                nome: "otavio",
                parentesco: "Marido",
                dataNasc: "10/03/1998"
            }],
    }
]
 

const listaUnica = [...clientes[0].dependentes, ...clientes[1].dependentes];

console.table(listaUnica)



