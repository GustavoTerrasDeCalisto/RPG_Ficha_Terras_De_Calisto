// Dados de butos das raças (Exemplo: Raça Alfo, Passado Aldeão)
const raceData = {
  "Elfo": {
    "vidaBase": 51,
    "sanidadeBase": 25,
    "vida": 51,
    "sanidade": 25,
    "especialBase": 0,
    "armaduraBase": 1,
    "movimentoBase": 5,
    "bonusRace": "Pode usar Mirar e no mesmo turno atacar uma vez por combate",
    "PassivaDisponivel": "Emanar energia uma vez no dia sem custo.",
    "MagiaDisponivel": "-",
    "TalentoDisponivel": "Arcos e bestas.",
    "vidaPorNivel": {
      "for": 3,
      "des": 6,
      "con": 5
    },
    "sanidadePorNivel": {
      "int": 4,
      "sab": 2,
      "car": 2
    },
    "especialPorNivel": 5
  },
  "Humano": { // Humano adicionado como exemplo
    "vidaBase": 49,
    "sanidadeBase": 19,
    "vida": 49,
    "sanidade": 19,
    "especialBase": 2,
    "armaduraBase": 1,
    "movimentoBase": 5,
    "bonusRace": "-",
    "PassivaDisponivel": "Controle adestrado sem custo uma vez por dia e tem vantagem.",
    "MagiaDisponivel": "-",
    "TalentoDisponivel": "1 talento extra à sua escolha livre.",
    "vidaPorNivel": {
      "for": 6,
      "des": 5,
      "con": 5
    },
    "sanidadePorNivel": {
      "int": 2,
      "sab": 2,
      "car": 2
    },
    "especialPorNivel": 5
  },
  "Krahzhik": { // Elfo adicionado como exemplo
    "vidaBase": 60,
    "sanidadeBase": 12,
    "vida": 60,
    "sanidade": 12,
    "especialBase": 10,
    "armaduraBase": 1,
    "movimentoBase": 6,
    "bonusRace": "Eles podem Voar, manter o voo requer concentração, sofre -8 em danos de fogo.",
    "PassivaDisponivel": "Vingança sem custo duas vezes por combate.",
    "MagiaDisponivel": "-",
    "TalentoDisponivel": "Katanas.",  
    "vidaPorNivel": {
      "for": 5,
      "des": 7,
      "con": 5
    },
    "sanidadePorNivel": {
      "int": 1,
      "sab": 3,
      "car": 1
    },
    "especialPorNivel": 5
  },
  "Anão": { // Elfo adicionado como exemplo
    "vidaBase": 57,
    "sanidadeBase": 15,
    "vida": 57,
    "sanidade": 15,
    "especialBase": 0,
    "armaduraBase": 2,
    "movimentoBase": 4,
    "bonusRace": "-",
    "PassivaDisponivel": "Metamorfose duas vezes ao dia sem custo.",
    "MagiaDisponivel": "-",
    "TalentoDisponivel": "Escudos ou Espadas.",  
    "vidaPorNivel": {
      "for": 7,
      "des": 3,
      "con": 5
    },
    "sanidadePorNivel": {
      "int": 2,
      "sab": 2,
      "car": 2
    },
    "especialPorNivel": 5
  },
  "Gigante": { // Elfo adicionado como exemplo
    "vida": 66,
    "sanidade": 15,
    "vidaBase": 66,
    "sanidadeBase": 15,
    "especialBase": 7,
    "armaduraBase": 1,
    "movimentoBase": 3,
    "bonusRace": "Tem o critico corpo a corpo maior, ao inves de ser 2x fica 3x.",
    "PassivaDisponivel": "Bêbado ou Alegria duas vezes por dia sem custo com vantagem.",
    "MagiaDisponivel": "-",
    "TalentoDisponivel": "Machados e martelos.",  
    "vidaPorNivel": {
      "for": 4,
      "des": 4,
      "con": 9
    },
    "sanidadePorNivel": {
      "int": 1,
      "sab": 1,
      "car": 3
    },
    "especialPorNivel": 5
  }
,
  "Skywalker": { // Elfo adicionado como exemplo
    "vidaBase": 55,
    "sanidadeBase": 17,
    "vida": 55,
    "sanidade": 17,
    "especialBase": 6,
    "armaduraBase": 0,
    "movimentoBase": 6,
    "bonusRace": "Eles podem Voar, manter o voo requer concentração. Sofre -8 em danos de Luz.",
    "PassivaDisponivel": "Sorriso Contemplativo uma vez no dia sem custo por combate.",
    "MagiaDisponivel": "-",
    "TalentoDisponivel": "Lanças e Armas com Haste.",  
    "vidaPorNivel": {
      "for": 3,
      "des": 4,
      "con": 6
    },
    "sanidadePorNivel": {
      "int": 1,
      "sab": 4,
      "car": 4
    },
    "especialPorNivel": 5
  }
,
  "Elfo da profundeza": { // Elfo adicionado como exemplo
    "vidaBase": 50,
    "sanidadeBase": 27,
    "vida": 50,
    "sanidade": 27,
    "especialBase": 5,
    "armaduraBase": 0,
    "movimentoBase": 5,
    "bonusRace": "Conseguem respirar embaixo de água e nadar o dobro do seu movimento.",
    "PassivaDisponivel": "Salvaguarda uma vez ao dia sem custo e com vantagem.",
    "MagiaDisponivel": "-",
    "TalentoDisponivel": "Armas Exóticas.",  
    "vidaPorNivel": {
      "for": 3,
      "des": 4,
      "con": 6
    },
    "sanidadePorNivel": {
      "int": 2,
      "sab": 5,
      "car": 2
    },
    "especialPorNivel": 5
  },
  "Tritão": { // Elfo adicionado como exemplo
    "vidaBase": 60,
    "sanidadeBase": 21,
    "vida": 60,
    "sanidade": 21,
    "especialBase": 4,
    "armaduraBase": 0,
    "movimentoBase": 4.5,
    "bonusRace": "Conseguem respirar embaixo de água e nadar o dobro do seu movimento.",
    "PassivaDisponivel": "Afogar uma vez por combate sem custo e tem vantagem.",
    "MagiaDisponivel": "-",
    "TalentoDisponivel": "Lanças e Armas com Haste.",  
    "vidaPorNivel": {
      "for": 4,
      "des": 3,
      "con": 6
    },
    "sanidadePorNivel": {
      "int": 2,
      "sab": 2,
      "car": 5
    },
    "especialPorNivel": 5
  }
,
  "Shrivvel – Pele Palida": { // Elfo adicionado como exemplo
    "vidaBase": 48,
    "sanidadeBase": 30,
    "vida": 48,
    "sanidade": 30,
    "especialBase": 0,
    "armaduraBase": 2,
    "movimentoBase": 6.5,
    "bonusRace": "-",
    "PassivaDisponivel": "Medo oculto uma vez no dia sem custo por combate.",
    "MagiaDisponivel": "-",
    "TalentoDisponivel": "Armas Exóticas e Intimidação.",  
    "vidaPorNivel": {
      "for": 5,
      "des": 4,
      "con": 5
    },
    "sanidadePorNivel": {
      "int": 2,
      "sab": 4,
      "car": 2
    },
    "especialPorNivel": 5
  }
,
  "Gronklech – Durock": { // Elfo adicionado como exemplo
    "vidaBase": 53,
    "sanidadeBase": 15,
    "vida": 53,
    "sanidade": 15,
    "especialBase": 0,
    "armaduraBase": 3,
    "movimentoBase": 4,
    "bonusRace": "-",
    "PassivaDisponivel": "Selvageria duas vezes ao dia sem custo e tem vantagem.",
    "MagiaDisponivel": "-",
    "TalentoDisponivel": "Sobrevivência.",  
    "vidaPorNivel": {
      "for": 5,
      "des": 4,
      "con": 8
    },
    "sanidadePorNivel": {
      "int": 1,
      "sab": 1,
      "car": 3
    },
    "especialPorNivel": 5
  }
,
  "Umbrowalker – Shlurp": { // Elfo adicionado como exemplo
    "vidaBase": 57,
    "sanidadeBase": 14,
    "vida": 57,
    "sanidade": 14,
    "especialBase": 0,
    "armaduraBase": 1,
    "movimentoBase": 6,
    "bonusRace": "-",
    "PassivaDisponivel": "Furtividade sombria uma vez no dia sem custo.",
    "MagiaDisponivel": "-",
    "TalentoDisponivel": "Fundas e Estilingues.",  
    "vidaPorNivel": {
      "for": 5,
      "des": 6,
      "con": 5
    },
    "sanidadePorNivel": {
      "int": 2,
      "sab": 2,
      "car": 2
    },
    "especialPorNivel": 5
  },
  "Gornis - Temp": { // Elfo adicionado como exemplo
    "vidaBase": 1,
    "sanidadeBase": 1,
    "vida": 1,
    "sanidade": 1,
    "especialBase": 0,
    "armaduraBase": 0,
    "movimentoBase": 1,
    "bonusRace": "-",
    "PassivaDisponivel": "------------",
    "MagiaDisponivel": "-",
    "TalentoDisponivel": "----------",  
    "vidaPorNivel": {
      "for": 1,
      "des": 1,
      "con": 1
    },
    "sanidadePorNivel": {
      "int": 2,
      "sab": 2,
      "car": 2
    },
    "especialPorNivel": 5
  },
  "sua raça": { // Elfo adicionado como exemplo
    "vidaBase": 0,
    "sanidadeBase": 0,
    "especialBase": 0,
    "armaduraBase": 0,
    "movimentoBase": 0,
    "bonusRace": "-",
    "PassivaDisponivel": "------------",
    "MagiaDisponivel": "-",
    "TalentoDisponivel": "----------",  
    "vidaPorNivel": {
      "for": 0,
      "des": 0,
      "con": 0
    },
    "sanidadePorNivel": {
      "int": 0,
      "sab": 0,
      "car": 0
    },
    "especialPorNivel": 5
  }
};

