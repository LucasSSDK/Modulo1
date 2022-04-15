console.clear();
//para limpar o console antes de executar
// declarar o promp como uma constante (prompt é para interação do usuario).
const prompt = require("prompt-sync")()
//console.log() para aparecer no console oq estives entre parenteses.
console.log("Olá, Mundo!")
let nomeUsuario = prompt('Qual o seu nome?')
console.log('Boas vindas', nomeUsuario)
let numero1 = +prompt('Digite um numero');
let numero2 = +prompt('Digit outro numero')
console.log(numero1+numero2)
