console.clear();
const prompt = require("prompt-sync")();
// A JORNADA DO HEROI
/* Um Dragão Vermelho, ameassa a pequena vila de Silent Hill, 
localizada nos confins ta Terra envoluta de montanhas enormes de picos brancos.
    Um Jovem Cavaleiro em busca de aventuras e fama parte em direção a Silent Hill, 
em seu caminho encontra dois caçadores de criaturas raras, que decidem te ajudar,
lhe contam sobre objetos e criaturas que poderá encontrar em seu caminho até a vila, 
essas criaturas e objetos se encontrados poderão lhe ajudar em sua batalha contra o terrivel Dragão.
    Então após sua breve caminhada ao lado dos caçadores, ele segue sua jornada, atento aos detalhes lhe contaram.
    A primeira foi "Ao chegar a floresta negra, siga pela trilha de vinhas espinhosas,
no final você encontrará a cidade dos elfos, vc precisará roubar o Elmo de Prata,
somente ele irá te camuflar aos olhos do Dragão".
    Ao chegar a cidade dos elfos ele se depara com uma cidade cercada por grandes rochedos que envolve toda a cidade,
suas muralhas brilham com o reflexo do sol nas aguas do maravilhoso rio congelado.
Sabe-se que os elfos são pouco convidativos, que se falhar ficará preso pela eternidade nas masmorras da cidade.
O usuario decidirá o destino do Heroi
*/
console.log("Nosso Heroi irá se arriscar pelo Elmo de prata?");
const resp1 = prompt.toLowerCase();
if (resp1 === "sim") {
  var val1 = 1;
  console.log("Muito esperto, parabéns voce conseguiu o Elmo de Prata!.");
} else if (resp1 === "nao") {
  var val1 = 0;
  console.log("Sabia escolha, vc dara outro jeito!");
}
/* O segundo item é "um escudo feito com as escamas de uma Manticora, 
que voce encontrará no Pantano de Grifindor,
somente um escudo feito com as escamas da Manticora será capaz de te proteger contra as chamas ardente do Dragão."
    Logo apos sua entrada no pantano o Heroi se depara com a enorme Manticora,
que ataca e devora um cervo que tentou passar pelo terreno lamacento do pantano.
    Ele pensa e tenta planejar seus passos para que possa ao menos se aproximar sem ficar atolado e preso na lama.
O usuario decidirá se vale ou nao se arriscar  pelas escamas.
*/
console.log("Nosso heroi irá encarar a lama pelas escamas da Manticora?");
const resp2 = prompt();
if (resp2 === "sim") {
  var val2 = 1;
  console.log("Grande batalha, Conseguiu as escamas e fez seu escudo!.");
} else if (resp2 === "nao") {
  var val2 = 0;
  console.log("Sabia escolha, vc dara outro jeito!");
}
/* O terceiro objeto a ser encontrado será "O Mithril dos Anões", ele é feito do mais duro metal e brilha mais que o mais polido vidro,
é intrasponível e o protejerá das garras afiadas do Dragão, ele faz parte do tesouro perdido dos Anões das montanhas,
 diz a lenda que ele so poderá ser encontrada nas masmorras do Castelo amaldiçoado de Muria,
 onde o meio dia parece mais meia noita, não há uma fresta de luz se quer, as tochas parecem engolidas pelo escuro e quase nada se vê.
 O Cavaleiro entra cheio de confiança no castelo sombrio e abandonado, e desce um interminavel lance de escadas,
 onde fica cada vez mais escuro, em direção as masmorras.
 Ele continuará? ou retornará seu caminho sem o Mithril?
 O usuario irá decidir.
 */