const pastData = {
  "Aldeão": {
    "vidaPorNivel": 12,
    "sanidadePorNivel": 4,
    "armaduraPorNivel": 1,
    "resistencia": "Sagrado",
    "bonusPass":`
    Nível 0: +2 em testes de Conexão, +5 em testes de Sobrevivência.

    🗡️Combatente
    Nível 1: +1d4 de dano com ferramentas improvisadas.
    Nível 2: +1 em testes de Brutalidade.
    Nível 3: +1 em testes de Sobrevivência.
    Nível 4: +2 em ataques corpo a corpo com ferramentas ou armas simples.
    Nível 5: Golpe Improvável - Dano extra de +1d6 ao atacar em condições desfavoráveis.
    Nível 6: +1d6 de dano com armas cortantes ou perfurantes.
    Nível 7: Combate Resiliente - +2 em testes de resistência contra Hemorragia e Paralisado.
    Nível 8: +1d8 de dano com armas pesadas.
    Nível 9: Frenesi Berserker - Quando atinge 0 HP, pode realizar um ataque adicional sem custo de ação e recupera +1d6 HP a cada ataque bem-sucedido. (5 de especial por ativação, uma vez por combate)

    ♟️Estrategista
    Nível 1: +1 em precisão à distância.
    Nível 2: +2 em testes de Agilidade.
    Nível 3: Observador - +1 em testes de percepção em situações de combate ou exploração.
    Nível 4: +1 em iniciativas e bônus de evasão contra ataques mágicos.
    Nível 5: Estratégia Rápida - +1 em testes de comando e bônus em ações táticas.
    Nível 6: +1d8 de dano em ataques com projéteis.
    Nível 7: Alvo Improvável - Inimigos com mais de 50% de vida recebem -1d6 em ataques contra você.
    Nível 8: Tático Experiente - Pode dar um bônus de +2 em testes de iniciativa para um aliado por dia.
    Nível 9: Plano de Batalha - Uma vez por combate, pode usar uma ação para aumentar o dano de todos os aliados em +1d6.

    🧙‍♂️Conjurador
    Nível 1: +1 em Conexão.
    Nível 2: +1d6 de cura/dano com feitiços simples.
    Nível 3: Ganha uma magia de nível 1 a 2 de um grupo elemental de sua escolha.
    Nível 4: Magias de nível 1, 2 e 3 - Consegue conjurar magias pequenas sem consumir recursos extras.
    Nível 5: +1 em testes de Conjuração ao invocar elementos.
    Nível 6: Ganha uma magia de nível 3 a 4 do grupo elemental escolhido.
    Nível 7: Magia Avançada - Ganha uma magia de nível 5 a 6 do grupo elemental escolhido.
    Nível 8: Custo Mínimo - Reduz o custo de uma magia por dia em 1 ponto de sanidade.
    Nível 9: Mestre Elemental - Ganha uma magia de nível 7 a 9 do grupo elemental escolhido e pode conjurá-la uma vez por dia sem custo.
`
,
    "movimento_pass": 2,
    "bonustitulo_1": "Especialização de Força1111",
    "bonusTexto_1": "Aumenta a força do personagem em 2 pontossdadasdasdasdadad.",
    "bonustitulo_2": "Especialização de Força2222",
    "bonusTexto_2": "Aumenta a força do personagem em 2 pontoscuuuuuuuuuuu.",
    "bonustitulo_3": "Especialização de Força3333333",
    "bonusTexto_3": "Aumenta a força do personagem em 2 pontsssssssssssssssssssssssssssssssos.",
    
  },
  "Arauto": { // Cavaleiro adicionado como exemplo
    "vidaPorNivel": 10,
    "sanidadePorNivel": 6,
    "armaduraPorNivel": 1,
    "resistencia": "Mental",
    "bonusPass": `
    Nível 0: Passiva Medo oculto sem custo uma vez por dia e personagem pode voar.
    
    🧠Mentor Psíquico
Nível 1: +1 em testes de a dano Mental.
Nível 2: Aumenta a resistência mental de aliados próximos. +1 em testes de resistência contra Mental.
Nível 3: +1d4 em ataques que envolvam manipulação mental ou ilusão.
Nível 4: +2 em testes de persuasão e intimidar.
Nível 5: Leitura de Mentes
Pode ler brevemente a mente de um alvo, detectando seus medos ou intenções, uma vez por combate.
Nível 6: +1d6 de dano em ataques psíquicos, como controle de pensamentos ou ataques mentais diretos.
Nível 7: Reflexos Psíquicos - +2 em testes de resistência contra Confusão e Paralisado.
Nível 8: Manipulação Mental Avançada - Aumenta em +1d8 o dano de feitiços que envolvem manipulação mental.
Nível 9: Mestre da Psique - Uma vez por combate, pode forçar um inimigo a fazer um teste de resistência contra medo ou confusão, com penalidade de -1d6.
    
🎩Ilusionista
Nível 1: +1 em testes de Enganação e Diplomacia.
Nível 2: +2 em testes de Agilidade para manobras evasivas.
Nível 3: Criação de Imagens - Pode criar ilusões simples que confundem inimigos, uma vez por combate.
Nível 4: +2 em testes de iniciativa quando usando ilusões para enganar inimigos.
Nível 5: Desorientação
Em vez de causar dano direto, causa desorientação ao inimigo, aplicando a condição Confuso por 1d4 turnos.
Nível 6: +1d8 de dano em ataques que utilizem ilusões ou manipulação mental.
Nível 7: Engano Impecável - Quando atacado enquanto invisível ou disfarçado, o inimigo sofre -1d6 em ataques contra você.
Nível 8: Reflexo Ilusório - Uma vez por combate, pode evitar um ataque totalmente usando uma ilusão de si mesmo.
Nível 9: Ilusão Suprema - Pode criar uma ilusão gigantesca que afeta toda a área de combate, tornando inimigos Cegos por 1d6 turnos.

🔮Vidente
Nível 1: +1 em testes de Percepção e Intuição.
Nível 2: Ganha uma visão futura de 1d4 turnos, podendo antecipar ação de um alvo e o que ocorrerá.
Nível 3: Visão Psíquica - Consegue perceber os sentimentos e intenções de outros, podendo detectar mentiras facilmente.
Nível 4: +2 em testes de resistência contra Cegueira e Paralisado.
Nível 5: Clarividência -Pode perceber eventos distantes, sem o uso de visão física, uma vez por combate.
Nível 6: +1d6 de dano em ataques que exploram fraquezas mentais ou espirituais.
Nível 7: Perspectiva Expandida -Pode lançar um feitiço de Clarividência que revele uma área de 30 metros.
Nível 8: Visão Total - Recebe uma visão geral de todos os inimigos em combate, podendo planejar com maior eficácia.
Nível 9: Futuro Imediato - Uma vez por combate, pode usar uma ação para antecipar um movimento de qualquer inimigo e bloquear ou desviar um ataque.`,
    "movimento_pass": 2
  },
  "Arqueiro": { // Mago adicionado como exemplo
    "vidaPorNivel": 11,
    "sanidadePorNivel": 5,
    "armaduraPorNivel": 1,
    "resistencia": "Maldição",
    "bonusPass": `
    Nível 0: +5 em dados de dano com fundas, arcos e bestas.
    
   🏹 Caçador Preciso
Nível 1: +1 em testes de Percepção para rastreamento.
Nível 2: Aumenta o alcance efetivo de ataques à distância em +10 metros.
Nível 3: Flecha Envenenada • Pode envenenar a flecha para causar dano adicional de +1d4 por turno durante 3 turnos.
Nível 4: +2 em testes de furtividade para emboscadas.
Nível 5: Disparo Cirúrgico • Ignora 2 pontos de armadura ao atingir um ponto fraco do inimigo.
Nível 6: +1d8 de dano em ataques que visam partes específicas do corpo.
Nível 7: Resistência do Caçador • +2 em testes de resistência contra Veneno e Hemorragia.
Nível 8: Mestre da Emboscada • Surpreende o inimigo, garantindo +1d10 de dano em ataques iniciais.
Nível 9: Flecha Mortal • Uma vez por combate, realiza um disparo que causa +2d10 de dano, perfurando a armadura do alvo.

🎯Atirador de Elite
Nível 1: +1 em precisão ao usar arcos e bestas.
Nível 2: +2 em testes de Agilidade para esquivas rápidas.
Nível 3: Disparo Perfurante • Atira uma flecha que atravessa até 2 inimigos alinhados, causando dano completo em ambos.
Nível 4: +2 em iniciativas ao utilizar armas à distância.
Nível 5: Tiro Rápido • Realiza dois disparos rápidos em um turno, com dano de +1d6 em cada.
Nível 6: +1d8 de dano adicional em ataques consecutivos no mesmo alvo.
Nível 7: Alvo Escorregadio • Inimigos a uma distância maior que 20 metros sofrem -1d6 em ataques contra o Arqueiro.
Nível 8: Instinto de Sobrevivência • Uma vez por dia, consegue escapar de uma situação de perigo iminente sem precisar de teste.
Nível 9: Disparo Destruidor • Uma vez por combate, realiza um disparo poderoso que causa +2d12 de dano, ignorando defesas do inimigo.

🌌Explorador das Sombras
Nível 1: +1 em Furtividade e Movimentação em terrenos variados.
Nível 2: +2 em testes de Sobrevivência para explorar áreas desconhecidas.
Nível 3: Caminho Oculto • Permite ao grupo avançar sem deixar rastros, uma vez por dia.
Nível 4: +2 em testes de resistência contra Confusão e Cegueira.
Nível 5: Flecha da Escuridão • Atira uma flecha que reduz a visão do alvo, aplicando penalidade de -1d4 em ataques do inimigo.
Nível 6: +1d6 de dano ao atacar a partir de uma posição oculta ou durante a noite.
Nível 7: Emboscada Letal • Garante um bônus de +1d10 em ataques que peguem o inimigo de surpresa.
Nível 8: Vantagem na Escuridão • Durante combates em locais escuros, ganha um bônus de +2 em esquiva e precisão.
Nível 9: Ataque Sombrio • Uma vez por combate, pode se teleportar silenciosamente para uma posição favorável e realizar um ataque com dano adicional de +2d10.
    
    `,
    "movimento_pass": 2
  },
  "Assassino": { // Mago adicionado como exemplo
    "vidaPorNivel": 13,
    "sanidadePorNivel": 3,
    "armaduraPorNivel": 1,
    "resistencia": "Escuridão",
    "bonusPass": `
    Nível 0: Passiva Furtividade sombria 1 vez no dia sem custo,+5 com Adagas.
    
    🗡️Assassinato Furtivo
Nível 1: +1 em Furtividade para emboscadas.
Nível 2: +1 em testes de Agilidade para aproximações silenciosas.
Nível 3: Golpe Fatal – Executa um ataque furtivo causando +1d6 de dano extra ao atingir um ponto fraco.
Nível 4: +2 em ataques com adagas contra alvos desprevenidos.
Nível 5: Execução Impecável – Um ataque crítico com adagas concede um bônus de +1d8 de dano adicional.
Nível 6: +1d6 de dano ao atacar inimigos que ainda não agiram no combate.
Nível 7: Resiliência das Sombras – +2 em testes de resistência contra envenenamento e paralisia.
Nível 8: Mestre da Furtividade – Permite ficar completamente invisível por até um turno.
Nível 9: Assassinato Silencioso – Um golpe furtivo garante +2d10 de dano e ignora a armadura do alvo.

🥷Shurikins Mortais
Nível 1: +1 em precisão ao usar shurikins e armas arremessáveis.
Nível 2: +2 em testes de Agilidade para esquivas e deslocamento rápido.
Nível 3:Projétil Rápido – Lança duas shurikins de uma vez, cada uma com +1d4 de dano adicional.
Nível 4: +1d6 de dano em ataques arremessados com precisão aprimorada.
Nível 5:Tiro Preciso – Realiza um disparo que ignora defesas naturais do alvo.
Nível 6: +1d8 de dano extra em ataques sucessivos contra o mesmo alvo.
Nível 7:Desvio Ágil – +2 em testes de esquiva contra projéteis inimigos.
Nível 8:Projéteis Penetrantes – Shurikins atravessam até dois alvos alinhados, aplicando dano total em ambos.
Nível 9:Dança das Lâminas – Lança várias shurikins ao redor, causando +2d10 de dano a todos os inimigos próximos.

🌑Sombras do Infinito
Nível 1: +1 em testes de Conexão para controlar magias do eclipse.
Nível 2:Véu das Sombras – Envolve-se em sombras, ganhando +2 em Furtividade por um turno.
Nível 3:Reflexão de Eclipse – Libera a magia Reflexão de Eclipse (nível 1), que permite criar uma duplicata temporária para distração.
Nível 4: +1 em testes com feitiços de eclipse.
Libera a magia Clone das Sombras (nível 3), criando uma sombra com aparência e movimentos similares ao usuário, confundindo inimigos.
Nível 5:Espelho Sombrio – Cria uma réplica feita de sombras, que reduz o dano recebido em 50% por um turno.
Libera a magia Fragmento do Tempo (nível 4), permitindo manipular sombras para alterar levemente o tempo ao seu redor, dificultando ataques inimigos.
Nível 6:Dano do Eclipse – Aumenta o dano de eclipse em +1d6 ao atacar em áreas escuras.
Libera a magia Ilusão Lunar (nível 5), que cria ilusões feitas de sombras para confundir e distrair adversários.
Nível 7:Olhos nas Sombras – Permite ver através de sombras, evitando ataques furtivos.
Libera a magia Mutação Sombria (nível 7), que transforma parte de sua sombra em uma extensão física, capaz de atacar ou distrair inimigos.
Nível 8:Sombra da Noite – Torna-se indetectável em áreas escuras por até dois turnos, podendo atacar sem revelar a posição (+8 em teste contra percepção de alvos, nas sombras).
Nível 9:Senhor do Eclipse – Conjura uma aura sombria que reduz a visão dos inimigos e aumenta o dano de todos os seus ataques eclipse em +2d8.
Libera a magia Cataclismo do Eclipse (nível 8), que conjura um ataque devastador feito de pura energia de eclipse, causando dano massivo a um grupo de inimigos.`,
    "movimento_pass": 3
  },
  "Assombração": { // Assombração adicionado como exemplo
    "vidaPorNivel": 11,
    "sanidadePorNivel": 5,
    "armaduraPorNivel": 1,
    "resistencia": "Alma",
    "bonusPass": `
    Nível 0: +1d12 em magias de Alma e a magia Poltergeist pode ser usado em dois objetos por vez.
    
    👤Perseguidor Sombrio
Nível 1: Sombras Vorazes (custo: 2 especial) – Executa uma investida, esquivando de todos os ataques até o fim do turno.
Nível 2: Golpe Oculto (custo: 3 especial) – Ataque de precisão que ignora defesa do inimigo, causando +1d6 de dano.
Nível 3: Manto das Trevas (custo: 2 especial) – Torna-se invisível em locais escuros por um turno.
Nível 4: Velocidade Espiritual (custo: 3 especial) – Movimenta-se duas vezes no mesmo turno, escapando de emboscadas.
Nível 5: Reflexo Sombrio (custo: 4 especial) – Ao esquivar de um ataque, realiza um contra-ataque com +1d8 de dano.
Nível 6: Golpe do Abismo (custo: 5 especial) – Executa um ataque de sombra que ignora armadura e causa +2d8 de dano.
Nível 7: Sombra Penetrante – Reduz o custo de sanidade para magias de Alma em 50%.
Nível 8: Força Noturna – Aumenta o dano em +1d6 para ataques físicos e magias de Alma.
Nível 9:Sombra Aniquiladora(custo: 6 especial) – Torna-se incorpóreo por dois turnos, causando +2d10 de dano de Alma ignorando defesa, enquanto é imune a ataques físicos.

🛠️Artesão espiritual
Cada nível de aprimoramento infunde habilidades únicas nos equipamentos, permitindo maior poder ao custo de especial, duração máxima de aprimoramento uma cena ou 1h.
Nível 1: Energia Espiritual – Armazena uma alma, conferindo +1 de dano ou +1 em resistência. (Sem custo de especial)
Nível 2: Lâmina Viva – Brilho fantasmagórico que causa +1d4 de dano adicional em criaturas espirituais. (2 de especial por uso)
Nível 3: Alma Guardiã – Reduz em 1 o custo de sanidade para habilidades enquanto o equipamento está em uso. (Passivo)
Nível 4: Vínculo Espiritual – Torna o equipamento mais resiliente, +2 em resistência a deterioração. (Sem custo de especial)
Nível 5: Conexão Profunda – Concede +1d6 de dano com o equipamento, aprimorado por almas mais fortes. (3 de especial por uso)
Nível 6: Escudo da Alma – Libera uma barreira espiritual que reduz o dano recebido em 50% por um turno. (4 de especial, 1 vez por combate)
Nível 7: Chama da Vingança – Retalia com +1d8 de dano ao receber ataques, drenando energia de inimigos próximos. (2 de espl por uso)
Nível 8: Força Espiritual – Permite armazenar uma segunda alma no equipamento, acumulando ambos os bônus. (Passivo)
Nível 9: Guardião das Almas – Ativa uma aura espiritual, aumentando o dano em +2d10 e reduzindo a defesa dos inimigos por dois turnos. (5 de especial por ativação, 1 vez por combate)

🕊️Espiritualista da Ordem
Nível 1: Iniciado Espiritual – Ganha uma magia de nível 1 e +1 em testes de resistência contra efeitos espirituais.
Nível 2: Espírito Reforçado – Reduz o custo de sanidade ao usar magias de Alma em 1.
Nível 3: Protetor da Essência – Ganha uma magia de nível 2 e +1 de dano em ataques com Magias de Alma.
Nível 4: Escudo Espiritual – Recebe uma vez por combate um escudo espiritual que absorve até 1d8 de dano.
Nível 5: Tecelão da Alma – Ganha uma magia de nível 3 e aumenta a duração das magias em 1 turno.
Nível 6: Voz do Além – Permite ao jogador identificar a presença de espíritos em até 20 metros.
Nível 7: Profeta da Eternidade – Ganha uma magia de nível 4 e +2 em percepção para detectar entidades invisíveis.
Nível 8: Eco Espiritual – Ganha uma magia de nível 5 e Metade do custo de sanidade para magias de Alma.
Nível 9: Guardião Eterno – Ganha uma magia de nível 6 e uma ação completa extra por 7 de especial.`,
    "movimento_pass": 3
  },
    "Atirador": { 
      "vidaPorNivel": 13,
      "sanidadePorNivel": 3,
      "armaduraPorNivel": 1,
      "resistencia": "Laser",
      "bonusPass": `
      Nível 0:+2 em dados de acerto com armas a distância, pode Mirar sem lado negativo uma vez por combate.
      
      🔫Pistoleiro
Nível 1: Mão Ágil – Permite sacar e guardar armas com rapidez, ganhando +1 em precisão ao atirar com duas armas. (1 de especial por uso)
Nível 2: Tiro Duplo – Dispara duas armas simultaneamente, cada uma com +1d4 de dano. (2 de especial por uso)
Nível 3: Ponto Cego – Causa +1d6 de dano extra ao acertar o alvo de surpresa. (2 de especial por uso)
Nível 4: Reflexos Rápidos – Ganha +1 em esquivas enquanto empunha duas armas. (Passivo)
Nível 5: Bala Certeira – Dispara uma bala que ignora armadura e causa +1d8 de dano adicional. (3 de especial por uso)
Nível 6: Velocidade da Bala – Pode realizar um tiro extra sem penalidade. (3 de especial por uso)
Nível 7: Destemido – Recebe +2 em testes de intimidação enquanto empunha duas armas. (Passivo)
Nível 8: Impacto Devastador – Dispara um tiro com +2d6 de dano que derruba o alvo se ele falhar em um teste de resistência. (4 de especial por uso)
Nível 9: Fúria do Pistoleiro – Lança uma barragem de balas, acertando todos os inimigos ao alcance com +1d10 de dano adicional. (5 de especial por ativação, 1 vez por combate)

🚨Fora da Lei
Nível 1: Infâmia – Ganha +1 em testes de intimidação contra NPCs e inimigos. (1 de especial por uso)
Nível 2: Procurado – Quanto mais alta a reputação de foragido, maior a chance de esquivar ataques (+1 em esquiva para cada estrela no seu cartaz de procurado Max.5). (Passivo)
Nível 3: Tiro Ameaçador – Efetua um disparo que assusta o alvo, causando -1d4 nos próximos ataques do inimigo. (2 de especial por uso)
Nível 4: Sangue Frio – Ganha +2 em resistência contra efeitos de medo. (Passivo)
Nível 5: Fama Implacável – Todos os inimigos ao alcance sofrem -1 em ataques contra você. (3 de especial por ativação, 1 vez por combate)
Nível 6: Presença Intimidadora – Concede +1 em dano a cada inimigo que esteja intimidado ou em desvantagem contra você. (Passivo)
Nível 7: Desprezo Mortal – Disparo que ignora armadura, causando +2d6 de dano adicional ao inimigo. (4 de especial por uso)
Nível 8: Terror do Oeste – Todos os inimigos ao redor recebem -2 em precisão enquanto estiver em combate. (Passivo)
Nível 9: Lenda Viva – Seus ataques causam +2d10 de dano a qualquer alvo que falhe em resistir ao medo. (5 de especial por ativação, 1 vez por combate)

💥Inimigo da Bala
Nível 1: Pancada Letal – Usa a arma como bastão, causando +1d4 de dano corpo a corpo. (1 de especial por uso)
Nível 2: Defesa da Arma – Ganha +1 em resistência quando evita disparos por mais de um turno. (Passivo) e + Libera a magia Flecha de Luz
Nível 3: Bônus de Especial – Regenera 1 ponto de especial para cada turno sem disparar. (Passivo) e Libera a passiva Teleporte Repentino
Nível 4: Controle do Combate – Recebe +1 em testes de esquiva enquanto estiver em combate corpo a corpo. (Passivo)
Nível 5: Quebra-Defesa – Um golpe poderoso que ignora a defesa física do alvo, causando +1d6 de dano. (3 de especial por uso)
Nível 6: Fúria Contida – Recebe +2 em resistência se não tiver disparado desde o início do combate. (Passivo)
Nível 7: Impacto Brutal – Causa +2d6 de dano extra em ataque corpo a corpo, derrubando o inimigo com sucesso. (4 de especial por uso)
Nível 8: Dominância do Combate – Todos os ataques corpo a corpo causam +1d6 adicional enquanto evita disparos. (Passivo)
Nível 9: Força da Calma – Ganha +2d10 de dano em um ataque devastador, disponível apenas após três turnos sem disparar. (5 de especial por ativação, 1 vez por combate)`,
      "movimento_pass": 4
    },
    "Barão": { 
      "vidaPorNivel": 14,
      "sanidadePorNivel": 2,
      "armaduraPorNivel": 1,
      "resistencia": "Ácido",
      "bonusPass": `
      Nível 0: +1 para todas as rolagens de dados, Magia Cuspe ácido sem custo uma vez por dia.

      🧪Manipulação Ácida
Nível 1: +1 em testes de Enganação ao influenciar outros.
Nível 2: Insidioso – +1 em testes de Agilidade para ações furtivas ou subversivas.
Nível 3: Mestre da Dissolução – Libera uma magia de nível 1 à escolha na Cúpula da Corrosão.
Nível 4: Controle Ácido – +2 em intimidação ao demonstrar poder ácido em combate.
Nível 5: Comando Persuasivo – Pode influenciar um inimigo com uma sugestão corrosiva que o faça hesitar em atacar por um turno. (Custo: 3 de especial)
Nível 6: Senhor do Veneno – Libera uma magia de nível 2 à escolha na Cúpula da Corrosão.
Nível 7: Olhar Corrosivo – Inimigos próximos sofrem -1 em resistência mental.
Nível 8: Manipulador Implacável – +3 em testes de manipulação contra inimigos afetados por venenos ou efeitos ácidos.
Nível 9: Barão do Subjugamento – Pode forçar um inimigo a realizar uma ação de sua escolha uma vez por combate. (Custo: 5 de especial)

💀Corrupto
Nível 1: +1 em testes de Intimidação ao causar medo através do poder corrosivo.
Nível 2: Sopro Ácido – Reduz em 1 a defesa de um alvo por um turno. (Custo: 2 de especial)
Nível 3: Mestre da Dissolução – Libera uma magia de nível 1 à escolha na Cúpula da Corrosão.
Nível 4: Aura da Corrosão – Inimigos próximos recebem -1 em resistência ao ácido.
Nível 5: Maldição Ácida – Um ataque bem-sucedido contra um inimigo com vida abaixo de 50% causa um dano adicional de +1d6 ácido. (Custo: 3 de especial)
Nível 6: Senhor da Ruína Ácida – Libera uma magia de nível 2 à escolha na Cúpula da Corrosão.
Nível 7: Decadência Profunda – Ataques ácidos aplicam o efeito “Corrosão”, causando +1d4 de dano contínuo no próximo turno. (Custo: 2 de especial)
Nível 8: Desolador Corrosivo – +2 de dano ácido contra alvos debilitados.
Nível 9: Propagador da Degradação – Todos os inimigos em um raio de 5 metros recebem -2 em resistência. (Custo: 5 de especial)

🦠Adepto da Corrosão
Nível 1: +1d4 em vida ao sofrer dano ácido, aproveitando o poder da corrosão para fortalecimento.
Nível 2: Pele Resistente – +2 em resistência contra venenos e ácidos.
Nível 3: Mestre da Dissolução – Libera uma magia de nível 1 à escolha na Cúpula da Corrosão.
Nível 4: Fluxo Ácido – Ao receber cura mágica, regenera +1d6 adicional.
Nível 5: Ciclo da Corrosão – +1d6 de dano ácido adicional em ataques corpo a corpo. (Custo: 3 de especial)
Nível 6: Senhor da Ruína Ácida – Libera uma magia de nível 2 à escolha na Cúpula da Corrosão.
Nível 7: Conexão Corrosiva – Cura 1d4 ao infligir dano ácido.
Nível 8: Poder da Dissolução – Magias de ácido causam +1d8 de dano adicional.
Nível 9: Guardião da Corrosão Suprema – Libera uma magia de nível 3 da Cúpula sem custo de especial, uma vez por combate. (Custo: 6 de especial para reativar em outro combate)`,
      "movimento_pass": 4.5
    },
    "Bárbaro": { 
      "vidaPorNivel": 15,
      "sanidadePorNivel": 1,
      "armaduraPorNivel": 3,
      "resistencia": "Fogo",
      "bonusPass": `
      Nível 0: +2 em curas recebidas, + 5 de dano com Machados e Martelos.
      
      😡Berserker
      Nível 1: Instinto Selvagem – Aumenta em +1d4 o dano de ataques realizados com as próprias mãos ou armas improvisadas quando em combate corpo a corpo. (Passivo) e Libera a passiva Ódio.
Nível 2: Força Primordial – Recebe +2 em testes de força física, especialmente em situações de quebra de objetos ou arrancamento. (Passivo)
Nível 3: Resistência Implacável – Ganha +1 em testes de resistência contra venenos e efeitos de cansaço. (Passivo)
Nível 4: Rugido de Guerra – Ao lançar um grito de batalha, impõe -1 nos testes dos inimigos próximos por um turno. (2 de especial por uso)
Nível 5: Golpe Devastador – Aplica um bônus de +1d6 de dano ao atacar quando sua vida estiver abaixo de 50%. (3 de especial por uso)
Nível 6: Fúria Cortante – +1d6 de dano adicional ao usar armas de corte quando está em fúria. (Passivo)
Nível 7: Espírito da Batalha – Recebe +2 em resistência contra condições debilitantes como Lentidão e Paralisia enquanto luta com mais de um inimigo. (Passivo)
Nível 8: Destruição Imparável – +1d8 de dano adicional ao acertar golpes críticos com armas pesadas. (Passivo)
Nível 9: Frenesi Berserker – Quando atinge 0 HP, pode realizar um ataque adicional sem custo de ação e recupera +1d6 HP a cada ataque bem-sucedido. (5 de especial por ativação, uma vez por combate)

🪓Mestre dos Machados
Nível 1: Precisão Brutal – Recebe +1d4 de dano adicional ao usar machados para acertar alvos fixos ou de movimento lento. (Passivo)
Nível 2: Braços de Ferro – +1 em testes ao usar armas pesadas como machados, mesmo em condições de combate prolongado. (Passivo)
Nível 3: Agilidade com Peso – +1 em testes de Agilidade quando carrega armas pesadas em combate. (Passivo)
Nível 4: Machado Veloz – Concede +2 em ataques consecutivos com machados contra o mesmo alvo. (Passivo)
Nível 5: Corte Rachador – Executa um golpe com o machado que reduz a defesa do alvo em 1 por dois turnos. (2 de especial por uso)
Nível 6: Lâmina Impiedosa – +1d8 de dano em ataques críticos realizados com machados ao mirar na cabeça ou em partes vulneráveis. (Passivo)
Nível 7: Mestre de Impacto – Recebe +2 em resistência contra efeitos de recuo ao atacar com machados em combate corpo a corpo. (Passivo)
Nível 8: Golpe Fatal – Ao acertar um golpe crítico, causa um sangramento extra de +1d10 de dano em turnos seguintes. (4 de especial por uso)
Nível 9: Executador de Batalha – Pode realizar um ataque extra com machado uma vez por combate, com +2d8 de dano adicional. (5 de especial por ativação, uma vez por combate)

✨Caminho Puritano
Nível 1: Vitalidade Curativa – Recupera +1d4 de vida própria ao final de cada combate ao manter a integridade do grupo. (Passivo)
Nível 2: Resiliência Sagrada – +1 em testes de primeiros socorros, aplicável a si e aliados próximos. (Passivo)
Nível 3: Fonte de Cura – Ao receber cura, aumenta o efeito em +1d4 de vida extra. (Passivo)
Nível 4: Proteção Natural – +2 em resistência contra ataques mágicos enquanto está curando aliados. (Passivo)
Nível 5: Mão Restauradora – Cura a si ou um aliado em +1d6 instantaneamente. (3 de especial por uso)
Nível 6: Energia Salvadora – Regenera +1d8 de vida ao final de cada turno enquanto estiver ao lado de aliados feridos. (Passivo)
Nível 7: Guardião de Batalha – Recebe +2 em resistência contra efeitos de maldição e envenenamento enquanto cura ou protege um aliado. (Passivo)
Nível 8: Reforço de Vida – Cura um aliado em +1d10 ao usar uma ação de suporte em combate. (4 de especial por uso)
Nível 9: Guardião Puritano – Cura todos os aliados próximos em +2d8 uma vez por combate. (5 de especial por ativação, uma vez por combate)`,
      "movimento_pass": 4
    },
    "Bardo": { 
      "vidaPorNivel": 9,
      "sanidadePorNivel": 7,
      "armaduraPorNivel": 1,
      "resistencia": "Luz",
      "bonusPass": `
      Nível 0: +2 em qualquer rolagem de dados em Conexão e + 2 em diplomacia.
      
      💃Mestre da Dança
"O Mestre da Dança usa sua habilidade com a música para curar, purificar e confundir os inimigos enquanto mantém sua presença dinâmica em combate. A dança é acompanhada pelo som de seu instrumento que, magicamente, levita e toca por conta própria."

Nível 1: Dança da Purificação – Aprende a passiva Dança da Purificação, permitindo remover condições negativas de aliados próximos. (Sem custo uma vez por dia)
Nível 2: Movimentos Encantados – +1 em testes de esquiva e resistência a ataques à distância enquanto dança. (Passivo)
Nível 3: Toque da Harmonia – Ao tocar o instrumento, restaura +1d4 pontos de vida ou sanidade para aliados próximos. (2 de especial por uso)
Nível 4: Encanto das Melodias – +2 em testes de Conexão quando usa a dança para ganhar a confiança de aliados e NPCs. (Passivo)
Nível 5: Ritmo Desorientador – Confunde inimigos ao dançar, reduzindo seus testes de precisão em -1 por três turnos. (3 de especial por uso)
Nível 6: Harmonia Fluida – Restaura +1d6 de vida para aliados em combate ao fim de cada turno em que dançar por ao menos dois turnos. (Passivo)
Nível 7: Explosão Melódica – Causa +1d8 de dano aos inimigos ao redor, que são atingidos por uma onda de som enquanto dança. (3 de especial por uso)
Nível 8: Aura de Cura – Enquanto dança, aliados ganham +2 em resistência a condições. (Passivo)
Nível 9: Apoteose da Dança – Invoca uma dança final que remove todas as condições negativas de aliados e reduz a armadura dos inimigos em 2 e faz as armas de todos caírem e ficar grudas no chão enquanto estiver dançando. (5 de especial, 1 vez por combate)

🎶Guerreiro Musical
"O Guerreiro Musical usa a música para inspirar a si mesmo e aos seus aliados, enquanto luta com armas e instrumentos. Ele se destaca ao utilizar sua música como arma e se aprimorar para o combate."

Nível 1: Golpe Harmônico – Causa +1d4 de dano adicional com seu instrumento usado como arma improvisada. (Passivo)
Nível 2: Ritmo de Batalha – +1 em testes de precisão enquanto luta usando arco ou besta. (Passivo)
Nível 3: Melodia de Inspiração – Aumenta a precisão de aliados em +1 durante um turno. (2 de especial por uso)
Nível 4: Som Impenetrável – Ao tocar música, ganha +1 em resistência a ataques mentais e mágicos. (Passivo)
Nível 5: Crescendo Devastador – Ataque poderoso com o instrumento, causando +1d6 de dano e atordoando o inimigo por um turno. (3 de especial por uso)
Nível 6: Canto da Armadura – Ganha +2 em resistência física ao tocar uma melodia protetora. (Passivo)
Nível 7: Corda Rasgante – Ataque cortante que causa +2d6 de dano e reduz a defesa do alvo em -1. (4 de especial por uso)
Nível 8: Hino de Guerra – Todos os aliados recebem +2 em resistência a condições por dois turnos ao ouvir a música de combate. (Passivo)
Nível 9: Concerto de Vitória – Concede +3d8 de dano de Luz em um ataque final, atingindo todos os inimigos próximos. (5 de especial, 1 vez por combate)

💤Apanhador de Sonhos
"O Apanhador de Sonhos é iniciado nas Hierarquias dos Cultos dos Apanhadores, conectando-se ao mundo espiritual e manipulando sonhos e pesadelos para apoiar aliados e afetar inimigos."

Nível 1: Aspirante dos Sonhos – Ganha uma magia de nível 1 a 2 de Aspirante dos Sonhos e +1d4 de bônus em combate usando bestas.
Nível 2: Tecelão de Devaneios – Libera uma magia de nível 1 a 2 de Tecelão de Devaneios e reduz em 1 o custo de sanidade ao usar magias que afetam a mente.
Nível 3: Guardião dos Subconscientes – Ganha uma magia de nível 1 a 3 de Guardião dos Subconscientes e concede aos aliados próximos +1 em resistência mental durante a batalha.
Nível 4: Senhor do Sono Eterno – Adquire uma magia de nível 1 a 4 de Senhor do Sono Eterno e ganha uma vez por combate a habilidade de criar uma névoa que provoca sonolência ao redor, afetando inimigos em um raio de 5 metros.
Nível 5: Profeta das Visões Oníricas – Ganha uma magia de nível 1 a 4 de Profeta das Visões Oníricas e +1 em esquiva, além de poder vislumbrar ataques iminentes de inimigos.
Nível 6: Apanhador dos Pesadelos – Libera uma magia de nível 1 a 4 de Apanhador dos Pesadelos e drena 1d6 de sanidade dos inimigos em combate, convertendo em energia especial.
Nível 7: Guardião do Mundo Onírico – Concede uma magia adicional de nível 1 a 5 e +2 de percepção para detectar seres invisíveis ou ilusionários.
Nível 8: Mestre dos Devaneios – Ganha uma magia de nível 1 a 5 e reduz à metade o custo de sanidade para todas as magias de sonhos ou pesadelos.
Nível 9: Guardião Eterno dos Sonhos – Ganha uma magia de nível 6 e pode realizar uma ação completa extra uma vez por combate ao custo de 7 de especial, conectando-se profundamente com o mundo espiritual e manipulando os sonhos de todos ao redor.`,
      "movimento_pass": 3.5
    },
    "Bruxo": { 
      "vidaPorNivel": 9,
      "sanidadePorNivel": 7,
      "armaduraPorNivel": 1,
      "resistencia": "Escuridão",
      "bonusPass": `
      Nível 0:Magias de atributo Libertação custam metade.
      
      🔮Umbromante
"Especializado em magia de Escuridão, com Hierarquias dos Filhos de Eldoria."

Nível 1: Aprendiz das Sombras – Libera uma magia de nível 1 de Escuridão e +1 em testes de Identificar Magia.
Nível 2: Mestre da Penumbra – Ganha uma magia de nível 2 de Escuridão e +1 em testes contra danos de Escuridão.
Nível 3: Guardião da Noite – Libera uma magia de nível 2 de Escuridão e permite realizar um ataque extra de Escuridão ao custo de 3 de especial.
Nível 4: Profeta do Eclipse – Ganha uma magia de nível 3 de Escuridão e a habilidade “Libertação das Sombras”, permitindo reduzir o custo de sanidade de uma magia de Escuridão pela metade uma vez por combate.
Nível 5: Arauto das Trevas – Ganha uma magia de nível 4 e +2 de dano em magias de Escuridão.
Nível 6: Sombra Absoluta – Libera uma magia de nível 4 de Escuridão e +2 em movimento quando em áreas escuras. Uma vez por combate, pode causar “Borborigmo” ao oponente por 1d4 turnos.
Nível 7: Senhor das Sombras Eternas – Ganha +2 em testes de Identificar Magia e recebe um escudo sombrio que absorve até 1d8 de dano em combate uma vez por turno.
Nível 8: Guardião das Trevas Profundas – Recebe uma magia de nível 5 e, ao usar uma ação completa de Escuridão, causa “Confusão” em inimigos ao redor.
Nível 9: Profeta da Sombra Suprema – Ganha uma magia de nível 6 e pode realizar uma ação completa extra ao custo de 8 de Sanidade em combate.

💀Maldizente
"Especializado em maldições, com foco em fé e controle espiritual."

Nível 1: Aprendiz da Maldição – Libera uma magia de nível 1 de Maldição e Libera a Passiva “Amaldiçoar,”.
Nível 2: Portador dos Presságios – Ganha uma magia de nível 1 de Maldição e +1 em dano em ataques de Maldição.
Nível 3: Mestre dos Anátemas – Libera uma magia de nível 2 de Maldição e concede +1 em testes de conexão.
Nível 4: Profeta da Ruína – Ganha uma magia de nível 3 e a habilidade “Libertação da Maldição”, reduzindo o custo de sanidade ao lançar Maldições pela metade uma vez por combate.
Nível 5: Arauto dos Destinos Sombrio – Libera uma magia de nível 3 e concede +2 de dano adicional em ataques de Maldição.
Nível 6: Véu do Fim – Libera uma magia de nível 4 de Maldição e pode envolver-se em um véu sombrio, aumentando a resistência a ataques físicos em +2.
Nível 7: Mestre da Profecia Desoladora – Ganha uma magia de nível 4 e pode reduzir o dano mágico de um inimigo em 1d12 ao custo de 3 de especial.
Nível 8: Guardião dos Destinos Perdidos – Libera uma magia de nível 5 e ganha +2 em testes de conexão +1d8 de dano com magias de Maldição.
Nível 9: Profeta dos Pesadelos Eterno – Ganha uma magia de nível 6 e pode aplicar “Amaldiçoar” a um inimigo extra em combate ao custo de 7 de especial e alvos amaldiçoados tem desvantagem para tirar maldição.

🪄Duelista de Varinhas
"Especializado em duelos de varinhas, escolhendo uma varinha no nível 1 que concede bônus únicos."

Nível 1: Duelista das Varinhas – Escolhe uma varinha: Fé (Determinação +1), Poder (Libertação +1), Desconhecido (Conexão +1) ou Caos (Preservação +1). Recebe um bônus de +1 em combate de varinha, pode conjurar magias com a varinha.
Nível 2: Mago Duelista – Ganha uma habilidade de ataque de varinha causa 2d10 de plasma ao custo de 2 de especial (alvo a sua vista) e um bônus de +1 de dano com plasma.
Nível 3: Mestre da Varinha – Aumenta o dano de plasma em +2 e recebe um bônus de +1 em esquiva, Libera duas magias de plasma de nível 1 a 2
Nível 4: Guerreiro das Bruxarias – Pode realizar um ataque extra com a varinha ao custo de 4 de especial e +1 em resistência contra magias do elemento desconhecido.
Nível 5: Arauto das Bruxarias – Ganha +2 em ataques de plasma e reduz o custo de sanidade em magias de duelo, Libera duas magias de plasma de nível 3 a 4
Nível 6: Guardião Arcano das Varinhas – Ganha uma habilidade de bloqueio arcano, reduzindo o dano recebido em 1d8 ao custo de 2 de especial.
Nível 7: Profeta do Plasma Arcano – Recebe +1 de dano adicional em magias de plasma e um bônus de +2 em testes de conexão em combates com varinhas.
Nível 8: Guardião do Poder Arcano – Libera duas magias de plasma de nível 1 a 6 e pode realizar uma ação completa extra ao custo de 6 de especial, aplicando dois ataques com a varinha consecutivos.
Nível 9: Mestre Supremo das Varinhas – Ganha +3 em todos os ataques com plasma e uma habilidade de ataque de varinha definitiva ao custo de 8 de especial, os danos rebatem em todos inimigos próximos a 10m do alvo.`,
      "movimento_pass": 3.5
    },
    "Carpinteiro": { 
      "vidaPorNivel": 13,
      "sanidadePorNivel": 3,
      "armaduraPorNivel": 1,
      "resistencia": "Tempestade",
      "bonusPass": `
      Nível 0: Uma ação livre extra por turno.
      
      ⚒️Construtor Improvisado
"O Carpinteiro usa troncos, cadeiras e outros objetos de madeira como armas improvisadas, utilizando habilidades de combate bruto e improvisação."

Nível 1: Martelada Bruta – Usa um tronco ou objeto de madeira, causando +1d4 de dano corpo a corpo. (Custo: 1 de especial por uso)
Nível 2: Bloco de Proteção – Ganha +1 em resistência ao utilizar objetos de madeira como escudo. (Passivo)
Nível 3: Força Adaptável – Regenera 1 ponto de especial se usar objetos improvisados em combate por dois turnos seguidos. (Passivo)
Nível 4: Perícia com Improviso – Recebe +1 em testes de ataque ao usar armas improvisadas. (Passivo)
Nível 5: Golpe Demolidor – Causa +1d6 de dano extra em um golpe que ignora a defesa do alvo. (Custo: 3 de especial por uso)
Nível 6: Resistência Férrea – Ganha +2 em resistência ao dano físico se usar um objeto improvisado desde o início do combate. (Passivo)
Nível 7: Explosão de Impacto – Um ataque pesado que causa +2d6 de dano adicional e pode atordoar o inimigo. (Custo: 4 de especial por uso)
Nível 8: Maestria em Improviso – Todos os ataques com objetos improvisados causam +1d6 adicional enquanto evita ataques à distância. (Passivo)
Nível 9: Golpe Devastador – Um ataque massivo que causa +2d10 de dano, disponível após três turnos sem usar outras habilidades. (Custo: 5 de especial por ativação, 1 vez por combate)

🪵Artesão de Barricadas
"O Carpinteiro constrói barricadas e armadilhas de madeira para criar obstruções e distrações, dominando o campo de batalha com construções rápidas."

Nível 1: Mini Barricada – Constrói uma pequena barreira que concede +1 em defesa a aliados atrás dela por um turno. (Sem custo de especial)
Nível 2: Parede de Madeira – Cria uma barreira durável que bloqueia uma passagem por dois turnos. (Custo: 2 de especial por uso)
Nível 3: Prendedor Ágil – Consegue travar objetos leves no chão para dificultar a passagem de inimigos, aumentando testes de esquiva de aliados próximos em +1. (Passivo)
Nível 4: Barreira Resistente – Barricadas e paredes de madeira duram um turno extra. (Passivo)
Nível 5: Armadilha Surpresa – Constrói uma pequena armadilha que causa +1d6 de dano em inimigos que tentarem atravessá-la. (Custo: 3 de especial por uso)
Nível 6: Cobertura Completa – Constrói uma barreira que reduz o dano recebido em 50% para quem estiver atrás dela por um turno. (Custo: 4 de especial, 1 vez por combate)
Nível 7: Estratégia de Distração – Coloca um objeto de madeira que atrai inimigos por um turno, facilitando ataques surpresas. (Custo: 2 de especial por uso)
Nível 8: Mestre das Barricadas – Pode construir uma segunda barricada simultânea, concedendo bônus de defesa a aliados próximos. (Passivo)
Nível 9: Catapulta Improvisada – Constrói uma pequena catapulta para lançar objetos, causando +2d10 de dano à distância. (Custo: 5 de especial, uma vez por combate)

🪓Guerreiro de Machado
"O Carpinteiro luta com machados, tornando-se quase tão habilidoso quanto o Mestre dos Machados, com seu próprio estilo de combate implacável."

Nível 1: Corte Preciso – Causa +1d4 de dano adicional ao usar machados em combate. (Passivo)
Nível 2: Fúria do Lenhador – Ganha +1 em resistência ao usar machados para golpes rápidos. (Passivo)
Nível 3: Machado Veloz – Recebe +1 em Agilidade quando ataca com machados. (Passivo)
Nível 4: Ataque Sequencial – Concede +2 em dano ao acertar o mesmo alvo com ataques consecutivos. (Passivo)
Nível 5: Machado Partidor – Um golpe com o machado reduz a defesa do alvo em 1 por dois turnos. (Custo: 2 de especial por uso)
Nível 6: Golpe Devastador – +1d8 de dano em ataques críticos com machados ao atingir áreas vitais. (Passivo)
Nível 7: Equilíbrio de Aço – Ganha +2 em resistência contra ataques de recuo ao usar machados. (Passivo)
Nível 8: Hemorragia Fatal – Um golpe crítico com o machado causa +1d10 de dano contínuo no alvo. (Custo: 4 de especial por uso)
Nível 9: Mestre do Machado – Realiza um ataque extra com o machado, causando +2d8 de dano adicional. (Custo: 5 de especial por ativação, uma vez por combate)`,
      "movimento_pass": 3.5
    },
    "Catador": { 
      "vidaPorNivel": 8,
      "sanidadePorNivel": 8,
      "armaduraPorNivel": 1,
      "resistencia": "Alma",
      "bonusPass": `
      Nível 0: Cada órgão adiciona +1 invocação extra, magia LEVANTA sem custo uma vez por dia.
      
      ⚰️Necromante
"Especialista em manipulação de mortos e absorção de poder de cadáveres."

Nível 1: Eco dos Mortos – Cada órgão coletado concede +1 em resistência a efeitos de medo e intimidação. Pode lançar a magia “Levanta” duas vezes por dia sem custo e ganha +2 de movimento em terrenos onde corpos ou esqueletos estejam presentes.
Nível 2: Alimento das Sombras – Ao absorver um cadáver, recupera 1d4 pontos de sanidade. Pode usar essa habilidade até três vezes por dia.
Nível 3: Aura Cadavérica – Cria uma aura sombria ao redor, reduzindo o dano recebido em 2 para cada inimigo morto próximo. Esse efeito dura até o fim do combate (custa 4 especial).
Nível 4: Colecionador de Almas Perdidas – Ao derrotar um inimigo, pode armazenar a essência do cadáver por 1d10 turnos, recebendo -2 de dano contra danos de sangue e luz.
Nível 5: Devorador de Essências – Permite drenar 1d20 de sanidade de um cadáver uma vez por combate, aplicando esse valor a si mesmo ou a um aliado próximo.
Nível 6: Aura de Terror – Ganha um bônus passivo de +3 em testes de intimidação ao se aproximar de inimigos com vida abaixo de 50%. Em combate, aplica desvantagem a oponentes que tentam atacar em curta distância (custo 2 de especial).
Nível 7: Fortificação Cadavérica – Com a habilidade “Muralha de Ossos”, ao custo de 6 de sanidade, cria uma barreira de ossos que reduz o dano de ataques à distância por 2d8 por três turnos.
Nível 8: Ceifeiro dos Defuntos – Ganha “Sangue Morto”, ao custo de 6 de sanidade, que permite drenar a força vital de um cadáver, recuperando 2d20 de vida.
Nível 9: Guardião da Sombra Eterna – Com a habilidade “Escudo Profano”, ao custo de 12 de sanidade, pode absorver metade do dano recebido em um turno de combate, canalizando essa energia para aumentar o próprio ataque em 1d10 no próximo turno.

🏺Colecionador
"Especializado em colecionar e manipular itens sagrados, com habilidades de levitação e aura de proteção."

Nível 1: Coleção Sagrada – Ganha a habilidade de marcar até dois itens como “sagrados”, os quais adquirem uma aura brilhante rosa. Esses itens ganham vantagem em testes de Agilidade e podem levitar até o Catador no seu turno. Causam +4 de dano de Aura se usados para golpear.
Nível 2: Guardião dos Tesouros – Ganha +1 em Ofício e a passiva “Réplica Imperfeita“, permitindo copiar qualquer item que esteja em sua posse.
Nível 3: Mestre dos Artefatos – Ganha um terceiro slot na coleção sagrada e pode adicionar +1d4 de dano a ataques com esses itens.
Nível 4: Saqueador Experiente – Concede +2 em testes de Ofício e a habilidade “Roubo Sombrio“, permitindo pegar um item de um inimigo distraído sem custo de ação (custo 6 de especial) “O alvo não pode ter visão sua ou informação de onde está”.
Nível 5: Guardião de Relíquias Antigas – Concede +1 de Defesa para cada item ativo em sua coleção sagrada.
Nível 6: Santuário dos Artefatos Perdidos – Concede +3 de dano adicional com itens da coleção sagrada e +1 em testes de Agilidade ao manipular objetos.
Nível 7: Levitação Perfeita – Com a habilidade “Chamada dos Artefatos“, ao custo de 5 de sanidade, pode atrair todos os itens em um raio de 15 metros para si, independentemente do peso.
Nível 8: Guardião Supremo dos Tesouros – Ganha “Proteção Sagrada“: ao custo de 8 de sanidade, reduz o dano de todos os ataques recebidos em 2d8 enquanto um item sagrado estiver ativo.
Nível 9: Senhor da Coleção Sagrada – A habilidade “Roubo Fantasmagórico“, ao custo de 10 de sanidade, permite que ele roube um item mágico do inimigo diretamente durante o combate e o adicione temporariamente à coleção.

🩸Sanguinário
"Especialista em combate corpo a corpo, utilizando partes do corpo como armas e habilidades de destruição visceral."

Nível 1: Guerreiro de Ossos – Cada órgão coletado concede +1 em ataques corpo a corpo. Ganha a passiva “Dilacera e Atacar“.
Nível 2: Punhos Macabros – Ganha +1 em Preservação e +1d4 de dano adicional ao usar partes do corpo como armas improvisadas.
Nível 3: Mestre dos Ossos – Ganha a magia “Órgãos Sombrios“, e aumentar o próprio dano físico em +2 uma vez por combate, ao custo de 3 de sanidade.
Nível 4: Destruidor de Corpos – Cada ataque com partes de corpos concede +2 de dano extra e um bônus de +1 teste de resistência.
Nível 5: Arauto da Carne Profana – Recebe +2 em testes de Preservação e concede +1 em Defesa ao atacar com partes de corpos.
Nível 6: Ceifador dos Mortos-Vivos – Aumenta o dano com órgãos e partes em +1d6 e ganha resistência a efeitos de paralisia.
Nível 7: Impacto Demolidor – Ganha a habilidade “Esmagamento Cadavérico”, ao custo de 6 de sanidade, podendo aplicar 3d8 de dano adicional e quebrar a defesa de um oponente temporariamente “alvo sem armadura ou possibilidade de defender”.
Nível 8: Guerreiro das Sombras Corpóreas – Ganha “Fúria dos Ossos”: aumenta o dano de todos os ataques corpo a corpo em +1d12 durante um turno.
Nível 9: Avatar da Destruição Cadavérica – Com a habilidade “Desmembramento Fatal” pode realizar um ataque devastador que aplica um sangramento profundo, causando 2d10 de dano contínuo por 3 turnos, custo 2 de especial.`,
      "movimento_pass": 3.5
    },
    "Colosso": { 
      "vidaPorNivel": 16,
      "sanidadePorNivel": 0,
      "armaduraPorNivel": 4,
      "resistencia": "Esmagante",
      "bonusPass": `
      Nível 0: Passiva armadura sobrenatural sem custo uma vez por dia.
      
      🦾Guardião de Ferro
Nível 1: Resiliência do Colosso – Resistência contra qualquer dano de cortante e + 1 de armadura.
Nível 2: Pele de Pedra – Dano de esmagante recebido é reduzido em 2.
Nível 3: Barreira Implacável – Ganha “Defesa Absoluta”, que pode ser ativada ao custo de 4 de especial. Por 1 turno, bloqueia completamente o próximo ataque.
Nível 4: Fortificação Permanente – Recebe +1 de armadura enquanto permanecer no mesmo lugar por um turno completo.
Nível 5: Muralha do Colosso – Com a habilidade “Defesa Profunda”, ao custo de 6 de especial, pode redirecionar 1d12 de dano recebido para uma barreira de energia, protegendo aliados próximos por um turno.
Nível 6: Resiliência Sobrenatural – Ganha resistência a qualquer ataque de perfurante quando utilizando armadura pesada. Esse efeito é permanente.
Nível 7: Aegis Sagrada – “Escudo Final”, ao custo de 8 de especial, permite que o Colosso absorva até 2d12 de dano de um ataque direcionado a ele.
Nível 8: Muralha de Aço Vivo – Ao manter uma postura defensiva, ele pode bloquear um ataque de outro alvo a aliados por turno e ainda ganha +2 em armadura ao bloquear.
Nível 9: Guardião Inquebrável – Com a habilidade “Proteção Ancestral”, ao custo de 12 de especial, pode negar totalmente o dano de um ataque e refletir 1d10 de dano de volta ao atacante, tornando-o uma barreira quase invulnerável.

💪Dominador
Nível 1: Força Inigualável – Recebe +2 em testes de Brutalidade e para testes de agarrão e empurrão, aumentando sua capacidade de controlar inimigos diretamente. Cada sucesso concede 1 ponto temporário de especial.
Nível 2: Domínio de Impacto – Causa +2 de dano esmagante em ataques ao agarrar ou empurrar inimigos.
Nível 3: Investida Destruidora – Ganha “Investida do Colosso”, ao custo de 4 de especial, que permite empurrar um inimigo a até 5 metros de distância, causando 1d4 de dano de esmagante.
Nível 4: Agarrão Sobrenatural – Recebe +2 em Brutalidade ao manter um inimigo agarrado, o que o ajuda a manter o controle sobre o oponente.
Nível 5: Golpe Desestabilizador – Com o ataque “Confusão Brutal”, ao custo de 2 de especial, pode causar confusão no oponente, aplicando por 1 turno.
Nível 6: Presença Imponente – Ganha um bônus de +3 em dano quando empurrar ou arrastar oponentes, sendo quase impossível de ser desafiado.
Nível 7: Força dos Antigos – Ganha “Força Ancestral”, ao custo de 8 de especial, que concede +4 em Brutalidade por um turno e permite arrastar um inimigo por até 5 metros, esmagando-o no chão.
Nível 8: Poder de Controle Total – Ao empurrar um inimigo, pode realizar um ataque adicional no mesmo turno, concedendo controle máximo do campo.
Nível 9: Sufocamento Final – Com a habilidade “Agarre Inescapável”, ao custo de 12 de especial, pode imobilizar completamente o alvo por 1 turno e causar 3d12 de dano, finalizando o oponente.

👑Vingança ao Rei
Nível 1: Postura de Vingança – Recebe +2 de armadura ao bloquear ataques corpo a corpo e Libera a passiva “Vingança“, sem custo uma vez por combate.
Nível 2: Retaliação Agressiva – Causa +2 de dano em ataques de curto alcance em resposta a ataques recebidos.
Nível 3: Escudo Defensivo – Ganha “Escudo Contra Golpes”, ao custo de 8 de especial, que permite bloquear o próximo ataque e, em seguida, contra-atacar o inimigo com um ataque completo.
Nível 4: Firmeza Sobrenatural – Recebe +3 em Brutalidade ao resistir a tentativas de empurrão e agarrões, tornando-se uma presença difícil de derrubar.
Nível 5: Contragolpe Devastador – “Destruição Reflexa”, ao custo de 12 de especial, permite realizar um ataque poderoso em resposta a qualquer ataque falho de um oponente, causando o dobro do dano normal.
Nível 6: Reflexo de Ferro – Recebe +4 de dano em contra-ataques realizados em resposta a um ataque corpo a corpo.
Nível 7: Braço da Retaliação – Ganha “Justiça Implacável”, ao custo de 13 de especial, que permite bloquear completamente o próximo ataque de um inimigo e devolvê-lo com um contra-ataque poderoso.
Nível 8: Reflexo Sobrenatural – permite somar o bônus de agilidade em contra-ataques, permitindo realizar um ataque adicional a cada vez que for atacado.
Nível 9: Golpe de Vingança Suprema – Com a habilidade “Juízo do Colosso”, ao custo de 18 de especial, realiza um contra-ataque massivo que causa 4d10 de dano de extra ao atacante, derrubando-o no chão.`,
      "movimento_pass": 3.5
    },
    "Conjurador": { 
      "vidaPorNivel": 10,
      "sanidadePorNivel": 6,
      "armaduraPorNivel": 1,
      "resistencia": "Distorção",
      "bonusPass": `
      Nível 0: Passivas e Magias têm custo reduzido baseado em 1d6, valido por combate.
      
      ⚔️Espadachim Arcano
Nível 1: Lampejo Arcano – Pode conjurar magia com sua espada, +2 em ataques corpo a corpo quando canaliza magia através da espada.
Nível 2: Corte Espectral – Libera a habilidade “Aura Manifestada” e permite uma investida rápida de 6m que causa 3d6 de dano e derruba o alvo. (3 especial)
Nível 3: Discípulo do Raio Fendido – Aprenda duas magias de nível 1 a 2 do tipo Laser; ganhe +1 em Conexão ao conjurar com a espada.
Nível 4: Plasma Pulsante – Corte corpo a corpo com dano de plasma, causando 2d8 adicional de dano de Plasma por dois turnos consecutivos (custo: 3 de especial).
Nível 5: Golpe Espiritual – Um ataque imbuído de aura que, ao acertar, reduz em 3 a armadura de quem atinge (custo: 4 de especial).
Nível 6: Manifesto dos Sentinelas Invisíveis – Aprenda duas magias de nível 2 a 3 do tipo Aura, e pode conjurar uma magia que tenha desbloqueado uma vez ao dia sem custo.
Nível 7: Lâmina da Extinção – Aprenda duas magia de nível 3 a 4 do tipo Plasma e ganha +2 em testes de Conexão ao conjurar por uma espada.
Nível 8: Corte da Condenação – Aprenda duas magias de nível 4 a 5 do tipo Morte, Golpe final com dano de aura ou plasma, causando 2d10 de dano ao alvo e impedindo-o de se curar por um turno.
Nível 9: Assalto Arcano – Aprenda uma magia de nível 6 do tipo Plasma, Laser, Aura ou morte”. Uma vez por combate, realize três ataques com espada, cada um com dano adicional de 1d12 em Morte, laser, aura ou plasma.

👻Invocador das Sombras
Nível 1: Sombras Profundas – +2 em testes de Conexão e Libertação para conjurar magias de escuridão ou alma.
Nível 2: Véu da Distopia – Passiva “Sombra da Distopia” é liberada, permitindo ocultação em áreas de baixa luz, dificultando a percepção inimiga.
Nível 3: Golpe da Alma Perdida – Concede um ataque corpo a corpo que causa +4d6 de dano de alma (custo: 2 de especial).
Nível 4: Chamado das Trevas – Ganha +2 em Conexão e Libertação para conjurar magias de escuridão em combate.
Nível 5: Laço Obscuro – Encanta o alvo, reduzindo sua armadura em 2 por dois turnos (custo: 3 de especial).
Nível 6: Passagem Oculta – Torna-se intangível por dois turno, evitando qualquer dano físico (custo: 6 de especial).
Nível 7: Maestria Sombria – Ganha três magias de nível 1 a 4 da linha de escuridão ou alma que pode ser usada uma vez ao dia sem custo.
Nível 8: Profundezas da Alma – Pode absorver +3d6 de sanidade ao causar dano com habilidades de alma ou escuridão. (passivo)
Nível 9: Avanço da Penumbra – Uma vez por combate, invoca um véu sombrio em volta, recebendo +4d8 de armadura temporária por 10 turnos e causando Pavor nos inimigos em 30m.

🌪️Conjuração Caótica
Nível 1: Estudo Elemental – +2 em testes com magias de nível 1 a 2 dos elementos de fogo, gelo, água e eletricidade.
Nível 2: Chama Persistente – Concede a habilidade de lançar uma rajada de fogo contínua, que aplica 2d8 de dano de fogo ao longo de dois turnos. (6 de especial, 2m, teste de agilidade)
Nível 3: Toque Gélido – Libera uma aura de gelo ao seu redor que reduz a velocidade dos inimigos próximos por um turno, metade de movimento.
Nível 4: Tempestade Condutora – Invoca uma tempestade que causa 1d12 de dano elétrico a inimigos em um raio de três metros (4 de especial).
Nível 5: Escudo caótico – Conjura um escudo de água que reduz todos os danos de Caos, fica Resistente por dois turnos.
Nível 6: Maestria Elemental – Libera três magias de nível 1 a 4 dos elementos fogo, gelo, água ou eletricidade para conjurar uma vez ao dia sem custo de sanidade, e fica liberado.
Nível 7: Vórtice de Gelo – Invoca um vórtice que empurra os inimigos para trás 3m e causa 3d8 de dano de gelo (3 de especial).
Nível 8: Caos Elemental – Quando lança uma magia de dano, rola +1d8 de dano adicional em fogo, gelo, água ou eletricidade.
Nível 9: Mestre Elemental
Libera quatro magias de nível 1 a 5 dos elementos fogo, gelo, água ou eletricidade e pode conjurar uma delas uma vez por dia sem custo.`,
      "movimento_pass": 4.5
    },
    "Costeiro": { 
      "vidaPorNivel": 12,
      "sanidadePorNivel": 4,
      "armaduraPorNivel": 3,
      "resistencia": "Água",
      "bonusPass": `
      Nível 0: +1d6 com porretes ou katanas, +2 armadura e não pode ser Desarmado.
      
      🌊Marés Cortantes
Nível 1: Toque das Ondas – +1 em teste de ataques com katana; adiciona 1d4 de dano água (1 de especial).
Nível 2: Redemoinho Fluido – Ao acertar dois ataques consecutivos, ganha +1 em teste no próximo ataque.
Nível 3: Fúria das Marés – Por 2 de especial, adiciona 1d8 de dano de água em uma arma a sua escolha por dois turnos.
Nível 4: Correnteza Precisa – Recebe +1 em teste de esquiva e +2 em ataques com katana ao usar dano de água.
Nível 5: Maré Inquebrável – Por 3 de especial, reduz o dano recebido em 50% por um turno.
Nível 6: Pressão Submersa – Ataques com katana causa Debilitado em alvos sem resistência à água.
Nível 7: Ritmo da Maré – Acertar três ataques consecutivos concede um ataque adicional (passivo).
Nível 8: Corte Torrencial – Dano de água aumenta em +1d12 por três turnos (3 de especial).
Nível 9: Último Suspiro da Correnteza – Uma vez por combate, realiza uma ação extra com +4d10 de dano de água.

🌀Força das Marés
Nível 1: Golpe Contundente – +3 em ataques com porrete; 1d4 de dano esmagante (1 de especial).
Nível 2: Ataque de Oportunidade – Reação: Quando uma criatura sai do seu alcance (1m), você pode gastar sua ação livre para fazer um ataque corpo a corpo contra ela (+2 em teste de acerto, alvo teste de agilidade).
Nível 3: Vingança das Ondas – Por 2 de especial, adiciona 1d12 de dano esmagante em ataques de reação.
Nível 4: Rastro de Destroços – Acertar oponente em movimento concede +5 em dano esmagante por dois turnos.
Nível 5: Defesa das Marés – Se um inimigo passar por você até (3m de distância) sem realizar um ataque, você pode reagir com um golpe, causando +3d8 de dano esmagador (custa 3 de Especial, alvo teste de agilidade).
Nível 6: Investida da Correnteza – Ganha uma ação completa adicional para atacar com golpe esmagante que causa 4d8 e deixa o alvo Caído “derrubado” (5 de especial, alvo teste de agilidade).
Nível 7: Muralha Intransponível – Ignorado “caso não atacado por um turno” por mais de um inimigo, recebe +2 em armadura e +2 em dano de água em reações.
Nível 8: Impacto das Profundezas – Ataque livre extra ao derrubar um inimigo.
Nível 9: Força Brutal da Maré – Uma vez por combate, realiza uma ação completa extra e um ataque reativo com +3d10 de dano.

💧Correnteza Mística – Hidromante
Nível 1: Iniciado da Maré – Ganha uma magia de água de nível 1.
Nível 2: Tecelão das Correntes – Ganha uma magia de água de nível 2 e +1 em testes de preservação para magias de água.
Nível 3: Senhor dos Rios – Ganha uma magia de água de nível 3; recupera 2 de sanidade ao acertar ataque aquático.
Nível 4: Guardião dos Oceanos – Ganha uma magia de água de nível 4 e adiciona 1d8 de dano de água a qualquer magia (2 de sanidade).
Nível 5: Profeta das Profundezas – Ganha uma magia de água de nível 5 e +2 em armadura por 5 turnos ao conjurar magia de água.
Nível 6: Aura da Hidrocinese – Concede +3 em danos com magia e reduz o custo de sanidade das magias em 2 por três turnos (Custo 6 especial).
Nível 7: Chamada do Abismo – Recupera 1d12 de sanidade ao final do combate se uma magia de água foi usada.
Nível 8: Guardião das Marés – Recebe-2 de danos contra ataques elementais (apenas para fé, desconhecido e Poder) por 2 turnos ao conjurar magias de água.
Nível 9: Mestre da Correnteza – Duas vezes por combate, lança qualquer magia de água de até nível 5 sem custo de sanidade.`,
      "movimento_pass": 4.5
    },
    "Criatura": { 
      "vidaPorNivel": 15,
      "sanidadePorNivel": 1,
      "armaduraPorNivel": 4,
      "resistencia": "Gelo",
      "bonusPass": `
Nível 0: Passiva Pavor custo uma vez por dia ou sem lado negativo.

🦍Fúria Primordial
Nível 1:Golpe Selvagem – Ganha +1 em testes de brutalidade e ataques corpo a corpo causam +2 de dano adicional (custo: 1 especial).
Nível 2:Investida Brutal – Após um ataque bem-sucedido, pode realizar um teste de brutalidade. Se for bem-sucedido, realiza um ataque adicional (custo: 2 especial).
Nível 3:Fúria Incontrolável – Adiciona 1d6 de dano bruto em ataques corpo a corpo enquanto estiver com menos de metade da vida.
Nível 4:Resiliência Selvagem – Reduz em metade o dano de um ataque recebido ao custo de 3 especial (uma vez por combate).
Nível 5:Ira Devastadora – Ganha a passiva Raiva e pode ativá-la sem custo duas vezes ao dia.
Nível 6:Força Descomunal – Testes de brutalidade têm +3 e causam +1d10 de dano adicional em ataques críticos.
Nível 7:Estouro de Poder – Pode realizar dois ataques adicionais em uma única ação completa (custo: 5 especial, uma vez por combate).
Nível 8:Predador Incansável – Sempre que derrotar um inimigo, recupera 2 especial e pode usar uma ação de movimento sem custo.
Nível 9:Carnificina Absoluta – Uma vez por combate, Gira acertando todos os inimigos adjacentes a 2m com um golpe devastador, causando 3d10 de dano bruto (custo: 7 especial).

🐉Cauda Letal
Nível 1:Chicote Natural – Ganha +1 em testes de brutalidade. Ataques com cauda causam 1d12+1d6 de dano (custo: 1 especial, teste de brutalidade, corpo a corpo).
Nível 2:Presença Intimidadora – Sempre que atingir com a cauda, reduz a precisão do alvo em -1 no próximo ataque.
Nível 3:Golpe Estonteante – Um ataque bem-sucedido com a cauda impede o movimento do alvo por 1 turno (custo: 3 especial).
Nível 4:Barreira Instintiva – Reduz o dano de ataques recebidos em metade enquanto usar a cauda para bloquear (custo: 2 especial por bloqueio, ação livre).
Nível 5:Círculo de Espinhos – Realiza um ataque com a cauda contra todos os inimigos em um raio de 3 metros, causando +1d8 de dano (custo: 4 especial).
Nível 6:Reflexos Predatórios – Sempre que evitar um ataque com sucesso, realiza um contra-ataque imediato com a cauda (custo: 3 especial).
Nível 7:Flagelo Impiedoso – Uma vez por combate, atinge todos os inimigos adjacentes com a cauda, causando 2d8 de dano e empurrando-os 3 metros (custo: 5 especial).
Nível 8:Cauda Sombria – Ganha +2 em furtividade e +1d10 de dano em ataques furtivos realizados com a cauda.
Nível 9:Destruição Implacável – Realiza um ataque devastador com a cauda que atinge todos os inimigos em um cone de 6 metros, causando 3d10 de dano e os derrubando (custo: 7 especial).

🦊Ágil e Predatório
Nível 1:Movimentos Ágeis – Ganha +2 em testes de furtividade e acrobacia.
Nível 2:Instinto Selvagem – Adquire a passiva Consumir, ativável sem custo 1 vez por combate.
Nível 3:Golpe Preciso – Ao realiza um ataque furtivo contra inimigos desatentos, causando +1d6 de dano adicional (custo: 1 especial).
Nível 4:Velocidade Predatória – Pode realizar uma ação de movimento adicional em combate ao custo de 2 especial.
Nível 5:Fúria Controlada – Adquire a passiva Raiva.
Nível 6:Predador das Sombras – Ganha +3 em testes de furtividade. Ao realiza ataques furtivos ignora resistências (custo 3 especial).
Nível 7:Vantagem Natural – Sempre que passar em um teste de acrobacia ou furtividade, pode realizar uma ação livre de ataque (uma vez por turno).
Nível 8:Caçador das Profundezas – Ganha +3 em testes de enganação e intimidação contra inimigos que estejam sozinhos.
Nível 9:Golpe Impecável – Uma vez por combate, realiza um ataque crítico automático ao primeiro acerto contra um inimigo isolado, causando 3d12 de dano adicional (custo: 5 especial).`,
      "movimento_pass": 4.5
    },
    "Duelista": { 
      "vidaPorNivel": 14,
      "sanidadePorNivel": 2,
      "armaduraPorNivel": 1,
      "resistencia": "Perfurante",
      "bonusPass": `
Nível 0: +1d10 de dano contra alvos isolados (sem ninguém próximo de 10m) e tem +4 em testes de Furtividade.

🗡️Espadachim Solitário
Nível 1:Foco do Duelista – Ganha +2 de dano e +1 em testes de ataque contra inimigos isolados (sem aliados ou inimigos a 10 metros).
Nível 2:Estocada Perfeita – Uma vez por turno, pode causar +1d6 de dano adicional ao atingir um alvo isolado com uma rapiera.
Nível 3:Resistência da Solidão – Enquanto não houver aliados ou inimigos próximos, ganha +2 em testes de defesa contra ataques direcionados a você.
Nível 4:Rapidez Refinada – Pode realizar uma ação de ataque adicional contra um inimigo isolado (uma vez por combate).
Nível 5:Precisão Mortal – Críticos com rapieras contra alvos isolados causam +2d8 de dano adicional.
Nível 6:Arte do Duelista – Ganha +3 em todos os testes de acrobacia enquanto enfrenta inimigos isolados.
Nível 7:Supremacia Solitária – Enquanto estiver enfrentando um único inimigo, pode ignorar 5 da armadura do alvo.
Nível 8:Dança das Lâminas – Pode realizar dois ataques adicionais contra um inimigo isolado ao custo de 4 especial (uma vez por combate).
Nível 9:Corte Final – Uma vez por combate, realiza um ataque mortal contra um inimigo isolado, causando +4d10 de dano adicional e ignorando totalmente a armadura (custo: 5 especial).

⚔️Convite ao Duelo
Nível 1:Marca do Duelo – Escolha um alvo para duelar (custo: 1 especial). Contra esse alvo, ganha +2 de teste de ataque e +3 de dano de Escuridão.
Nível 2:Bravura Crescente – Cada vez que derrotar um inimigo em duelo, ganha +1 permanente em testes de ataque até ser derrotado.
Nível 3:Defesa do Desafiante – Durante um duelo, pode gastar 2 especial para reduzir em metade o dano de um ataque recebido.
Nível 4:Golpe Honrado – Contra o alvo do duelo, pode causar +1d8 de dano adicional em ataques críticos.
Nível 5:Vontade Invencível – Enquanto estiver invicto, ganha +2 em todos os testes de resistência.
Nível 6:Provocação Mortal – Pode chamar um segundo alvo para duelo simultaneamente (custo: 3 especial).
Nível 7:Maestria do Desafio – Contra inimigos marcados pelo duelo, ignora 6 da armadura e Libera Vingança.
Nível 8:Corte Vitorioso – Cada vez que derrotar um inimigo em duelo, recupera 3 especial e ganha uma ação de movimento adicional.
Nível 9:Campeão Invicto – Enquanto estiver invicto, ganha +4 em ataques e testes de resistência. Uma vez por combate, pode realizar um ataque mortal que causa +6d10 de dano.

🕶️Assassino Furtivo
Nível 1:Silêncio Mortal – Ganha +2 em testes de furtividade e +1d4 de dano adicional em ataques furtivos contra alvos isolados.
Nível 2:Predador Sutil – Sempre que eliminar um alvo isolado furtivamente, recupera 2 especial.
Nível 3:Movimentos Sombrios – Ganha +2 em acrobacia e pode realizar uma ação de movimento adicional ao se mover furtivamente.
Nível 4:Lâmina Oculta – Ataques furtivos com adagas contra alvos isolados causam +1d6 de dano adicional.
Nível 5:Instinto de Sobrevivência – Quando está sozinho, recebe +2 em testes de agilidade.
Nível 6:Golpe Preciso – Ignora metade da armadura de inimigos atacados furtivamente.
Nível 7:Mestre da Sombra – Pode atacar furtivamente um inimigo isolado e se mover sem perder o efeito de furtividade (custo: 2 especial).
Nível 8:Execução Silenciosa – Uma vez por combate, pode realizar um ataque crítico automático em um alvo isolado (custo: 4 especial).
Nível 9:Fim das Sombras – Realiza um ataque mortal contra um alvo isolado, causando +6d8 de dano adicional. Após eliminar o inimigo, pode se mover sem ser detectado por 1 turno (custo: 5 especial).`,
      "movimento_pass": 4
    },
    "Escudeiro": { 
      "vidaPorNivel": 15,
      "sanidadePorNivel": 1,
      "armaduraPorNivel": 3,
      "resistencia": "Esmagante",
      "bonusPass": `
Nível 0: +4 dano com escudo, passiva Emanar energia sem Negativo e sem custo uma vez por dia.

🛡️ Bastião Imóvel
Nível 1: Muralha de Ferro – Recebe +2 de armadura enquanto estiver segurando um escudo.
Passiva Exclusiva: libera Sonambulismo e Pode manter a postura de bloqueio mesmo enquanto dorme, reduzindo qualquer dano recebido pela metade.
Nível 2: Postura Inabalável – Ganha resistência a ataques de esmagante e cortante enquanto estiver em posição de defesa.
Nível 3: Libera a magia Aura de Proteção, pode usar sem custo uma vez ao dia.
Nível 4: Barreira Crescente – Acumula +1 em armadura para cada turno consecutivo em posição de bloqueio (máximo +3).
Nível 5: Escudo Resiliente – Pode anular completamente o dano de um ataque uma vez por combate.
Nível 6: Defesa Elemental – Ganha resistência contra quaisquer danos de um dos elementos a sua escolha (Fé, Desconhecido, Poder e Caos) custo 6 deespecial.
Nível 7: Fortaleza Imóvel – Ao custo de 8 de especial, reduz o dano de todos os ataques direcionados a você no próximo turno pela metade.
Nível 8: Bônus de Persistência – Enquanto permanecer bloqueando com o escudo por mais de 2 turnos consecutivos, recebe +2 em testes contra ataque.
Nível 9: Sentinela Inquebrável – Ganha imunidade a um ataque por combate e reflete metade do dano recebido ao atacante.

👐 Guardião dos Fracos
Nível 1: Proteção Aliada – Pode redirecionar até 1d8 de dano de um aliado para si enquanto estiver segurando o escudo.
Passiva Exclusiva: Libera Inveja e ao ver aliados receberem dano, ganha +2 de especial por turno.
Nível 2: Escudo Coletivo – Ganha +1 de armadura para cada aliado próximo (máximo +4).
Nível 3: Libera Aura de Retaliação – pode conjurar essa magia por um custo de 8 de especial uma vez a cada 2 dias (caso conjure fora com sanidade o custo é o da magia).
Nível 4: Presença Inspiradora – Aliados em um raio de 5 metros recebem +2 em testes de esquiva enquanto você estiver vivo.
Nível 5: Barreira Protetora – Ao custo de 5 de especial, cria uma barreira mágica que protege aliados por 1 turno, anulando até 2d8 de dano.
Nível 6: Guarda Impecável – Pode bloquear ataques direcionados a aliados no próximo turno sem penalidade um vez por combate.
Nível 7: Escudo Vingador – Ao custo de 10 de especial, bloqueia o próximo ataque direcionado a um aliado e devolve 2d12 de dano ao atacante.
Nível 8: Vínculo de Proteção – Aliados recebem metade da sua armadura como bônus por 1 turno ao custo de 8 de especial.(pode ser usado como ação livre na reação de um aliado).
Nível 9: Defensor Supremo – Ganha a habilidade de proteger todos os aliados dentro de um raio de 10 metros de ataques por um turno inteiro (uma vez por combate).

⚔️ Combatente do Escudo
Nível 1: Golpe com Escudo – Ataques com o escudo causam +1d6 de dano esmagante.
Passiva Exclusiva: Libera Escudo Elemental e danos com escudo ganha um bônus elemental aleatório de 1d6.
Nível 2: Impacto Devastador – Ganha +2 de dano ao realizar ataques corpo a corpo com o escudo.
Nível 3: Marcas das Cinzas – Conjura uma marca mágica em um inimigo que o enfraquece, reduzindo sua armadura em 2 por 2 turnos. Custo: 8 de especial.
Nível 4: Força do Escudo – Recebe +2 em testes de brutalidade ao usar o escudo como arma principal.
Nível 5: Carga do Colosso – Ao custo de 6 de especial, pode investir contra um inimigo com o escudo, empurrando-o 3 metros e causando 2d8 de dano esmagante.
Nível 6: Defesa Ofensiva – Recebe +1 de armadura enquanto ataca com o escudo.
Nível 7: Impacto Elemental – Ao custo de 10 de especial, ativa o poder elemental do escudo para causar 3d12 de dano adicional em um ataque.
Nível 8: Pressão Incessante – Ganha um ataque adicional por turno ao utilizar o escudo como arma principal.
Nível 9: Campeão do Escudo – Com a habilidade “Investida Final”, ao custo de 15 de especial, realiza uma série de ataques com o escudo, causando 4d10 de dano total e atordoando (condição confuso) o alvo por 1 turno..`,

      "movimento_pass": 3.5
    },
    "Especialista": { 
      "vidaPorNivel": 16,
      "sanidadePorNivel": 0,
      "armaduraPorNivel": 1,
      "resistencia": "Fogo",
      "bonusPass": `
Nível 0: Tem Vantagem com Passivas.

🧠Especialista em passivas
“Para escolher quais as passivas, deve sempre falar com o mestre“

Nível 1:Passiva Inicial – Ganha uma passiva aleatória relacionada ao seu estilo de combate. Além disso, aumenta em +1 todos os testes de resistência.
Nível 2:Passiva Desbloqueada 1 – Desbloqueia uma passiva adicional. A cada dois turnos, ganha +1 de armadura temporária.
Nível 3:Passiva Desbloqueada 2 – Desbloqueia mais uma passiva. Além disso, ganha uma ação extra de movimento por combate.
Nível 4:Passiva Desbloqueada 3 e 4 – Ganha duas passivas adicionais. Além disso, ganha +2 em testes de resistência dano mental.
Nível 5:Passiva Desbloqueada 5 – Ganha uma nova passiva, focada em resistência ou evasão. Além disso, aumenta em +1 turno a duração de todas as passivas que afetam a armadura.
Nível 6:Passiva Desbloqueada 6 e 7 – Desbloqueia mais duas passivas, incluindo uma passiva de cura ou regeneração. Além disso, pode usar uma ação extra de ataque uma vez por combate.
Nível 7:Passiva Desbloqueada 8 e 9 – Ganha duas passivas adicionais. Todas as passivas que aumentam armadura temporária têm seu efeito aumentado em 1d4.
Nível 8:Passiva Desbloqueada 10 e 11 – Desbloqueia duas passivas, com foco em aumento de poder ofensivo e armadura. Ganho de +1d6 de dano em todas as ações de dano.
Nível 9:Passiva Desbloqueada 12 – Desbloqueia a última passiva. Além disso, ganha uma ação bônus única por combate que pode ser utilizada para ativar qualquer passiva sem custo adicional.

🌪️Especialista do Caos
Ordem do caos: “é os estudiosos do elemento da natureza.”
O elemento Caos: ” é a própria representação pura da ordem e do caos, contendo varias magias de tipos diferentes.“

Nível 1: +2 em Testes de Preservação – Aumenta a resistência ao caos.
Nível 2: +1d8 de dano em magias de Caos de nível 1 e 2 – libera uma magia de caos de nível 1 a 2.
Nível 3: Ganha uma magia de Ordem do Caos de nível 1 a 3 ou Escolha uma magia de nível 1 ou 3 do elemento Caos para aprender.
Nível 4: Magias de Ordem do Caos de nível 1, 2 e 3 de sem consumir sanidade, uma vez por dia.
Nível 5: +1 em Testes de Preservação ao usar magias de Caos – ganha +1 em armadura temporária contra dano Mental e Psicológico ao conjurar magias de Caos.
Nível 6: Ganha uma magia de Ordem do Caos de nível 3 a 4 – Escolha uma magia de nível 3 ou 4 do elemento Caos para aprender.
Nível 7: Magia Avançada de Caos – Ganha uma magia de nível 5 ou 6 do elemento Caos para aprender e conjurar uma vez por dia sem custo de sanidade.
Nível 8: Custo Mínimo – Reduz o custo de uma magia de Caos por dia para 1 ponto de sanidade.
Nível 9: Mestre Elemental do Caos – Ganha uma magia de nível 6 de Caos e pode conjurá-la uma vez por dia sem custo de sanidade.

⚙️Mestre dos equipamentos
Nível 1:Talento de Armas – Espadas – Desbloqueia o uso de espadas e adagas. Ganha +2 de dano com ataques corpo a corpo usando essas armas.
Nível 2:Talento de Armas – Machados e Martelos – Desbloqueia o uso de machados e martelos. Ganha +1 de dano extra em ataques com essas armas.
Nível 3:Talento de Armas – Lanças e Armas com Haste – Desbloqueia o uso de lanças e alabardas. Ganha +1 de alcance e +1 de dano com essas armas.
Nível 4:Talento de Armas – Arcos e Bestas – Desbloqueia o uso de arcos e bestas. Pode realizar ataques à distância com +1d4 de dano adicional.
Nível 5:Talento de Armas – Katanas – Desbloqueia o uso de katanas e nagamakis. Recebe +2 de dano com essas armas e pode realizar um ataque adicional por turno.
Nível 6:Talento de Armas – Fundas e Estilingues – Desbloqueia o uso de fundas e estilingues. Ganha a capacidade de atingir alvos distantes com +1d6 de dano extra.
Nível 7:Talento de Armas – Armas Exóticas e Diversas – Desbloqueia o uso de nunchakus e shurikens. Ganha +2 de dano e bônus em acrobacia ao usar essas armas.
Nível 8:Talento de Armas – Armas de Cerco – Desbloqueia o uso de catapultas e balistas. Ganha bônus de dano em ataques de área com armas de cerco (custo: 4 especial).
Nível 9:Talento de Armas – Escudos – Desbloqueia o uso de escudos e ganha bônus de +1 em armadura. Pode usar um escudo como ataque corpo a corpo (custo: 2 especial).`,
      "movimento_pass": 4.5
    },
    "Espectro": { 
      "vidaPorNivel": 10,
      "sanidadePorNivel": 6,
      "armaduraPorNivel": 1,
      "resistencia": "Laser",
      "bonusPass": `
      
Nivel 0: +1d12 em danos de Plasma e magia Orbe negro em área (pode acertar mais de um alvo em até 5m do alvo principal) e personagem pode voar.

      👻Assombração Relâmpago
Especializado em teletransportes e reações rápidas.

Passiva Exclusiva: Teleporte Repentino – desbloqueada. Uma vez por combate sem custo.

Nível 1: Desaparecimento Sombrio – Após se teletransportar, ganha +2 em testes de esquiva até o próximo turno.
Nível 2: Surto Espectral – Se movimentar mais de 6 metros em um turno concede +1d6 de dano laser no próximo ataque.
Nível 3: Escapar da Realidade – Ao custo de 4 de especial, pode se teletransportar no meio de um ataque recebido, evitando completamente o dano.
Nível 4: Passo da Fenda – O primeiro teleporte de cada combate não consome ações.
Nível 5: Reflexos Sombrios – Sempre que esquivar de um ataque, pode se teleportar até 2 metros.
Nível 6: Evasão Instantânea – Ao custo de 6 de especial, pode se teleportar para evitar ataques em área.
Nível 7: Golpe Relâmpago – Pode realizar um ataque adicional ao final de um teleporte uma vez por turno.
Nível 8: Sombra Imparável – Ao custo de 8 de especial, pode se teleportar para qualquer lugar que tenha visto nos últimos 2 turnos.
Nível 9: Devorador do Espaço – Sempre que realizar um teleporte, o próximo ataque recebe +2d12 de dano laser.

🌌Espírito Desvinculado
Focado na passiva “Separar a Alma”, com regeneração e resistência aumentadas.

Passiva Exclusiva: Separar a Alma – desbloqueada. Ao ativar essa habilidade, pode lutar com o corpo e a alma separadamente, recebendo imunidade a estados negativos por 1 turno. – Uma vez por combate sem custo.

Nível 1: Presença Etérea – Enquanto “Separar a Alma” estiver ativa, recebe +2 em testes de Libertação.
Nível 2: Essência Restauradora – Regenera 1d6 de sanidade no final do turno se estiver em forma espiritual.
Nível 3: Toque do Além – Enquanto “Separar a Alma” estiver ativa, causa +1d8 de dano de plasma em ataques corpo a corpo.
Nível 4: Véu do Espectro – Ao custo de 6 de especial, pode ficar intangível por 1 turno.
Nível 5: Chamado do Vazio – Se atingir um inimigo enquanto estiver na forma espiritual, recupera 2 de especial.
Nível 6: Dualidade Sombria – Pode trocar entre forma física e espiritual sem gastar ação uma vez por turno.
Nível 7: Distorção da Alma – Ao custo de 8 de especial, pode entrar e sair da forma espiritual imediatamente após um ataque.
Nível 8: Ressurgência Fantasma – Se atingir um inimigo enquanto estiver na forma espiritual, pode recuperar 6 de sanidade adicional.
Nível 9: Manifestação Completa – Quando retornar ao corpo, causa uma explosão de energia espectral de 3d12 de dano de plasma em um raio de 5 metros.

🔮Feixe Espectral
Especializado em magias de Plasma, liberando magias poderosas ao longo dos níveis.
Passiva Exclusiva: Sinergia de Plasma – Todas as magias de Plasma que conjurar podem causar +1d6 de dano adicional ao custo de 2 de especial.
Nível 1: Carga Instável – Ganha uma magia de nível 1 do tipo Plasma.
Nível 2: Emissão Energética – Se lançar uma magia de Plasma, pode rolar +1d4 de dano extra.
Nível 3: Rajada Crescente – Ganha uma magia de nível 2 do tipo Plasma.
Nível 4: Sobrecarga Conectada – Se acertar um inimigo com uma magia de Plasma, recebe +1 de especial.
Nível 5: Explosão Radiante – Ganha uma magia de nível 3 do tipo Plasma.
Nível 6: Liberação Instável – Pode gastar 5 de especial para adicionar 1d10 de dano extra em magias de Plasma.
Nível 7: Descarga Destrutiva – Ganha uma magia de nível 4 do tipo Plasma.
Nível 8: Pulso Volátil – Ao conjurar uma magia de Plasma, pode realizar um ataque adicional com -2 de dano e ganha uma magia de nível 5 do tipo Plasma.
Nível 9: Estouro Final – Ganha uma magia de nível 6 do tipo Plasma e pode conjurá-la uma magia de plasma uma vez por combate sem custo de sanidade.
        `,
      "movimento_pass": 4.5
    },
    "Espiritualista": { 
      "vidaPorNivel": 11,
      "sanidadePorNivel": 5,
      "armaduraPorNivel": 1,
      "resistencia": "Aura",
      "bonusPass": `
      
Nivel 0: Magia Possessão de Luz Sem custo uma vez por dia.

💀Discípulo do Abismo
Focado em Libertação, dano extra com Escuridão, aprendizado progressivo de magias, e um estilo de jogo que premia a paciência, concedendo Armadura Extra ao ficar sem atacar.

Nível 1: Pele Sombria – Sempre que passar um turno sem atacar, ganha +2 de Armadura até o próximo turno. Esse efeito pode acumular até +6.
Nível 2: Marcas do Vazio – Se estiver com pelo menos +4 de Armadura Extra devido a Pele Sombria, seu próximo ataque causa +2d6 de dano de Escuridão.
Nível 3: Conhecimento Proibido – Ganha 1 magia de nível 1 a 3 do tipo Escuridão ou Aura (pode escolher apenas uma por vez).
Nível 4: Guardião do Abismo – Se passar dois turnos sem atacar, pode gastar uma Ação Completa para receber +5 de Armadura Extra por três turnos.
Nível 5:.Despertar das Sombras – Pode consumir toda sua Armadura Extra para causar +2d10 de dano de Escuridão no próximo ataque.
Nível 6: Caminho da Aniquilação – Escolha 1 magia de nível 3 a 5 do tipo Escuridão ou Aura (pode escolher apenas uma por vez).
Nível 7: Fardo Sombrio – Se estiver com pelo menos +6 de Armadura Extra, seu primeiro ataque que acertar um alvo ignora 10 de Armadura do alvo e é CRÍTICO
Nível 8: Existência Abissal – Ganha Resistência a Escuridão e pode ignorar os primeiros 20 de dano do tipo Distorção.
Nível 9: Avatar do Vazio – Se começar um turno com +6 ou mais de Armadura Extra, pode gastar uma Ação Completa para ativar um estado onde seus ataques ignoram toda a Armadura do alvo por 2 turnos e ganha +1d12 de dano de Aura.

👊Punho Etéreo
Focado em Plasma, ataques rápidos, coleta de almas, aprendizado progressivo de magias e ganho de Vida Temporária ao derrotar ou ferir inimigos.

Nível 1: Absorção Espiritual – Sempre que acertar um ataque corpo a corpo, ganha 1d6 de Vida Temporária. Se derrotar um inimigo, ganha 10 de Vida Temporária.
Nível 2: Impacto Etéreo – Se estiver com pelo menos 8 de Vida Temporária, seu próximo ataque causa +1d10 de dano de Plasma.
Nível 3: Mestre do Fluxo – Ganha 1 magia de nível 1 a 3 do tipo Plasma ou Alma (pode escolher apenas uma por vez).
Nível 4: Espírito Indomável – Pode gastar 2 de Especial para dobrar o ganho de Vida Temporária por dois turnos.
Nível 5: Alma da Tempestade – Se estiver com pelo menos 12 de Vida Temporária, seu primeiro ataque em um turno recebe +3 em Acerto.
Nível 6: Lótus dos Espíritos – Escolha 1 magia de nível 3 a 5 do tipo Plasma ou Alma (pode escolher apenas uma por vez).
Nível 7: Pulso Vital – Ao recuperar Vida Temporária por Absorção Espiritual, pode consumir 3 de Especial para causar +3d8 de dano de Plasma no próximo ataque.
Nível 8: Fonte de Energia – Sempre que atacar um inimigo com menos de 50% da vida máxima, ganha 1d20 de Vida Temporária.
Nível 9: Espírito Ascendente – Se estiver com 20 ou mais de Vida Temporária, pode gastar uma Ação Completa para liberar uma explosão de Plasma, causando 7d12 de dano de Plasma a todos os inimigos em um raio de 5 metros.

👻Arauto dos Espíritos
Focado na passiva Fluxo da Vida (Specter), aumentando seu poder conforme sobe de nível, obtendo ação completa extra e bônus de dano com custo de ações livres e especiais.

Nível 1: Chamado Espectral – +2 em testes de Conexão ao ativar Fluxo da Vida (Specter).
Nível 2: Guardião Sombrio – Enquanto Specter estiver ativo, pode gastar 3 de Especial para fazer com que ele ataque duas vezes no turno.
Nível 3: Alma Forjada – Pode ativar Specter sem gastar.
Nível 4: Vínculo Inquebrável – Ganha Ação Completa Extra uma vez por combate enquanto Specter estiver ativo.
Nível 5: Protetor Etéreo – Sempre que Specter atacar, pode gastar 2 de Especial para causar +1d6 de dano de Alma adicional.
Nível 6: Espírito Devoto – Specter agora dura +2 turnos e pode atacar duas vezes em um turno consumindo apenas 1 de Especial.
Nível 7: Presença Maldita – Uma vez por combate, pode ativar um segundo Specter ao custo dobrado de especial e mais 1D20 de dano Psicológico (Specter) ao término da duração.
Nível 8: Aliança Sobrenatural – Sempre que Specter atacar, o usuário recupera 1d4 de sanidade.
Nível 9: Emissário da Eternidade – Quando Specter for ativado, pode gastar 4 de Especial para aumentar seu dano para 2d12 + 8 de Alma e conceder +5 em Conexão por 8 turnos.
`,
      "movimento_pass": 4
    },
    "Fera": { 
      "vidaPorNivel": 16,
      "sanidadePorNivel": 0,
      "armaduraPorNivel": 3,
      "resistencia": "Eclipse",
      "bonusPass": `
      
      Nivel 0: +5 em Atletismo e Adestrar animais.

🌘Arauto do Eclipse
Focado em dano de Eclipse, ações extras e ataques brutais.

Nível 1: Sombras Cortantes – Seus ataques físicos e mágicos de Eclipse causam +1d8 de dano extra.
Nível 2: Presságio Sombrio – Sempre que atingir um inimigo com dano de Eclipse, rola 1d6: se tirar 4 ou mais, ganha uma Ação de Movimento extra no turno seguinte.
Nível 3: Presa Lunar – Pode gastar 3 de Especial para atacar duas vezes na mesma Ação de Ataque.
Nível 4: Manto do Eclipse – Ganha +3 de Armadura Temporária se começar o turno sem atacar.
Nível 5: Devastação Noturna – Se for o primeiro a atacar em um combate, causa +2d12 de dano Eclipse no primeiro golpe.
Nível 6: Eclipse Vivo – Sempre que reduzir um inimigo a 0 de vida, recupera 1d8 de vida.
Nível 7: Rajada Crepuscular – Pode gastar 4 de Especial para atacar todos os inimigos em um raio de 3 metros, com + 2d10 de dano Eclipse.
Nível 8: Presságio Final – Se atingir um inimigo com menos de 30 de vida, o ataque causa dano dobrado.
Nível 9: Cataclismo da Fera Sombria – Uma vez por combate, pode liberar uma onda de Eclipse em volta, causando 6d12 de dano Eclipse a inimigos próximos e ganhando +2 em todas as jogadas de ataque até o final da cena.

🔮Artesão espiritual
Transformação bestial à noite, ágil e furtivo de dia.

Nível 1: Instinto Lunar – Durante o dia, ganha +2 em testes de Agilidade. Durante a noite, entra em Forma Bestial, ganhando +3 em testes de Brutalidade.
Nível 2: Fúria da Lua – Se estiver na Forma Bestial, ataques corpo a corpo causam +1d6 de dano extra.
Nível 3: Passos das Sombras – Durante o dia, pode gastar 2 de Especial para se mover sem ser detectado.
Nível 4: Sangue da Noite – Durante a Forma Bestial, ganha Resistência a dano Físico (cortante, perfurante, esmagante).
Nível 5: Devastação Lupina – Pode gastar 3 de Especial para atacar duas vezes seguidas quando está transformado.
Nível 6: Presságio da Caçada – Durante a noite, pode farejar inimigos ocultos e detectar presas a até 30 metros.
Nível 7: Golpe da Noite Eterna – Se atacar um inimigo sem que ele tenha agido no combate, o ataque causa +3d8 de dano.
Nível 8: Forma Selvagem Aprimorada – Durante a noite, recebe +4 de Armadura e +4 de Movimento enquanto transformado.
Nível 9: Fera Primordial – Durante a Forma Bestial, ataques corpo a corpo causam +2d12 de dano e ignoram 6 de armadura.

🐺Tirano Carniceiro
Passiva/Habilidade de Consumir aprimorada, regeneração e resistência.

Nível 1: Fome Voraz – Sempre que usar Consumir, o dano causado é aumentado em +1d6.
Nível 2: Devorador de Dor – Sempre que consumir Sanidade, o alvo fica com -1 em testes de Conexão até o final do combate.
Nível 3: Voracidade Crescente – Sempre que reduzir um inimigo a 0 de vida, recupera 1d12 de Vida.
Nível 4: Sangue Predador – Se estiver com menos da metade da vida máxima, ganha +2 em Brutalidade e Resistência a Sangue.
Nível 5: Mastigar a Alma – Se usar Consumir contra um inimigo com menos de 22 de vida, o ataque automaticamente causa dano máximo.
Nível 6: Predador Incansável – Se causar dano com Consumir, pode gastar 3 de Especial para realizar um ataque extra.
Nível 7: Regeneração Maldita – Sempre que consumir Vida de um inimigo, recupera +1d6 de Vida Temporária.
Nível 8: Devorador Supremo – Se derrotar um inimigo com Consumir, recebe um bônus de +2 em todas as rolagens de ataque até o fim do combate.
Nível 9: Glutão da Carnificina – Uma vez por combate, pode gastar 6 de Especial para atacar todos os inimigos próximos, causando 4d12 de dano Sangue e absorvendo metade do dano como Vida Temporária.
      
      `,
      "movimento_pass": 4.5
    },
    "Ferreiro": { 
      "vidaPorNivel": 13,
      "sanidadePorNivel": 3,
      "armaduraPorNivel": 2,
      "resistencia": "Fogo",
      "bonusPass": `
 Nivel 0: Vantagem em testes de Ofício.
 
 🔨Mestre do Encantamento
 Especializado na criação de armas e armaduras com poder elemental, canalizando a essência dos materiais e elementos através do ofício. Negocie com mestre efeitos diferentes na hora da Forja.

Nível 1: Forjador das Chamas – Pode imbuir armas forjadas com o elemento Fogo, causando +1d4 de dano flamejante por 3 turnos. Alvos atingidos devem passar em um teste de Determinação ou sofrer queimaduras persistentes. Recebe +1 em testes de Ofício.
Nível 2: Artesão do Gelo – Aprende a imbuir suas armas com o elemento Gelo. O inimigo atingido deve passar em um teste de Preservação ou ficará congelado por 1 turno, perdendo sua ação principal. Armas forjadas causam +1 de dano fixo.
Nível 3: Moldador da Corrosão – Adiciona o elemento Ácido às suas criações. Inimigos atingidos por armas ácidas recebem 1d4 de dano por 2 turnos, a menos que passem em um teste de Determinação. +1 em testes para reparar ou modificar armamentos.
Nível 4: Engenheiro da Água Viva – Pode forjar equipamentos com o elemento Água, que reduzem o deslocamento do inimigo em 4 metros por 2 turnos. O alvo pode resistir com um teste de Agilidade. +1 em testes para criar armaduras com efeitos adicionais.
Nível 5: Senhor do Trovão – Ganha acesso ao elemento Eletricidade. Armas forjadas causam 1d6 extra contra alvos metálicos ou molhados. Alvos devem passar em um teste de Libertação ou ficam atordoados por 1 turno. Ganha +1 em ataques com armas criadas por si.
Nível 6: Ferreiro da Tempestade – Imbuir com o elemento Tempestade permite empurrar o alvo 2 metros a cada golpe. Teste de Brutalidade evita o empurrão. Além disso, escudos criados por você oferecem +1 de armadura contra ataques à distância.
Nível 7: Arquimestre do Abismo – Forja com o dano de Aura, podendo aplicar “Medo Oculto” por 1 turno se o alvo falhar em um teste de Intimidação. Ganha +1 em testes de Percepção e Intimidação com equipamentos próprios.
Nível 8: Metalurgista do Caos Primordial – Consegue forjar com o elemento Caos, criando armas imprevisíveis: o jogador rola 1d4 a cada golpe para aplicar efeitos aleatórios (fogo, gelo, ácido ou eletricidade). Recebe +2 em Ofício.
Nível 9: Lenda das Forjas Eternas – Pode imbuir até dois elementos diferentes em uma única arma criada. O dano extra de cada elemento é rolado separadamente. Uma vez por combate, pode criar uma arma temporária com 3 elementos que dura 3 turnos. Recebe +2 em testes de Preservação.

🔥Metalurgia do Fogo

Nível 1: Fagulha da Criação
Ganha +2 em testes de Ofício ao lidar com metais. (Passivo – baseado em Preservação)
Nível 2: Mãos Flamejantes
Uma vez por turno, adiciona +1d6 de dano de fogo (Caos) ao ataque com arma criada. (Passivo – dano baseado em Brutalidade)
Nível 3: Magia: Chama Persistente
Ganha acesso a uma magia de fogo de nível 1 ao desbloquear este nível. (Teste de conjuração por Preservação)
Nível 4: Escudo de Brasas
Quando sofre dano corpo a corpo, o inimigo sofre 1d8 de dano de fogo (Caos). (Passivo – ativação por Determinação)
Nível 5: Magia: Fornalha Ardente
Ganha acesso a uma magia de fogo de nível 2 ao desbloquear este nível. (Teste de conjuração por Preservação)
Nível 6: Controle Térmico
Pode fundir duas peças metálicas instantaneamente, até mesmo durante o combate. (Passivo – usa Preservação)
Nível 7: Arma Incandescente
Infundi uma arma por 3 turnos para ela causar +2d8 de dano de fogo (Caos). (Custo: 3 de especial – ativação por Preservação ou Brutalidade)
Nível 8: Magia: Pilar de Fogo
Ganha acesso a uma magia de fogo de nível 3 ao desbloquear este nível. (Teste de conjuração por Preservação)
Nível 9: Fusão Ígnea
Transforma qualquer arma metálica em uma versão flamejante permanente com +1d10 de dano de fogo (Caos). (Custo: 5 de especial – requer Preservação e Brutalidade)

🌀Copiador do Metal

Nível 1: Duplicador Ágil
Pode usar a passiva Réplica Imperfeita como ação bônus sem custo uma vez por combate. (Passivo – teste de ativação com Conexão)
Nível 2: Duplo Fantasma
Pode manter duas réplicas ativas ao mesmo tempo. (Custo: 3 de especial – depende de Conexão e Preservação)
Nível 3: Refino da Réplica
Réplicas criadas causam 1d8 de dano extra ao atingir o mesmo inimigo que o original atingiu no turno anterior. (Passivo – dano baseado em Brutalidade ou Agilidade da réplica)
Nível 4: Eco de Precisão
Ganha +1 em testes de acerto ao usar réplicas. (Passivo – utiliza Agilidade)
Nível 5: Especialista em Cópias
Ganha +2 em testes de Ofício ao tentar replicar qualquer item. (Passivo – baseado em Preservação)
Nível 6: Fluxo Espelhado
Réplicas não desaparecem no fim da duração se o conjurador passar um teste de Preservação (Dificuldade 12). (Passivo)
Nível 7: Reflexo Agressivo
Réplicas causam +1d6 de dano adicional se o alvo já tiver sido atingido naquele turno. (Passivo – usa Brutalidade ou Agilidade)
Nível 8: Ressonância de Metal
Cada vez que uma réplica desaparece, o conjurador regenera +2 de especial. (Passivo – relacionado à Conexão)
Nível 9: Réplica Lendária
Cria uma réplica perfeita com 100% das propriedades do original que dura 2 turnos e ignora efeitos de destruição mágica. (Custo: 5 de especial – ativação com Conexão ou Libertação)




`
      
      ,
      "movimento_pass": 3.5
    },
    "Forasteiro": { 
      "vidaPorNivel": 12,
      "sanidadePorNivel": 4,
      "armaduraPorNivel": 1,
      "resistencia": "Laser",
      "bonusPass": "+1d10 com dano de Laser e +1d10 com espadas curtas.",
      "movimento_pass": 4
    },
    "Glacinata": { 
      "vidaPorNivel": 14,
      "sanidadePorNivel": 2,
      "armaduraPorNivel": 1,
      "resistencia": "Gelo",
      "bonusPass": "+1d12 em magias de Gelo e Força Gélida com modificador de atributo de Brutalidade.",
      "movimento_pass": 3.5
    },
    "Guerreiro": { 
      "vidaPorNivel": 13,
      "sanidadePorNivel": 3,
      "armaduraPorNivel": 3,
      "resistencia": "Balístico",
      "bonusPass": "+5 de dano em armas corpo a corpo.",
      "movimento_pass": 4
    },
    "Hemomantico": { 
      "vidaPorNivel": 10,
      "sanidadePorNivel": 6,
      "armaduraPorNivel": 1,
      "resistencia": "Sangue",
      "bonusPass": "Magias de sangue causam Hemorragia no inimigo por 2 turnos.",
      "movimento_pass": 4.5
    },
    "Imitador": { 
      "vidaPorNivel": 9,
      "sanidadePorNivel": 7,
      "armaduraPorNivel": 1,
      "resistencia": "Alma",
      "bonusPass": "Passiva Mutação sem custo uma vez por dia.",
      "movimento_pass": 4.5
    },
    "Juíz": { 
      "vidaPorNivel": 11,
      "sanidadePorNivel": 5,
      "armaduraPorNivel": 1,
      "resistencia": "Cortante",
      "bonusPass": "Julga o desempenho de um ALVO, ele recebe 1d20 de dano caso tire menos que 10 em um teste, uma vez por luta.",
      "movimento_pass": 3.5
    },
      "Lacaio": {
        "vidaPorNivel": 14,
        "sanidadePorNivel": 2,
        "armaduraPorNivel": 2,
        "resistencia": "Eletricidade",
        "bonusPass": "Passiva Vingança sem custo uma vez por dia.",
        "movimento_pass": 4
      },
      "Ladrão": {
        "vidaPorNivel": 13,
        "sanidadePorNivel": 3,
        "armaduraPorNivel": 1,
        "resistencia": "Laser",
        "bonusPass": "+4 em furtividade, +2 roubar, tem vantagem em testes de ladinagem e agilidade.",
        "movimento_pass": 4.5
      },
      "Louco": {
        "vidaPorNivel": 16,
        "sanidadePorNivel": 0,
        "armaduraPorNivel": 1,
        "resistencia": "Sono",
        "bonusPass": "Menos sanidade por nível mas dobra os danos com magias.",
        "movimento_pass": 4.5
      },
      "Mago": {
        "vidaPorNivel": 10,
        "sanidadePorNivel": 6,
        "armaduraPorNivel": 1,
        "resistencia": "Eletricidade",
        "bonusPass": "Magias de atributo Preservação custam metade.",
        "movimento_pass": 3.5
      },
      "Malabarista": {
        "vidaPorNivel": 12,
        "sanidadePorNivel": 4,
        "armaduraPorNivel": 1,
        "resistencia": "Tremor",
        "bonusPass": "+5 em testes de arremesso e +2 em testes com acrobacia.",
        "movimento_pass": 4.5
      },
      "Marinheiro": {
        "vidaPorNivel": 15,
        "sanidadePorNivel": 1,
        "armaduraPorNivel": 1,
        "resistencia": "Tremor",
        "bonusPass": "+6 em testes de agarrar, +4 em testes para se livrar de status negativos.",
        "movimento_pass": 3.5
      },
      "Masoquista": {
        "vidaPorNivel": 13,
        "sanidadePorNivel": 3,
        "armaduraPorNivel": 1,
        "resistencia": "Sangue",
        "bonusPass": "Correntes com +1d6, autoinfligir dano (1d6) como ação livre para ganhar 1d12 extra.",
        "movimento_pass": 4.5
      },
      "Médico": {
        "vidaPorNivel": 12,
        "sanidadePorNivel": 4,
        "armaduraPorNivel": 1,
        "resistencia": "Sagrado",
        "bonusPass": "+5 em testes de medicina, -1h para tratar feridas, vantagem em Curas.",
        "movimento_pass": 3.5
      },
      "Mendigo": {
        "vidaPorNivel": 12,
        "sanidadePorNivel": 4,
        "armaduraPorNivel": 3,
        "resistencia": "Névoa",
        "bonusPass": "Pode usar a passiva Selvageria sem custo.",
        "movimento_pass": 4.5
      },
      "Monge": {
        "vidaPorNivel": 10,
        "sanidadePorNivel": 6,
        "armaduraPorNivel": 1,
        "resistencia": "Luz",
        "bonusPass": "+1d10 com bastões e a magia Sombra animal sem custo uma vez por dia.",
        "movimento_pass": 4.5
      },
      "Naturalista": {
        "vidaPorNivel": 9,
        "sanidadePorNivel": 7,
        "armaduraPorNivel": 1,
        "resistencia": "Água",
        "bonusPass": "+1d6 de dano com Magia Vinhas mágicas e +2 em testes de Preservação.",
        "movimento_pass": 4.5
      },
      "Nobre": {
        "vidaPorNivel": 11,
        "sanidadePorNivel": 5,
        "armaduraPorNivel": 2,
        "resistencia": "Luz",
        "bonusPass": "+1d20 em curas descansando.",
        "movimento_pass": 3.5
      },
      "Perseguidor": {
        "vidaPorNivel": 12,
        "sanidadePorNivel": 4,
        "armaduraPorNivel": 1,
        "resistencia": "Ácido",
        "bonusPass": "+5 em furtividade e Pressão sem custo uma vez por dia.",
        "movimento_pass": 5.5
      },
      "Pervertido": {
        "vidaPorNivel": 16,
        "sanidadePorNivel": 0,
        "armaduraPorNivel": 1,
        "resistencia": "Sagrado",
        "bonusPass": "+5 em testes de agarrar, caso esteja sem roupa o teste fica em +10 bônus.",
        "movimento_pass": 4
      },
      "Pescador": {
        "vidaPorNivel": 14,
        "sanidadePorNivel": 2,
        "armaduraPorNivel": 1,
        "resistencia": "Água",
        "bonusPass": "Magias de água causa 2d8 extras.",
        "movimento_pass": 3.5
      },
      "Pirata": {
        "vidaPorNivel": 11,
        "sanidadePorNivel": 5,
        "armaduraPorNivel": 1,
        "resistencia": "Água",
        "bonusPass": "+5 em dados de investigação, +1d8 em danos com pistolas e rapieiras.",
        "movimento_pass": 4
      },
      "Prefeito": {
        "vidaPorNivel": 10,
        "sanidadePorNivel": 6,
        "armaduraPorNivel": 1,
        "resistencia": "Psicológico",
        "bonusPass": "+10 em testes de diplomacia e +5 em intimidação.",
        "movimento_pass": 3.5
      },
      "Prisioneiro": {
        "vidaPorNivel": 14,
        "sanidadePorNivel": 2,
        "armaduraPorNivel": 1,
        "resistencia": "Cortante",
        "bonusPass": "+2d6 agarrando, +2 em testes de agarrar, +2d8 com ataque usando algemas.",
        "movimento_pass": 3.5
      },
      "Profanado": {
        "vidaPorNivel": 15,
        "sanidadePorNivel": 1,
        "armaduraPorNivel": 2,
        "resistencia": "Escuridão",
        "bonusPass": "Passiva Consumir sem custo uma vez por dia.",
        "movimento_pass": 3.5
      },
      "Protetor": {
        "vidaPorNivel": 10,
        "sanidadePorNivel": 6,
        "armaduraPorNivel": 2,
        "resistencia": "Alma",
        "bonusPass": "Magia Mestre das passivas sem custo uma vez por dia.",
        "movimento_pass": 4.5
      },
      "Pugilista": {
        "vidaPorNivel": 14,
        "sanidadePorNivel": 2,
        "armaduraPorNivel": 2,
        "resistencia": "Esmagante",
        "bonusPass": "+1d12 desarmado, +1d8 com manoplas e tem a passiva Salvaguarda sem custo uma vez por dia.",
        "movimento_pass": 4
      },
      "Revivido": {
        "vidaPorNivel": 6,
        "sanidadePorNivel": 10,
        "armaduraPorNivel": 1,
        "resistencia": "Maldição",
        "bonusPass": "A magia Órgãos sombrios sem custo uma vez por combate, +2 em curas.",
        "movimento_pass": 3.5
      },
      "Samurai": {
        "vidaPorNivel": 14,
        "sanidadePorNivel": 2,
        "armaduraPorNivel": 1,
        "resistencia": "Cortante",
        "bonusPass": "+1d8 de dano com Katanas e desembainhar no contra-ataque gasta ação livre e ganha +1d8 de dano (armas corpo a corpo).",
        "movimento_pass": 4.5
      
      },
      "Sacerdote": {
        "vidaPorNivel": 14,
        "sanidadePorNivel": 2,
        "armaduraPorNivel": 1,
        "resistencia": "Fogo",
        "bonusPass": "Magias Benção antiga e Conexão santa sem custo uma vez ao dia.",
        "movimento_pass": 3.5
      },"Soberano": {
    "vidaPorNivel": 8,
    "sanidadePorNivel": 8,
    "armaduraPorNivel": 1,
    "resistencia": "Psicológico",
    "bonusPass": "Magia Diplopia binocular Sem custo uma vez por dia e cria 2 cópias.",
    "movimento_pass": 4
  },
  "Taverneiro": {
    "vidaPorNivel": 13,
    "sanidadePorNivel": 3,
    "armaduraPorNivel": 1,
    "resistencia": "Balístico",
    "bonusPass": "+2 em testes de Libertação, +2 em testes de Conexão.",
    "movimento_pass": 3.5
  },
  "Tormentalista": {
    "vidaPorNivel": 10,
    "sanidadePorNivel": 6,
    "armaduraPorNivel": 1,
    "resistencia": "Tempestade",
    "bonusPass": "+1d12 em magias de Tempestade e elas usam o atributo de Brutalidade e personagem pode voar.",
    "movimento_pass": 4
  }
  
  
};
let equippedItemId = null;

