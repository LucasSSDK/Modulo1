console.clear();//para limpar o console sempre que reesecutar
//instalar e declarar o prompt sempre q abrir outra pasta nova
const prompt = require("prompt-sync")()


// console.log('Qual o seu nome?')//aparecer a pergunta no conseole sem dar erro
// //para armazenar a resposta do usuario em uma variavel
// let alunoDaBlue = prompt();
// // usuario irá digitar a resposta em baixo da pergunta
// //apresentar uma saudação ao usuario
// console.log('Bem Vindo '+alunoDaBlue+ ' Bom Inicio!')
// console.log(`Bem Vindo ${alunoDaBlue} Bom Inicio`) //mesma forma de declarar no log sem "+ ou ," usando a "crase" "`"
// //prompt (String), +prompt(numero)



// //////////////////////////////////////////////////////////////////////////////////////////////////////////////+/////////////////




// //Se não for sexta-feira santa, o Lucas faz churrasco.
// console.log('Hoje é sexta-feira Santa?')
// let sextaSanta = prompt ();
// console.log('O Lucas ta rasgando o Baralho?')
// let dinheiro2 = prompt ()

// //Quando uso "=" estou atribuindo, passando um valor a algo
// //Quando uso "==" estou comparando se uma coisa é igual a outra.
// // && Condicional para um E outro , || condicional para um OU outro
// if (sextaSanta == ('Nao' && dinheiro == 'Sim'){
//     console.log( 'O Lucas vai fazer churraso')
//     console.log('Traz a cerveja')
//     console.log('Tem carvão!')
//     //se verdadeira executa td aqui dentro
// }
// //Se não for sexta santa E o Lucas tiver dinheiro, o Lucas faz churrasco.
// //Se o Lucas tiver dinheiro OU os amigos forem pagar, terá churrasco


// ///////////////////+++/////////////////****////////////+++//////////


// console.log('O Lucas ta rasgando o Baralho?')
// let dinheiro = prompt ()

// //Quando uso "=" estou atribuindo, passando um valor a algo
// //Quando uso "==" estou comparando se uma coisa é igual a outra.
// //&& Condicional para um E outro , || condicional para um OU outro
// //== igual à, != diferente de.
// if (dia != 'Sexta Santa'){
//     console.log( 'O Lucas vai fazer churraso')
//     console.log('Traz a cerveja')
//     console.log('Tem carvão!')
// }else{
//     console.log('O Lucas vai comer peixe')
// }



// if (dia.toLowerCase() == 'sexta santa'){
//     console.log('O Lucas vai comer peixe')
// }else if(dia == 'Natal'){
//     console.log('O Lucas vai Sear')
// }else{ console.log('Vai ter churrasco!!!')
// }




// //////////////////////////***********************+++++++++ //////////////////////////////



// //Exercicio de fixação 01

// console.log('digite um numero')
// let numero1 = +prompt();
// console.log('digite outro numero')
// let numero2 = +prompt();
// if (numero1 == numero2){
//     console.log('Os numeros são iguais.')
// }else if(numero1 > numero2){
//     console.log(`O numero ${numero1} é  maior.`)
// }else if(numero1 < numero2){
//     console.log(`O numero ${numero2} é maior.`)
// }


// //Exercicio de fixação 3

console.log ('Digite um numero')
let numero = +prompt ();
if (numero%2 == 0){
    console.log('Par')
}else{console.log('Impar')}
