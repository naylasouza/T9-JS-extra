
export class Usuario {
    constructor(email, senha){
        this.email = email;
        this.senha = senha;
    }
    getcontrutor(){
        return `ta aqui: ${email}, ${senha}`
    }
}
const usuario1 = new Usuario("bla@gmail.com", "1233445")
console.log(usuario1)

// export class Pessoa {
//     constructor(nome, sobrenome, idade){
//         this.nome = nome;
//         this.sobrenome = sobrenome;
//         this.idade = idade;
//     }
// } 