const items = [
  
  {
    "id": "adaga",
    "name": "Adaga",
    "desc": "Arma leve e cortante, ideal para ataques rápidos e furtivos.",
    "img": "imagens/Armas/Simples/adaga.png",
    "damageType": "6d4",
    "elementalDamage": "–",
    "damageDice": "Cortante",
    "range": "3m",
    "critical": "18 - Dano(x2)",
    "equipBonus": "-",
    "TipoItem": "Corpo a Corpo,Clássica"
  },
  {
    "id": "ataqueDesarmado",
    "name": "Ataque Desarmado",
    "desc": "Golpes com o corpo, sem armas.",
    "img": "imagens/Armas/Simples/ataquedesarmado.png",
    "damageType": "1d4+1d8+3d4",
    "elementalDamage": "–",
    "damageDice": "Esmagante",
    "range": "–",
    "critical": "18 - Dano(x2)",
    "equipBonus": "-",
    "TipoItem": "Corpo a Corpo,Clássica"
  },
  {
    "id": "espadaCurta",
    "name": "Espada Curta",
    "desc": "Espada leve e versátil, eficaz em combate corpo a corpo.",
    "img": "imagens/Armas/Simples/espadacurta.png",
    "damageType": "1d6+1d8+3d4",
    "elementalDamage": "–",
    "damageDice": "Perfurante",
    "range": "–",
    "critical": "18 - Dano(x2)",
    "equipBonus": "-",
    "TipoItem": "Corpo a Corpo,Clássica"
  },
  {
    "id": "manopla",
    "name": "Manopla",
    "desc": "Luva reforçada para combate direto.",
    "img": "imagens/Armas/Simples/manopla.png",
    "damageType": "4d4+1d8",
    "elementalDamage": "–",
    "damageDice": "Esmagante",
    "range": "–",
    "critical": "18 - Dano(x2)",
    "equipBonus": "-",
    "TipoItem": "Corpo a Corpo,Clássica"
  },
  {
    "id": "bastaoAcolchoado",
    "name": "Bastão Acolchoado",
    "desc": "Bastão revestido, usado para treinos e contenções.",
    "img": "imagens/Armas/Simples/bastaoacolchoado.png",
    "damageType": "1d6+1d8+3d4",
    "elementalDamage": "–",
    "damageDice": "Esmagante",
    "range": "–",
    "critical": "19 - Dano(x2)",
    "equipBonus": "-",
    "TipoItem": "Corpo a Corpo,Clássica"
  },
  {
    "id": "machado",
    "name": "Machado",
    "desc": "Arma de uma mão com excelente poder de corte e impacto.",
    "img": "imagens/Armas/Simples/machado.png",
    "damageType": "1d6+1d10+3d4",
    "elementalDamage": "–",
    "damageDice": "Cortante",
    "range": "–",
    "critical": "19 - Dano(x2)",
    "equipBonus": "-",
    "TipoItem": "Corpo a Corpo,Clássica"
  },
  {
    "id": "machadoGrande",
    "name": "Machado Grande",
    "desc": "Arma de uma mão com excelente poder de corte e impacto.",
    "img": "imagens/Armas/Simples/machadoGrande.png",
    "damageType": "1d6+1d12+3d4",
    "elementalDamage": "–",
    "damageDice": "Cortante",
    "range": "–",
    "critical": "20 - Dano(x3)",
    "equipBonus": "-",
    "TipoItem": "Corpo a Corpo,Clássica"
  },
  {
    "id": "bainha",
    "name": "Bainha",
    "desc": "Usada de forma improvisada como arma contundente.",
    "img": "imagens/Armas/Simples/bainha.png",
    "damageType": "4d4+1d8",
    "elementalDamage": "–",
    "damageDice": "Esmagante",
    "range": "–",
    "critical": "19 - Dano(x2)",
    "equipBonus": "-",
    "TipoItem": "Corpo a Corpo,Clássica"
  },
  {
    "id": "espadaMedia",
    "name": "Espada Média",
    "desc": "Equilíbrio entre força e agilidade, ideal para combate direto.",
    "img": "imagens/Armas/Simples/espadamedia.png",
    "damageType": "1d8+1d12+3d4",
    "elementalDamage": "–",
    "damageDice": "Perfurante",
    "range": "–",
    "critical": "19 - Dano(x2)",
    "equipBonus": "-",
    "TipoItem": "Corpo a Corpo,Clássica"
  },
  {
    "id": "clava",
    "name": "Clava",
    "desc": "Instrumento contundente simples, porém eficaz.",
    "img": "imagens/Armas/Simples/clava.png",
    "damageType": "1d6+1d8+3d4",
    "elementalDamage": "–",
    "damageDice": "Esmagante",
    "range": "–",
    "critical": "19 - Dano(x2)",
    "equipBonus": "-",
    "TipoItem": "Corpo a Corpo,Clássica"
  },
  {
    "id": "lanca",
    "name": "Lança",
    "desc": "Arma de haste longa usada tanto para ataque quanto para arremesso.",
    "img": "imagens/Armas/Simples/lanca.png",
    "damageType": "1d6+1d8+3d4",
    "elementalDamage": "–",
    "damageDice": "Perfurante",
    "range": "6m",
    "critical": "19 - Dano(x2)",
    "equipBonus": "-",
    "TipoItem": "Corpo a Corpo,Clássica"
  },
  {
    "id": "maca",
    "name": "Maça",
    "desc": "Arma contundente com grande poder destrutivo.",
    "img": "imagens/Armas/Simples/maca.png",
    "damageType": "2d8+3d4",
    "elementalDamage": "–",
    "damageDice": "Esmagante",
    "range": "–",
    "critical": "19 - Dano(x2)",
    "equipBonus": "-",
    "TipoItem": "Corpo a Corpo,Clássica"
  },
  {
    "id": "espadaGrande",
    "name": "Espada Grande",
    "desc": "Arma de duas mãos com grande poder de dano.",
    "img": "imagens/Armas/Simples/espadagrande.png",
    "damageType": "2d12+3d4",
    "elementalDamage": "–",
    "damageDice": "Esmagante",
    "range": "–",
    "critical": "19 - Dano(x3)",
    "equipBonus": "-",
    "TipoItem": "Corpo a Corpo,Clássica"
  },
  {
    "id": "bordao",
    "name": "Bordão",
    "desc": "Cajado robusto utilizado em combate físico ou mágico.",
    "img": "imagens/Armas/Simples/bordao.png",
    "damageType": "2d6+1d8+3d4",
    "elementalDamage": "–",
    "damageDice": "Esmagante",
    "range": "–",
    "critical": "19 - Dano(x2)",
    "equipBonus": "-",
    "TipoItem": "Corpo a Corpo,Clássica"
  },
  {
    "id": "pique",
    "name": "Pique",
    "desc": "Arma longa ideal para controle de área e cavalaria.",
    "img": "imagens/Armas/Simples/pique.png",
    "damageType": "2d8+3d4",
    "elementalDamage": "–",
    "damageDice": "Perfurante",
    "range": "–",
    "critical": "19 - Dano(x2)",
    "equipBonus": "-",
    "TipoItem": "Corpo a Corpo,Clássica"
  },
  {
    "id": "tacape",
    "name": "Tacape",
    "desc": "Arma tribal pesada e destrutiva.",
    "img": "imagens/Armas/Simples/tacape.png",
    "damageType": "1d10+1d8+3d4",
    "elementalDamage": "–",
    "damageDice": "Esmagante",
    "range": "–",
    "critical": "19 - Dano(x2)",
    "equipBonus": "-",
    "TipoItem": "Corpo a Corpo,Clássica"
  },
  {
    "id": "lancaAdaga",
    "name": "Adaga de Arremesso",
    "desc": "Arremessável com precisão e perfuração elevada.",
    "img": "imagens/Armas/Simples/lancaadaga.png",
    "damageType": "1d12+4d4",
    "elementalDamage": "–",
    "damageDice": "Perfurante",
    "range": "3m",
    "critical": "20 - Dano(x2)",
    "equipBonus": "-",
    "TipoItem": "Distância,Clássica"
  },
  {
    "id": "pedras",
    "name": "Pedras",
    "desc": "Improvisadas mas úteis para ataque à distância.",
    "img": "imagens/Armas/Simples/pedras.png",
    "damageType": "9d4",
    "elementalDamage": "–",
    "damageDice": "Esmagante",
    "range": "3m",
    "critical": "20 - Dano(x2)",
    "equipBonus": "-",
    "TipoItem": "Distância,Clássica"
  },
  {
    "id": "chakram",
    "name": "Chakram",
    "desc": "Disco cortante arremessável.",
    "img": "imagens/Armas/Simples/chakram.png",
    "damageType": "7d6",
    "elementalDamage": "–",
    "damageDice": "Cortante",
    "range": "–",
    "critical": "20 - Dano(x2)",
    "equipBonus": "-",
    "TipoItem": "Distância,Clássica"
  },
  {
    "id": "azagaia",
    "name": "Azagaia",
    "desc": "Lança curta e leve, ideal para arremesso.",
    "img": "imagens/Armas/Simples/azagaia.png",
    "damageType": "1d6+1d10+3d4",
    "elementalDamage": "–",
    "damageDice": "Perfurante",
    "range": "9m",
    "critical": "20 - Dano(x2)",
    "equipBonus": "-",
    "TipoItem": "Distância,Clássica"
  },
  {
    "id": "algemas",
    "name": "Algemas",
    "desc": "Usadas de forma improvisada para conter e atacar.",
    "img": "imagens/Armas/Simples/algemas.png",
    "damageType": "1d8+3d4",
    "elementalDamage": "–",
    "damageDice": "Esmagante",
    "range": "2m",
    "critical": "20 - Dano(x2)",
    "equipBonus": "-",
    "TipoItem": "Corpo a Corpo,Clássica"
  },
  {
    "id": "cabacaKarakia",
    "name": "Cabaça Karakia",
    "desc": "Um pequeno pote de vinho, e muito resistente, mesmo com arremesso ou impacto continua intacto e místico, pode ser usado para arremessar, porém todo vinho dentro dele sempre fica aguado.",
    "img": "imagens/Armas/Simples/cabacakarakia.png",
    "damageType": "1d8+3d4",
    "elementalDamage": "–",
    "damageDice": "Esmagante",
    "range": "–",
    "critical": "20 - Dano(x2)",
    "equipBonus": "-",
    "TipoItem": "Corpo a Corpo,Clássica"
  },
  {
    "id": "craniodefogo",
    "name": "Crânio de Fogo Alquímico",
    "desc": "Artefato explosivo usado em combates mágicos.",
    "img": "imagens/Armas/Simples/craniofogo.png",
    "damageType": "1d6+1d10+3d4",
    "elementalDamage": "Fogo",
    "damageDice": "Fogo",
    "range": "3m",
    "critical": "20 - Dano(x2)",
    "equipBonus": "-",
    "TipoItem": "Lendário,Distância,Clássica"
  },
  {
    "id": "funda",
    "name": "Funda",
    "desc": "Arma de arremesso de pedras ou projéteis pequenos.",
    "img": "imagens/Armas/Simples/funda.png",
    "damageType": "1d12+1d6+3d4",
    "elementalDamage": "–",
    "damageDice": "Esmagante",
    "range": "15m",
    "critical": "20 - Dano(x2)",
    "equipBonus": "-",
    "TipoItem": "Distância,Clássica"
  },
  {
    "id": "granadaRudimentar",
    "name": "Granada Rudimentar",
    "desc": "Dispositivo explosivo primitivo de curto alcance.",
    "img": "imagens/Armas/Simples/granada.png",
    "damageType": "4d12+3d4",
    "elementalDamage": "–",
    "damageDice": "Distorção",
    "range": "3m",
    "critical": "20 - Dano(x2)",
    "equipBonus": "-",
    "TipoItem": "Distância,Clássica"
  },
  {
    "id": "katana",
    "name": "Katana",
    "desc": "Espada curva tradicional japonesa, precisa e mortal.",
    "img": "imagens/Armas/Simples/katana.png",
    "damageType": "1d8+1d12+3d4",
    "elementalDamage": "–",
    "damageDice": "Cortante",
    "range": "2m",
    "critical": "20 - Dano(x2)",
    "equipBonus": "-",
    "TipoItem": "Corpo a Corpo,Medieval"
  }

  ,{ 
    id: "Kongens hjerte", 
    name: "Kongens hjerte", 
    desc: "Adaga Fóssil de Coração, poucas partes moles de um corpo podem ser fossilizadas, porém curiosamente o coração de um rei antigo foi. Quem usa essa arma em formato de coração ganha 50 de vida temporária.", 
    img: "imagens/Armas/Armas/Kongens hjerte.png", 
    damageType: "1d4", 
    elementalDamage: "1d12+3d6", 
    damageDice: "Escuridão", 
    range: "1m", 
    critical: "(18) - Dano(x3)", 
    equipBonus: "Ganha 50 de vida temporária" // Adicionando o bônus de equipar
  ,TipoItem:"Lendário,Corpo a Corpo"
  },
  {
    id: "Tåkefiolin",
    name: "Violino da névoa",
    desc: "Tåkefiolin é um instrumento perdido nas Terras de Calisto. Dizem que ele vaga junto ao som, buscando um portador para tocar a Valsa das Névoas.",
    img: "imagens/Armas/Armas/Tåkefiolin.png",
    damageType: "1d4",
    elementalDamage: "5d6",
    damageDice: "Névoa",
    range: "9m",
    critical: "(20) - Dano(x2)",
    equipBonus: "Ataca com som" // Se quiser, podemos inventar um bônus aqui!
  ,TipoItem:"Lendário,Distância"
  },
    { 
      id: "Thorvilles hammer", 
      name: "Thorvilles hammer", 
      desc: "Martelo com raios vazados de seu cabo cobrindo a mão do usuário, dizem que o próprio Thorville usava na grande guerra.", 
      img: "imagens/Armas/Armas/Thorvilles hammer.png", 
      damageType: "2d12", 
      elementalDamage: "4d6", 
      damageDice: "Eletricidade", 
      range: "2m", 
      critical: "(18) - Dano(x3)", 
      equipBonus: "" 
    ,TipoItem:"Lendário,Corpo a Corpo"
  },
    { 
      id: "Skytten torden pierce", 
      name: "Skytten torden pierce", 
      desc: "Lança com formato de trovão dourada, desconhecida para as pessoas, porém passa um ar de soberba para quem usa.", 
      img: "imagens/Armas/Armas/Skytten torden pierce.png", 
      damageType: "2d10", 
      elementalDamage: "1d8+3d6", 
      damageDice: "Eletricidade", 
      range: "1m", 
      critical: "(19) - Dano(x3)", 
      equipBonus: "" 
    ,TipoItem:"Lendário,Corpo a Corpo"
  },
    { 
      id: "Forbanna fabelaktig", 
      name: "Forbanna fabelaktig", 
      desc: "Adaga de Sangue, formada do sangue de uma criatura forte. Só aceita ser empunhada pelos fortes, necessita ter 28 de Brutalidade e 17 de Determinação.", 
      img: "imagens/Armas/Armas/Forbanna fabelaktig.png", 
      damageType: "3d6", 
      elementalDamage: "1d10+3d6", 
      damageDice: "Sangue", 
      range: "—", 
      critical: "(18) - Dano(x3)", 
      equipBonus: "" 
    ,TipoItem:"Lendário,Corpo a Corpo"
  },
    { 
      id: "Tropisk jordskjelv", 
      name: "Tropisk jordskjelv", 
      desc: "Machado terremoto tropical. Todos a até 3m do alvo sofrem 1d8 de Tremor (exceto o usuário).", 
      img: "imagens/Armas/Armas/Tropisk jordskjelv.png", 
      damageType: "1d12", 
      elementalDamage: "1d4+3d6", 
      damageDice: "Tremor", 
      range: "2m", 
      critical: "(19) - Dano(x3)", 
      equipBonus: "" 
    ,TipoItem:"Lendário,Corpo a Corpo"
  },
    { 
      id: "Bannestokk", 
      name: "Bannestokk", 
      desc: "Bastão amaldiçoado que levita e gira. Permite usar outras duas armas e quem vê sofre dano de maldição.", 
      img: "imagens/Armas/Armas/Bannestokk.png", 
      damageType: "1d6", 
      elementalDamage: "1d12+3d6", 
      damageDice: "Maldição", 
      range: "5m", 
      critical: "(17) - Dano(x3)", 
      equipBonus: "" 
    ,TipoItem:"Lendário,Distância"
  },
    { 
      id: "storm gud", 
      name: "storm gud", 
      desc: "Deus da tempestade, objeto esférico. Quem for atingido por magia recebe +1d8 de Tempestade.", 
      img: "imagens/Armas/Armas/storm gud.png", 
      damageType: "1d4", 
      elementalDamage: "5d6", 
      damageDice: "Tempestade", 
      range: "1m", 
      critical: "(19) - Dano(x3)", 
      equipBonus: "" 
    ,TipoItem:"Lendário,Distância"
  },
    { 
      id: "Slangekjeder", 
      name: "Slangekjeder", 
      desc: "Chicote ou cobras? Difícil saber. Arma extremamente flexível e letal.", 
      img: "imagens/Armas/Armas/Slangekjeder.png", 
      damageType: "3d4", 
      elementalDamage: "1d8+3d6", 
      damageDice: "Ácido", 
      range: "1,5m", 
      critical: "(18) - Dano(x3)", 
      equipBonus: "" 
    ,TipoItem:"Lendário,Corpo a Corpo"
  },
    { 
      id: "Tapt jegerinne", 
      name: "Tapt jegerinne", 
      desc: "Espada de vidro da Caçadora Perdida. Dá +4 em investigação.", 
      img: "imagens/Armas/Armas/Tapt jegerinne.png", 
      damageType: "1d6", 
      elementalDamage: "2d8+3d6", 
      damageDice: "Distorção", 
      range: "1m", 
      critical: "(18) - Dano(x3)", 
      equipBonus: "+4 em testes de Investigação" 
    ,TipoItem:"Lendário,Corpo a Corpo"
  },
    { 
      id: "arven etter den dømte kongen", 
      name: "arven etter den dømte kongen", 
      desc: "Grande espada do rei julgado, infame por sua força incontrolável.", 
      img: "imagens/Armas/Armas/arven etter den dømte kongen.png", 
      damageType: "2d8", 
      elementalDamage: "1d20+3d6", 
      damageDice: "Alma", 
      range: "2m", 
      critical: "(18) - Dano(x3)", 
      equipBonus: "" 
    ,TipoItem:"Lendário,Corpo a Corpo"
  },
    { 
      id: "Onde slem stab", 
      name: "Onde slem stab", 
      desc: "Cajado perverso que permite usar a magia Sonhos Reais sem custo uma vez ao dia, -2 em Conexão.", 
      img: "imagens/Armas/Armas/Onde slem stab.png", 
      damageType: "1d4", 
      elementalDamage: "4d6", 
      damageDice: "Sono", 
      range: "1m", 
      critical: "(19) - Dano(x3)", 
      equipBonus: "Pode usar Sonhos Reais 1x por dia sem custo" 
    ,TipoItem:"Lendário,Corpo a Corpo"
  },
  { 
      id: "Requiescens fan", 
      name: "Requiescens fan", 
      desc: "Leques orientais, antigas dançarinas do oriente do continente oeste desenvolveram uma dança adormecedora, cortes causam a passiva Preguiça nos alvos.", 
      img: "imagens/Armas/Armas/Requiescens fan.png", 
      damageType: "1d8", 
      elementalDamage: "2d8+3d6", 
      damageDice: "Sono", 
      range: "3m", 
      critical: "(18) - Dano(x3)", 
      equipBonus: "Causa a passiva Preguiça nos alvos"
  ,TipoItem:"Lendário,Medieval"
  },
  
  { 
      id: "Mørkt blad av hat", 
      name: "Mørkt blad av hat", 
      desc: "Katana Rancor das eras sombrias, algumas lâminas foram forjadas durante a grande guerra e representam o clima presente nesse período, aqueles que usam essa lâmina é possuído por um ódio inexplicável. (passiva ódio desativa se for desarmado ou guardar a lâmina na bainha).", 
      img: "imagens/Armas/Armas/Mørkt blad av hat.png", 
      damageType: "1d20", 
      elementalDamage: "2d12+3d6", 
      damageDice: "Distorção", 
      range: "1,5m", 
      critical: "(18) - Dano(x3)", 
      equipBonus: "Possui ódio desativado se desarmado ou guardado"
  ,TipoItem:"Lendário,Corpo a Corpo"
  },
  
  { 
      id: "Uendelige kutt", 
      name: "Uendelige kutt", 
      desc: "Cimitarra de mercúrio sombria, lâmina encontrada no pico mais alto das terras de calisto, quem usa essa lâmina tem chance de deixar seu inimigo sangrando ao toque (cara ou coroa).", 
      img: "imagens/Armas/Armas/Uendelige kutt.png", 
      damageType: "2d10", 
      elementalDamage: "1d10+3d6", 
      damageDice: "Cortante", 
      range: "1m", 
      critical: "(18) - Dano(x3)", 
      equipBonus: "Chance de causar sangramento ao toque (cara ou coroa)."
  ,TipoItem:"Lendário,Medieval"
  },
  {
    id: "Løve retning",
    name: "Løve retning",
    desc: "Direção do Leão, cestos cobertos por pelos de leão. Aqueles que seguem a vontade dos cestos seguem a do leão. Acertar um golpe no inimigo permite, caso queira, usar sem custo 'Invadir a Mente' no próximo turno.",
    img: "imagens/Armas/Armas/Løve retning.png",
    damageType: "3d8",
    elementalDamage: "4d6",
    damageDice: "Psicológico",
    range: "1m",
    critical: "(17) - Dano(x3)",
    equipBonus: "Ao acertar um inimigo, pode usar 'Invadir a Mente' sem custo no próximo turno" 
  ,TipoItem:"Lendário,Medieval"
  },
  {
    id: "Calisto Blessing Sickle",
    name: "Calisto Blessing Sickle",
    desc: "Foice da benção sagrada de Calisto. Não se sabe o quão real é essa foice, porém todos que a empunham ficam resistentes à escuridão (recebem metade do dano de escuridão).",
    img: "imagens/Armas/Armas/Calisto Blessing Sickle.png",
    damageType: "1d20",
    elementalDamage: "2d20+3d6",
    damageDice: "Sagrado",
    range: "1,5m",
    critical: "(18) - Dano(x4)",
    equipBonus: "Resistência à escuridão (recebe metade do dano de escuridão)"
  ,TipoItem:"Lendário,Medieval,Corpo a Corpo"
  },
  {
    id: "Skyggefull tåkepisk",
    name: "Skyggefull tåkepisk",
    desc: "Chicote de espinhos da Nebula, antiga rainha de um reino esquecido. Atingir um inimigo causa espinhos sombrios por todo o corpo do alvo, podendo imobilizá-lo caso deseje.",
    img: "imagens/Armas/Armas/skyggefull tåkepisk.png",
    damageType: "1d6",
    elementalDamage: "5d6+3d6",
    damageDice: "Névoa",
    range: "3m",
    critical: "(19) - Dano(x3)",
    equipBonus: "Ao atingir um inimigo, pode optar por imobilizá-lo com espinhos sombrios"
  ,TipoItem:"Lendário,Distância"
  },
  {
    id: "donnie darko øks",
    name: "Donnie darko øks",
    desc: "Dizem que esse machado foi criado por um ser viajante, vindo de outras terras. Sua habilidade torna o usuário super forte: ao chegar seu turno, cura metade do dano recebido enquanto não era seu turno. Após agir, pode se teleportar para a posição original.",
    img: "imagens/Armas/Armas/donnie darko øks.png",
    damageType: "2d12",
    elementalDamage: "1d12+3d6",
    damageDice: "Aura",
    range: "1m",
    critical: "(18) - Dano(x3)",
    equipBonus: "Cura metade do dano recebido antes do turno e pode teleportar de volta após agir"
  ,TipoItem:"Lendário,Corpo a Corpo"
  },
  {
    id: "Fremtidens bue",
    name: "Fremtidens bue",
    desc: "Arco vindo de outras regiões. Com esse arco, o usuário recebe +4 em acerto e dano adicional da flecha.",
    img: "imagens/Armas/Armas/Fremtidens bue.png",
    damageType: "2d12",
    elementalDamage: "2d10+3d6",
    damageDice: "Perfurante",
    range: "8m",
    critical: "(19) - Dano(x3)",
    equipBonus: "+4 em acerto, adiciona dano da flecha"
    ,TipoItem:"Lendário,Distância"
  },
  {
    id: "hellig chakram",
    name: "Hellig chakram",
    desc: "Chakram vindo dos céus. Dizem que surge quando um servo divino está em apuros.",
    img: "imagens/Armas/Armas/hellig chakram.png",
    damageType: "4d6",
    elementalDamage: "1d8+3d6",
    damageDice: "Luz",
    range: "5m",
    critical: "(17) - Dano(x3)",
    equipBonus: "Nenhum bônus de equipar"
    ,TipoItem:"Lendário,Corpo a Corpo,Distância"
  },
  {
    id: "Vannpistol",
    name: "Vannpistol",
    desc: "Pistola aparentemente inofensiva. Apesar de ninguém recarregá-la, misteriosamente sempre se enche de água.",
    img: "imagens/Armas/Armas/Vannpistol.png",
    damageType: "1d4",
    elementalDamage: "9d6",
    damageDice: "Água",
    range: "6m",
    critical: "(19) - Dano(x3)",
    equipBonus: "Não precisa ser recarregada (sempre cheia)"
    ,TipoItem:"Lendário,Distância,Arma"
  },
  {
    id: "tomt grep",
    name: "Tomt grep",
    desc: "Apesar de ser apenas o cabo de uma espada antiga, quando empunhada ela transmite uma luz que se molda no formato de uma lâmina brilhosa.",
    img: "imagens/Armas/Armas/tomt grep.png",
    damageType: "–",
    elementalDamage: "3d12+3d6",
    damageDice: "Laser",
    range: "2m",
    critical: "(18) - Dano(x5)",
    equipBonus: "Espada de luz é criada ao empunhar"
    ,TipoItem:"Lendário,Corpo a Corpo"
  },
  {
    id: "uovervinnelig ødelagt is",
    name: "Uovervinnelig ødelagt is",
    desc: "Luva de material suspeito, dizem que é indestrutível. Ganha Vantagem usando essa luva (joga dois dados e escolhe o melhor resultado).",
    img: "imagens/Armas/Armas/uovervinnelig ødelagt is.png",
    damageType: "2d6",
    elementalDamage: "1d12+3d6",
    damageDice: "Gelo",
    range: "1m",
    critical: "(18) - Dano(x3)",
    equipBonus: "Ganha Vantagem em ataques com ela"
    ,TipoItem:"Lendário,Medieval"
  },
  {
    id: "brannøgleklubb",
    name: "brannøgleklubb",
    desc: "Clava de fogo vinda da cauda de um lagarto gigante que viveu no reino dos anões. Ganha a magia 'Fogo Vivo'.",
    img: "imagens/Armas/Armas/brannøgleklubb.png",
    damageType: "2d10",
    elementalDamage: "1d12+3d6",
    damageDice: "Fogo",
    range: "2m",
    critical: "(19) - Dano(x3)",
    equipBonus: "Concede a magia 'Fogo Vivo'"
    ,TipoItem:"Lendário,Medieval"
  },
  
  { 
      id: "kongen av pierced", 
      name: "kongen av pierced", 
      desc: "Confeccionada pelo chifre de um dragão oriental muito antigo, a Rapiera antiga dos magos da floresta negra, sua lâmina pode causar envenenado no inimigo.", 
      img: "imagens/Armas/Armas/kongen av perforerte.png", 
      damageType: "2d12", 
      elementalDamage: "1d20+3d6", 
      damageDice: "Perfurante", 
      range: "1,5m", 
      critical: "(18) - Dano(x3)", 
      equipBonus: "Causa envenenado no inimigo"
    ,TipoItem:"Lendário,Medieval"
  },
  
  { 
      id: "munk av mount ryogi", 
      name: "munk av mount ryogi", 
      desc: "Bastão do antigo monge, um dos lendários lutadores do reino leste, o rei dos gigantes uma vez fez negócios com esse monge e confeccionou essa arma para ele, as marcas tentam deixar o inimigo louco +1d8 de dano sanidade nos inimigos.", 
      img: "imagens/Armas/Armas/munk av mount ryogi.png", 
      damageType: "2d12", 
      elementalDamage: "1d8+3d6", 
      damageDice: "Mental", 
      range: "1m", 
      critical: "(19) - Dano(x3)", 
      equipBonus: "+1d8 de dano sanidade nos inimigos"
    ,TipoItem:"Lendário,Corpo a Corpo"
  },
  
  { 
      id: "Skygger av fornuft", 
      name: "Skygger av fornuft", 
      desc: "Sombras da sanidade, haladie, uma adaga de dois gumes da antiga Syrmania, dizem que essa haladie possui uma irmã. Crítico 18, causa o valor do dano extra na sanidade do inimigo. Se arremessar essa arma ela volta para a mão após atingir algo.", 
      img: "imagens/Armas/Armas/Skygger_av_fornuft.png", 
      damageType: "2d8", 
      elementalDamage: "2d12+3d6", 
      damageDice: "Distorção", 
      range: "5m", 
      critical: "(18) - Dano(x3)", 
      equipBonus: "Causa dano extra na sanidade do inimigo"
    ,TipoItem:"Lendário,Distância,Corpo a Corpo"
  },
  
  { 
      id: "Skygger av nøkternhet", 
      name: "Skygger av nøkternhet", 
      desc: "Sombras da sobriedade, haladie, uma adaga de dois gumes da antiga indrainland, dizem que essa haladie possui uma irmã. Crítico 18, Cura o valor do dano extra na sua sanidade. Se arremessar essa arma ela volta para a mão após atingir algo.", 
      img: "imagens/Armas/Armas/Skygger_av_nokternhet.png", 
      damageType: "2d8", 
      elementalDamage: "2d12+3d6", 
      damageDice: "Maldição", 
      range: "5m", 
      critical: "(18) - Dano(x3)", 
      equipBonus: "Cura o valor do dano extra na sua sanidade"
    ,TipoItem:"Lendário,Distância,Corpo a Corpo"
  },
  
  { 
      id: "Eclipse Greatsword", 
      name: "Eclipse Greatsword", 
      desc: "Espada grande do eclipse, espada perdida do reino dos elfos da floresta crepúsculo (enquanto segurando ganha resistência para danos de Maldição).", 
      img: "imagens/Armas/Armas/Eclipse_Greatsword.png", 
      damageType: "2d8", 
      elementalDamage: "2d12+3d6", 
      damageDice: "Sagrado", 
      range: "2m", 
      critical: "(18) - Dano(x3)", 
      equipBonus: "Resistência para danos de Maldição"
  ,TipoItem:"Lendário,Medieval"
  },
  
  { 
      id: "Komplett Karakia-gresskar", 
      name: "Komplett Karakia-gresskar", 
      desc: "Cabaça Karakia completa, uma pequena cabaça com runas, quando completa sai dela um fio de água formando uma lâmina chicote que possui um alcance alto.", 
      img: "imagens/Armas/Armas/Komplett_Karakia_gresskar.png", 
      damageType: "1d10", 
      elementalDamage: "3d8+3d6", 
      damageDice: "Água", 
      range: "3m", 
      critical: "(18) - Dano(x3)", 
      equipBonus: "Lâmina chicote com alcance alto"
,TipoItem:"Lendário,Corpo a Corpo"
  },
  
  { 
      id: "Stor øks å Donar", 
      name: "Stor øks å Donar", 
      desc: "Machado grande de Donar, um grande machado pulsando eletricidade por toda lamina, aqueles que usam esse machado são denominados Deuses do Trovão, lendas antigas citam essa força, mas todas elas convergem em Donar. Ganha imunidade a danos de Eletricidade enquanto empunha.", 
      img: "imagens/Armas/Armas/Stor_øks_å_Donar.png", 
      damageType: "2d20", 
      elementalDamage: "3d20+3d6", 
      damageDice: "Eletricidade", 
      range: "8m", 
      critical: "(19) - Dano(x3)", 
      equipBonus: "Imunidade a danos de Eletricidade",
      TipoItem:"Lendário,Medieval"
  },
  
  { 
      id: "Escudo", 
      name: "Escudo", 
      desc: "Escudo aparentemente comum, ao equipar ganha 2 de armadura temporária.", 
      img: "imagens/Armas/Armas/Escudo.png", 
      damageType: "1d4", 
      elementalDamage: "–", 
      damageDice: "Esmagante", 
      range: "1m", 
      critical: "(20) - Dano(x2)", 
      equipBonus: "Ganha 2 de armadura temporária",
      TipoItem:"Clássica,Medieval"
  },
  {
  id: "Pathfinder22",
  name: "Pathfinder (.22)",
  desc: "Revólver calibre .22 conhecido por sua leveza. Capacidade de 6 tiros, com chance de vantagem no primeiro disparo e desvantagem no segundo.",
  img: "imagens/Armas/Armas/Pathfinder22.png", // adapte o caminho se necessário
  damageType: "1d12",
  elementalDamage: "–",
  damageDice: "Balístico",
  range: "6m",
  critical: "(19) - Dano(x2)",
  equipBonus: "1 tiro com vantagem, 1 tiro com desvantagem",
  TipoItem: "Distância,Arma"
  },
  
  {
    "id": "ArcoCurto",
    "name": "Arco Curto",
    "desc": "",
    "img": "imagens/Armas/Armas/ArcoCurto.png",
    "damageType": "5d4+ dano da flecha",
    "elementalDamage": "–",
    "damageDice": "Perfurante",
    "range": "10m",
    "critical": "(20) - Dano(x3)",
    "equipBonus": "1 flecha por turno",
    "TipoItem": "Distância,Medieval"
  },
  {
    "id": "Beretta92F",
    "name": "Beretta 92F",
    "desc": "",
    "img": "imagens/Armas/Armas/Beretta92F.png",
    "damageType": "4d4",
    "elementalDamage": "–",
    "damageDice": "Balístico",
    "range": "12m",
    "critical": "(20) - Dano(x2)",
    "equipBonus": "1 tiro normal, 2 tiros com desvantagem",
    "TipoItem": "Distância,Arma"
  },
  {
    "id": "Flintstone",
    "name": "Flintstone",
    "desc": "",
    "img": "imagens/Armas/Armas/Flintstone.png",
    "damageType": "1d20",
    "elementalDamage": "–",
    "damageDice": "Balístico",
    "range": "9m",
    "critical": "(19) - Dano(x2)",
    "equipBonus": "1 tiro com desvantagem de longe ou 1 tiro com vantagem de perto",
    "TipoItem": "Distância,Arma"
  },
  {
    "id": "Mouserk96",
    "name": "Mouser k96",
    "desc": "",
    "img": "imagens/Armas/Armas/Mouserk96.png",
    "damageType": "2d6+1d4",
    "elementalDamage": "–",
    "damageDice": "Balístico",
    "range": "9m",
    "critical": "(20) - Dano(x3)",
    "equipBonus": "1 tiro normal e 1 tiro com desvantagem",
    "TipoItem": "Distância,Arma"
  },
  {
    "id": "Beretta93R",
    "name": "Beretta 93R",
    "desc": "",
    "img": "imagens/Armas/Armas/Beretta93R.png",
    "damageType": "1d10+1d4",
    "elementalDamage": "–",
    "damageDice": "Balístico",
    "range": "9m",
    "critical": "(19) - Dano(x2)",
    "equipBonus": "1 tiro normal, 2 tiros com desvantagem",
    "TipoItem": "Distância,Arma"
  },
  {
    "id": "ColtDoubleEagle",
    "name": "Colt Double Eagle",
    "desc": "",
    "img": "imagens/Armas/Armas/ColtDoubleEagle.png",
    "damageType": "4d4",
    "elementalDamage": "–",
    "damageDice": "Balístico",
    "range": "9m",
    "critical": "(18) - Dano(x2)",
    "equipBonus": "1 tiro normal, 1 tiro com desvantagem",
    "TipoItem": "Distância,Arma"
  },
  {
    "id": "ColtM1911",
    "name": "Colt M1911",
    "desc": "",
    "img": "imagens/Armas/Armas/ColtM1911.png",
    "damageType": "4d4",
    "elementalDamage": "–",
    "damageDice": "Balístico",
    "range": "9m",
    "critical": "(20) - Dano(x2)",
    "equipBonus": "1 tiro normal, 2 tiros com desvantagem",
    "TipoItem": "Distância,Arma"
  },
  {
    "id": "ColtPython",
    "name": "Colt Python",
    "desc": "",
    "img": "imagens/Armas/Armas/ColtPython.png",
    "damageType": "1d12",
    "elementalDamage": "–",
    "damageDice": "Balístico",
    "range": "12m",
    "critical": "(20) - Dano(x2)",
    "equipBonus": "1 tiro normal, 2 tiros com desvantagem",
    "TipoItem": "Distância,Arma"
  },
  {
    "id": "Derringer",
    "name": "Derringer",
    "desc": "",
    "img": "imagens/Armas/Armas/Derringer.png",
    "damageType": "3d6",
    "elementalDamage": "–",
    "damageDice": "Balístico",
    "range": "3m",
    "critical": "(20) - Dano(x2)",
    "equipBonus": "2 tiros normal, 1 tiro com desvantagem",
    "TipoItem": "Distância,Arma"
  },
  {
    "id": "DesertEagle",
    "name": "Desert Eagle",
    "desc": "",
    "img": "imagens/Armas/Armas/DesertEagle.png",
    "damageType": "2d6+1d4",
    "elementalDamage": "–",
    "damageDice": "Balístico",
    "range": "12m",
    "critical": "(20) - Dano(x3)",
    "equipBonus": "1 tiro normal, 2 tiros com desvantagem",
    "TipoItem": "Distância,Arma"
  },
  {
    "id": "Glock17",
    "name": "Glock 17",
    "desc": "",
    "img": "imagens/Armas/Armas/Glock17.png",
    "damageType": "4d4",
    "elementalDamage": "–",
    "damageDice": "Balístico",
    "range": "9m",
    "critical": "(19) - Dano(x2)",
    "equipBonus": "2 tiros normal, 1 tiro com desvantagem",
    "TipoItem": "Distância,Arma"
  },
  {
    "id": "Glock20",
    "name": "Glock 20",
    "desc": "",
    "img": "imagens/Armas/Armas/Glock20.png",
    "damageType": "4d4",
    "elementalDamage": "–",
    "damageDice": "Balístico",
    "range": "12m",
    "critical": "(20) - Dano(x2)",
    "equipBonus": "1 tiro normal, 2 tiro com desvantagem",
    "TipoItem": "Distância,Arma"
  },
  {
    "id": "MACIngramM10",
    "name": "MAC Ingram M10",
    "desc": "",
    "img": "imagens/Armas/Armas/MACIngramM10.png",
    "damageType": "4d4",
    "elementalDamage": "–",
    "damageDice": "Balístico",
    "range": "12m",
    "critical": "(20) - Dano(x2)",
    "equipBonus": "4 tiros com desvantagem",
    "TipoItem": "Distância,Arma"
  },
  {
    "id": "RugerService-Six",
    "name": "Ruger Service-Six",
    "desc": "",
    "img": "imagens/Armas/Armas/RugerService-Six.png",
    "damageType": "3d6",
    "elementalDamage": "–",
    "damageDice": "Balístico",
    "range": "9m",
    "critical": "(20) - Dano(x2)",
    "equipBonus": "1 tiro normal, 2 tiros com desvantagem",
    "TipoItem": "Distância,Arma"
  },
  {
    "id": "S&WM29",
    "name": "S&W M29",
    "desc": "",
    "img": "imagens/Armas/Armas/S&WM29.png",
    "damageType": "3d8",
    "elementalDamage": "–",
    "damageDice": "Balístico",
    "range": "9m",
    "critical": "(20) - Dano(x2)",
    "equipBonus": "1 tiro com vantagem, 1 tiro com desvantagem",
    "TipoItem": "Distância,Arma"
  },
  {
    "id": "SITESM9",
    "name": "SITES M9",
    "desc": "",
    "img": "imagens/Armas/Armas/SITESM9.png",
    "damageType": "3d6",
    "elementalDamage": "–",
    "damageDice": "Balístico",
    "range": "9m",
    "critical": "(20) - Dano(x2)",
    "equipBonus": "2 tiros normal, 1 tiro com desvantagem",
    "TipoItem": "Distância,Arma"
  },
  {
    "id": "Skorpion",
    "name": "Skorpion",
    "desc": "",
    "img": "imagens/Armas/Armas/Skorpion.png",
    "damageType": "3d4",
    "elementalDamage": "–",
    "damageDice": "Balístico",
    "range": "12m",
    "critical": "(20) - Dano(x2)",
    "equipBonus": "1 tiro normal, 3 tiros com desvantagem",
    "TipoItem": "Distância,Arma"
  },
  {
    "id": "TEC-9",
    "name": "TEC-9",
    "desc": "",
    "img": "imagens/Armas/Armas/TEC-9.png",
    "damageType": "3d6",
    "elementalDamage": "–",
    "damageDice": "Balístico",
    "range": "12m",
    "critical": "(20) - Dano(x2)",
    "equipBonus": "4 tiros com desvantagem",
    "TipoItem": "Distância,Arma"
  },
  {
    "id": "WaltherPPK",
    "name": "Walther PPK",
    "desc": "",
    "img": "imagens/Armas/Armas/WaltherPPK.png",
    "damageType": "3d4",
    "elementalDamage": "–",
    "damageDice": "Balístico",
    "range": "9m",
    "critical": "(18) - Dano(x2)",
    "equipBonus": "1 tiro normal, 2 tiro com desvantagem",
    "TipoItem": "Distância,Arma"
  },
  {
    "id": "AKM/AK-47",
    "name": "AKM/AK-47",
    "desc": "",
    "img": "imagens/Armas/Armas/AK-47.png",
    "damageType": "3d8",
    "elementalDamage": "–",
    "damageDice": "Balístico",
    "range": "21m",
    "critical": "(20) - Dano(x2)",
    "equipBonus": "6 tiros com desvantagem",
    "TipoItem": "Distância,Arma"
  },
  {
    "id": "BarrettLightFifty",
    "name": "Barrett Light Fifty",
    "desc": "",
    "img": "imagens/Armas/Armas/BarrettLightFifty.png",
    "damageType": "3d12",
    "elementalDamage": "–",
    "damageDice": "Balístico",
    "range": "40m",
    "critical": "(20) - Dano(x2)",
    "equipBonus": "1 tiro normal",
    "TipoItem": "Distância,Arma"
  },
  {
    "id": "BerettaM3P",
    "name": "Beretta M3P",
    "desc": "",
    "img": "imagens/Armas/Armas/BerettaM3P.png",
    "damageType": "3d8",
    "elementalDamage": "–",
    "damageDice": "Balístico",
    "range": "9m",
    "critical": "(20) - Dano(x2)",
    "equipBonus": "1 tiro normal e 1 tiro com desvantagem de longe ou 1 tiro com vantagem de perto",
    "TipoItem": "Distância,Arma"
  },
  {
    "id": "BrowningBPS",
    "name": "Browning BPS",
    "desc": "",
    "img": "imagens/Armas/Armas/BrowningBPS.png",
    "damageType": "3d10",
    "elementalDamage": "–",
    "damageDice": "Balístico",
    "range": "9m",
    "critical": "(18) - Dano(x2)",
    "equipBonus": "1 tiro com desvantagem de longe ou 1 tiro com vantagem de perto",
    "TipoItem": "Distância,Arma"
  },
  {
    "id": "HKG3",
    "name": "HK G3",
    "desc": "",
    "img": "imagens/Armas/Armas/HKG3.png",
    "damageType": "3d10",
    "elementalDamage": "–",
    "damageDice": "Balístico",
    "range": "30m",
    "critical": "(20) - Dano(x2)",
    "equipBonus": "1 tiro normal, 2 tiros com desvantagem",
    "TipoItem": "Distância,Arma"
  },
  {
    "id": "HKMP5",
    "name": "HK MP5",
    "desc": "",
    "img": "imagens/Armas/Armas/HKMP5.png",
    "damageType": "3d6",
    "elementalDamage": "–",
    "damageDice": "Balístico",
    "range": "15m",
    "critical": "(20) - Dano(x2)",
    "equipBonus": "2 tiros normal, 1 tiro com desvantagem",
    "TipoItem": "Distância,Arma"
  },
  {
    "id": "HKMP5K",
    "name": "HK MP5K",
    "desc": "",
    "img": "imagens/Armas/Armas/HKMP5K.png",
    "damageType": "3d6",
    "elementalDamage": "–",
    "damageDice": "Balístico",
    "range": "12m",
    "critical": "(18) - Dano(x2)",
    "equipBonus": "2 tiros normal, 2 tiros com desvantagem",
    "TipoItem": "Distância,Arma"
  },
  {
    "id": "HKPSG1",
    "name": "HK PSG1",
    "desc": "",
    "img": "imagens/Armas/Armas/HKPSG1.png",
    "damageType": "3d10",
    "elementalDamage": "–",
    "damageDice": "Balístico",
    "range": "30m",
    "critical": "(20) - Dano(x2)",
    "equipBonus": "1 tiro normal, 1 tiro com desvantagem",
    "TipoItem": "Distância,Arma"
  },
  {
    "id": "M16A2",
    "name": "M16A2",
    "desc": "",
    "img": "imagens/Armas/Armas/M16A2.png",
    "damageType": "3d8",
    "elementalDamage": "–",
    "damageDice": "Balístico",
    "range": "24m",
    "critical": "(20) - Dano(x2)",
    "equipBonus": "1 tiro normal, 3 tiros com desvantagem",
    "TipoItem": "Distância,Arma"
  },
  {
    "id": "M4Carbine",
    "name": "M4 Carbine",
    "desc": "",
    "img": "imagens/Armas/Armas/M4Carbine.png",
    "damageType": "3d8",
    "elementalDamage": "–",
    "damageDice": "Balístico",
    "range": "18m",
    "critical": "(20) - Dano(x2)",
    "equipBonus": "1 tiro normal, 3 tiros com desvantagem",
    "TipoItem": "Distância,Arma"
  },
  {
    "id": "Mossberg",
    "name": "Mossberg",
    "desc": "",
    "img": "imagens/Armas/Armas/Mossberg.png",
    "damageType": "3d8",
    "elementalDamage": "–",
    "damageDice": "Balístico",
    "range": "9m",
    "critical": "(20) - Dano(x2)",
    "equipBonus": "1 tiro normal e 1 tiro com desvantagem de longe ou 1 tiro com vantagem de perto",
    "TipoItem": "Distância,Arma"
  },
  {
    "id": "Remington700",
    "name": "Remington 700",
    "desc": "",
    "img": "imagens/Armas/Armas/Remington700.png",
    "damageType": "3d10",
    "elementalDamage": "–",
    "damageDice": "Balístico",
    "range": "24m",
    "critical": "(20) - Dano(x2)",
    "equipBonus": "1 tiro normal, 2 tiros com desvantagem",
    "TipoItem": "Distância,Arma"
  },
  {
    "id": "Escopetadecanoserrado",
    "name": "Escopeta de cano serrado",
    "desc": "",
    "img": "imagens/Armas/Armas/Escopetadecanoserrado.png",
    "damageType": "3d8",
    "elementalDamage": "–",
    "damageDice": "Balístico",
    "range": "3m",
    "critical": "(17) - Dano(x2)",
    "equipBonus": "1 tiro com desvantagem de longe ou 1 tiro com vantagem de perto",
    "TipoItem": "Distância,Arma"
  },
  {
    "id": "SteyrAUG",
    "name": "Steyr AUG",
    "desc": "",
    "img": "imagens/Armas/Armas/SteyrAUG.png",
    "damageType": "3d8",
    "elementalDamage": "–",
    "damageDice": "Balístico",
    "range": "24m",
    "critical": "(20) - Dano(x2)",
    "equipBonus": "1 tiro normal, 3 tiros com desvantagem",
    "TipoItem": "Distância,Arma"
  },
  {
    "id": "Uzi",
    "name": "Uzi",
    "desc": "",
    "img": "imagens/Armas/Armas/Uzi.png",
    "damageType": "3d6",
    "elementalDamage": "–",
    "damageDice": "Balístico",
    "range": "12m",
    "critical": "(20) - Dano(x2)",
    "equipBonus": "5 tiros com desvantagem",
    "TipoItem": "Distância,Arma"
  },
  {
    "id": "Winchester94",
    "name": "Winchester 94",
    "desc": "",
    "img": "imagens/Armas/Armas/Winchester94.png",
    "damageType": "3d10",
    "elementalDamage": "–",
    "damageDice": "Balístico",
    "range": "30m",
    "critical": "(20) - Dano(x2)",
    "equipBonus": "1 tiro normal, 2 tiros com desvantagem",
    "TipoItem": "Distância,Arma"
  },
  {
    "id": "M-60",
    "name": "M-60",
    "desc": "",
    "img": "imagens/Armas/Armas/M-60.png",
    "damageType": "3d8",
    "elementalDamage": "–",
    "damageDice": "Balístico",
    "range": "30m",
    "critical": "(20) - Dano(x2)",
    "equipBonus": "4 tiros com desvantagem",
    "TipoItem": "Lendário,Distância,Arma"
  },
  {
    "id": "M2HB",
    "name": "M2HB",
    "desc": "",
    "img": "imagens/Armas/Armas/M2HB.png",
    "damageType": "3d12",
    "elementalDamage": "–",
    "damageDice": "Balístico",
    "range": "33m",
    "critical": "(20) - Dano(x1)",
    "equipBonus": "6 tiros com desvantagem",
    "TipoItem": "Lendário,Distância,Arma"
  },
  {
    "id": "M72A3LAW",
    "name": "M72A3 LAW",
    "desc": "",
    "img": "imagens/Armas/Armas/M72A3LAW.png",
    "damageType": "10d6",
    "elementalDamage": "–",
    "damageDice": "Fogo",
    "range": "45m",
    "critical": "(20) - Dano(x1)",
    "equipBonus": "1 tiro normal",
    "TipoItem": "Lendário,Distância,Arma"
  },
  {
    "id": "M79",
    "name": "M79",
    "desc": "",
    "img": "imagens/Armas/Armas/M79.png",
    "damageType": "12d4",
    "elementalDamage": "–",
    "damageDice": "Ácido",
    "range": "21m",
    "critical": "(20) - Dano(x1)",
    "equipBonus": "1 tiro normal",
    "TipoItem": "Lendário,Distância,Arma"
  },
  {
    "id": "ArcoComposto",
    "name": "Arco Composto",
    "desc": "",
    "img": "imagens/Armas/Armas/ArcoComposto.png",
    "damageType": "1d6 +3d4 + dano da Flacha",
    "elementalDamage": "–",
    "damageDice": "Perfurante",
    "range": "12m",
    "critical": "(20) - Dano(x3)",
    "equipBonus": "1 flecha por turno",
    "TipoItem": "Lendário,Distância,Medieval"
  },
  {
    "id": "Besta",
    "name": "Besta",
    "desc": "",
    "img": "imagens/Armas/Armas/Besta.png",
    "damageType": "4d4+ dano do virote",
    "elementalDamage": "–",
    "damageDice": "Perfurante",
    "range": "12m",
    "critical": "(19) - Dano(x2)",
    "equipBonus": "1 Virote por turno",
    "TipoItem": "Distância,Medieval"
  },
  {
    "id": "Lança-chamas",
    "name": "Lança-chamas",
    "desc": "",
    "img": "imagens/Armas/Armas/Lança-chamas.png",
    "damageType": "3d6+3d4",
    "elementalDamage": "–",
    "damageDice": "Fogo",
    "range": "2m",
    "critical": "(20) - Dano(x2)",
    "equipBonus": "1 uso por turno",
    "TipoItem": "Distância,Arma"
  },
  {
    "id": "SpraydePimenta",
    "name": "Spray de Pimenta",
    "desc": "",
    "img": "imagens/Armas/Armas/SpraydePimenta.png",
    "damageType": "2d4",
    "elementalDamage": "–",
    "damageDice": "Ácido",
    "range": "1.5m",
    "critical": "(10) - Dano(x3)",
    "equipBonus": "1 uso por turno",
    "TipoItem": "Lendário,Distância,Arma"
  },
  {
    "id": "Shuriken",
    "name": "Shuriken",
    "desc": "",
    "img": "imagens/Armas/Armas/Shuriken.png",
    "damageType": "3d6+3d4",
    "elementalDamage": "–",
    "damageDice": "Perfurante",
    "range": "3m",
    "critical": "(20) - Dano(x2)",
    "equipBonus": "2 por turno",
    "TipoItem": "Distância,Clássica"
  },
  {
    "id": "Taser",
    "name": "Taser",
    "desc": "",
    "img": "imagens/Armas/Armas/Taser.png",
    "damageType": "2d12",
    "elementalDamage": "–",
    "damageDice": "Laser",
    "range": "2.5m",
    "critical": "(19) - Dano(x3)",
    "equipBonus": "1 tiro normal",
    "TipoItem": "Lendário,Distância,Arma"
  },
  {
    "id": "Chicote",
    "name": "Chicote",
    "desc": "",
    "img": "imagens/Armas/Armas/Chicote.png",
    "damageType": "4d4+1d6",
    "elementalDamage": "–",
    "damageDice": "Cortante",
    "range": "4.5m",
    "critical": "(20) - Dano(x4)",
    "equipBonus": "–",
    "TipoItem": "Distância,Medieval"
  },
  {
    "id": "CantaBalas",
    "name": "CantaBalas",
    "desc": "",
    "img": "imagens/Armas/Armas/CantaBalas.png",
    "damageType": "3d6+3d4",
    "elementalDamage": "–",
    "damageDice": "Balístico",
    "range": "12m",
    "critical": "(19) - Dano(x3)",
    "equipBonus": "1 tiro normal, 2 tiros com desvantagem",
    "TipoItem": "Distância,Arma"
  }

  
  
  
  //em andamento
];