console.log("Nosso heroi irá se arriscar pelo Elmo de prata?");
const resp3 = prompt();
if (resp3 === "sim") {
  var val3 = 1;
  console.log("Muito esperto, parabéns voce conseguiu o Elmo de Prata!.");
} else if (resp3 === "nao") {
  var val3 = 0;
  console.log("Sabia escolha, vc dara outro jeito!");
}
/* O proximo intento que o grande Heroi deverá tentar conseguir será uma Presa do Basilisco,
 "uma serpente gigantesca de olhos amarelos capaz de ipnotisar sua presa, basta uma gota de seu veneno,
 um arranhão para paralizar sua presa e apenas a presa do Basilisco é capaz de atravessar as escamas de um Dragão Vermelho.
    Você irá encontrar tal criatura nos campos de Berthra, ela vive nas ruinas da antiga cidade,
ele sai para caçar a noite, e toma sol durante o dia por ser uma criatura de sangue frio".
O Cavaleiro ao chegar nas ruinas de Barthra avista a gigantesca criatura em seu banho de sol,
se esconde nos escombros para tentar se aproximar e ver a criatura mais de perto que aparenta ser cada vez maior,
com cada movimento devidamente calculado, pensa em uma forma de atinjir seu objetivo.
Será ele capaz de enfrentar o temível Basilisco, ou seguirá seu caminho sem sua arma?
Decida você.*/

console.log(
  "Nosso Heroi será capaz de derrotar o Basilisco para conseguir sua presa?"
);
const resp4 = prompt();
if (resp4 === "sim") {
  var val4 = 1;
  console.log(
    "Parabens grande Heroi, vc foi capaz de derrotar o temível Basilisco e pegar sua presa!."
  );
} else if (resp4 === "nao") {
  var val4 = 0;
  console.log("Sabia escolha, vc dara outro jeito!");
}

/* A quinta e ultima "Ao chegar as montanhas dos Titans, siga pelo riacho e após o campo de espinhos em uma caverna encontrará o Fauno uivante.
 Ele possui a flauta de Tupã que pode acalmar qualquer fera."
 Nosso heroi ao entrar ah caverna se depara com um ser de enorme estatura e de grande musculatura corporal, 
 chiefres enormes, da cintura para baixo um bode, tronco humano coberto de pelos e cabeça de touro.
 Em seu pescoço brilha a flauta de prata. Ele então pensa duas vezes antes de querer enfrentar a gigante criatura.
Se pensar em um bom plano ele pode até conseguir a flauta, se falhar poderá morrer.
Ele tem apenas duas opções:
Enfrentar seu desafio ou seguir em sua jornada sem a flauta.
E o usuário decidirá qual o desfecho.
*/
console.log("Nosso heroi irá enfrentar o Fauno pela Flauta de Tupã?");
const resp5 = prompt();
if (resp5 === "sim") {
  var val5 = 1;
  console.log("Grande batalha, muito bem pela conquista!.");
} else if (resp5 === "nao") {
  var val5 = 0;
  console.log("Sabia escolha, vc dara outro jeito!");
}
let resultado = val1 + val2 + val3 + val4 + val5;
console.log(resultado);

if (resultado === 0) {
  console.log(
    "O Cavaleiro falhou miseravelmente, se tentar enfrentar o Dragão irá morrer e toda vila arderá em chamas!"
  );
} else if ((resultado > 0, resultado <= 2)) {
  console.log(
    " O Cavaleiro falhou em derrotar o Dragão, mas será lembrado como um heroi por tentar!"
  );
} else if (resultado === 3) {
  console.log(
    "Nosso Heroi após muito esforço causa serios danos ao Dragão que foge de Silent Hill, mas o Cavaleiro morre, aclamado como Heroi, após os graves ferimentos."
  );
} else if (resultado === 4) {
  console.log(
    "Muito bom!! O Cavaleiro consegue matar o Dragão e se torna um grande Heroi reconhecido em varios reinos, mas sai muito machucado e é obrigado a se aposentar com muita glória! "
  );
} else if (resultado === 5) {
  console.log(
    "O Cavaleiro foi Incrível e Avassalador contra a furia do Dragão, é aclamado por vários reinos como um grande Heroi, o enchem de riquesas e titulos heróicos em vários reinos, sua história será contada por gerações. "
  );
}
/*Chega-se ao fim dessa história, no qual o usuário decidirá o final, que sua imaginação o leve longe com os feitos do Heroi,
e como imaginar seus monstros e suas batalhas, de como escapar das situações e chegar até seu objetivo final.
    Obrigado por chegar até aqui.
A JORNADA DO HEROI 
por:
Lucas Soares Dos Santos
*/
