// 1. Escreva uma função chamada compararNumero que receberá dois parâmetros,
// em seguida, retorne o número que for maior.
// O retorno deverá conter essa mensagem:
// "O maior número entre 5 e 10 é 10"
// Passo a passo da função:
// - Criar função compararValor(parametro1, parametro2)
// - Inserir uma condição onde parametro1 é maior que parametro dois?
// - Se a condição for verdadeira, retornar "O maior número entre 5 e 10 é 10"
// - Se for falsa, retornar que a segundo parametro é maior que o primeiro. 

function compararNumero(parametro1, parametro2) {
    if (parametro1 > parametro2) {
        return `O maior número entre ${parametro1} e ${parametro2} é: ${parametro1}`
    } else {
        return 'segundo parametro é maior que o primeiro'
    }
}
console.log(compararNumero(9, 2))


// 2. Escreva uma função chamada retornarNota que receberá um parâmetro do tipo número:
// A função deve retornar com as seguintes notas:
// Se a pontuação for maior que 90, retornar: "A"
// Se a pontuação for maior que 80, retornar: "B"
// Se a pontuação for maior que 70, retornar: "C"
// Se a pontuação for maior que 65, retornar: "D"
// ou "F" 

function retornarNota(nota1, nota2) {
    const soma = nota1 + nota2;
    if (soma >= 90) {
        return `Sua nota final é "A"`
    }
    if (soma >= 80) {
        return `Sua nota final é "B"`
    }
    if (soma >= 70) {
        return `Sua nota final é "C"`
    }
    if (soma >= 65) {
        return `Sua nota final é "D"`
    } else {
        return `Sua nota é "F"`
    }
}
console.log(retornarNota(60, 15))

// 3. Crie uma estrutura switch case na qual armazene o dia da semana
// em que estamos em uma variável auxiliadora.
// Você precisará de uma variável para armazenar,
// durante os cases, o dia da semana.
// Cada dia da semana pode ser um valor:
//    0        1       2      3       4       5      6
// dom   seg   ter  quar quin  sext  sab
// Para você conseguir pegar a data de hoje,
// utilize o (new Date().getDay()) como parâmetro.
// Onde
// case 0:
// diaSemana = "Domingo";
// break;
// case 1:
function nomeDoDiaDaSemana(diadasemana) {
    let nomedodia;
    switch (diadasemana) {
        case 0:
            nomedodia = 'dom';
            break;
        case 1:
            nomedodia = 'seg';
            break;
        case 2:
            nomedodia = 'terc';
            break;
        case 3:
            nomedodia = 'quart';
            break;
        case 4:
            nomedodia = 'quint';
            break;
        case 5:
            nomedodia = 'sext';
            break;
        case 6:
            nomedodia = 'sab';
            break;
    }
    return `vc esta no dia ${nomedodia}`
}
const hoje = new Date().getDay()
console.log(nomeDoDiaDaSemana(hoje))

// 4. Plano de Viagem:

// Na Agência Turismo é viver, existem alguns planos
// de viagens de acordo com a idade da pessoa.

// A tabela é:

// PLANO TEEN: A partir de 12 anos até 17 anos.
// PLANO PROFISSIONAL: A partir de 18 anos até 29 anos.
// PLANO EXPERIENTE: A partir de 30 anos.

// Faça uma função chamada obterPlanos que receba apenas um parâmetro
// e insira essas condições dentro da função.

// Se não inserirem um valor de acordo com as idades,
// é para retornar: Entrar em contato com a agência de turismo.

// Aqui você pode utilizar:
// If/ else if

// A saída deverá ser algo parecido com:

// obterPlano(12) //SAÍDA: Você pode verificar os nossos pacotes TEEN.

function obterPlanos(planosvariaveis) {
    if (planosvariaveis >= 12 && planosvariaveis <= 17) {
        return `Você pode verificar os nossos pacotes TEEN.`
    }
    if (planosvariaveis >= 18 && planosvariaveis <= 29) {
        return `Você pode verificar os nossos pacotes PROFISSIONAL.`
    }
    if (planosvariaveis >= 30) {
        return `Você pode verificar os nossos pacotes EXPERIENTE.`
    }
    else {
        return `Entrar em contato com a agência de turismo`
    }
} 

console.log(obterPlanos(10))