const resistenciaColors = {
    "Gelo": { background: "#B3E5FC", color: "#004D40" }, // Azul claro com tom frio
  "Ácido": { background: "#A5D6A7", color: "#1B5E20" }, // Verde ácido
  "Fogo": { background: "#FF7043", color: "#BF360C" }, // Laranja vibrante para fogo
  "Água": { background: "#81D4FA", color: "#01579B" }, // Azul aquático
  "Eletricidade": { background: "#FFD600", color: "#F57F17" }, // Amarelo eletrizante
  "Tempestade": { background: "#7E57C2", color: "#311B92" }, // Roxo tempestuoso
  "Sangue": { background: "#D50000", color: "#FFFFFF" }, // Vermelho sangue
  "Luz": { background: "#FFF59D", color: "#37474F" }, // Amarelo claro, tom suave
  "Maldição": { background: "#512DA8", color: "#CE93D8" }, // Roxo sombrio
  "Sagrado": { background: "#FFEB3B", color: "#5D4037" }, // Amarelo dourado
  "Laser": { background: "#00E5FF", color: "#004D40" }, // Azul neon para laser
  "Alma": { background: "#CE93D8", color: "#4A148C" }, // Roxo etéreo
  "Escuridão": { background: "#263238", color: "#B0BEC5" }, // Preto acinzentado
  "Plasma": { background: "#E1F5FE", color: "#0277BD" }, // Azul claro e intenso
  "Tremor": { background: "#8D6E63", color: "#3E2723" }, // Marrom rochoso
  "Aura": { background: "#FFF8E1", color: "#4E342E" }, // Amarelo suave e radiante
  "Psicológico": { background: "#F48FB1", color: "#880E4F" }, // Rosa profundo
  "Mental": { background: "#B0BEC5", color: "#263238" }, // Cinza azulado, neutro
  "Distorção": { background: "#A1887F", color: "#D7CCC8" }, // Cinza com tom distorcido
  "Névoa": { background: "#CFD8DC", color: "#455A64" }, // Cinza nebuloso
  "Sono": { background: "#D1C4E9", color: "#4A148C" }, // Lilás suave
  "Balístico": { background: "#BDBDBD", color: "#424242" }, // Cinza chumbo
  "Perfurante": { background: "#90A4AE", color: "#263238" }, // Cinza azulado e sólido
  "Cortante": { background: "#37474F", color: "#FFFFFF" }, // Cinza aço
  "Esmagante": { background: "#ECEFF1", color: "#78909C" }, // Cinza claro e concreto
  "Cinzas": { background: "#B0BEC5", color: "#455A64" }, // Cinza suave, quase esfumaçado
  "Morte": { background: "#424242", color: "#D32F2F" }, // Cinza escuro com vermelho
  "Eclipse": { background: "#212121", color: "#FFA000" }, // Cinza profundo com toque de dourado
  "N/A": { background: "#f0f0f0", color: "#333333" } // Padrão para sem resistência
};
const itemGrid = document.getElementById('itemGrid');
const itemFilter = document.getElementById('itemFilter');
const descPopup = document.getElementById('itemDescPopup');
const equipBtn = document.getElementById('equipItem');
const equippedSlot = document.getElementById('equippedItemSlot');



