//####Projeto 2 Jokenpô####
console.clear();
const prompt = require("prompt-sync")();



console.log("Digite seu nome");
const nome = prompt();
console.log(`Muito bem ${nome}, pronto para jogar Jo-Ken-Pô?!`);
let jogarx = "";
let elemento = ["pedra", "papel", "tesoura"];
do {
  console.log("Quantas vezes vc gostaria de jogar?");
  let quantidadeDePartidas = +prompt();
  console.log(
    `Otimo então vamos a primeira partida de ${quantidadeDePartidas} partidas.`
  );

  console.log("Você deve digitar o numero do qual equivale ao seu elemento");
  console.log("0 = Pedra");
  console.log("1 = Papel");
  console.log("2 = Tesoura");

  let pcVitorias = 0;
  let usuarioVitorias = 0;
  let empates = 0;
  let rep = 0;
  while (rep != quantidadeDePartidas) {
    console.log("Escolha seu elemento");
    let elementoDoUsuario = prompt();
    let escolha = elemento[elementoDoUsuario];
    console.log(`Você escolheu ${escolha}`);

    let elementoPC = Math.floor(Math.random() * 3); // Gera um numero aleatrio entre 0 e 1
    let escolhaPC = elemento[elementoPC];
    console.log(`seu adversario escolheu ${escolhaPC}.`);

    if (
      (elementoDoUsuario == 0 && elementoPC == 1) ||
      (elementoDoUsuario == 1 && elementoPC == 2) ||
      (elementoDoUsuario == 2 && elementoPC == 0)
    ) {
      console.log(
        `Você escolheu ${escolha} e seu adversario ${escolhaPC}, então você perdeu essa partida`
      );
      pcVitorias++;
      console.log(`${pcVitorias} / ${quantidadeDePartidas}`);
    } else if (
      (elementoDoUsuario == 0 && elementoPC == 2) ||
      (elementoDoUsuario == 2 && elementoPC == 1) ||
      (elementoDoUsuario == 1 && elementoPC == 0)
    ) {
      console.log(
        `Muito bem ${nome}, você escolheu ${escolha} e seu adversario ${escolhaPC}, então você venceu essa partida`
      );
      usuarioVitorias++;
      console.log(`${usuarioVitorias}/${quantidadeDePartidas}`);
    } else if (
      (elementoDoUsuario == 0 && elementoPC == 0) ||
      (elementoDoUsuario == 1 && elementoPC == 1) ||
      (elementoDoUsuario == 2 && elementoPC == 2)
    ) {
      console.log(
        `Você escolheu ${escolha} e seu adversario ${escolhaPC}, então deu empate essa partida`
      );
      empates++;
      console.log(`${empates} / ${quantidadeDePartidas}`);
    } 
        console.log(`${nome} = ${usuarioVitorias}`)
        console.log(`Adeversário = ${pcVitorias}`)
        console.log(`Empates = ${empates}`)
    rep++;
  }
  console.log(
    `Você venceu ${usuarioVitorias} vezes, seu adversário venceu ${pcVitorias} vezes e ocorreram ${empates} empates.`
  );

  if (usuarioVitorias >= empates && usuarioVitorias > pcVitorias) {
    console.log(`Parabens ${nome}!!! vc venceu esse desafio!!!`);
    
  } else if (pcVitorias > empates && pcVitorias > usuarioVitorias) {
    console.log(
      `Ah que pena ${nome}, vc perdeu. Jogue novamente e enfrente esse desafio!.`
    );
  } else if (empates > usuarioVitorias && empates > pcVitorias) {
    console.log(
      `Eh ${nome}, vc empatou essa rodada, jogue mais para desempatar esse desafio!.`
    );
  } else if (usuarioVitorias == pcVitorias ) {
    console.log(
      `${nome} Houve um empate no número de vitórias, jogue novamente para decidir quem é o melhor nessa disputa!.`
    );
  } else if( usuarioVitorias > pcVitorias) {
      console.log(`Parabens ${nome}, você foi o grande vencedor deste desafio!!.`)
  } else {
    console.log("Jogue novamente para definir quem é o melhor!");
  }
  console.log(
    `${nome} gostaria de jogar novamente? [ Aperte a tecla 'S' para sim e 'N' para não]`
  );
  jogarx = prompt();
} while (jogarx == "s");
console.log(`Obrigado ${nome} por jogar Jo-Ken_po!`);
