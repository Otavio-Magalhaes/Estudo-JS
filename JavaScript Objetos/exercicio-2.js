// function imprimeNomeEmail(tipoCliente){
//     console.log(`${tipoCliente} - nome: ${this.nome}, email: ${this.email}`)
//    }
   
//    const cliente1 = {
//     nome: "Carlos",
//     email: "c@email.com"
//    }
   
//    const cliente2 = {
//     nome: "Fred",
//     email: "f@email.com"
//    }


//    imprimeNomeEmail.call(cliente1, "cliente especial") 

//    imprimeNomeEmail.call(cliente2, "Cliente Estudante")

// function imprimeNomeEmail(tipoCliente, agencia){
//     console.log(`
//       ${tipoCliente} da agência ${agencia}:
//       - nome: ${this.nome}, email: ${this.email}
//       `)
//    }
   
//    const cliente1 = {
//     nome: "Carlos",
//     email: "c@email.com"
//    }
   
//    const cliente2 = {
//     nome: "Fred",
//     email: "f@email.com"
//    }

//    const clienteEspecial = ["Cliente especial", "Rio de Janeiro"]
//    const clienteEstudante = ["Cliente estudante", "Fortaleza"]

//    imprimeNomeEmail.apply(cliente1, clienteEspecial)
//    imprimeNomeEmail.apply(cliente2, clienteEstudante)


const personagem = {
    nome: "Princesa Leia",
    apresentar: function(){
      return `a personagem é ${this.nome}`
    }
   }

   const personagemGenerico = personagem.apresentar


const personagemDefinido = personagemGenerico.bind(personagem)
console.log(personagemDefinido())