function createItemCard(item) {
  const card = document.createElement('div');
  card.className = 'item-card';

  // Container para as tags
  const tagsContainer = document.createElement('div');
  tagsContainer.style.display = "flex";
  tagsContainer.style.flexWrap = "wrap";
  tagsContainer.style.justifyContent = "center";
  tagsContainer.style.gap = "4px";
  tagsContainer.style.marginBottom = "6px";

  const tipos = (item.TipoItem || "Clássica").split(',');
  tipos.forEach(tipo => {
    const trimmedTipo = tipo.trim();
    const tag = document.createElement('div');

    // Traduções ou renomeações
    let label = trimmedTipo;
    if (label.toLowerCase() === "gun") label = "Arma";
    if (label.toLowerCase() === "melee") label = "Corpo a Corpo";

    tag.textContent = label;
    tag.style.fontWeight = "bold";
    tag.style.borderRadius = "6px";
    tag.style.padding = "2px 6px";
    tag.style.fontSize = "0.8em";
    tag.style.width = "fit-content";
    tag.style.display = "inline-block";

    // Cores por tipo
switch (label) {
  case "Lendário":
    tag.classList.add("prismatic"); // Gradiente animado
    tag.style.color = "#fff";
    break;
  case "Normal":
    tag.style.backgroundColor = "#d3d3d3"; // cinza claro
    tag.style.color = "#000";
    break;
  case "Distância":
    tag.style.backgroundColor = "#5eb2ff"; // azul claro
    tag.style.color = "#000";
    break;
  case "Corpo a Corpo":
    tag.style.backgroundColor = "#DC143C"; // vermelho carmesim
    tag.style.color = "#fff";
    break;
  case "Arma":
    tag.style.backgroundColor = "#606060"; // cinza aço
    tag.style.color = "#fff";
    break;
  case "Clássica":
    tag.style.backgroundColor = "#cd7f32"; // bronze
    tag.style.color = "#fff";
    break;
  case "Medieval":
    tag.style.backgroundColor = "#8B4513"; // marrom escuro
    tag.style.color = "#fff";
    break;
  default:
    tag.style.backgroundColor = "#444"; // grafite
    tag.style.color = "#fff";
    break;
}



    tagsContainer.appendChild(tag);
  });

  card.appendChild(tagsContainer);

  // (Depois disso, você adiciona imagem, nome, descrição etc. como antes)
  

  const img = document.createElement('img');
img.src = item.img;
img.loading = "lazy"; // Ativa o lazy loading

  card.appendChild(img);

  const title = document.createElement('h3');
  title.textContent = item.name;
  card.appendChild(title);

  const damageDice = document.createElement('div');
  const colors = resistenciaColors[item.damageDice] || resistenciaColors["N/A"];
  damageDice.textContent = item.damageDice;
  damageDice.style.backgroundColor = colors.background;
  damageDice.style.color = colors.color;
  damageDice.style.padding = "4px";
  damageDice.style.borderRadius = "8px";
  damageDice.style.marginTop = "5px";
  damageDice.style.fontSize = "0.9em";
  card.appendChild(damageDice);

  // Adiciona o evento de clique
  card.addEventListener('click', () => showItemDesc(item));

  return card;
}


