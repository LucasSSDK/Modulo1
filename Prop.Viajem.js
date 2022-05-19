console.clear();//para limpar o console sempre que reesecutar
//instalar e declarar o prompt sempre q abrir outra pasta nova
const prompt = require("prompt-sync")()
while (true){
    console.clear ();
    let usuario = prompt ('Digite seu nome: ')
    console.log (`Seja bem vindo! ${usuario}`);
    console.log();

    if (usuario =='encerrar'){
        console.log('Digite a senha: ')
        let senha = +prompt();
        // caso o usiario digite a senha correta, ele vai cair nesse break
        if (senha == 123456){
            break; // Nesse momento ele ENCERRA a execução do while, não importa se a condição é verdadeira
        } else {
            prompt('Senha invalida!');
            continue; // Ele encerra a execução atual, e volta para o inicio, testando a condição novamente.
        }
    }
    

let resposta = prompt('Você gosta de viajar? ').toLowerCase();
while (resposta != 'sim' && resposta != 'nao'){
    resposta = prompt(`Entada inválida, digite "sim" ou "não"`).toLowerCase();
}
    if (resposta == 'nao'){
        prompt('Ok, Obrigado!');
        continue;
    }
    console.log('Vou te apresentar algumas ofertas.');
    let dinheiro = +prompt('Até quanto você costuma gastar em viagens? ')
    if (dinheiro >= 5000){
        console.log ('Opa, bora pra Europa? ');
    }else if (dinheiro >= 1000){
        console.log('Da pra ver uma praia bacana');
    }else if(dinheiro >= 100){
        console.log('Temos opções de cachoeiras proximas');
    }else{
        console.log('Aí dificil né amigo!!')
    }
    prompt();
    console.log();

}