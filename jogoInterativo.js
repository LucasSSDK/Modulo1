console.clear()
const prompt = require('prompt-sync')()
// Para identificar melhor utilizarei SS em lugar de Ç nas declarações de comando e funções.

do {
    console.log(
        'Escolha o seu nome de Heroi entre Galahan [0], Merlin [1], Trybor [2], Trixy [3], Meliodas [4], Elizabet [5], Legolas [6], Reyna [7] '
    )
    const listaNomes = [
        'Galahan',
        'Merlin',
        'Trybor',
        'Trixy',
        'Meliodas',
        'Elizabet',
        'Legolas',
        'Reyna',
    ]
    let personagem = {
        energia: 100,
        destreza: 100,
        armas: 100,
        cassar: function () {
            let computador = Math.floor(Math.random() * 3)

            if (computador == 0) {
                console.log(
                    'voce não conseguiu nada para comer hoje.Sua energia diminuirá em -30%'
                )
                this.energia -= 30
                console.log(`Energia = ${this.energia}%`)
            } else if (computador == 2) {
                console.log(
                    'voce so conseguiu um animal de porte pequeno para sua refeição hoje, sua energia diminuirá (energia = 100) ou aumentará (energia != 100) em 10%'
                )
                if (this.energia == 100) {
                    this.energia -= 10
                } else if (this.energia != 100) {
                    this.energia += 10
                }
                console.log(`Energia = ${this.energia}%`)
            } else if (computador == 1) {
                console.log(
                    'voce conseguiu um animal de porte grande para sua refeição hoje, sua energia (se estiver a menos de 100%) aumentará 20%'
                )
                if (this.energia != 100) {
                    this.energia += 20
                }
                console.log(`Energia = ${this.energia}%`)
            }
        },
        nivelDeLuta: function () {
            console.log(`Voce prefere dormir [0] ou afiar suas armas [1]?`)
            let escolhaUsuario = dormirAfiar[prompt()]
            console.log(escolhaUsuario)

            while (escolhaUsuario != 'dormir' && escolhaUsuario != 'afiar') {
                console.log(
                    'Entrada INVALIDA!. Voce precisa digitar 0 ou 1 para decidir. Tente novamente'
                )
                escolhaUsuario = dormirAfiar[prompt()]
            }

            if (escolhaUsuario == 'dormir') {
                if (this.destreza != 100) {
                    this.destreza += 20
                } else {
                    this.destreza = 100
                }

                this.armas -= 20
                console.log(
                    `Sua barra de Destreza chegará aumentará pela manhã e suas armas estará -20% de eficiencia`
                )
            } else if (escolhaUsuario == 'afiar') {
                if (this.armas != 100) {
                    this.armas += 20
                } else {
                    this.armas = 100
                }
                this.destreza -= 20
                console.log(
                    `Suas armas estarão prontas para a batalha e sua destreza estará -20%`
                )
            }
        },
    }
    const nome = listaNomes[+prompt()]
    const arma1 = ['Espada', 'Arco e flecha']
    let dormirAfiar = ['dormir', 'afiar']
    // Itens a ser adiquiridos.
    let elmo = 0
    let mithril = 0
    let escudo = 0
    let presa = 0
    let flauta = 0
    let arco = 0

    console.log(`Bem vindo(a) ${nome} a essa grande aventura!`)
    prompt(`Pressione ENTER para continuar`)

                     /*
                        Todos possuem 24h e com vc não será diferente.Vc irá caminhar no minimo 10h por dia para chegar ao seu objetivo antes do pior acontecer.
                        Durante seu trajeto você precisará caçar para comer, afiar suas armas e dormir e tudo isso consome horas do seu dia,
                    essas horas irão refletir na sua barra de status que irá interferir em suas batalhas. 
                        A historia se passa em uma era em que criaturas mitologicas andavam sobre a Terra.
                    Você se cansa de lutar pelo rei e decide se dedicar a uma causa diferente, com suas habilidades de luta vc decide que é hora de viver novas aventuras.
                        Em uma taverna distante você ouve sobre um Dragão Vermelho que ameassa a pequena vila de Silent Hill, 
                    localizada nos confins ta Terra envoluta de montanhas.
                        Então você decide partir em direção a Silent Hill, 
                    em seu caminho encontra dois caçadores de criaturas raras, que decidem te ajudar,
                    lhe contam sobre objetos e criaturas que poderá encontrar em seu caminho até a vila, 
                    essas criaturas e objetos se encontrados poderão lhe ajudar em sua batalha contra o terrivel Dragão.
                        Então após sua breve caminhada ao lado dos caçadores, lhe contaram sobre criaturas e objetos magicos que poderão te ajudar na batalha contra o Dragão.
                    (Cada objeto aumentará a sua porcentagem de vitória, mas para consegui-los terá de enfrentar grandes desafios.
                    sua vitoria ou derrota será decidido pelas habilidades e sorte do jogador.)

                    Primeiro lhe explicaram sobre a cidade dos elfos, Erendor, vc precisará roubar o Elmo de Prata,
                    somente ele irá te camuflar aos olhos do Dragão".

                    O segundo objeto a ser encontrado será "O Mithril dos Anões",
                    ele é quase intrasponível e o protejerá das garras afiadas do Dragão.
                        
                        O terceiro item contado é "um escudo" feito com as escamas da cauda de uma Manticora, 
                    que voce encontrará no Deserto de Grifindor,
                    somente um escudo feito com as escamas da cauda da Manticora será capaz de te proteger contra as chamas ardente do Dragão."
                    
                        O quarto intento é uma Presa do Basilisco,
                    apenas a presa do Basilisco é capaz de atravessar as escamas de um Dragão Vermelho.
                        Você irá encontrar tal criatura nos campos de Berthra, ela vive nas ruinas da antiga cidade.

                        O quinto  "Ao chegar a floresta negra, em uma caverna encontrará o Fauno uivante.
                    Ele possui a flauta de Tupã que pode acalmar qualquer fera."

                        O Ultimo item mensionado pelos caçadores é o arco de Iperíon 
                    irá encontra-lo na caverna do Minotauro na cidade de Creta.

                        Então seguindo as instruções Voce parte ao nascer do sol em busca de seu primeiro item.
                    */

    console.log('### DIA 1 ###')

                     // após caminhar por horas voce decide que é hora de procurar alimento.

    prompt(
        `${nome} voce precisa caçar para se alimentar, pressione ENTER para definir o resultado da caçada de hoje.`
    )

    personagem.cassar()

                    /* Após sua caçada você coleta lenha, acende a fogueira e monta acapamento.

                        Para o proximo dia voce precisa decidir se é necessario afiar suas armas para aumentar suas chances de vencer seu proximo adversario,
                    ou dormir para diminuir o nível de cansaço.
                        Sua barra de destreza começa em 100% e conforme vc anda, caça ou batalha ela vai diminuindo.
                    Manter ela cheia aumenta suas chances de vencer as batalhas. Não deixe ela ficar em menos de 50%.
                    Voce precisa dormir a noite toda para manter em 100%. caso precise afiar as armas antes,
                    suas horas de sono diminuirá e voce perderá 20% de sua destreza.
                        Suas armas perderá a afiação - 20% a cada dia diminuindo suas chances de vencer as batalhas e 
                    aumentará + 20% quando decidir afiar. (Máximo de 100% cada)
                    */

    personagem.nivelDeLuta()

    console.log(`Destreza = ${personagem.destreza}%`)
    console.log(`Armas = ${personagem.armas}%`)

                    /* 
                        No outro dia então, voce continua caminhando até encontrar uma bifurcação,
                    duas estradas completamente opostas no qual os caçadores disseram que vc encontraria os artefatos que te ajudarão se consguir.
                    então voce precisa decidir em qual local ir para tentar conseguir um dos itens.
                    */

    console.log(`### DIA 2 ###`)

    let placa1 = ['Erendor', 'Muria']
    console.log('Erendor [0] / Muria [1]')
    let cidade = placa1[prompt()]
    let escolhaDaArma = 0
        while (cidade != 'Erendor' && cidade != 'Muria') {
            console.log(
                'Entrada INVALIDA!. Voce precisa digitar 0 ou 1 para decidir. Tente novamente'
            )
            cidade = placa1[prompt()]
        } // Validação da escolha para cidade.

    console.log(`${nome} voce decidiu ir para ${cidade} `)

    function escolhaArma() {
        console.log('Escolha sua arma Espada [0], Arco e flecha [1]')
        escolhaDaArma = arma1[prompt()]
            while (escolhaDaArma != 'Espada' && escolhaDaArma != 'Arco e flecha') {
                console.log(
                    'Entrada INVALIDA!. Voce precisa digitar 0 ou 1 para decidir. Tente novamente'
                )
                escolhaDaArma = arma1[prompt()]
            }
    } // Validação para a escolha da arma.

    escolhaArma()
    let status = personagem.energia + personagem.destreza + personagem.armas
    let d10 = 0

    function dados() {
        d10 = Math.floor(Math.random() * 100) + 1
    }

        if (cidade == 'Erendor') {
                 /*
                    Ao chegar a cidade dos elfos ele se depara com uma cidade cercada por grandes rochedos que envolve toda a cidade,
                suas muralhas brilham com o reflexo do sol nas aguas do maravilhoso rio congelado.
                Sabe-se que os elfos são pouco convidativos, então terá que entrar sorrateiramente e 
                em completo silêncio e roubar o elmo sem ser notado.
                    Voce tem 2 armas primárias, mas para se sair bem so poderá levar uma, escolha sabiamente a sua arma
                pois ela aumentará ou diminuirá as suas porcentagens de conseguir.
                    Voce irá jogar um dado e assim, de acordo com as suas probabilidades somado a energia,
                destreza e a afiação de sua arma escolhida, definirá o resultado da tentativa de roubo.
                */

                if (escolhaDaArma == 'Espada') {
                    console.log(
                        `${nome} voce escolheu sua espada para tentar roubar o Elmo de Prata.`
                    )
                    console.log(
                        'Mas como nessa missão é necessário silêncio e agilidade, suas chances de conseguir são de 70% + % de status. '
                    )

                    prompt('aperte ENTER para jogar o dado.')
                    dados()

                        if (d10 > 50 + status / 10) {
                            console.log(
                                ` ${nome} voce foi descoberto antes de conseguir pegar o Elmo de Prata, então voce não conseguiu rouba-lo.`
                            )
                        } else {
                            console.log(
                                `Parabéns ${nome} Voce foi eficiente e eficaz no roubo e conseguiu o Elmo de Prata`
                            )
                            elmo++
                        }
                } else if (escolhaDaArma == 'Arco e flecha') {
                    console.log(
                        `${nome} voce escolheu seu arco e flecha para tentar roubar o Elmo de Prata.`
                    )
                    console.log(
                        'Como nessa missão é necessário silêncio e agilidade, suas chances de conseguir são de 90% + % de status. '
                    )
                    prompt('aperte ENTER para jogar o dado.')
                    dados()

                    if (d10 > 70 + status / 10) {
                        console.log(
                            ` ${nome} voce foi descoberto antes de conseguir pegar o Elmo de Prata, então voce não conseguiu rouba-lo.`
                        )
                    } else if (d10 < 70 + status / 10) {
                        console.log(
                            `Parabéns ${nome} Voce foi eficiente e eficaz no roubo e conseguiu o Elmo de Prata`
                        )
                        elmo++
                    }
                }
        } else if (cidade == 'Muria') {
                /*
                    O "Mithril dos Anões", ele é feito do mais duro metal e brilha mais que o mais polido vidro,
                é intrasponível e o protejerá das garras afiadas do Dragão, ele faz parte do tesouro perdido dos Anões das montanhas,
                diz a lenda que ele so poderá ser encontrada nas masmorras do Castelo amaldiçoado de Muria,
                onde o meio dia parece mais meia noita, não há uma fresta de luz se quer, as tochas parecem engolidas pelo escuro e quase nada se vê.
                    Voce entra cheio de confiança no castelo sombrio e abandonado, e desce um interminavel lance de escadas,
                onde fica cada vez mais escuro, em direção as masmorras. Dizem que é guardado por um demonio de grandes olhos vermelhos,
                que se alimenta de carne de preferencia humana.
                    Voce tem 2 armas primárias, mas para se sair bem so poderá levar uma, escolha sabiamente a sua arma
                pois ela aumentará ou diminuirá as suas porcentagens de conseguir.
                    Voce irá jogar um dado e assim, de acordo com as suas probabilidades somado a energia,
                destreza e a afiação de sua arma escolhida, definirá o resultado da tentativa de conseguir o mithril.
                    */
            if (escolhaDaArma == 'Espada') {
                    console.log(
                        `${nome} voce escolheu sua espada para tentar roubar o Mithril dos Anões.`
                    )
                    console.log(
                        'Como nessa missão é necessário agilidade e força, suas chances de conseguir são de 90% + % de status. '
                    )

                prompt('aperte ENTER para jogar o dado.')
                dados()

                    if (d10 > 70 + status / 10) {
                        console.log(
                            ` ${nome} voce foi ferido pelo demonio, então voce não conseguiu rouba-lo.`
                        )
                    } else if (d10 < 70 + status / 10) {
                        console.log(
                            `Parabéns ${nome} Voce foi eficiente e eficaz no roubo e conseguiu o Mithril dos Anões`
                        )
                        mithril++
                    }
            } else if (escolhaDaArma == 'Arco e flecha') {
                console.log(
                    `${nome} voce escolheu seu arco e flecha para tentar roubar o Mithril dos Anões.`
                )
                console.log(
                    'Como nessa missão é necessário agilidade e força, suas chances de conseguir são de 70% + % de status. '
                )

                prompt('aperte ENTER para jogar o dado.')
                dados()

                    if (d10 > 50 + status / 10) {
                        console.log(
                            ` ${nome} voce foi ferido pelo demonio, então voce não conseguiu rouba-lo.`
                        )
                    } else if (d10 < 50 + status / 10) {
                        console.log(
                            `Parabéns ${nome} Voce foi eficiente e eficaz no roubo e conseguiu o Mithril dos Anões.`
                        )
                        mithril++
                    }
            }
    }
    console.log(`Mithril = ${mithril}`)
    console.log(`Elmo = ${elmo}`)

    console.log('### DIA 3 ###')

                        // após caminhar por horas voce decide que é hora de procurar alimento.

    prompt(
        `${nome} voce precisa caçar para se alimentar, pressione ENTER para definir o resultado da caçada de hoje.`
    )
    personagem.cassar()

    

                        /* Após sua caçada você coleta lenha, acende a fogueira e monta acapamento.

                        Para o proximo dia voce precisa decidir se é necessario afiar suas armas para aumentar suas chances de vencer seu proximo adversario,
                    ou dormir para diminuir o nível de cansaço.
                        Sua barra de destreza começa em 100% e conforme vc anda, caça ou batalha ela vai diminuindo.
                    Manter ela cheia aumenta suas chances de vencer as batalhas. Não deixe ela ficar em menos de 50%.
                    Voce precisa dormir a noite toda para manter em 100%. caso precise afiar as armas antes,
                    suas horas de sono diminuirá e voce perderá 20% de sua destreza.
                        Suas armas perderá a afiação - 20% a cada dia diminuindo suas chances de vencer as batalhas e 
                    aumentará + 20% quando decidir afiar. (Máximo de 100% cada)
                    */

    personagem.nivelDeLuta()

    console.log(`Destreza = ${personagem.destreza}%`)
    console.log(`Armas = ${personagem.armas}%`)

                        /* 
                        No outro dia então, voce continua caminhando até encontrar uma bifurcação,
                    duas estradas completamente opostas no qual os caçadores disseram que vc encontraria os artefatos que te ajudarão se consguir.
                    então voce precisa decidir em qual local ir para tentar conseguir um dos itens.
                    */

    console.log('### DIA 4 ###')

    let placa2 = ['Grifindor', 'Barthra']
    console.log('Grifindor [0] / Barthra [1]')
    let cidade2 = placa2[prompt()]

        while (cidade2 != 'Grifindor' && cidade2 != 'Barthra') {
            console.log(
                'Entrada INVALIDA!. Voce precisa digitar 0 ou 1 para decidir. Tente novamente'
            )
            cidade2 = placa2[prompt()]
        } // Validação da escolha para cidade.

    console.log(`${nome} voce decidiu ir para ${cidade2} `)

    escolhaArma()

    if (cidade2 == 'Grifindor') {
        /*
                    Logo apos sua chegada no deserto voce se depara com a enorme Manticora.
                    Mantícora é uma criatura mitológica, semelhante às quimeras, com cabeça de homem,
                três afiadas fileiras de dentes de tubarão e com rugido trovejante, 
                corpo de leão, olhos de cores diferentes e cauda de dragão com a qual pode disparar espinhos venenosos, 
                que paralisam qualquer ser.
                    Neste momento ela ataca e devora um animal que tentou passar pelo terreno arenoso do deserto.
                    Ele pensa e tenta planejar seus passos para que possa ao menos se aproximar sem ficar atolado e preso na areia.
                */

            if (escolhaDaArma == 'Espada') {
                console.log(
                    `${nome} voce escolheu sua espada para tentar matar e retirar a cauda da Manticora.`
                )
                console.log(
                    'Mas como nessa missão é necessário silêncio e agilidade, suas chances de conseguir são de 70% + % de status. '
                )

                prompt('aperte ENTER para jogar o dado.')
                dados()

                    if (d10 > 50 + status / 10) {
                        console.log(
                            ` ${nome} voce foi descoberto antes de se aproximar, então voce não conseguiu pega-la de surpresa e foi atingido por um espinho e teve que correr e se esconder.`
                        )
                    } else {
                        console.log(
                            `Parabéns ${nome} Voce foi eficiente e eficaz no ataque surpresa, conseguiu matar a Manticora enquanto dormia.`
                        )
                        escudo++
                    }
            } else if (escolhaDaArma == 'Arco e flecha') {
                console.log(
                    `${nome} voce escolheu seu arco e flecha para tentar matar a Manticora.`
                )
                console.log(
                    'Como nessa missão é necessário silêncio e agilidade, suas chances de conseguir são de 90% + % de status. '
                )
                prompt('aperte ENTER para jogar o dado.')
                dados()

                    if (d10 > 70 + status / 10) {
                        console.log(
                            ` ${nome} voce foi descoberto antes de se aproximar, então voce não conseguiu pega-la de surpresa e foi atingido por um espinho e teve que correr e se esconder.`
                        )
                    } else if (d10 < 70 + status / 10) {
                        console.log(
                            `Parabéns ${nome} Voce foi eficiente e eficaz no ataque surpresa, conseguiu matar a Manticora enquanto dormia.`
                        )
                        escudo++
                    }
        }
    } else if (cidade2 == 'Barthra') {
        /*
                O Basilisco é uma serpente gigantesca de olhos amarelos capaz de hipnotizar sua presa, basta uma gota de seu veneno,
                um arranhão para paralizar sua qualquer ser, apenas a presa do Basilisco é capaz de atravessar as escamas de um Dragão Vermelho.
                    Ele sai para caçar a noite, e toma sol durante o dia por ser uma criatura de sangue frio".
                    Ao chegar nas ruinas de Barthra avista a gigantesca criatura em seu banho de sol,
                se esconde nos escombros para tentar se aproximar e ver a criatura mais de perto que aparenta ser cada vez maior,
                com cada movimento devidamente calculado, pensa em uma forma de atinjir seu objetivo.
                */
            if (escolhaDaArma == 'Espada') {
                console.log(
                    `${nome} voce escolheu sua espada para tentar conseguir a presa do Basilisco.`
                )
                console.log(
                    'Como nessa missão é necessário agilidade e força, suas chances de conseguir são de 90% + % de status. '
                )

                prompt('aperte ENTER para jogar o dado.')
                dados()

                    if (d10 > 70 + status / 10) {
                        console.log(
                            ` ${nome} voce foi descoberto antes de se aproximar, então voce não conseguiu pega-lo de surpresa e quase foi hipnotizado pelo olhar da serpente e teve que correr e se esconder.`
                        )
                    } else if (d10 < 70 + status / 10) {
                        console.log(
                            `Parabéns ${nome} Voce foi eficiente e eficaz, conseguiu mata-lo e arrancar sua presa cheia de veneno.`
                        )
                        presa++
                    }
            } else if (escolhaDaArma == 'Arco e flecha') {
                console.log(
                    `${nome} voce escolheu seu arco e flecha para tentar roubar o Mithril dos Anões.`
                )
                console.log(
                    'Como nessa missão é necessário agilidade e força, suas chances de conseguir são de 70% + % de status. '
                )

                prompt('aperte ENTER para jogar o dado.')
                dados()

                    if (d10 > 50 + status / 10) {
                        console.log(
                            ` ${nome} voce foi descoberto antes de se aproximar, então voce não conseguiu pega-lo de surpresa e quase foi hipnotizado pelo olhar da serpente e teve que correr e se esconder.`
                        )
                    } else if (d10 < 50 + status / 10) {
                        console.log(
                            `Parabéns ${nome} Voce foi eficiente e eficaz, conseguiu mata-lo e arrancar sua presa cheia de veneno.`
                        )
                        presa++
                    }
            }
    }
    console.log(`Escudo de escamas = ${escudo}`)
    console.log(`Presa com veneno = ${presa}`)

    console.log('### DIA 5 ###')

    // após caminhar por horas voce decide que é hora de procurar alimento.

    prompt(
        `${nome} voce precisa caçar para se alimentar, pressione ENTER para definir o resultado da caçada de hoje.`
    )
    personagem.cassar()
    

                        /* Após sua caçada você coleta lenha, acende a fogueira e monta acapamento.

                        Para o proximo dia voce precisa decidir se é necessario afiar suas armas para aumentar suas chances de vencer seu proximo adversario,
                    ou dormir para diminuir o nível de cansaço.
                        Sua barra de destreza começa em 100% e conforme vc anda, caça ou batalha ela vai diminuindo.
                    Manter ela cheia aumenta suas chances de vencer as batalhas. Não deixe ela ficar em menos de 50%.
                    Voce precisa dormir a noite toda para manter em 100%. caso precise afiar as armas antes,
                    suas horas de sono diminuirá e voce perderá 20% de sua destreza.
                        Suas armas perderá a afiação - 20% a cada dia diminuindo suas chances de vencer as batalhas e 
                    aumentará + 20% quando decidir afiar. (Máximo de 100% cada)
                    */

    personagem.nivelDeLuta()

    console.log(`Destreza = ${personagem.destreza}%`)
    console.log(`Armas = ${personagem.armas}%`)

    console.log('### DIA 6 ###')

    let placa3 = ['Floresta negra', 'Creta']
    console.log('Floresta negra [0] / Creta [1]')
    let cidade3 = placa3[prompt()]

        while (cidade3 != 'Floresta negra' && cidade3 != 'Creta') {
            console.log(
                'Entrada INVALIDA!. Voce precisa digitar 0 ou 1 para decidir. Tente novamente'
            )
            cidade3 = placa3[prompt()]
    } // Validação da escolha para cidade.

    console.log(`${nome} voce decidiu ir para ${cidade3} `)

    escolhaArma()

    if (cidade3 == 'Floresta negra') {
        /*
                        Ao adentrar ah caverna se depara com um ser de enorme estatura e de grande musculatura corporal, 
                    chiefres enormes, da cintura para baixo um bode, da cintura para cima um homem coberto de pelos .
                    Em seu pescoço brilha a flauta de prata. Ele então pensa duas vezes antes de querer enfrentar a gigante criatura.
                    Se pensar em um bom plano ele pode até conseguir a flauta, se falhar poderá morrer.                    
                    */

            if (escolhaDaArma == 'Espada') {
                console.log(
                    `${nome} voce escolheu sua espada para enfrentar o Fauno.`
                )
                console.log(
                    'Mas como nessa missão é necessário silêncio e agilidade, suas chances de conseguir são de 70% + % de status. '
                )

                prompt('aperte ENTER para jogar o dado.')

                dados()

                    if (d10 > 50 + status / 10) {
                        console.log(
                            ` ${nome} voce foi descoberto antes de se aproximar, então voce não conseguiu pega-lo de surpresa, então teve que correr e se esconder.`
                        )
                    } else {
                        console.log(
                            `Parabéns ${nome} Voce foi eficiente e eficaz na sua investida, conseguiu roubar a Flauta de Tupã enquanto ele dormia.`
                        )
                        flauta++
                    }
            } else if (escolhaDaArma == 'Arco e flecha') {
                console.log(
                    `${nome} voce escolheu seu arco e flecha para tentar roubar a flauta.`
                )
                console.log(
                    'Como nessa missão é necessário silêncio e agilidade, suas chances de conseguir são de 90% + % de status. '
                )
                prompt('aperte ENTER para jogar o dado.')

                dados()

                    if (d10 > 70 + status / 10) {
                        console.log(
                            ` ${nome}  voce foi descoberto antes de se aproximar, então voce não conseguiu pega-lo de surpresa, então teve que correr e se esconder.`
                        )
                    } else if (d10 < 70 + status / 10) {
                        console.log(
                            `Parabéns ${nome}  Voce foi eficiente e eficaz na sua investida, conseguiu roubar a Flauta de Tupã enquanto ele dormia.`
                        )
                        flauta++
                    }
            }
    } else if (cidade3 == 'Creta') {
        /*
                    O Minotauro é uma criatura com corpo de homem e uma cabeça e cauda de touro.
                Possue chifres enormes, grande estatura e mugido estrondoso, 
                    */
        if (escolhaDaArma == 'Espada') {
            console.log(
                `${nome} voce escolheu sua espada para tentar derrotar o Minotauro.`
            )
            console.log(
                'Como nessa missão é necessário agilidade e força, suas chances de conseguir são de 90% + % de status. '
            )

            prompt('aperte ENTER para jogar o dado.')
            dados()

                if (d10 > 70 + status / 10) {
                    console.log(
                        ` ${nome} voce foi surpreendido pela critura que te atingiu o deixando ferido, voce foi capaz de se esconde e fugir e não conseguiu o Arco de Iperíon.`
                    )
                } else if (d10 < 70 + status / 10) {
                    console.log(
                        `Parabéns ${nome} Voce foi eficiente e eficaz, conseguiu mata-lo após uma grande batalha, encontrou e levou o Arco de Iperíon.`
                    )
                    arco++
                }
        } else if (escolhaDaArma == 'Arco e flecha') {
            console.log(
                `${nome} voce escolheu seu arco e flecha para tentar roubar o Mithril dos Anões.`
            )
            console.log(
                'Como nessa missão é necessário agilidade e força, suas chances de conseguir são de 70% + % de status. '
            )

            prompt('aperte ENTER para jogar o dado.')
            dados()

                if (d10 > 50 + status / 10) {
                    console.log(
                        ` ${nome} voce foi surpreendido pela critura que te atingiu o deixando ferido, voce foi capaz de se esconde e fugir e não conseguiu o Arco de Iperíon.`
                    )
                } else if (d10 < 50 + status / 10) {
                    console.log(
                        `Parabéns ${nome} Voce foi eficiente e eficaz, conseguiu mata-lo após uma grande batalha, encontrou e levou o Arco de Iperíon.`
                    )
                    arco++
                }
        }
    }
    console.log(`Flauta de Tupã = ${flauta}`)
    console.log(`Arco de Iperíon = ${arco}`)

    console.log('### DIA 7 ###')
                        /*
                            O Grande dia chegou, voce chegou em Silent Hill logo pela manhã, ao adentrar na vila percebe o ar de medo,
                        alguns sinais de devastação e uma correria constante de pessoas amontoando e carregando seus pertences e 
                        indo em direção para fora da vila.
                            Voce entra em uma taberna e pergunta sobre o alvoroço na vila,
                        então ele lhe conta sobre o Dragão vermelho que vem atormentando e destruindo a cidade
                        e os campos em volta, que temem que o dragão irá destruir tudo em breve,
                        lhe sugere tambem que vá embora.
                            Voce decide então agir de imediato com seus pertences e decide ir enfrentar o Dragão.
                        Seguindo o rastro de devastação logo avista a caverna em que o Dragão repousa,
                        se prepara e com cautela vai se aproximando da entrada da caverna. Logo na entrada 
                        voce sente o ar quente do bafo do Dragão, que desperta ao sentir seu cheiro,
                        ele se levanta e vai em sua direção. 
                        Voce se arma e parte para cima do Dragão.
                        */
                    prompt('Pressione ENTER para saber or desfecho dessa hístora')
                    let objetos = elmo + mithril + escudo + presa + flauta + arco

                    let final = (status / 10) * objetos

                        if (d10 > final) {
                            console.log(
                                ` ${nome} voce falhou e foi morto ao tentar derrotar o Dragão, o deixou irado e queimou toda a cidade e as pessoas que ali ainda estavam`
                            )
                        } else {
                            console.log(
                                `Parabéns ${nome} Voce derrotou o grande Dragão Vermelho, foi ovacionado por toda a vila como um(a) grande Heroi(na) e recebo grandes e riquezas e titulos de nobreza por varios reinos e contaram sua historia por gerações.`
                            )
                        }
                        
                    prompt('Pressione ENTER')
                    console.log(
                        `${nome} gostaria de jogar novamente? [ Aperte a tecla 'S' para sim e 'N' para não]`
                    )
                    jogarx = prompt()
                } while (jogarx == 's');

                console.log(`Obrigado por participar dessa aventura!.`)
                