// Preenche a grid de itens
items.forEach(item => {
  itemGrid.appendChild(createItemCard(item));
});

function showItemDesc(item) {
  console.log("Exibindo o popup de descrição");

  document.getElementById('itemDescTitle').textContent = item.name;
  document.getElementById('itemDescText').textContent = item.desc;
  document.getElementById('itemDescImage').src = item.img;

  const damageTypeElem = document.getElementById('itemDescDamageType');
  const elementalDamageElem = document.getElementById('itemDescElementalDamage');
  const damageDiceElem = document.getElementById('itemDescDamageDice');
  const rangeElem = document.getElementById('itemDescRange');
  const criticalElem = document.getElementById('itemDescCritical');
  const equipBonusElem = document.getElementById('itemDescEquipBonus');
  
  damageTypeElem.textContent = `Dano Físico: ${item.damageType || 'N/A'}`;
  elementalDamageElem.textContent = `Dano Elemental: ${item.elementalDamage || 'N/A'}`;
  damageDiceElem.textContent = `Tipo de Dano: ${item.damageDice || 'N/A'}`;
  rangeElem.textContent = `Alcance: ${item.range || 'N/A'}`;
  criticalElem.textContent = `Crítico: ${item.critical || 'N/A'}`;
  equipBonusElem.textContent = `Bônus ao Equipar: ${item.equipBonus || 'Nenhum'}`;

  equipBtn.textContent = item.id === equippedItemId ? "Remover" : "Equipar";

  equipBtn.onclick = (event) => {
    event.preventDefault();
    event.stopPropagation();

    if (equippedItemId === item.id) {
      equippedItemId = null;
      equippedSlot.innerHTML = "";
    } else {
      equippedItemId = item.id;
      equippedSlot.innerHTML = `<img src="${item.img}" style="width: 50px;"><div>${item.name}</div>`;
    }
    descPopup.classList.add('hidden');
  };

  descPopup.classList.remove('hidden');
}

