// 1-REPETIR PALAVRA
// Dado duas variáveis:
// obterNome > vai armazenar um nome.
// repetirNome > vai armazenar números
// Faça um programam que repita a palavra
// De acordo com a quantidade de vezes que você
// inserir para que essa palavra seja repitida.
// exemplo:
// const obterNome = "Alessandra";
// const repetirNome = 4

// A saída terá que ser:
// "Alessandra"
// "Alessandra"
// "Alessandra"
// "Alessandra"
// const obterNome = 'Nayla'
// const repetirNome = 4
// for (i = 0; i < repetirNome; i++) {
//     console.log(obterNome)
// }

// 2. Dado um array de objetos: 

// const usuarios = [
//     { nome: "Jordana", idade: 18 },
//     { nome: "Lilian", idade: 28 },
//     { nome: "Janaina", idade: 19 },
//     { nome: "Carla", idade: 25 },
//     { nome: "Maíra", idade: 32 },
//     { nome: "George", idade: 30 },
//     { nome: "Camila", idade: 27 },
//     { nome: "Janaína", idade: 22 },
//     { nome: "Amanda", idade: 50 },
//     { nome: "Raquel", idade: 45 }
// ];
// for (i = 0; i < usuarios.length; i++) {
//     console.log(usuarios[i].nome)
//     console.log(usuarios[i].idade)
// }

// Imprima todos nome e idade do array que contém objetos usuários.
// A saída deverá ser:

// Jordana
// 18

// Lilian
// 28

// 3. Imprima os números de 0 a 50 e imprima
// se o número é par ou ímpar
// A saída deverá ser: 
// É impar: 1
// É par: 2

for(i = 0; i <= 50; i++){
    console.log(i)
    let resultado = i % 2;
    if(resultado === 0){
        console.log('É par')
    }
    else{
        console.log('é impar')
    }


}



// 4. Dado um objeto :
// const livros = {
// 1: {
// "titulo": "Javascript Eloquente",
// "quemEscreveu": "Marijn Haverbeke",
// "link": "https://github.com/braziljs/eloquente-javascript"
// },
// 2: {
// "titulo": "Você não sabe JS",
// "quemEscreveu": "Kyle Simpson",
// "link": "https://github.com/cezaraugusto/You-Dont-Know-JS"
// },
// 3: {
// "titulo": " Mulheres, raça e classe",
// "quemEscreveu": "Angela Davis",
// "link": "https://edisciplinas.usp.br/pluginfile.php/4248256/mod_resource/content/0/Angela%20Davis_Mulheres%2C%20raca%20e%20classe.pdf"
// }
// }

// Liste todas as informações com o laço for in
// A saída deverá ser:

// Javascript Eloquente
// Marijn Haverbeke
// https://github.com/braziljs/eloquente-javascript