// Funções de carregar o item salvo e abrir/fechar popups continuam iguais


// Função para carregar o item equipado do armazenamento
function loadEquippedItem() {
  const savedCharacter = JSON.parse(localStorage.getItem('savedCharacter'));
  if (savedCharacter && savedCharacter.equippedItemId) {
    equippedItemId = savedCharacter.equippedItemId;

    // Procura o item no array e exibe no slot de item equipado
    const equippedItem = items.find(item => item.id === equippedItemId);
    if (equippedItem) {
      // Certifique-se de que o caminho da imagem está correto
      equippedSlot.innerHTML = `<img src="${equippedItem.img}" style="width: 50px;"><div>${equippedItem.name}</div>`;
    } else {
      // Caso o item não seja encontrado, você pode exibir uma mensagem de erro
      console.error('Item equipado não encontrado');
    }
  } else {
    console.log('Nenhum item equipado encontrado no localStorage');
  }
}

// Carregar o personagem ao abrir a página
document.addEventListener('DOMContentLoaded', () => {
  loadEquippedItem();
});


// Extrai todos os tipos únicos
const tiposUnicos = new Set();
items.forEach(item => {
  (item.TipoItem || "Clássica").split(',').forEach(t => tiposUnicos.add(t.trim()));
});

// Preenche o filtro
tiposUnicos.forEach(tipo => {
  const option = document.createElement('option');
  option.value = tipo;
  option.textContent = tipo;
  itemFilter.appendChild(option);
});

// Função de renderização com filtro
function renderItems(filter = "Todos") {
  itemGrid.innerHTML = ''; // limpa grid

  items.forEach(item => {
    const tipos = (item.TipoItem || "Clássica").split(',').map(t => t.trim());
    if (filter === "Todos" || tipos.includes(filter)) {
      itemGrid.appendChild(createItemCard(item));
    }
  });
}

// Evento ao mudar o filtro
itemFilter.addEventListener('change', () => {
  renderItems(itemFilter.value);
});

// Renderiza inicialmente
renderItems();


// Mostrar/esconder os popups
// Para abrir o popup de itens
document.getElementById('openItemPopup').addEventListener('click', (event) => {
  event.preventDefault();
  event.stopPropagation();
  
  document.getElementById('itemSelectPopup').classList.remove('hidden');
});

// Para fechar o popup de seleção de itens
document.getElementById('closeItemPopup').addEventListener('click', (event) => {
  event.preventDefault();
  event.stopPropagation();
  
  document.getElementById('itemSelectPopup').classList.add('hidden');
});

// Para fechar o popup de descrição de itens
document.getElementById('closeDescPopup').addEventListener('click', (event) => {
  event.preventDefault();
  event.stopPropagation();
  
  descPopup.classList.add('hidden');
});


// Função para calcular os atributos base
function calculateBaseAttributes(race, past) {
  let attributes = {
    vida: raceData[race].vidaBase,
    sanidade: raceData[race].sanidadeBase,
    especial: raceData[race].especialBase,
    armadura: raceData[race].armaduraBase,
    movimento: raceData[race].movimentoBase
  };

  if (pastData[past]) {
    attributes.vida += pastData[past].vidaPorNivel;
    attributes.sanidade += pastData[past].sanidadePorNivel;
    attributes.armadura += pastData[past].armaduraPorNivel;
  }

  return attributes;
}

// Função para calcular os atributos atuais com base no nível
function calculateCurrentAttributes() {
  const race = document.getElementById('race').value;
  const past = document.getElementById('past').value;
  const forLevel = parseInt(document.getElementById('for').value, 10) - 8; // Ajusta para o valor inicial de 8
  const desLevel = parseInt(document.getElementById('des').value, 10) - 8;
  const conLevel = parseInt(document.getElementById('con').value, 10) - 8;
  const intLevel = parseInt(document.getElementById('int').value, 10) - 8;
  const sabLevel = parseInt(document.getElementById('sab').value, 10) - 8;
  const carLevel = parseInt(document.getElementById('car').value, 10) - 8;
  const level = calculateLevel(); // Calcula o nível

  let attributes = {
    vida: raceData[race].vidaBase,
    sanidade: raceData[race].sanidadeBase,
    especial: raceData[race].especialBase,
    armadura: raceData[race].armaduraBase,
    movimento: raceData[race].movimentoBase,
    resistencia: '' // Adicionar campo de resistência
  };

  if (pastData[past]) {
    attributes.vida += pastData[past].vidaPorNivel;
    attributes.sanidade += pastData[past].sanidadePorNivel;
    attributes.armadura += pastData[past].armaduraPorNivel;
    attributes.movimento += pastData[past].movimento_pass; // Adicionando movimento do passado

    // Atribuir resistência do passado aos atributos
    attributes.resistencia = pastData[past].resistencia;
    attributes.bonusRace = raceData[race].bonusRace;
    attributes.bonusPass = pastData[past].bonusPass;
    attributes.PassivaDisponivel = raceData[race].PassivaDisponivel;
    attributes.MagiaDisponivel = raceData[race].MagiaDisponivel;
    attributes.TalentoDisponivel = raceData[race].TalentoDisponivel;

    attributes.armadura += Math.floor(level / 3);

  }

  attributes.vida += (forLevel * raceData[race].vidaPorNivel.for) + (desLevel * raceData[race].vidaPorNivel.des) + (conLevel * raceData[race].vidaPorNivel.con) -110;
  attributes.sanidade += (intLevel * raceData[race].sanidadePorNivel.int) + (sabLevel * raceData[race].sanidadePorNivel.sab) + (carLevel * raceData[race].sanidadePorNivel.car)-30;
  attributes.especial += level * raceData[race].especialPorNivel + 15; 
  let valorSubtrair = 0; // Inicializa o valor de subtração
  function atualizarValorSubtrair() {
    valorSubtrair = parseInt(document.getElementById('valor-subtrair').value) || 0;
}


  return attributes;
}


// LEMBRAR

// Obtendo os elementos do botão e popup
const abrirBtn = document.getElementById("abrir-status-rpg");
const fecharBtn = document.getElementById("fechar-status-rpg");
const popup = document.getElementById("status-rpg-popup");
const app = document.getElementById("status-rpg-app");

// Abrir o popup
abrirBtn.addEventListener("click", () => {
  popup.classList.add("ativo");
});

// Fechar o popup
fecharBtn.addEventListener("click", () => {
  popup.classList.remove("ativo");
});

// Definindo os estados e temporários
const estados = ["vida", "sanidade", "especial"];
const temporarios = { vida: 0, sanidade: 0, especial: 0 };

// Função para criar as barras de status
const criarBarra = (estado) => {
  const container = document.createElement("div");
  container.className = "status-rpg-container";

  container.innerHTML = `
    <div class="status-rpg-title">${estado.toUpperCase()}</div>

    <div class="status-rpg-input-group">
      <label>Total:</label>
      <input type="number" id="${estado}-total" placeholder="Total" min="1">
      <label>Atual:</label>
      <input type="number" id="${estado}-atual" placeholder="Atual" min="0">
      <label>Temp:</label>
      <input type="number" id="${estado}-temp" placeholder="Temp" min="0">
      <button onclick="atualizar('${estado}')">Confirmar</button>
    </div>

    <div class="status-rpg-bar-wrapper">
      <div class="status-rpg-bar">
        <div id="${estado}-temp-bar" class="status-rpg-temp"></div>
        <div id="${estado}-barra" class="status-rpg-fill ${estado}">0% (0 / 0)</div>
      </div>
    </div>

    <div class="status-rpg-input-group">
      <label>Dano:</label>
      <input type="number" id="${estado}-dano" placeholder="Dano" min="0">
      <button onclick="aplicarDano('${estado}')">Aplicar Dano</button>
    </div>

    <div class="status-rpg-input-group">
      <label>Cura:</label>
      <input type="number" id="${estado}-cura" placeholder="Cura" min="0">
      <button onclick="aplicarCura('${estado}')">Aplicar Cura</button>
    </div>
  `;

  return container;
};

// Função para atualizar as barras de status
const atualizar = (estado) => {
  const total = parseInt(document.getElementById(`${estado}-total`).value);
  let atual = parseInt(document.getElementById(`${estado}-atual`).value);
  let temp = parseInt(document.getElementById(`${estado}-temp`).value) || 0;

  // Garante que o valor atual não ultrapasse o total e que não seja negativo
  atual = Math.min(atual, total);
  atual = Math.max(atual, 0);
  temporarios[estado] = temp;

  // Atualiza a barra de status
  atualizarBarra(estado, atual, total, temp);
};

// Função para aplicar dano
const aplicarDano = (estado) => {
  let dano = parseInt(document.getElementById(`${estado}-dano`).value) || 0;
  const total = parseInt(document.getElementById(`${estado}-total`).value);
  let atual = parseInt(document.getElementById(`${estado}-atual`).value);
  let temp = temporarios[estado];

  // Aplica dano no valor temporário primeiro
  if (dano <= temp) {
    temp -= dano;
    dano = 0;
  } else {
    dano -= temp;
    temp = 0;
  }

  // Aplica o dano restante no valor atual
  atual = Math.max(atual - dano, 0);
  temporarios[estado] = temp;

  // Atualiza a barra de status
  atualizarBarra(estado, atual, total, temp);
};

// Função para aplicar cura
const aplicarCura = (estado) => {
  const cura = parseInt(document.getElementById(`${estado}-cura`).value) || 0;
  const total = parseInt(document.getElementById(`${estado}-total`).value);
  let atual = parseInt(document.getElementById(`${estado}-atual`).value);

  // Aplica a cura sem ultrapassar o total
  atual = Math.min(atual + cura, total);

  // Atualiza a barra de status
  atualizarBarra(estado, atual, total, temporarios[estado]);
};

// Função para atualizar a barra de status
// Função para atualizar a barra de status
const atualizarBarra = (estado, atual, total, temp) => {
  // Atualiza o valor da barra com base no percentual atual
  const porcentagem = total > 0 ? Math.floor((atual / total) * 100) : 0;
  const barra = document.getElementById(`${estado}-barra`);
  const barraTemp = document.getElementById(`${estado}-temp-bar`);

  // Atualiza a largura do preenchimento
  barra.style.width = `${porcentagem}%`;
  barra.textContent = `${porcentagem}% (${atual} / ${total})`;

  // Atualiza a cor do preenchimento com base no estado
  if (estado === "vida") {
    barra.classList.add("status-rpg-vida");
    barra.classList.remove("status-rpg-sanidade", "status-rpg-especial");
  } else if (estado === "sanidade") {
    barra.classList.add("status-rpg-sanidade");
    barra.classList.remove("status-rpg-vida", "status-rpg-especial");
  } else if (estado === "especial") {
    barra.classList.add("status-rpg-especial");
    barra.classList.remove("status-rpg-vida", "status-rpg-sanidade");
  }

  // Atualiza a barra temporária
  const tempPorcentagem = total > 0 ? Math.floor((temp / total) * 100) : 0;
  barraTemp.style.width = `${tempPorcentagem}%`;

  // Atualiza os campos de entrada
  document.getElementById(`${estado}-atual`).value = atual;
  document.getElementById(`${estado}-temp`).value = temp;
};


// Adiciona as barras ao app dentro do popup
estados.forEach(e => app.appendChild(criarBarra(e)));


//LEMBRAR

// Function to calculate total level based on attribute levels
function calculateLevel() {
  const forLevel = parseInt(document.getElementById('for').value, 10);
  const desLevel = parseInt(document.getElementById('des').value, 10);
  const conLevel = parseInt(document.getElementById('con').value, 10);
  const intLevel = parseInt(document.getElementById('int').value, 10);
  const sabLevel = parseInt(document.getElementById('sab').value, 10);
  const carLevel = parseInt(document.getElementById('car').value, 10);

  // Desconta os 8 pontos base de cada atributo 
  return forLevel + desLevel + conLevel + intLevel + sabLevel + carLevel - (12 * 7);
}

// Function to update bonus values based on attribute level
function updateBonus(attributeId) {
  const attributeLevel = parseInt(document.getElementById(attributeId).value, 10);

  let bonusTeste;
  if (attributeLevel < 9) {
    bonusTeste = -2;
  } else if (attributeLevel < 10) {
    bonusTeste = -1;
  } else if (attributeLevel === 10) {
    bonusTeste = 0;
  } else {
    bonusTeste = Math.floor((attributeLevel - 8) / 3); // Calcula o bônus de teste
  }
  const bonusDano = Math.floor((attributeLevel - 8) / 5); // Calcula o bônus de dano

  document.getElementById(`${attributeId}-bonus-test`).textContent = bonusTeste;
  document.getElementById(`${attributeId}-bonus-damage`).textContent = bonusDano;
}

// Event listeners for race, past, and level changes
document.getElementById('race').addEventListener('change', updateStats);
document.getElementById('past').addEventListener('change', updateStats);
document.getElementById('for').addEventListener('change', updateStats);
document.getElementById('des').addEventListener('change', updateStats);
document.getElementById('con').addEventListener('change', updateStats);
document.getElementById('int').addEventListener('change', updateStats);
document.getElementById('sab').addEventListener('change', updateStats);
document.getElementById('car').addEventListener('change', updateStats);

function updateStats() {
  const currentAttributes = calculateCurrentAttributes();
  const level = calculateLevel();

  // Obter os valores por nível do passado
  const vidaPorNivel = pastData[document.getElementById('past').value]?.vidaPorNivel || 0;
  const sanidadePorNivel = pastData[document.getElementById('past').value]?.sanidadePorNivel || 0;

  // Calcular a vida e sanidade baseadas no nível
  const vidaTotal = currentAttributes.vida + (level * vidaPorNivel);
  const sanidadeTotal = currentAttributes.sanidade + (level * sanidadePorNivel);

  // Atualizar as visualizações com os valores corrigidos
  document.getElementById('life-view').textContent = vidaTotal;
  document.getElementById('sanity-view').textContent = sanidadeTotal;
  document.getElementById('special-view').textContent = currentAttributes.especial;
  document.getElementById('armor-view').textContent = currentAttributes.armadura;
  document.getElementById('movement-view').textContent = currentAttributes.movimento;
  document.getElementById('level-view').textContent = level;

  // Exibir a resistência do passado
  const resistenciaElement = document.querySelector('.resistencia-index');
  if (currentAttributes.resistencia) {
    resistenciaElement.textContent = `Resistência: ${currentAttributes.resistencia}`;
    
    // Verifica se a resistência existe no objeto resistenciaColors, caso contrário, aplica 'N/A'
    const resistenciaColor = resistenciaColors[currentAttributes.resistencia] || resistenciaColors["N/A"];
    
    // Altera a cor de fundo e cor do texto com base na resistência
    resistenciaElement.style.backgroundColor = resistenciaColor.background;
    resistenciaElement.style.color = resistenciaColor.color;
  
  } else {
    resistenciaElement.textContent = 'Resistência: N/A';
    
    // Aplica as cores padrão para N/A
    const resistenciaColor = resistenciaColors["N/A"];
    resistenciaElement.style.backgroundColor = resistenciaColor.background;
    resistenciaElement.style.color = resistenciaColor.color;
  }
  
  const bonusRaceElement = document.querySelector('.Bonus-race-tex');
  if (currentAttributes.bonusRace) {
    bonusRaceElement.textContent = `Bônus de Raça: ${currentAttributes.bonusRace}`;
  } else {
    bonusRaceElement.textContent = 'Bônus de Raça: N/A';
  }
  const PassivaDisponivelElement = document.querySelector('.Bonus-passiva-tex');
  if (currentAttributes.bonusRace) {
    PassivaDisponivelElement.textContent = `Passiva: ${currentAttributes.PassivaDisponivel}`;
  } else {
    PassivaDisponivelElement.textContent = 'Passiva: N/A';
  }
  const MagiaDisponivelElement = document.querySelector('.Bonus-magia-tex');
  if (currentAttributes.bonusRace) {
    MagiaDisponivelElement.textContent = `Magia: ${currentAttributes.MagiaDisponivel}`;
  } else {
    MagiaDisponivelElement.textContent = 'Magia: N/A';
  }
  const TalentoDisponivelElement = document.querySelector('.Bonus-talento-tex');
  if (currentAttributes.bonusRace) {
    TalentoDisponivelElement.textContent = `Talento: ${currentAttributes.TalentoDisponivel}`;
  } else {
    TalentoDisponivelElement.textContent = 'Talento: N/A';
  }
  

 

  function toggleSection() {
    const sectionContent = document.getElementById('expandableSection');
    sectionContent.style.display = sectionContent.style.display === 'none' ? 'block' : 'none';
}

// Função para expandir e recolher as seções de bônus individuais
function toggleBonusSection(bonusNumber) {
    const bonusContent = document.getElementById(`bonus${bonusNumber}-desc`);
    bonusContent.style.display = bonusContent.style.display === 'none' ? 'block' : 'none';
}

// Elemento para Bônus de Passado
// Suponhamos que 'currentAttributes' seja um objeto onde as informações de "passado" são armazenadas

// Atualizando o título do bônus de passado
const bonusPassElement = document.querySelector('.Bonus-pass-tex');
if (currentAttributes.bonusPass) {
  bonusPassElement.textContent = `Bônus de Passado: ${currentAttributes.bonusPass}`;
} else {
  bonusPassElement.textContent = 'Bônus de Passado: N/A';
}

// Atualizando as especializações (Bônus 1, 2 e 3)
const bonustitulo_1Element = document.querySelector('#bonustitulo_1');
if (currentAttributes.bonustitulo_1) {
  bonustitulo_1Element.textContent = currentAttributes.bonustitulo_1;
} else {
  bonustitulo_1Element.textContent = 'Título da Especialização 1';
}

const bonustexto_1Element = document.querySelector('#bonustexto_1');
if (currentAttributes.bonusTexto_1) {
  bonustexto_1Element.textContent = currentAttributes.bonusTexto_1;
} else {
  bonustexto_1Element.textContent = 'Descrição do Bônus 1';
}

const bonustitulo_2Element = document.querySelector('#bonustitulo_2');
if (currentAttributes.bonustitulo_2) {
  bonustitulo_2Element.textContent = currentAttributes.bonustitulo_2;
} else {
  bonustitulo_2Element.textContent = 'Título da Especialização 2';
}

const bonustexto_2Element = document.querySelector('#bonustexto_2');
if (currentAttributes.bonusTexto_2) {
  bonustexto_2Element.textContent = currentAttributes.bonusTexto_2;
} else {
  bonustexto_2Element.textContent = 'Descrição do Bônus 2';
}

const bonustitulo_3Element = document.querySelector('#bonustitulo_3');
if (currentAttributes.bonustitulo_3) {
  bonustitulo_3Element.textContent = currentAttributes.bonustitulo_3;
} else {
  bonustitulo_3Element.textContent = 'Título da Especialização 3';
}

const bonustexto_3Element = document.querySelector('#bonustexto_3');
if (currentAttributes.bonusTexto_3) {
  bonustexto_3Element.textContent = currentAttributes.bonusTexto_3;
} else {
  bonustexto_3Element.textContent = 'Descrição do Bônus 3';
}




  // Atualizar as barras de progresso
  document.getElementById('life-fill').style.width = `${(vidaTotal / 100) * 100}%`;
  document.getElementById('sanity-fill').style.width = `${(sanidadeTotal / 100) * 100}%`;
  document.getElementById('special-fill').style.width = `${(currentAttributes.especial / 100) * 100}%`;

  // Atualizar os bônus (exemplo: Fortitude)
  updateBonus("for");
  updateBonus("des");
  updateBonus("con");
  updateBonus("int");
  updateBonus("sab");
  updateBonus("car");

  // Atualizar imagens de raça e passado
  updateRaceImage();
  updatePastImage();
}



// Chama a função de atualização passando o nome do personagem


function updateRaceImage() {
  const race = document.getElementById('race').value;
  const raceImage = document.getElementById('race-image');

  if (race === "sua raça") {
    raceImage.src = "imagens/raças/sua raça.png";
  }else if (race === "Elfo") {
    raceImage.src = "imagens/raças/elfo.gif";
  } else if (race === "Humano") {
    raceImage.src = "imagens/raças/humano.gif";
  } else if (race === "Krahzhik") {
    raceImage.src = "imagens/raças/Krahzhik.gif";
  } else if (race === "Anão") {
    raceImage.src = "imagens/raças/Anão.gif";
  } else if (race === "Gigante") {
    raceImage.src = "imagens/raças/Gigante.gif";
  } else if (race === "Skywalker") {
    raceImage.src = "imagens/raças/Skywalkers.gif";
  } else if (race === "Elfo da profundeza") {
    raceImage.src = "imagens/raças/Elfo da profundeza.gif";
  } else if (race === "Tritão") {
    raceImage.src = "imagens/raças/Tritão.gif";
  } else if (race === "Shrivvel – Pele Palida") {
    raceImage.src = "imagens/raças/Shrivvel – Pele Palida.gif";
  } else if (race === "Gronklech – Durock") {
    raceImage.src = "imagens/raças/Durock.gif";
  } else if (race === "Umbrowalker – Shlurp") {
    raceImage.src = "imagens/raças/Umbrowalker – Shlurp.gif";
  } else if (race === "Gornis - Temp") {
    raceImage.src = "imagens/raças/Gornis - Temp.png";
  } else {
    raceImage.src = "sua raça"; // Clear the image if no race is selected
  }
}

// Verificando se os valores são "Bônus de Raça: -" ou "Magia: -" e adicionando a classe "hidden"
const bonusRace = document.querySelector("#bonus-race"); // Substitua pelo ID ou classe do elemento que exibe o "Bônus de Raça"
const magia = document.querySelector("#magia"); // Substitua pelo ID ou classe do elemento que exibe "Magia"



function updatePastImage() {
  const past = document.getElementById('past').value;
  const pastImage = document.getElementById('past-image');

  if (past === "Aldeão") { pastImage.src = "imagens/pass/aldeao.gif";
  } else if (past === "Arauto") {pastImage.src = "imagens/pass/Arauto.gif";
  } else if (past === "Assassino") { pastImage.src = "imagens/pass/assassino.gif";
  } else if (past === "Assombração") { pastImage.src = "imagens/pass/assombração.gif";
  } else if (past === "Arqueiro") { pastImage.src = "imagens/pass/arqueiro.gif";
  } else if (past === "Atirador") { pastImage.src = "imagens/pass/Atirador.gif"; 
  }
  else if (past === "Barão") { pastImage.src = "imagens/pass/Barão.gif"; 
  }
  else if (past === "Bárbaro") { pastImage.src = "imagens/pass/Bárbaro.gif"; 
  }
  else if (past === "Bardo") { pastImage.src = "imagens/pass/Bardo.gif"; 
  }
  else if (past === "Bruxo") { pastImage.src = "imagens/pass/Bruxo.gif"; 
  }
  else if (past === "Carpinteiro") { pastImage.src = "imagens/pass/Carpinteiro.gif"; 
  }
  else if (past === "Catador") { pastImage.src = "imagens/pass/Catador.gif"; 
  }
  else if (past === "Colosso") { pastImage.src = "imagens/pass/Colosso.gif"; 
  }
  else if (past === "Conjurador") { pastImage.src = "imagens/pass/Conjurador.gif"; 
  }
  else if (past === "Costeiro") { pastImage.src = "imagens/pass/Costeiro.gif"; 
  }
  else if (past === "Criatura") { pastImage.src = "imagens/pass/Criatura.gif"; 
  }
  else if (past === "Duelista") { pastImage.src = "imagens/pass/Duelista.gif"; 
  }
  else if (past === "Escudeiro") { pastImage.src = "imagens/pass/Escudeiro.gif"; 
  }
  else if (past === "Especialista") { pastImage.src = "imagens/pass/Especialista.png"; 
  }
  else if (past === "Espectro") { pastImage.src = "imagens/pass/Espectro.png"; 
  }
  else if (past === "Espiritualista") { pastImage.src = "imagens/pass/Espiritualista.gif"; 
  }
  else if (past === "Fera") { pastImage.src = "imagens/pass/fera.gif"; 
  }
  else if (past === "Ferreiro") { pastImage.src = "imagens/pass/Ferreiro.gif"; 
  }
  else if (past === "Forasteiro") { pastImage.src = "imagens/pass/Forasteiro.gif"; 
  }
  else if (past === "Glacinata") { pastImage.src = "imagens/pass/Glacinata.gif"; 
  }
  else if (past === "Guerreiro") { pastImage.src = "imagens/pass/Guerreiro.gif"; 
  }
  else if (past === "Hemomantico") { pastImage.src = "imagens/pass/Hemomantico.gif"; 
  }
  else if (past === "Imitador") { pastImage.src = "imagens/pass/Imitador.gif"; 
  }
  else if (past === "Juíz") { pastImage.src = "imagens/pass/Juiz.png"; 
  }
  else if (past === "Lacaio") { pastImage.src = "imagens/pass/Lacaio.png"; 
  }
  else if (past === "Ladrão") { pastImage.src = "imagens/pass/Ladrão.png"; 
  }
  else if (past === "Louco") { pastImage.src = "imagens/pass/Louco.gif"; 
  }
  else if (past === "Mago") { pastImage.src = "imagens/pass/Mago.png"; 
  }
  else if (past === "Malabarista") { pastImage.src = "imagens/pass/Malabarista.png"; 
  }
  else if (past === "Marinheiro") { pastImage.src = "imagens/pass/Marinheiro.png"; 
  }
  else if (past === "Masoquista") { pastImage.src = "imagens/pass/Masoquista.png"; 
  }
  else if (past === "Médico") { pastImage.src = "imagens/pass/Medico.png"; 
  }
  else if (past === "Mendigo") { pastImage.src = "imagens/pass/Mendigo.png"; 
  }
  else if (past === "Monge") { pastImage.src = "imagens/pass/monge.gif"; 
  }
  else if (past === "Naturalista") { pastImage.src = "imagens/pass/Naturalista.gif"; 
  }
  else if (past === "Nobre") { pastImage.src = "imagens/pass/Nobre.png"; 
  }
  else if (past === "Perseguidor") { pastImage.src = "imagens/pass/Perseguidor.png"; 
  }
  else if (past === "Pervertido") { pastImage.src = "imagens/pass/Pervertido.png"; 
  }
  else if (past === "Pescador") { pastImage.src = "imagens/pass/Pescador.png"; 
  }
  else if (past === "Pirata") { pastImage.src = "imagens/pass/Pirata.png"; 
  }
  else if (past === "Prefeito") { pastImage.src = "imagens/pass/Prefeito.png"; 
  }
  else if (past === "Prisioneiro") { pastImage.src = "imagens/pass/Prisioneiro.png"; 
  }
  else if (past === "Profanado") { pastImage.src = "imagens/pass/Profanado.png"; 
  }
  else if (past === "Protetor") { pastImage.src = "imagens/pass/Protetor.png"; 
  }
  else if (past === "Pugilista") { pastImage.src = "imagens/pass/Pugilista.gif"; 
  }
  else if (past === "Revivido") { pastImage.src = "imagens/pass/Revivido.png"; 
  }
  else if (past === "Samurai") { pastImage.src = "imagens/pass/Samurai.png"; 
  }
  else if (past === "Sacerdote") { pastImage.src = "imagens/pass/Sacerdote.gif"; 
  }
  else if (past === "Soberano") { pastImage.src = "imagens/pass/Soberano.gif"; 
  }
  else if (past === "Taverneiro") { pastImage.src = "imagens/pass/Taverneiro.png"; 
  }
  else if (past === "Tormentalista") { pastImage.src = "imagens/pass/Tormentalista.png"; 
  }
  else if (past === "seu passado") { pastImage.src = "imagens/pass/seu passado.png"; 
  }
  else {
    pastImage.src = ""; // Limpa a imagem se nenhum passado for selecionado
  }
}

// Event listener for form submission (Create Character)
// Event listener for form submission (Create Character)
// Event listener for form submission (Create Character)
// Event listener for form submission (Create Character)
// Event listener for form submission (Create Character)
// Event listener for form submission (Create Character)
document.addEventListener('DOMContentLoaded', () => { 
  const form = document.getElementById('character-form');
  
  // Verifique se o listener já foi adicionado
  if (!form._hasListener) {
    form.addEventListener('submit', (event) => {
      event.preventDefault(); // Impede o envio do formulário e recarregamento da página

      // Coleta os valores dos campos do formulário
      const name = document.getElementById('char-name').value;
      const race = document.getElementById('race').value;
      const past = document.getElementById('past').value;
      const forLevel = parseInt(document.getElementById('for').value, 10);
      const desLevel = parseInt(document.getElementById('des').value, 10);
      const conLevel = parseInt(document.getElementById('con').value, 10);
      const intLevel = parseInt(document.getElementById('int').value, 10);
      const sabLevel = parseInt(document.getElementById('sab').value, 10);
      const carLevel = parseInt(document.getElementById('car').value, 10);

      // Coleta as habilidades do personagem
      const skills = {};
      document.querySelectorAll('.pericia').forEach((skillElement) => {
        const skillName = skillElement.getAttribute('data-name');
        const skillValue = parseInt(skillElement.querySelector('button').innerText, 10);
        skills[skillName] = skillValue;
      });

      // Salva os dados do personagem
      let characterCount = localStorage.getItem('characterCount') ? parseInt(localStorage.getItem('characterCount'), 10) : 0;
      characterCount++; // Incrementa a contagem de personagens
      localStorage.setItem('characterCount', characterCount);

      // Salva os dados no localStorage
      localStorage.setItem(`characterData${characterCount}`, JSON.stringify({
        name: name,
        race: race,
        past: past,
        for: forLevel,
        des: desLevel,
        con: conLevel,
        int: intLevel,
        sab: sabLevel,
        car: carLevel,
        skills: skills,

        life: 100,
        sanity: 100,
        special: 0,
        armor: 0,
        movement: 0,
        level: 1,
  // ✅ Aqui salva o item equipado
  equippedItemId: equippedItemId      }));

      // Atualiza a visualização do personagem
      document.getElementById('char-name-view').textContent = name;
      document.getElementById('char-race-view').textContent = race;
      document.getElementById('char-past-view').textContent = past;

      updateStats();

      // Exibe a mensagem de sucesso
      const saveMessage = document.getElementById('save-message');
      if (saveMessage) {
        saveMessage.textContent = 'Personagem salvo!';
        saveMessage.style.display = 'block';
        setTimeout(() => {
          saveMessage.style.display = 'none';
        }, 5000);
      }
    });

    // Marca que o listener foi adicionado para evitar múltiplas adições
    form._hasListener = true;
  }
});

// Function to load characters from local storage
document.getElementById('load-character').addEventListener('click', () => {
  const characterSelect = document.getElementById('character-select');
  characterSelect.innerHTML = ''; // Clear existing options

  let characterCount = parseInt(localStorage.getItem('characterCount'), 10);
  for (let i = 1; i <= characterCount; i++) {
      const characterData = JSON.parse(localStorage.getItem(`characterData${i}`));
      if (characterData) {
          const option = document.createElement('option');
          option.value = i;
          option.textContent = characterData.name;
          characterSelect.appendChild(option);
      }
  }

  document.getElementById('character-select-section').style.display = 'block';
});

// Event listener for character selection
document.getElementById('confirm-load').addEventListener('click', () => {
  const characterSelect = document.getElementById('character-select');
  const selectedIndex = characterSelect.value;

  if (selectedIndex) {
      const characterData = JSON.parse(localStorage.getItem(`characterData${selectedIndex}`));
      if (characterData) {
          // Update character view section with loaded data
          document.getElementById('char-name-view').textContent = characterData.name;
          document.getElementById('char-race-view').textContent = characterData.race;
          document.getElementById('char-past-view').textContent = characterData.past;

          // Update input fields with loaded stats
          document.getElementById('char-name').value = characterData.name;
          document.getElementById('race').value = characterData.race;
          document.getElementById('past').value = characterData.past;
          document.getElementById('for').value = characterData.for;
          document.getElementById('des').value = characterData.des;
          document.getElementById('con').value = characterData.con;
          document.getElementById('int').value = characterData.int;
          document.getElementById('sab').value = characterData.sab;
          document.getElementById('car').value = characterData.car;

          // Load additional stats
          document.getElementById('life-view').textContent = characterData.life;
          document.getElementById('sanity-view').textContent = characterData.sanity;
          document.getElementById('special-view').textContent = characterData.special;
          document.getElementById('armor-view').textContent = characterData.armor;
          document.getElementById('movement-view').textContent = characterData.movement;
          document.getElementById('level-view').textContent = characterData.level;

          Object.entries(characterData.skills).forEach(([skillName, skillValue]) => {
            const skillElement = document.querySelector(`.pericia[data-name="${skillName}"] button`);
            if (skillElement) {
                skillElement.innerText = skillValue;
            }
          });

      // Carregar os dados do item equipado
      loadEquippedItem(characterData);


       // ✅ ADICIONE ISSO AQUI
       equippedItemId = characterData.equippedItemId || null;
       if (equippedItemId) {
         const equippedItem = items.find(item => item.id === equippedItemId);
         if (equippedItem) {
           equippedSlot.innerHTML = `<img src="${equippedItem.img}" style="width: 50px;"><div>${equippedItem.name}</div>`;
         }
       }
          // Call updateStats to display loaded values
          updateStats();
      }

      document.getElementById('character-select-section').style.display = 'none';
  }
});








// Event listener for loading character
// ... (We'll add this back later when we work on loading)

// Event listener for closing the character selection section
// ... (We'll add this back later when we work on loading)

// Event listener for confirming load
// ... (We'll add this back later when we work on loading)

// Add trash icon to character selection dropdown
// ... (We'll add this back later when we work on loading)

// Function to load characters and populate the dropdown
// ... (We'll add this back later when we work on loading)

// Call loadCharacters when the page loads
// ... (We'll add this back later when we work on loading)

// Dark Mode Toggle
const darkModeToggle = document.getElementById('dark-mode-toggle');
let isDarkMode = false;

darkModeToggle.addEventListener('click', () => {
  isDarkMode = !isDarkMode;
  document.body.classList.toggle('dark-mode');
  document.getElementById('app').classList.toggle('dark-mode');
  document.querySelectorAll('h2, label, input, select, button, .stat-bar, .close-button, .bonus-group, .trash-icon, #save-message').forEach(element => {
    element.classList.toggle('dark-mode');
  });
});
function menuShow() {
  let menuMobile = document.querySelector('.mobile-menu'); // Corrigido o nome da variável
  if (menuMobile.classList.contains('open')) {
    menuMobile.classList.remove('open');
  } else {
    menuMobile.classList.add('open');
  }
}

// Captura os elementos do DOM
// Captura os elementos do DOM
// Captura os elementos do DOM// Captura os elementos do DOM// Captura os elementos do DOM
// Captura os elementos do DOM
// Captura os elementos do DOM
function toggleMenu() {
  const menu = document.getElementById('side-menu');
  menu.classList.toggle('open');
}
document.addEventListener('click', function(event) {
  const menu = document.getElementById('side-menu');
  const button = document.querySelector('.toggle-button');

  // Verifica se o clique foi fora do menu e do botão
  if (!menu.contains(event.target) && !button.contains(event.target)) {
      menu.classList.remove('open');
  }
});
function toggleSectionInfo() {
  const sectionContent = document.getElementById('expandableSectionInfo');
  sectionContent.style.display = sectionContent.style.display === 'none' ? 'block' : 'none';
}

// Função genérica para aplicar dano/ajuste
// Valores de status base (cópia do status original)
// Função para pegar o valor atual dos status da barra original





function toggleSkill(button) {
  // Pega o valor atual do botão e converte para número
  let currentValue = parseInt(button.innerText, 10);
  
  // Define a sequência cíclica 0 -> 2 -> 4 -> 0
  if (currentValue === 0) {
      currentValue = 2;
  } else if (currentValue === 2) {
      currentValue = 4;
  } else {
      currentValue = 0;
  }
  
  // Atualiza o texto do botão com o novo valor
  button.innerText = currentValue;
  
  // Exibe a descrição e o requisito
  const skillElement = button.closest(".pericia");
  const requirement = skillElement.getAttribute("data-requirement");
  const description = skillElement.getAttribute("data-description");
  
  const requirementEl = skillElement.querySelector(".requirement");
  const descriptionEl = skillElement.querySelector(".description");

  requirementEl.textContent = "Requisito: " + requirement;
  descriptionEl.textContent = "Descrição: " + description;

  // Alterna a visibilidade dos elementos de requisito e descrição
  requirementEl.style.display = "inline";
  descriptionEl.style.display = "inline";
}


// sectionnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn
function toggleSection() {
  const section = document.getElementById("expandableSection");
  section.style.display = section.style.display === "block" ? "none" : "block";
}

// Função para alternar a visibilidade de cada bônus individualmente
// Função para alternar a visibilidade de cada bônus individualmente
function toggleBonusSection(bonus) {
  // Construção do ID correto para o bônus
  const bonusContent = document.getElementById(`bonus${bonus}-desc`);
  
  // Verificar se o bônus existe antes de alternar sua visibilidade
  if (bonusContent) {
    // Alternando a visibilidade do conteúdo
    bonusContent.style.display = (bonusContent.style.display === "block") ? "none" : "block";
  }
}



// sectionnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn


// Verifique o conteúdo dos elementos e, se necessário, adicione a classe hidden
// Verifica se o "Bônus de Raça" é igual a "N/A" e oculta o elemento se for


// sistema do mapa interativo
document.addEventListener('DOMContentLoaded', function () {
    new juxtapose.JXSlider('#image-compare', [
        {
            src: "https://terrasdecalistoficha.wordpress.com/wp-content/uploads/2024/06/mapa-correto-2-ac-novo-com-efeito-final-1.png",
            label: "Antes"
        },
        {
            src: "https://terrasdecalistoficha.wordpress.com/wp-content/uploads/2024/06/mapa-correto-2-ac-1-1-novo2-1.png",
            label: "Depois"
        }
    ],
    {
        animate: true,
        startingPosition: "50%",
        mode: "horizontal"
    });
});

function applyDamage(type) {
    let damageInput;
    let currentValue;

    switch (type) {
        case 'life':
            damageInput = document.getElementById('damage-life');
            currentValue = parseInt(document.getElementById('life-view').textContent, 10);
            break;
        case 'sanity':
            damageInput = document.getElementById('damage-sanity');
            currentValue = parseInt(document.getElementById('sanity-view').textContent, 10);
            break;
        case 'special':
            damageInput = document.getElementById('damage-special');
            currentValue = parseInt(document.getElementById('special-view').textContent, 10);
            break;
    }

    const damage = parseInt(damageInput.value, 10);
    if (!isNaN(damage)) {
        const newValue = currentValue - damage;
        switch (type) {
            case 'life':
                document.getElementById('life-view').textContent = newValue;
                break;
            case 'sanity':
                document.getElementById('sanity-view').textContent = newValue;
                break;
            case 'special':
                document.getElementById('special-view').textContent = newValue;
                break;
        }
    }
}

// sistema do mapa interativo



