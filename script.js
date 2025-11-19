
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
    "bonusRace": `Pode usar <strong>Mirar</strong> e no mesmo turno atacar uma vez por combate sem custo.  <details>
    <summary><strong>Mirar</strong></summary>
    <p>
      O personagem se concentra para garantir vantagem em seu disparo.<br>
      <strong>Efeito:</strong> O personagem mira por um turno para rolar o dado de acerto duas vezes e escolher o melhor resultado.<br>
      Mirar consome uma <strong>ação</strong> e o personagem só pode se mover <strong>antes de mirar</strong>.
    </p>
  </details>`,
    "PassivaDisponivel": `<strong><a href="https://terras-de-calisto-ficha-rpg.netlify.app/#tc=p6">Emanar Energia</a></strong> uma vez no dia sem custo.`,
    "MagiaDisponivel": "-",
    "TalentoDisponivel": "Liberado - <strong>Arcos e bestas.</strong>",
    "vidaPorNivel": {
      "for": 2,
      "des": 3,
      "con": 4
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
    "PassivaDisponivel": `<strong><a href="https://terras-de-calisto-ficha-rpg.netlify.app/#tc=p19">Controle adestrado</a></strong> sem custo uma vez por dia e tem vantagem.`,
    "MagiaDisponivel": "-",
    "TalentoDisponivel": "<strong>1 talento extra</strong> à sua escolha livre.",
    "vidaPorNivel": {
      "for": 5,
      "des": 4,
      "con": 3
    },
    "sanidadePorNivel": {
      "int": 2,
      "sab": 1,
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
    "bonusRace": `Eles podem <strong>Voar</strong>, manter o voo requer concentração, sofre -8 em danos de <strong>fogo</strong>.
    <details>
  <summary><strong>Voar</strong></summary>
  <p>
    O personagem está no ar, seja planando ou sustentando voo ativo.<br><br>
    <strong>Efeito:</strong> Manter o voo exige <strong>concentração</strong> contínua. Enquanto estiver voando, ataques e reações sofrem <strong>desvantagem</strong> devido à instabilidade no ar.<br>
    Alterar a altura do voo durante o turno consome <strong>metade do movimento</strong>.
  </p>
</details>
`,
    "PassivaDisponivel": `<strong><a href="https://terras-de-calisto-ficha-rpg.netlify.app/#tc=p8">Vingança</a></strong> sem custo duas vezes por combate.`,
    "MagiaDisponivel": "-",
    "TalentoDisponivel": "<strong>Katanas.</strong>",  
    "vidaPorNivel": {
      "for": 3,
      "des": 6,
      "con": 4
    },
    "sanidadePorNivel": {
      "int": 1,
      "sab": 2,
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
    "PassivaDisponivel": `<strong><a href="https://terras-de-calisto-ficha-rpg.netlify.app/#tc=p27">Metamorfose</a></strong> duas vezes ao dia <strong>sem custo.</strong>`,
    "MagiaDisponivel": "-",
    "TalentoDisponivel": "Escudos ou Espadas.",  
    "vidaPorNivel": {
      "for": 7,
      "des": 2,
      "con": 4
    },
    "sanidadePorNivel": {
      "int": 1,
      "sab": 1,
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
    "bonusRace": "Crítico <strong>Corpo a Corpo:</strong> +1 no multiplicador de dano crítico.",
    "PassivaDisponivel": `<strong><a href="https://terras-de-calisto-ficha-rpg.netlify.app/#tc=p3">Bêbado</a></strong> ou <strong><a href="https://terras-de-calisto-ficha-rpg.netlify.app/#tc=p2">Alegria</a></strong> duas vezes por dia <strong>sem custo com vantagem.</strong>`,
    "MagiaDisponivel": "-",
    "TalentoDisponivel": "Machados e martelos.",  
    "vidaPorNivel": {
      "for": 2,
      "des": 2,
      "con": 7
    },
    "sanidadePorNivel": {
      "int": 1,
      "sab": 1,
      "car": 4
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
    "bonusRace": `Eles podem <strong>Voar</strong>, manter o voo requer concentração, sofre -8 em danos de <strong>Luz</strong>.
    <details>
  <summary><strong>Voar</strong></summary>
  <p>
    O personagem está no ar, seja planando ou sustentando voo ativo.<br><br>
    <strong>Efeito:</strong> Manter o voo exige <strong>concentração</strong> contínua. Enquanto estiver voando, ataques e reações sofrem <strong>desvantagem</strong> devido à instabilidade no ar.<br>
    Alterar a altura do voo durante o turno consome <strong>metade do movimento</strong>.
  </p>
</details>
`,
    "PassivaDisponivel": `<strong><a href="https://terras-de-calisto-ficha-rpg.netlify.app/#tc=p5">Sorriso Contemplativo</a></strong> uma vez no dia sem custo por combate.`,
    "MagiaDisponivel": "-",
    "TalentoDisponivel": "Lanças e Armas com Haste.",  
    "vidaPorNivel": {
      "for": 1,
      "des": 4,
      "con": 6
    },
    "sanidadePorNivel": {
      "int": 1,
      "sab": 2,
      "car": 3
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
    "PassivaDisponivel": `<strong><a href="https://terras-de-calisto-ficha-rpg.netlify.app/#tc=p29">Salvaguarda</a></strong> uma vez ao dia sem custo e com vantagem.`,
    "MagiaDisponivel": "-",
    "TalentoDisponivel": "Armas Exóticas.",  
    "vidaPorNivel": {
      "for": 1,
      "des": 4,
      "con": 4
    },
    "sanidadePorNivel": {
      "int": 4,
      "sab": 2,
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
    "PassivaDisponivel": `<strong><a href="https://terras-de-calisto-ficha-rpg.netlify.app/#tc=p21">Afogar</a></strong> uma vez por combate sem custo e tem vantagem.`,
    "MagiaDisponivel": "-",
    "TalentoDisponivel": "Lanças e Armas com Haste.",  
    "vidaPorNivel": {
      "for": 4,
      "des": 1,
      "con": 3
    },
    "sanidadePorNivel": {
      "int": 2,
      "sab": 5,
      "car": 2
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
    "PassivaDisponivel": `<strong><a href="https://terras-de-calisto-ficha-rpg.netlify.app/#tc=p6">Medo oculto</a></strong> uma vez no dia sem custo por combate.`,
    "MagiaDisponivel": "-",
    "TalentoDisponivel": "Armas Exóticas e Intimidação.",  
    "vidaPorNivel": {
      "for": 3,
      "des": 2,
      "con": 3
    },
    "sanidadePorNivel": {
      "int": 2,
      "sab": 5,
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
    "PassivaDisponivel": `<strong><a href="https://terras-de-calisto-ficha-rpg.netlify.app/#tc=p20">Selvageria</a></strong> duas vezes ao dia sem custo e tem vantagem.`,
    "MagiaDisponivel": "-",
    "TalentoDisponivel": "Sobrevivência.",  
    "vidaPorNivel": {
      "for": 3,
      "des": 2,
      "con": 6
    },
    "sanidadePorNivel": {
      "int": 2,
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
    "PassivaDisponivel": `<strong><a href="https://terras-de-calisto-ficha-rpg.netlify.app/#tc=p18">Furtividade sombria</a></strong> uma vez no dia sem custo.`,
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
    "ialPorNivel": 5
  }
};

const pastData = {
  "Aldeão": {
    vidaPorNivel: 6,
    sanidadePorNivel: 2,
    armaduraPorNivel: 1,
    resistencia: "Sagrado",
    movimento_pass: 2,

    bonusPass: `
    Nível 0: +2 em testes de Conexão, +5 em testes de <strong>Sobrevivência.</strong>
    `,

    // ===============================
    // 🗡️ COMBATENTE
    // ===============================
    bonustitulo_1: `<p>🗡️<strong>Combatente</strong></p>`,

    bonusTexto1N1: `+1d4 de dano com ferramentas improvisadas.`,
    bonusTexto1N3: `+1 em testes de Brutalidade.`,
    bonusTexto1N5: `+1 em testes de Sobrevivência.`,
    bonusTexto1N9: `+2 em ataques corpo a corpo com ferramentas ou armas simples.`,
    bonusTexto1N13: `<strong>Golpe Improvável</strong> - Dano extra de +1d6 ao atacar em condições desfavoráveis.`,
    bonusTexto1N16: `+1d6 de dano com armas cortantes ou perfurantes.`,
    bonusTexto1N20: `<strong>Combate Resiliente</strong> - +2 em testes de resistência contra Hemorragia e Paralisado.`,
    bonusTexto1N22: `+1d8 de dano com armas pesadas.`,
    bonusTexto1N25: `<strong>Frenesi Berserker</strong> - Quando atinge 0 HP, pode realizar um ataque adicional sem custo de ação e recupera +1d6 HP a cada ataque bem-sucedido. (5 de ial por ativação, uma vez por combate)`,

    // ===============================
    // ♟️ ESTRATEGISTA
    // ===============================
    bonustitulo_2: `<p>♟️<strong>Estrategista</strong></p>`,

    bonusTexto2N1: `+1 em precisão à distância.`,
    bonusTexto2N3: `+2 em testes de Agilidade.`,
    bonusTexto2N5: `<strong>Observador</strong> - +1 em testes de percepção em situações de combate ou exploração.`,
    bonusTexto2N9: `+1 em iniciativas e bônus de evasão contra ataques mágicos.`,
    bonusTexto2N13: `<strong>Estratégia Rápida</strong> - +1 em testes de comando e bônus em ações táticas.`,
    bonusTexto2N16: `+1d8 de dano em ataques com projéteis.`,
    bonusTexto2N20: `<strong>Alvo Improvável</strong> - Você recebe +2 de bônus na armadura contra inimigos que ainda não sofreram dano.`,
    bonusTexto2N22: `<strong>Tático Experiente</strong> - Pode dar um bônus de +2 em testes de iniciativa para um aliado por dia.`,
    bonusTexto2N25: `<strong>Plano de Batalha</strong> - Uma vez por combate, pode usar uma ação para aumentar o dano de todos os aliados em +1d6.`,

    // ===============================
    // 🧙‍♂️ CONJURADOR
    // ===============================
    bonustitulo_3: `<p>🧙‍♂️<strong>Conjurador</strong></p>`,

    bonusTexto3N1: `+1 em Conexão.`,
    bonusTexto3N3: `+1d6 de cura/dano com feitiços simples.`,
    bonusTexto3N5: `Ganha uma magia de nível 1 a 2 de um grupo elemental de sua escolha.`,
    bonusTexto3N9: `<strong>Magias de nível 1, 2 e 3</strong> - Consegue conjurar magias pequenas sem consumir recursos extras.`,
    bonusTexto3N13: `+1 em testes de Conjuração ao invocar elementos.`,
    bonusTexto3N16: `Ganha uma magia de nível 3 a 4 do grupo elemental escolhido.`,
    bonusTexto3N20: `<strong>Magia Avançada</strong> - Ganha uma magia de nível 5 a 6 do grupo elemental escolhido.`,
    bonusTexto3N22: `<strong>Custo Mínimo</strong> - Reduz o custo de uma magia por dia em 1 ponto de sanidade.`,
    bonusTexto3N25: `<strong>Mestre Elemental</strong> - Ganha uma magia de nível 7 a 9 do grupo elemental escolhido e pode conjurá-la uma vez por dia sem custo.`
  }
,

  "Arauto": {
  vidaPorNivel: 5,
  sanidadePorNivel: 3,
  armaduraPorNivel: 1,
  resistencia: "Mental",
  movimento_pass: 2,

  bonusPass: `
  <p>Nível 0: <strong>Passiva</strong> <a href="#tc=p9">Medo oculto</a> sem custo uma vez por dia e personagem pode <strong>voar</strong>.</p>
  `,

  // ===============================
  // 🧠 MENTOR PSÍQUICO
  // ===============================
  bonustitulo_1: `<p>🧠<strong>Mentor Psíquico</strong></p>`,

  bonusTexto1N1: `+1 em testes de dano <strong>Mental</strong>.`,
  bonusTexto1N3: `Aumenta a resistência mental de aliados próximos. +1 em testes de resistência contra <strong>Mental</strong>.`,
  bonusTexto1N5: `+1d4 em ataques que envolvam <strong>manipulação mental</strong> ou <strong>ilusão</strong>.`,
  bonusTexto1N9: `+2 em testes de <strong>persuasão</strong> e <strong>intimidar</strong>.`,
  bonusTexto1N13: `<strong>Leitura de Mentes</strong> — Detecta medos ou intenções de um alvo, uma vez por combate.`,
  bonusTexto1N16: `+1d6 de dano em <strong>ataques psíquicos</strong>.`,
  bonusTexto1N20: `<strong>Reflexos Psíquicos</strong> — +2 em resistência contra <strong>Confusão</strong> e <strong>Paralisado</strong>.`,
  bonusTexto1N22: `<strong>Manipulação Mental Avançada</strong> — +1d8 de dano em feitiços mentais.`,
  bonusTexto1N25: `<strong>Mestre da Psique</strong> — Uma vez por combate, força um inimigo a testar contra <strong>medo</strong> ou <strong>confusão</strong>, com penalidade de -1d6.`,

  // ===============================
  // 🎩 ILUSIONISTA
  // ===============================
  bonustitulo_2: `<p>🎩<strong>Ilusionista</strong></p>`,

  bonusTexto2N1: `+1 em testes de <strong>Enganação</strong> e <strong>Diplomacia</strong>.`,
  bonusTexto2N3: `+2 em testes de <strong>Agilidade</strong> para manobras evasivas.`,
  bonusTexto2N5: `<strong>Criação de Imagens</strong> — Cria ilusões simples que confundem inimigos, uma vez por combate.`,
  bonusTexto2N9: `+2 em <strong>iniciativa</strong> ao usar ilusões.`,
  bonusTexto2N13: `<strong>Desorientação</strong> — Aplica <strong>Confuso</strong> por 1d4 turnos em vez de dano direto.`,
  bonusTexto2N16: `+1d8 de dano com <strong>ilusões</strong> ou manipulação mental.`,
  bonusTexto2N20: `<strong>Engano Impecável</strong> — Enquanto <strong>invisível</strong> ou <strong>disfarçado</strong>, inimigos sofrem -1d6 contra você.`,
  bonusTexto2N22: `<strong>Reflexo Ilusório</strong> — Evita um ataque usando uma ilusão de si mesmo, uma vez por combate.`,
  bonusTexto2N25: `<strong>Ilusão Suprema</strong> — Cria uma ilusão gigantesca. Inimigos ficam <strong>Cegos</strong> por 1d6 turnos.`,

  // ===============================
  // 🔮 VIDENTE
  // ===============================
  bonustitulo_3: `<p>🔮<strong>Vidente</strong></p>`,

  bonusTexto3N1: `+1 em testes de <strong>Percepção</strong> e <strong>Intuição</strong>.`,
  bonusTexto3N3: `Visão futura de 1d4 turnos, antecipando ações e eventos.`,
  bonusTexto3N5: `<strong>Visão Psíquica</strong> — Detecta sentimentos, intenções e mentiras facilmente.`,
  bonusTexto3N9: `+2 em resistência contra <strong>Cegueira</strong> e <strong>Paralisado</strong>.`,
  bonusTexto3N13: `<strong>Clarividência</strong> — Percebe eventos distantes, uma vez por combate.`,
  bonusTexto3N16: `+1d6 de dano em ataques que exploram <strong>fraquezas mentais</strong> ou espirituais.`,
  bonusTexto3N20: `<strong>Perspectiva Expandida</strong> — Conjura feitiço de Clarividência em uma área de 30 metros.`,
  bonusTexto3N22: `<strong>Visão Total</strong> — Visualiza todos os inimigos em combate.`,
  bonusTexto3N25: `<strong>Futuro Imediato</strong> — Antecipação de movimento inimigo para bloquear ou desviar um ataque, uma vez por combate.`
},
"Arqueiro": {
  vidaPorNivel: 6,
  sanidadePorNivel: 2,
  armaduraPorNivel: 1,
  resistencia: "Maldição",
  movimento_pass: 2,

  bonusPass: `
  <p>Nível 0: +5 em dados de dano com <strong>funda</strong>, <strong>arcos</strong> e <strong>bestas</strong>.</p>
  `,

  // ===============================
  // 🏹 CAÇADOR PRECISO
  // ===============================
  bonustitulo_1: `<p>🏹 <strong>Caçador Preciso</strong></p>`,

  bonusTexto1N1: `+1 em testes de <strong>Percepção</strong> para rastreamento.`,
  bonusTexto1N3: `Aumenta o alcance efetivo de ataques à distância em +10 metros.`,
  bonusTexto1N5: `<strong>Flecha Envenenada</strong> — Envenena a flecha para causar dano adicional de +1d4 por turno durante 3 turnos.`,
  bonusTexto1N9: `+2 em testes de <strong>Furtividade</strong> para emboscadas.`,
  bonusTexto1N13: `<strong>Disparo Cirúrgico</strong> — Ignora 2 pontos de armadura ao atingir um ponto fraco do inimigo.`,
  bonusTexto1N16: `+1d8 de dano em ataques que visam partes específicas do corpo.`,
  bonusTexto1N20: `<strong>Resistência do Caçador</strong> — +2 em testes de resistência contra <strong>Veneno</strong> e <strong>Hemorragia</strong>.`,
  bonusTexto1N22: `<strong>Mestre da Emboscada</strong> — Surpreende o inimigo, garantindo +1d10 de dano em ataques iniciais.`,
  bonusTexto1N25: `<strong>Flecha Mortal</strong> — Uma vez por combate, realiza um disparo que causa +2d10 de dano, perfurando a armadura do alvo.`,

  // ===============================
  // 🎯 ATIRADOR DE ELITE
  // ===============================
  bonustitulo_2: `<p>🎯 <strong>Atirador de Elite</strong></p>`,

  bonusTexto2N1: `+1 em <strong>precisão</strong> ao usar <strong>arcos</strong> e <strong>bestas</strong>.`,
  bonusTexto2N3: `+2 em testes de <strong>Agilidade</strong> para esquivas rápidas.`,
  bonusTexto2N5: `<strong>Disparo Perfurante</strong> — Atira uma flecha que atravessa até 2 inimigos alinhados, causando dano completo em ambos.`,
  bonusTexto2N9: `+2 em <strong>iniciativas</strong> ao utilizar armas à distância.`,
  bonusTexto2N13: `<strong>Tiro Rápido</strong> — Realiza dois disparos rápidos em um turno, com dano de +1d6 em cada.`,
  bonusTexto2N16: `+1d8 de dano adicional em ataques consecutivos no mesmo alvo.`,
  bonusTexto2N20: `<strong>Alvo Escorregadio</strong> — Inimigos a uma distância maior que 20 metros sofrem -1d6 em ataques contra o <strong>Arqueiro</strong>.`,
  bonusTexto2N22: `<strong>Instinto de Sobrevivência</strong> — Uma vez por dia, consegue escapar de uma situação de perigo iminente sem precisar de teste.`,
  bonusTexto2N25: `<strong>Disparo Destruidor</strong> — Uma vez por combate, realiza um disparo poderoso que causa +2d12 de dano, ignorando defesas do inimigo.`,

  // ===============================
  // 🌌 EXPLORADOR DAS SOMBRAS
  // ===============================
  bonustitulo_3: `<p>🌌 <strong>Explorador das Sombras</strong></p>`,

  bonusTexto3N1: `+1 em <strong>Furtividade</strong> e <strong>Movimentação</strong> em terrenos variados.`,
  bonusTexto3N3: `+2 em testes de <strong>Sobrevivência</strong> para explorar áreas desconhecidas.`,
  bonusTexto3N5: `<strong>Caminho Oculto</strong> — Permite ao grupo avançar sem deixar rastros, uma vez por dia.`,
  bonusTexto3N9: `+2 em testes de resistência contra <strong>Confusão</strong> e <strong>Cegueira</strong>.`,
  bonusTexto3N13: `<strong>Flecha da Escuridão</strong> — Atira uma flecha que reduz a visão do alvo, aplicando penalidade de -1d4 em ataques do inimigo.`,
  bonusTexto3N16: `+1d6 de dano ao atacar a partir de uma posição oculta ou durante a noite.`,
  bonusTexto3N20: `<strong>Emboscada Letal</strong> — Garante um bônus de +1d10 em ataques que peguem o inimigo de surpresa.`,
  bonusTexto3N22: `<strong>Vantagem na Escuridão</strong> — Durante combates em locais escuros, ganha um bônus de +2 em esquiva e precisão.`,
  bonusTexto3N25: `<strong>Ataque Sombrio</strong> — Uma vez por combate, pode se teleportar silenciosamente para uma posição favorável e realizar um ataque com dano adicional de +2d10.`
}
,"Assassino": {
  vidaPorNivel: 7,
  sanidadePorNivel: 1,
  armaduraPorNivel: 1,
  resistencia: "Escuridão",
  movimento_pass: 3,

  bonusPass: `
  <p>Nível 0: <strong>Passiva</strong> <a href="#tc=p18">Furtividade Sombria</a> — 1 vez ao dia sem custo, +5 com <strong>Adagas</strong>.</p>
  `,

  // ===============================
  // 🗡️ ASSASSINATO FURTIVO
  // ===============================
  bonustitulo_1: `<p>🗡️ <strong>Assassinato Furtivo</strong></p>`,

  bonusTexto1N1: `+1 em <strong>Furtividade</strong> para emboscadas.`,
  bonusTexto1N3: `+1 em testes de <strong>Agilidade</strong> para aproximações silenciosas.`,
  bonusTexto1N5: `<strong>Golpe Fatal</strong> — Executa um ataque furtivo causando +1d6 de dano extra ao atingir um ponto fraco.`,
  bonusTexto1N9: `+2 em ataques com <strong>Adagas</strong> contra alvos desprevenidos.`,
  bonusTexto1N13: `<strong>Execução Impecável</strong> — Um ataque crítico com adagas concede um bônus de +1d8 de dano adicional.`,
  bonusTexto1N16: `+1d6 de dano ao atacar inimigos que ainda não agiram no combate.`,
  bonusTexto1N20: `<strong>Resiliência das Sombras</strong> — +2 em testes de resistência contra <strong>Envenenamento</strong> e <strong>Paralisia</strong>.`,
  bonusTexto1N22: `<strong>Mestre da Furtividade</strong> — Permite ficar completamente invisível por até um turno.`,
  bonusTexto1N25: `<strong>Assassinato Silencioso</strong> — Um golpe furtivo garante +2d10 de dano e ignora a armadura do alvo.`,

  // ===============================
  // ⛩️ SHURIKINS MORTAIS
  // ===============================
  bonustitulo_2: `<p>⛩️ <strong>Shurikins Mortais</strong></p>`,

  bonusTexto2N1: `+1 em <strong>Precisão</strong> ao usar <strong>Shurikins</strong> e armas arremessáveis.`,
  bonusTexto2N3: `+2 em testes de <strong>Agilidade</strong> para esquivas e deslocamento rápido.`,
  bonusTexto2N5: `<strong>Projétil Rápido</strong> — Lança duas shurikins de uma vez, cada uma com +1d4 de dano adicional.`,
  bonusTexto2N9: `+1d6 de dano em ataques arremessados com precisão aprimorada.`,
  bonusTexto2N13: `<strong>Tiro Preciso</strong> — Realiza um disparo que ignora defesas naturais do alvo.`,
  bonusTexto2N16: `+1d8 de dano extra em ataques sucessivos contra o mesmo alvo.`,
  bonusTexto2N20: `<strong>Desvio Ágil</strong> — +2 em testes de esquiva contra projéteis inimigos.`,
  bonusTexto2N22: `<strong>Projéteis Penetrantes</strong> — Shurikins atravessam até dois alvos alinhados, aplicando dano total em ambos.`,
  bonusTexto2N25: `<strong>Dança das Lâminas</strong> — Lança várias shurikins ao redor, causando +2d10 de dano a todos os inimigos próximos.`,

  // ===============================
  // 🌑 SOMBRAS DO INFINITO
  // ===============================
  bonustitulo_3: `<p>🌑 <strong>Sombras do Infinito</strong></p>`,

  bonusTexto3N1: `+1 em testes de <strong>Conexão</strong> para controlar magias do <strong>Eclipse</strong>.`,
  bonusTexto3N3: `<strong>Véu das Sombras</strong> — Envolve-se em sombras, ganhando +2 em <strong>Furtividade</strong> por um turno.`,
  bonusTexto3N5: `<strong><a href="#tc=m4">Reflexão de Eclipse</a></strong> — Libera a magia Reflexão de Eclipse (nível 1), que permite criar uma duplicata temporária para distração.`,
  bonusTexto3N9: `+1 em testes com feitiços de eclipse. Libera a magia <strong><a href="#tc=m167">Fragmento do Tempo</a></strong> (nível 4), permitindo manipular sombras para alterar o tempo ao redor, dificultando ataques inimigos.`,
  bonusTexto3N13: `<strong>Espelho Sombrio</strong> — Cria uma réplica feita de sombras, que reduz o dano recebido em 50% por um turno. Libera a magia <strong><a href="#tc=m172">Clone das Sombras</a></strong> (nível 3).`,
  bonusTexto3N16: `<strong>Dano do Eclipse</strong> — Aumenta o dano de eclipse em +1d6 ao atacar em áreas escuras. Libera a magia <strong><a href="#tc=m168">Ilusão Lunar</a></strong> (nível 5).`,
  bonusTexto3N20: `<strong>Olhos nas Sombras</strong> — Permite ver através de sombras, evitando ataques furtivos. Libera a magia <strong><a href="#tc=m170">Mutação Sombria</a></strong> (nível 7).`,
  bonusTexto3N22: `<strong>Sombra da Noite</strong> — Torna-se indetectável em áreas escuras por até dois turnos, podendo atacar sem revelar a posição (+8 contra testes de percepção de alvos).`,
  bonusTexto3N25: `<strong>Senhor do Eclipse</strong> — Conjura uma aura sombria que reduz a visão dos inimigos e aumenta o dano de todos os ataques eclipse em +2d8. Libera a magia <strong><a href="#tc=m171">Cataclismo do Eclipse</a></strong> (nível 8).`
}
, "Assombração": {
  vidaPorNivel: 5,
  sanidadePorNivel: 3,
  armaduraPorNivel: 1,
  resistencia: "Alma",
  movimento_pass: 3,

  bonusPass: `
  <p>Nível 0: +1d12 em <strong>magias de Alma</strong> e a magia <a href="https://terras-de-calisto-ficha-rpg.netlify.app/#tc=m93">Poltergeist</a> pode ser usada em dois objetos por vez.</p>
  `,

  // ===============================
  // 👤 PERSEGUIDOR SOMBRIO
  // ===============================
  bonustitulo_1: `<p>👤 <strong>Perseguidor Sombrio</strong></p>`,

  bonusTexto1N1: `<strong>Sombras Vorazes</strong> — Executa uma investida, esquivando de todos os ataques até o fim do turno. (2 especial)`,
  bonusTexto1N3: `<strong>Golpe Oculto</strong> — Ataque de precisão que ignora defesa do inimigo, causando +1d6 de dano. (3 especial)`,
  bonusTexto1N5: `<strong>Manto das Trevas</strong> — Torna-se invisível em locais escuros por um turno. (2 especial)`,
  bonusTexto1N9: `<strong>Velocidade Espiritual</strong> — Movimenta-se duas vezes no mesmo turno, escapando de emboscadas. (3 especial)`,
  bonusTexto1N13: `<strong>Reflexo Sombrio</strong> — Ao esquivar de um ataque, realiza um contra-ataque com +1d8 de dano. (4 especial)`,
  bonusTexto1N16: `<strong>Golpe do Abismo</strong> — Executa um ataque de sombra que ignora armadura e causa +2d8 de dano. (5 especial)`,
  bonusTexto1N20: `<strong>Sombra Penetrante</strong> — Reduz o custo de sanidade para <strong>magias de Alma</strong> pela metade.`,
  bonusTexto1N22: `<strong>Força Noturna</strong> — Aumenta o dano em +1d6 para ataques físicos e <strong>magias de Alma</strong>.`,
  bonusTexto1N25: `<strong>Sombra Aniquiladora</strong> — Torna-se incorpóreo por dois turnos, causando +2d10 de dano de Alma ignorando defesa, enquanto é imune a ataques físicos. (6 especial)`,

  // ===============================
  // 🛠️ ARTESÃO ESPIRITUAL
  // ===============================
  bonustitulo_2: `<p>🛠️ <strong>Artesão Espiritual</strong></p>`,

  bonusTexto2N1: `<strong>Energia Espiritual</strong> — Armazena uma alma, conferindo +1 de dano ou +1 em resistência. (Passivo)`,
  bonusTexto2N3: `<strong>Lâmina Viva</strong> — Brilho fantasmagórico que causa +1d4 de dano adicional em criaturas espirituais. (2 especial)`,
  bonusTexto2N5: `<strong>Alma Guardiã</strong> — Reduz em 1 o custo de sanidade para habilidades enquanto o equipamento está em uso. (Passivo)`,
  bonusTexto2N9: `<strong>Vínculo Espiritual</strong> — Torna o equipamento mais resiliente, +2 em resistência à deterioração. (Passivo)`,
  bonusTexto2N13: `<strong>Conexão Profunda</strong> — Concede +1d6 de dano com o equipamento, aprimorado por almas mais fortes. (3 especial)`,
  bonusTexto2N16: `<strong>Escudo da Alma</strong> — Libera uma barreira espiritual que reduz o dano recebido pela metade por um turno. (4 especial, 1x por combate)`,
  bonusTexto2N20: `<strong>Chama da Vingança</strong> — Retalia com +1d8 de dano ao receber ataques, drenando energia de inimigos próximos. (2 especial)`,
  bonusTexto2N22: `<strong>Força Espiritual</strong> — Permite armazenar uma segunda alma no equipamento, acumulando ambos os bônus. (Passivo)`,
  bonusTexto2N25: `<strong>Guardião das Almas</strong> — Ativa uma aura espiritual, aumentando o dano em +2d10 e reduzindo a armadura dos inimigos pela metade por dois turnos. (5 especial, 1x por combate)`,

  // ===============================
  // 🕊️ ESPIRITUALISTA DA ORDEM
  // ===============================
  bonustitulo_3: `<p>🕊️ <strong>Espiritualista da Ordem</strong></p>`,

  bonusTexto3N1: `<strong>Iniciado Espiritual</strong> — Ganha uma <a href="javascript:TC && TC.open && TC.open()">magia de nível 1</a> e +1 em testes de resistência contra efeitos espirituais.`,
  bonusTexto3N3: `<strong>Espírito Reforçado</strong> — Reduz o custo de sanidade ao usar <strong>magias de Alma</strong> em 1.`,
  bonusTexto3N5: `<strong>Protetor da Essência</strong> — Ganha uma <a href="javascript:TC && TC.open && TC.open()">magia de nível 2 de Alma</a> e +1 de dano em ataques com <strong>magias de Alma</strong>.`,
  bonusTexto3N9: `<strong>Escudo Espiritual</strong> — Recebe uma vez por combate um escudo espiritual que absorve até 1d8 de dano.`,
  bonusTexto3N13: `<strong>Tecelão da Alma</strong> — Ganha uma <a href="javascript:TC && TC.open && TC.open()">magia de nível 3 de Alma</a> e aumenta a duração das magias em 1 turno.`,
  bonusTexto3N16: `<strong>Voz do Além</strong> — Permite identificar a presença de espíritos em até 20 metros.`,
  bonusTexto3N20: `<strong>Profeta da Eternidade</strong> — Ganha uma <a href="javascript:TC && TC.open && TC.open()">magia de nível 4 de Alma</a> e +2 em percepção para detectar entidades invisíveis.`,
  bonusTexto3N22: `<strong>Eco Espiritual</strong> — Ganha uma <a href="javascript:TC && TC.open && TC.open()">magia de nível 5 de Alma</a> e metade do custo de sanidade para <strong>magias de Alma</strong>.`,
  bonusTexto3N25: `<strong>Guardião Eterno</strong> — Ganha uma <a href="javascript:TC && TC.open && TC.open()">magia de nível 6 de Alma</a> e uma ação completa extra por 7 de especial.`
}
, "Atirador": {
  vidaPorNivel: 7,
  sanidadePorNivel: 1,
  armaduraPorNivel: 1,
  resistencia: "Laser",
  movimento_pass: 4,

  bonusPass: `
  <p><strong>Nível 0:</strong> +2 nos dados de acerto com armas à distância. Pode usar <strong>Mirar</strong> sem penalidade uma vez por combate.</p>
  <details>
    <summary><strong>Mirar</strong></summary>
    <p>
      O personagem se concentra para garantir vantagem em seu disparo.<br>
      <strong>Efeito:</strong> O personagem mira por um turno para rolar o dado de acerto duas vezes e escolher o melhor resultado.<br>
      Mirar consome uma <strong>ação</strong> e o personagem só pode se mover <strong>antes de mirar</strong>.
    </p>
  </details>
  `,

  // ===============================
  // 🔫 PISTOLEIRO
  // ===============================
  bonustitulo_1: `<p>🔫 <strong>Pistoleiro</strong></p>`,

  bonusTexto1N1: `<strong>Mão Ágil</strong> — Permite sacar e guardar armas com rapidez, ganhando +1 em precisão ao atirar com duas armas. (1 especial)`,
  bonusTexto1N3: `<strong>Tiro Duplo</strong> — Dispara duas armas simultaneamente, cada uma com +1d4 de dano. (2 especial)`,
  bonusTexto1N5: `<strong>Ponto Cego</strong> — Causa +1d6 de dano extra ao acertar o alvo de surpresa. (2 especial)`,
  bonusTexto1N9: `<strong>Reflexos Rápidos</strong> — Ganha +1 em esquivas enquanto empunha duas armas. (Passivo)`,
  bonusTexto1N13: `<strong>Bala Certeira</strong> — Dispara uma bala que ignora armadura e causa +1d8 de dano adicional. (3 especial)`,
  bonusTexto1N16: `<strong>Velocidade da Bala</strong> — Pode realizar um tiro extra sem penalidade. (3 especial)`,
  bonusTexto1N20: `<strong>Destemido</strong> — Recebe +2 em testes de intimidação enquanto empunha duas armas. (Passivo)`,
  bonusTexto1N22: `<strong>Impacto Devastador</strong> — Dispara um tiro com +2d6 de dano que derruba o alvo se ele falhar em um teste de resistência. (4 especial)`,
  bonusTexto1N25: `<strong>Fúria do Pistoleiro</strong> — Lança uma barragem de balas, acertando todos os inimigos ao alcance com +1d10 de dano adicional. (5 especial, 1x por combate)`,

  // ===============================
  // 🚨 FORA DA LEI
  // ===============================
  bonustitulo_2: `<p>🚨 <strong>Fora da Lei</strong></p>`,

  bonusTexto2N1: `<strong>Infâmia</strong> — Ganha +1 em testes de intimidação contra NPCs e inimigos. (1 especial)`,
  bonusTexto2N3: `<strong>Procurado</strong> — Para cada estrela no cartaz de procurado, recebe +1 em esquiva (máx. 5). (Passivo)`,
  bonusTexto2N5: `<strong>Tiro Ameaçador</strong> — Disparo que assusta o alvo, causando -1d4 nos próximos ataques dele. (2 especial)`,
  bonusTexto2N9: `<strong>Sangue Frio</strong> — Ganha +2 em resistência contra efeitos de medo. (Passivo)`,
  bonusTexto2N13: `<strong>Fama Implacável</strong> — Todos os inimigos ao alcance sofrem -1 em ataques contra você. (3 especial, 1x por combate)`,
  bonusTexto2N16: `<strong>Presença Intimidadora</strong> — Concede +1 em dano a cada inimigo que esteja intimidado ou em desvantagem. (Passivo)`,
  bonusTexto2N20: `<strong>Desprezo Mortal</strong> — Disparo que ignora armadura, causando +2d6 de dano adicional. (4 especial)`,
  bonusTexto2N22: `<strong>Terror do Oeste</strong> — Inimigos ao redor recebem -2 em precisão enquanto estiver em combate. (Passivo)`,
  bonusTexto2N25: `<strong>Lenda Viva</strong> — Ataques causam +2d10 de dano a alvos que falharem em resistir ao medo. (5 especial, 1x por combate)`,

  // ===============================
  // 💥 INIMIGO DA BALA
  // ===============================
  bonustitulo_3: `<p>💥 <strong>Inimigo da Bala</strong></p>`,

  bonusTexto3N1: `<strong>Pancada Letal</strong> — Usa a arma como bastão, causando +1d4 de dano corpo a corpo. (1 especial)`,
  bonusTexto3N3: `<strong>Defesa da Arma</strong> — Ganha +1 em resistência ao evitar disparos por mais de um turno. (Passivo) Libera a magia <a href="https://terras-de-calisto-ficha-rpg.netlify.app/#tc=m98">Flecha de Luz</a>.`,
  bonusTexto3N5: `<strong>Bônus de Especial</strong> — Regenera 1 ponto de especial a cada turno sem disparar. (Passivo) Libera a passiva <a href="https://terras-de-calisto-ficha-rpg.netlify.app/#tc=p23">Teleporte Repentino</a>.`,
  bonusTexto3N9: `<strong>Controle do Combate</strong> — Recebe +1 em testes de esquiva enquanto estiver em combate corpo a corpo. (Passivo)`,
  bonusTexto3N13: `<strong>Quebra-Defesa</strong> — Golpe que ignora defesa física e causa +1d6 de dano. (3 especial)`,
  bonusTexto3N16: `<strong>Fúria Contida</strong> — Recebe +2 em resistência se não tiver disparado desde o início do combate. (Passivo)`,
  bonusTexto3N20: `<strong>Impacto Brutal</strong> — Ataque corpo a corpo que causa +2d6 de dano e derruba o inimigo. (4 especial)`,
  bonusTexto3N22: `<strong>Dominância do Combate</strong> — Ataques corpo a corpo causam +1d6 adicional enquanto evita disparos. (Passivo)`,
  bonusTexto3N25: `<strong>Força da Calma</strong> — Executa ataque devastador com +2d10 de dano, disponível após três turnos sem disparar. (5 especial, 1x por combate)`
}
,
"Barão": {
  vidaPorNivel: 7,
  sanidadePorNivel: 1,
  armaduraPorNivel: 1,
  resistencia: "Ácido",
  movimento_pass: 4.5,

  bonusPass: `
  <p><strong>Nível 0:</strong> +1 para todas as rolagens de dados. Libera e pode usar a magia <a href="https://terras-de-calisto-ficha-rpg.netlify.app/#tc=m207" target="_blank"><strong>Cuspe Ácido</strong></a> sem custo uma vez por dia.</p>
  `,

  // ===============================
  // 🧪 MANIPULAÇÃO ÁCIDA
  // ===============================
  bonustitulo_1: `<p>🧪 <strong>Manipulação Ácida</strong></p>`,

  bonusTexto1N1: `+1 em testes de <strong>Enganação</strong> ao influenciar outros.`,
  bonusTexto1N3: `<strong>Insidioso</strong> — +1 em testes de <strong>Agilidade</strong> para ações furtivas ou subversivas.`,
  bonusTexto1N5: `<strong>Mestre da Dissolução</strong> — Libera uma magia à escolha de <a href="javascript:TC && TC.open && TC.open()">nível 1 de Ácido</a>.`,
  bonusTexto1N9: `<strong>Controle Ácido</strong> — +2 em testes de <strong>Intimidação</strong> ao demonstrar poder ácido em combate.`,
  bonusTexto1N13: `<strong>Comando Persuasivo</strong> — Pode influenciar um inimigo com uma sugestão corrosiva que o faça hesitar em atacar por um turno. (Custo: 3 de especial)`,
  bonusTexto1N16: `<strong>Senhor do Veneno</strong> — Libera uma magia à escolha de <a href="javascript:TC && TC.open && TC.open()">nível 2 de Ácido</a>.`,
  bonusTexto1N20: `<strong>Olhar Corrosivo</strong> — Inimigos próximos sofrem -1 em resistência mental.`,
  bonusTexto1N22: `<strong>Manipulador Implacável</strong> — +3 em testes de manipulação contra inimigos afetados por venenos ou efeitos ácidos.`,
  bonusTexto1N25: `<strong>Barão do Subjugamento</strong> — Pode forçar um inimigo a realizar uma ação de sua escolha uma vez por combate. (Custo: 5 de especial)`,

  // ===============================
  // 💀 CORRUPTO
  // ===============================
  bonustitulo_2: `<p>💀 <strong>Corrupto</strong></p>`,

  bonusTexto2N1: `+1 em testes de <strong>Intimidação</strong> ao causar medo através do poder corrosivo.`,
  bonusTexto2N3: `<strong>Sopro Ácido</strong> — Reduz em 1 a defesa de um alvo por um turno. (Custo: 2 de especial)`,
  bonusTexto2N5: `<strong>Mestre da Dissolução</strong> — Libera uma magia à escolha de <a href="javascript:TC && TC.open && TC.open()">nível 1 de Ácido</a>.`,
  bonusTexto2N9: `<strong>Aura da Corrosão</strong> — Inimigos próximos recebem -1 em resistência ao ácido.`,
  bonusTexto2N13: `<strong>Maldição Ácida</strong> — Um ataque bem-sucedido contra um inimigo com vida abaixo de 50% causa +1d6 de dano ácido adicional. (Custo: 3 de especial)`,
  bonusTexto2N16: `<strong>Senhor da Ruína Ácida</strong> — Libera uma magia à escolha de <a href="javascript:TC && TC.open && TC.open()">nível 2 de Ácido</a>.`,
  bonusTexto2N20: `<strong>Decadência Profunda</strong> — Ataques ácidos aplicam o efeito “Corrosão”, causando +1d4 de dano contínuo no próximo turno. (Custo: 2 de especial)`,
  bonusTexto2N22: `<strong>Desolador Corrosivo</strong> — +2 de dano ácido contra alvos debilitados.`,
  bonusTexto2N25: `<strong>Propagador da Degradação</strong> — Todos os inimigos em um raio de 5 metros recebem -2 em resistência. (Custo: 5 de especial)`,

  // ===============================
  // 🦠 ADEPTOS DA CORROSÃO
  // ===============================
  bonustitulo_3: `<p>🦠 <strong>Adepto da Corrosão</strong></p>`,

  bonusTexto3N1: `+1d4 em vida ao sofrer dano ácido, aproveitando o poder da corrosão para fortalecimento.`,
  bonusTexto3N3: `<strong>Pele Resistente</strong> — +2 em resistência contra venenos e ácidos.`,
  bonusTexto3N5: `<strong>Mestre da Dissolução</strong> — Libera uma magia à escolha de <a href="javascript:TC && TC.open && TC.open()">nível 1 de Ácido</a>.`,
  bonusTexto3N9: `<strong>Fluxo Ácido</strong> — Ao receber cura mágica, regenera +1d6 adicional.`,
  bonusTexto3N13: `<strong>Ciclo da Corrosão</strong> — +1d6 de dano ácido adicional em ataques corpo a corpo. (Custo: 3 de especial)`,
  bonusTexto3N16: `<strong>Senhor da Ruína Ácida</strong> — Libera uma magia à escolha de <a href="javascript:TC && TC.open && TC.open()">nível 2 de Ácido</a>.`,
  bonusTexto3N20: `<strong>Conexão Corrosiva</strong> — Cura 1d4 ao infligir dano ácido.`,
  bonusTexto3N22: `<strong>Poder da Dissolução</strong> — Magias de ácido causam +1d8 de dano adicional.`,
  bonusTexto3N25: `<strong>Guardião da Corrosão Suprema</strong> — Libera uma magia à escolha de <a href="javascript:TC && TC.open && TC.open()">nível 3 de Ácido</a> sem custo de Sanidade, uma vez por combate. (Custo: 6 de especial para zerar o custo dessa magia)`
}
,"Bárbaro": {
  vidaPorNivel: 7,
  sanidadePorNivel: 1,
  armaduraPorNivel: 3,
  resistencia: "Fogo",
  movimento_pass: 4,

  bonusPass: `
  <p>Nível 0: +2 em <strong>curas recebidas</strong> e +5 de <strong>dano</strong> com <strong>Machados</strong> e <strong>Martelos</strong>.</p>
  `,

  // ===============================
  // 😡 BERSERKER
  // ===============================
  bonustitulo_1: `<p>😡 <strong>Berserker</strong></p>`,

  bonusTexto1N1: `<strong>Instinto Selvagem</strong> — +1d4 de dano com ataques desarmados ou armas improvisadas em corpo a corpo. Libera a passiva <a href="https://terras-de-calisto-ficha-rpg.netlify.app/#tc=p7"><strong>Ódio</strong></a>.`,
  bonusTexto1N3: `<strong>Força Primordial</strong> — +2 em testes de força física para quebrar ou arrancar objetos.`,
  bonusTexto1N5: `<strong>Resistência Implacável</strong> — +1 em testes contra venenos e cansaço.`,
  bonusTexto1N9: `<strong>Rugido de Guerra</strong> — Grito impõe -1 em testes dos inimigos próximos por 1 turno. (Custo: 2 de especial)`,
  bonusTexto1N13: `<strong>Golpe Devastador</strong> — +1d6 de dano extra se HP estiver abaixo de 50%. (Custo: 3 de especial)`,
  bonusTexto1N16: `<strong>Fúria Cortante</strong> — +1d6 de dano ao usar armas de corte em fúria.`,
  bonusTexto1N20: `<strong>Espírito da Batalha</strong> — +2 em resistência contra Lentidão e Paralisia ao lutar com múltiplos inimigos.`,
  bonusTexto1N22: `<strong>Destruição Imparável</strong> — +1d8 de dano em críticos com armas pesadas.`,
  bonusTexto1N25: `<strong>Frenesi Berserker</strong> — Ao atingir 0 HP, ganha 1 ataque extra sem custo e recupera +1d6 HP a cada ataque bem-sucedido. (Custo: 5 de especial, 1x por combate)`,

  // ===============================
  // 🪓 MESTRE DOS MACHADOS
  // ===============================
  bonustitulo_2: `<p>🪓 <strong>Mestre dos Machados</strong></p>`,

  bonusTexto2N1: `<strong>Precisão Brutal</strong> — +1d4 de dano ao usar machados contra alvos lentos ou fixos.`,
  bonusTexto2N3: `<strong>Braços de Ferro</strong> — +1 em testes com armas pesadas, mesmo em combate prolongado.`,
  bonusTexto2N5: `<strong>Agilidade com Peso</strong> — +1 em Agilidade ao usar armas pesadas.`,
  bonusTexto2N9: `<strong>Machado Veloz</strong> — +2 em ataques consecutivos com machado no mesmo alvo.`,
  bonusTexto2N13: `<strong>Corte Rachador</strong> — Reduz defesa do inimigo em 1 por 2 turnos. (Custo: 2 de especial)`,
  bonusTexto2N16: `<strong>Lâmina Impiedosa</strong> — +1d8 de dano crítico com machado mirando em pontos vulneráveis.`,
  bonusTexto2N20: `<strong>Mestre de Impacto</strong> — +2 em resistência a recuo em ataques corpo a corpo com machado.`,
  bonusTexto2N22: `<strong>Golpe Fatal</strong> — Críticos causam sangramento extra de +1d10. (Custo: 4 de especial)`,
  bonusTexto2N25: `<strong>Executador de Batalha</strong> — 1 ataque extra com machado por combate com +2d8 de dano. (Custo: 5 de especial)`,

  // ===============================
  // ✨ CAMINHO PURITANO
  // ===============================
  bonustitulo_3: `<p>✨ <strong>Caminho Puritano</strong></p>`,

  bonusTexto3N1: `<strong>Vitalidade Curativa</strong> — Recupera +1d4 de vida após combates mantendo integridade do grupo.`,
  bonusTexto3N3: `<strong>Resiliência Sagrada</strong> — +1 em primeiros socorros para si e aliados próximos.`,
  bonusTexto3N5: `<strong>Fonte de Cura</strong> — Cura recebida aumenta em +1d4.`,
  bonusTexto3N9: `<strong>Proteção Natural</strong> — +2 em resistência mágica ao curar aliados.`,
  bonusTexto3N13: `<strong>Mão Restauradora</strong> — Cura instantânea de +1d6. (Custo: 3 de especial)`,
  bonusTexto3N16: `<strong>Energia Salvadora</strong> — Regenera +1d8 de vida por turno ao lado de aliados feridos.`,
  bonusTexto3N20: `<strong>Guardião de Batalha</strong> — +2 em resistência contra maldição e veneno ao proteger ou curar aliados.`,
  bonusTexto3N22: `<strong>Reforço de Vida</strong> — Cura de +1d10 em ação de suporte. (Custo: 4 de especial)`,
  bonusTexto3N25: `<strong>Guardião Puritano</strong> — Cura em área de +2d8 em todos os aliados próximos. (Custo: 5 de especial, 1x por combate)`
}
,
   "Bardo": {
  vidaPorNivel: 4,
  sanidadePorNivel: 4,
  armaduraPorNivel: 1,
  resistencia: "Luz",
  movimento_pass: 3.5,

  bonusPass: `
  <p><strong>Nível 0:</strong> +2 em qualquer rolagem de <strong>Conexão</strong> e +2 em <strong>Diplomacia</strong>.</p>
  `,

  // ===============================
  // 💃 MESTRE DA DANÇA
  // ===============================
  bonustitulo_1: `<p>💃 <strong>Mestre da Dança</strong></p>`,

  bonusTexto1N1: `<a href="https://terras-de-calisto-ficha-rpg.netlify.app/#tc=p32"><strong>Dança da Purificação</strong></a> — Remove condições negativas de aliados próximos. (1x por dia, sem custo)`,
  bonusTexto1N3: `<strong>Movimentos Encantados</strong> — +1 em esquiva e resistência a ataques à distância enquanto dança. (Passivo)`,
  bonusTexto1N5: `<strong>Toque da Harmonia</strong> — Restaura +1d4 de vida ou sanidade a aliados próximos. (Custo: 2 de especial)`,
  bonusTexto1N9: `<strong>Encanto das Melodias</strong> — +2 em testes de Conexão ao usar dança para ganhar confiança. (Passivo)`,
  bonusTexto1N13: `<strong>Ritmo Desorientador</strong> — Reduz testes de precisão inimigos em -1 por 3 turnos. (Custo: 3 de especial)`,
  bonusTexto1N16: `<strong>Harmonia Fluida</strong> — Cura +1d6 por turno para aliados se dançar por 2+ turnos. (Passivo)`,
  bonusTexto1N20: `<strong>Explosão Melódica</strong> — +1d8 de dano em área via onda sonora. (Custo: 3 de especial)`,
  bonusTexto1N22: `<strong>Aura de Cura</strong> — Aliados ganham +2 em resistência a condições enquanto dança. (Passivo)`,
  bonusTexto1N25: `<strong>Apoteose da Dança</strong> — Remove condições de aliados, reduz armadura inimiga em -2 e faz armas grudarem no chão enquanto dança. (Custo: 5 de especial, 1x por combate)`,

  // ===============================
  // 🎶 GUERREIRO MUSICAL
  // ===============================
  bonustitulo_2: `<p>🎶 <strong>Guerreiro Musical</strong></p>`,

  bonusTexto2N1: `<strong>Golpe Harmônico</strong> — +1d4 de dano com instrumento usado como arma. (Passivo)`,
  bonusTexto2N3: `<strong>Ritmo de Batalha</strong> — +1 em testes de precisão com arco ou besta. (Passivo)`,
  bonusTexto2N5: `<strong>Melodia de Inspiração</strong> — Concede +1 de precisão a aliados por 1 turno. (Custo: 2 de especial)`,
  bonusTexto2N9: `<strong>Som Impenetrável</strong> — +1 em resistência a ataques mentais e mágicos ao tocar. (Passivo)`,
  bonusTexto2N13: `<strong>Crescendo Devastador</strong> — +1d6 de dano e atordoa inimigo por 1 turno. (Custo: 3 de especial)`,
  bonusTexto2N16: `<strong>Canto da Armadura</strong> — +2 em resistência física ao tocar melodia protetora. (Passivo)`,
  bonusTexto2N20: `<strong>Corda Rasgante</strong> — +2d6 de dano e reduz defesa do alvo em -1. (Custo: 4 de especial)`,
  bonusTexto2N22: `<strong>Hino de Guerra</strong> — Aliados recebem +2 em resistência a condições por 2 turnos. (Passivo)`,
  bonusTexto2N25: `<strong>Concerto de Vitória</strong> — +3d8 de dano de Luz em todos os inimigos próximos. (Custo: 5 de especial, 1x por combate)`,

  // ===============================
  // 💤 APANHADOR DE SONHOS
  // ===============================
  bonustitulo_3: `<p>💤 <strong>Apanhador de Sonhos</strong></p>`,

  bonusTexto3N1: `<strong>Aspirante dos Sonhos</strong> — Ganha 1 <a href="https://terrasdecalistoficha.wordpress.com/magias/#:~:text=Sono%20%E2%80%93%20Culto%20dos%20apanhadores%20de%20sonhos"><strong>magia</strong></a> (nível 1–2) e +1d4 com bestas.`,
  bonusTexto3N3: `<strong>Tecelão de Devaneios</strong> — Libera 1 <a href="javascript:TC && TC.open && TC.open()">magia</a> (nível 1–2) e -1 de custo de sanidade ao afetar mentes.`,
  bonusTexto3N5: `<strong>Guardião dos Subconscientes</strong> — Ganha 1 <a href="javascript:TC && TC.open && TC.open()">magia</a> (nível 1–3) e aliados próximos ganham +1 em resistência mental.`,
  bonusTexto3N9: `<strong>Senhor do Sono Eterno</strong> — Ganha 1 <a href="javascript:TC && TC.open && TC.open()">magia</a> (nível 1–4) e cria névoa de sonolência. (1x por combate)`,
  bonusTexto3N13: `<strong>Profeta das Visões Oníricas</strong> — Ganha 1 <a href="javascript:TC && TC.open && TC.open()">magia</a> (nível 1–4), +1 em esquiva e pode prever ataques iminentes.`,
  bonusTexto3N16: `<strong>Apanhador dos Pesadelos</strong> — Ganha 1 <a href="javascript:TC && TC.open && TC.open()">magia</a> (nível 1–4), drena 1d6 de sanidade e converte em energia especial.`,
  bonusTexto3N20: `<strong>Guardião do Mundo Onírico</strong> — Ganha 1 <a href="javascript:TC && TC.open && TC.open()">magia</a> (nível 1–5) e +2 em percepção contra ilusões e invisibilidade.`,
  bonusTexto3N22: `<strong>Mestre dos Devaneios</strong> — Ganha 1 <a href="javascript:TC && TC.open && TC.open()">magia</a> (nível 1–5) e reduz pela metade o custo de magias de sonho/pesadelo.`,
  bonusTexto3N25: `<strong>Guardião Eterno dos Sonhos</strong> — Ganha 1 <a href="javascript:TC && TC.open && TC.open()">magia</a> (nível 6) e pode realizar uma ação completa extra. (Custo: 7 de especial, 1x por combate)`
}
,
    "Bruxo": { 
  vidaPorNivel: 4,
  sanidadePorNivel: 4,
  armaduraPorNivel: 1,
  resistencia: "Escuridão",
  movimento_pass: 3.5,

  bonusPass: `
  <p><strong>Nível 0:</strong> Magias de atributo <strong>Libertação</strong> custam metade.</p>
  `,

  // ===============================
  // 🔮 UMBROMANTE
  // ===============================
  bonustitulo_1: `<p>🔮 <strong>Umbromante</strong></p>`,

  bonusTexto1N1: `<strong>Aprendiz das Sombras</strong> — <a href="javascript:TC && TC.open && TC.open()">Magia</a> de nível 1 de Escuridão e +1 em Identificar Magia.`,
  bonusTexto1N3: `<strong>Mestre da Penumbra</strong> — <a href="javascript:TC && TC.open && TC.open()">Magia</a> de nível 2 de Escuridão e +1 contra dano de Escuridão.`,
  bonusTexto1N5: `<strong>Guardião da Noite</strong> — <a href="javascript:TC && TC.open && TC.open()">Magia de Escuridão</a> de nível 2 e ataque extra de Escuridão (3 de especial).`,
  bonusTexto1N9: `<strong>Profeta do Eclipse</strong> — <a href="javascript:TC && TC.open && TC.open()">Magia de Escuridão</a> de nível 3 e <strong>Libertação das Sombras</strong>: metade do custo de sanidade em 1 magia (1x por combate).`,
  bonusTexto1N13: `<strong>Arauto das Trevas</strong> — <a href="javascript:TC && TC.open && TC.open()">Magia de Escuridão</a> de nível 4 e +2 de dano com Escuridão.`,
  bonusTexto1N16: `<strong>Sombra Absoluta</strong> — <a href="javascript:TC && TC.open && TC.open()">Magia de Escuridão</a> de nível 4 e +2 em movimento no escuro. Pode causar <strong>Borborigmo</strong> por 1d4 turnos (1x por combate).`,
  bonusTexto1N20: `<strong>Senhor das Sombras Eternas</strong> — +2 em Identificar Magia e escudo sombrio que absorve até 1d8 de dano (1x por turno).`,
  bonusTexto1N22: `<strong>Guardião das Trevas Profundas</strong> — <a href="javascript:TC && TC.open && TC.open()">Magia de Escuridão</a> de nível 5 e ação completa de Escuridão causa <strong>Confusão</strong> em inimigos.`,
  bonusTexto1N25: `<strong>Profeta da Sombra Suprema</strong> — <a href="javascript:TC && TC.open && TC.open()">Magia de Escuridão</a> de nível 6 e ação completa extra (8 de Sanidade).`,

  // ===============================
  // 💀 MALDIZENTE
  // ===============================
  bonustitulo_2: `<p>💀 <strong>Maldizente</strong></p>`,

  bonusTexto2N1: `<strong>Aprendiz da Maldição</strong> — <a href="javascript:TC && TC.open && TC.open()">Magia</a> de nível 1 e passiva <a href="https://terras-de-calisto-ficha-rpg.netlify.app/#tc=p25"><strong>Amaldiçoar</strong></a>.`,
  bonusTexto2N3: `<strong>Portador dos Presságios</strong> — Magia de nível 1 e +1 em dano com Maldição.`,
  bonusTexto2N5: `<strong>Mestre dos Anátemas</strong> — <a href="javascript:TC && TC.open && TC.open()">Magia de Maldição</a> de nível 2 e +1 em testes de Conexão.`,
  bonusTexto2N9: `<strong>Profeta da Ruína</strong> — <a href="javascript:TC && TC.open && TC.open()">Magia de Maldição</a> de nível 3 e <strong>Libertação da Maldição</strong>: metade do custo de sanidade (1x por combate).`,
  bonusTexto2N13: `<strong>Arauto dos Destinos Sombrios</strong> — <a href="javascript:TC && TC.open && TC.open()">Magia de Maldição</a> de nível 3 e +2 de dano em Maldição.`,
  bonusTexto2N16: `<strong>Véu do Fim</strong> — <a href="javascript:TC && TC.open && TC.open()">Magia de Maldição</a> de nível 4 e véu sombrio que concede +2 contra dano físico.`,
  bonusTexto2N20: `<strong>Mestre da Profecia Desoladora</strong> — <a href="javascript:TC && TC.open && TC.open()">Magia de Maldição</a> de nível 4 e pode reduzir dano mágico inimigo em 1d12 (3 de especial).`,
  bonusTexto2N22: `<strong>Guardião dos Destinos Perdidos</strong> — <a href="javascript:TC && TC.open && TC.open()">Magia de Maldição</a> de nível 5, +2 em Conexão e +1d8 de dano com Maldição.`,
  bonusTexto2N25: `<strong>Profeta dos Pesadelos Eternos</strong> — <a href="javascript:TC && TC.open && TC.open()">Magia de Maldição</a> de nível 6 e <strong>Amaldiçoar</strong> inimigo extra (7 de especial). Alvo afetado tem desvantagem para remover maldição.`,

  // ===============================
  // 🌟 DUELISTA DE VARINHAS
  // ===============================
  bonustitulo_3: `<p>🌟 <strong>Duelista de Varinhas</strong></p>`,

  bonusTexto3N1: `<strong>Duelista das Varinhas</strong> — Escolhe varinha: Fé (+1 Determinação), Poder (+1 Libertação), Desconhecido (+1 Conexão), Caos (+1 Preservação). Ganha +1 em combate com varinhas e pode conjurar com elas.`,
  bonusTexto3N3: `<strong>Mago Duelista</strong> — Ataque de varinha causa 2d10 de plasma (2 de especial) e +1 de dano com plasma.`,
  bonusTexto3N5: `<strong>Mestre da Varinha</strong> — +2 em dano de plasma, +1 em Esquiva e libera 2 magias de <a href="javascript:TC && TC.open && TC.open()">Plasma</a> (nível 1–2).`,
  bonusTexto3N9: `<strong>Guerreiro das Bruxarias</strong> — Ataque extra com varinha (4 de especial) e +1 contra magia do Desconhecido.`,
  bonusTexto3N13: `<strong>Arauto das Bruxarias</strong> — +2 em ataques de plasma, reduz custo de sanidade de magias de duelo e ganha 2 magias de plasma (nível 3–4).`,
  bonusTexto3N16: `<strong>Guardião Arcano das Varinhas</strong> — Defesa arcana reduz 1d8 de dano (2 de especial).`,
  bonusTexto3N20: `<strong>Profeta do Plasma Arcano</strong> — +1 em dano com plasma e +2 em Conexão em combates com varinhas.`,
  bonusTexto3N22: `<strong>Guardião do Poder Arcano</strong> — Libera 2 magias de <a href="javascript:TC && TC.open && TC.open()">Plasma</a> (nível 1–6) e pode fazer 2 ataques com varinha na mesma ação (6 de especial).`,
  bonusTexto3N25: `<strong>Mestre Supremo das Varinhas</strong> — +3 em ataques de plasma e ataque final que rebate entre inimigos num raio de 10m (8 de especial).`
}
,
    "Carpinteiro": {
  "vidaPorNivel": 7,
  "sanidadePorNivel": 1,
  "armaduraPorNivel": 1,
  "resistencia": "Tempestade",
  "movimento_pass": 3.5,

  "bonusPass": `
  <p><strong>Nível 0:</strong> Uma ação livre extra por turno.</p>
  `,

  // ===============================
  // ⚒️ CONSTRUTOR IMPROVISADO
  // ===============================
  bonustitulo_1: `<p>⚒️ <strong>Construtor Improvisado</strong></p>`,
  bonusTexto1N1: `<strong>Martelada Bruta</strong> — +1d4 de dano corpo a corpo com madeira (1 de especial).`,
  bonusTexto1N3: `<strong>Bloco de Proteção</strong> — +1 em resistência ao usar madeira como escudo (Passivo).`,
  bonusTexto1N5: `<strong>Força Adaptável</strong> — Regenera 1 de especial após dois turnos com objetos improvisados (Passivo).`,
  bonusTexto1N9: `<strong>Perícia com Improviso</strong> — +1 em ataques com armas improvisadas (Passivo).`,
  bonusTexto1N13: `<strong>Golpe Demolidor</strong> — +1d6 de dano que ignora defesa (3 de especial).`,
  bonusTexto1N16: `<strong>Resistência Férrea</strong> — +2 em resistência física se usar objeto improvisado desde o início (Passivo).`,
  bonusTexto1N20: `<strong>Explosão de Impacto</strong> — +2d6 de dano e chance de atordoar (4 de especial).`,
  bonusTexto1N22: `<strong>Maestria em Improviso</strong> — +1d6 de dano adicional com improvisos e bônus contra ataques à distância (Passivo).`,
  bonusTexto1N25: `<strong>Golpe Devastador</strong> — +2d10 de dano após 3 turnos sem usar habilidades (5 de especial, 1x por combate).`,

  // ===============================
  // 👷‍♂️ ARTESÃO DE BARRICADAS
  // ===============================
  bonustitulo_2: `<p>👷‍♂️ <strong>Artesão de Barricadas</strong></p>`,
  bonusTexto2N1: `<strong>Mini Barricada</strong> — Concede +1 em defesa para aliados por um turno (Sem custo).`,
  bonusTexto2N3: `<strong>Parede de Madeira</strong> — Bloqueia passagem por 2 turnos (2 de especial).`,
  bonusTexto2N5: `<strong>Prendedor Ágil</strong> — +1 em esquiva para aliados próximos ao travar objetos leves (Passivo).`,
  bonusTexto2N9: `<strong>Barreira Resistente</strong> — Barricadas duram +1 turno (Passivo).`,
  bonusTexto2N13: `<strong>Armadilha Surpresa</strong> — +1d6 de dano ao inimigo que atravessa (3 de especial).`,
  bonusTexto2N16: `<strong>Cobertura Completa</strong> — Reduz metade do dano para quem estiver atrás da barreira (4 de especial, 1x por combate).`,
  bonusTexto2N20: `<strong>Estratégia de Distração</strong> — Atrai inimigos com objeto de madeira por 1 turno (2 de especial).`,
  bonusTexto2N22: `<strong>Mestre das Barricadas</strong> — Pode construir 2 barricadas simultaneamente (Passivo).`,
  bonusTexto2N25: `<strong>Catapulta Improvisada</strong> — Lança objetos com +2d10 de dano à distância (5 de especial, 1x por combate).`,

  // ===============================
  // 🪓 GUERREIRO DE MACHADO
  // ===============================
  bonustitulo_3: `<p>🪓 <strong>Guerreiro de Machado</strong></p>`,
  bonusTexto3N1: `<strong>Corte Preciso</strong> — +1d4 de dano adicional com machado (Passivo).`,
  bonusTexto3N3: `<strong>Fúria do Lenhador</strong> — +1 em resistência com golpes rápidos usando machado (Passivo).`,
  bonusTexto3N5: `<strong>Machado Veloz</strong> — +1 em Agilidade ao usar machado (Passivo).`,
  bonusTexto3N9: `<strong>Ataque Sequencial</strong> — +2 de dano ao atingir o mesmo alvo repetidamente (Passivo).`,
  bonusTexto3N13: `<strong>Machado Partidor</strong> — Reduz armadura do alvo em -1 por 2 turnos (2 de especial).`,
  bonusTexto3N16: `<strong>Golpe Devastador</strong> — +1d8 de dano crítico com machado (Passivo).`,
  bonusTexto3N20: `<strong>Equilíbrio de Aço</strong> — +2 em resistência a recuos com machado (Passivo).`,
  bonusTexto3N22: `<strong>Hemorragia Fatal</strong> — Crítico com machado causa +1d10 de dano contínuo (4 de especial).`,
  bonusTexto3N25: `<strong>Mestre do Machado</strong> — Ataque extra com +2d8 de dano (5 de especial, 1x por combate).`
}
,
    "Catador": {
  "vidaPorNivel": 4,
  "sanidadePorNivel": 4,
  "armaduraPorNivel": 1,
  "resistencia": "Alma",
  "movimento_pass": 3.5,

  "bonusPass": `
  <p><strong>Nível 0:</strong> Cada órgão adiciona +1 invocação extra. Magia <strong><a href="https://terras-de-calisto-ficha-rpg.netlify.app/#tc=m69">LEVANTA</a></strong> sem custo uma vez por dia.</p>
  `,

  // ===============================
  // ⚰️ NECROMANTE
  // ===============================
  bonustitulo_1: `<p>⚰️ <strong>Necromante</strong></p>`,

  bonusTexto1N1: `<strong>Eco dos Mortos</strong> — Cada órgão coletado concede +1 em resistência a medo e intimidação. Magia <a href="https://terras-de-calisto-ficha-rpg.netlify.app/#tc=m69">LEVANTA</a> 2x/dia sem custo. +2 de movimento em terrenos com corpos.`,
  bonusTexto1N3: `<strong>Alimento das Sombras</strong> — Absorver um cadáver recupera 1d4 de sanidade (até 3x por dia).`,
  bonusTexto1N5: `<strong>Aura Cadavérica</strong> — Reduz o dano recebido em 2 por inimigo morto próximo (4 de especial, dura até o fim do combate).`,
  bonusTexto1N9: `<strong>Colecionador de Almas Perdidas</strong> — Armazena essência por 1d10 turnos, recebe -2 de dano contra sangue e luz.`,
  bonusTexto1N13: `<strong>Devorador de Essências</strong> — Drena 1d20 de sanidade de um cadáver e aplica a si ou a um aliado (1x por combate).`,
  bonusTexto1N16: `<strong>Aura de Terror</strong> — +3 em intimidação passiva com inimigos abaixo de metade de vida. Aplica <strong>desvantagem</strong> em ataques corpo a corpo contra você (2 de especial).`,
  bonusTexto1N20: `<strong>Fortificação Cadavérica</strong> — Habilidade única “Muralha de Ossos”: reduz dano à distância em 2d8 por 3 turnos (6 de sanidade).`,
  bonusTexto1N22: `<strong>Ceifeiro dos Defuntos</strong> — Habilidade única “Sangue Morto”: drena vitalidade de cadáver e recupera 2d20 de vida (6 de sanidade).`,
  bonusTexto1N25: `<strong>Guardião da Sombra Eterna</strong> — Habilidade única “Escudo Profano”: absorve metade do dano por um turno e transforma em +1d10 de ataque no turno seguinte (12 de sanidade).`,

  // ===============================
  // 🏺 COLECIONADOR
  // ===============================
  bonustitulo_2: `<p>🏺 <strong>Colecionador</strong></p>`,

  bonusTexto2N1: `<strong>Coleção Sagrada</strong> — Marca até 2 itens “sagrados” com aura rosa. Ganham vantagem em Agilidade e levitam até você. +4 de dano de Aura.`,
  bonusTexto2N3: `<strong>Guardião dos Tesouros</strong> — +1 em Ofício. Habilidade <a href="https://terras-de-calisto-ficha-rpg.netlify.app/#tc=p33"><strong>Réplica Imperfeita</strong></a> permite copiar itens em posse.`,
  bonusTexto2N5: `<strong>Mestre dos Artefatos</strong> — Terceiro slot sagrado. +1d4 de dano em ataques com os itens.`,
  bonusTexto2N9: `<strong>Saqueador Experiente</strong> — +2 em Ofício. “Roubo Sombrio”: rouba item de inimigo distraído (6 de especial).`,
  bonusTexto2N13: `<strong>Guardião de Relíquias Antigas</strong> — +1 de armadura por item ativo da coleção sagrada.`,
  bonusTexto2N16: `<strong>Santuário dos Artefatos Perdidos</strong> — +3 de dano com itens sagrados e +1 em Agilidade ao manipulá-los.`,
  bonusTexto2N20: `<strong>Levitação Perfeita</strong> — “Chamada dos Artefatos”: atrai todos os itens num raio de 15m (5 de sanidade).`,
  bonusTexto2N22: `<strong>Guardião Supremo dos Tesouros</strong> — “Proteção Sagrada”: reduz dano recebido em 2d8 com item sagrado ativo (8 de sanidade).`,
  bonusTexto2N25: `<strong>Senhor da Coleção Sagrada</strong> — “Roubo Fantasmagórico”: rouba 1 item mágico do inimigo temporariamente (10 de sanidade).`,

  // ===============================
  // 🩸 SANGUINÁRIO
  // ===============================
  bonustitulo_3: `<p>🩸 <strong>Sanguinário</strong></p>`,

  bonusTexto3N1: `<strong>Guerreiro de Ossos</strong> — Cada órgão coletado dá +1 em ataques corpo a corpo. Passiva: <a href=https://terrasdecalistoficha.wordpress.com/ainda-em-criacao-passivas/#:~:text=Dilacera%20e%20atacar><strong>Dilacera e Atacar</strong></a>.`,
  bonusTexto3N3: `<strong>Punhos Macabros</strong> — +1 em Preservação e +1d4 de dano com partes do corpo.`,
  bonusTexto3N5: `<strong>Mestre dos Ossos</strong> — Magia <a href="https://terras-de-calisto-ficha-rpg.netlify.app/#tc=m6"><strong>Órgãos Sombrios</strong></a>. Aumenta dano físico em +2 (1x por combate, 3 de sanidade).`,
  bonusTexto3N9: `<strong>Destruidor de Corpos</strong> — +2 de dano e +1 em resistência a cada ataque com partes corporais.`,
  bonusTexto3N13: `<strong>Arauto da Carne Profana</strong> — +2 em Preservação e +1 em Defesa ao atacar com partes corporais.`,
  bonusTexto3N16: `<strong>Ceifador dos Mortos-Vivos</strong> — +1d6 de dano com órgãos e imunidade a paralisia.`,
  bonusTexto3N20: `<strong>Impacto Demolidor</strong> — “Esmagamento Cadavérico”: +3d8 de dano e ignora armadura (6 de sanidade).`,
  bonusTexto3N22: `<strong>Guerreiro das Sombras Corpóreas</strong> — “Fúria dos Ossos”: +1d12 de dano corpo a corpo por 1 turno.`,
  bonusTexto3N25: `<strong>Avatar da Destruição Cadavérica</strong> — “Desmembramento Fatal”: ataque devastador com sangramento de 2d10 por 3 turnos (2 de especial).`
}
,
   "Colosso": {
  "vidaPorNivel": 8,
  "sanidadePorNivel": 0,
  "armaduraPorNivel": 4,
  "resistencia": "Esmagante",
  "movimento_pass": 3.5,

  "bonusPass": `
  <p><strong>Nível 0:</strong> Passiva <strong><a href="https://terras-de-calisto-ficha-rpg.netlify.app/#tc=p4">Armadura Sobrenatural</a></strong> sem custo uma vez por dia.</p>
  `,

  // ===============================
  // 🦾 GUARDIÃO DE FERRO
  // ===============================
  bonustitulo_1: `<p>🦾 <strong>Guardião de Ferro</strong></p>`,

  bonusTexto1N1: `<strong>Resiliência do Colosso</strong> — Resistência contra dano cortante e +1 de armadura.`,
  bonusTexto1N3: `<strong>Pele de Pedra</strong> — Reduz dano de esmagamento em 2.`,
  bonusTexto1N5: `<strong>Barreira Implacável</strong> — “Defesa Absoluta”: bloqueia totalmente o próximo ataque (4 de especial).`,
  bonusTexto1N9: `<strong>Fortificação Permanente</strong> — +1 de armadura ao permanecer parado por 1 turno.`,
  bonusTexto1N13: `<strong>Muralha do Colosso</strong> — “Defesa Profunda”: redireciona 1d12 de dano para proteger aliados (6 de especial).`,
  bonusTexto1N16: `<strong>Resiliência Sobrenatural</strong> — Resistência permanente a perfuração ao usar armadura pesada.`,
  bonusTexto1N20: `<strong>Aegis Sagrada</strong> — “Escudo Final”: absorve até 2d12 de dano (8 de especial).`,
  bonusTexto1N22: `<strong>Muralha de Aço Vivo</strong> — Bloqueia ataques contra aliados 1x por turno e ganha +2 em armadura ao bloquear.`,
  bonusTexto1N25: `<strong>Guardião Inquebrável</strong> — “Proteção Ancestral”: nega o dano de um ataque e reflete 1d10 de volta (12 de especial).`,

  // ===============================
  // 💪 DOMINADOR
  // ===============================
  bonustitulo_2: `<p>💪 <strong>Dominador</strong></p>`,

  bonusTexto2N1: `<strong>Força Inigualável</strong> — +2 em Brutalidade e agarrões; cada sucesso gera 1 especial temporário.`,
  bonusTexto2N3: `<strong>Domínio de Impacto</strong> — +2 de dano esmagante ao empurrar ou agarrar.`,
  bonusTexto2N5: `<strong>Investida Destruidora</strong> — “Investida do Colosso”: empurra inimigo 5m e causa 1d4 (4 de especial).`,
  bonusTexto2N9: `<strong>Agarrão Sobrenatural</strong> — +2 em Brutalidade ao manter inimigo agarrado.`,
  bonusTexto2N13: `<strong>Golpe Desestabilizador</strong> — “Confusão Brutal”: causa confusão por 1 turno (2 de especial).`,
  bonusTexto2N16: `<strong>Presença Imponente</strong> — +3 de dano ao empurrar ou arrastar oponentes.`,
  bonusTexto2N20: `<strong>Força dos Antigos</strong> — “Força Ancestral”: +4 em Brutalidade e arrasta inimigo 5m (8 de especial).`,
  bonusTexto2N22: `<strong>Poder de Controle Total</strong> — Ao empurrar um inimigo, realiza um ataque adicional no mesmo turno.`,
  bonusTexto2N25: `<strong>Sufocamento Final</strong> — “Agarre Inescapável”: imobiliza e causa 3d12 de dano (12 de especial).`,

  // ===============================
  // 👑 VINGANÇA AO REI
  // ===============================
  bonustitulo_3: `<p>👑 <strong>Vingança ao Rei</strong></p>`,

  bonusTexto3N1: `<strong>Postura de Vingança</strong> — +2 de armadura ao bloquear corpo a corpo. Passiva <a href="https://terras-de-calisto-ficha-rpg.netlify.app/#tc=p8"><strong>Vingança</strong></a> 1x por combate.`,
  bonusTexto3N3: `<strong>Retaliação Agressiva</strong> — +2 de dano em resposta a ataques recebidos.`,
  bonusTexto3N5: `<strong>Escudo Defensivo</strong> — “Escudo Contra Golpes”: bloqueia ataque e revida com ataque completo (8 de especial).`,
  bonusTexto3N9: `<strong>Firmeza Sobrenatural</strong> — +3 em Brutalidade contra empurrões e agarrões.`,
  bonusTexto3N13: `<strong>Contragolpe Devastador</strong> — “Destruição Reflexa”: causa o dobro do dano em resposta a ataque falho (12 de especial).`,
  bonusTexto3N16: `<strong>Reflexo de Ferro</strong> — +4 de dano em contra-ataques corpo a corpo.`,
  bonusTexto3N20: `<strong>Braço da Retaliação</strong> — “Justiça Implacável”: bloqueia e devolve ataque poderoso (13 de especial).`,
  bonusTexto3N22: `<strong>Reflexo Sobrenatural</strong> — Usa bônus de Agilidade em contra-ataques e pode revidar a cada vez que for atacado.`,
  bonusTexto3N25: `<strong>Golpe de Vingança Suprema</strong> — “Juízo do Colosso”: 4d10 de dano extra no contra-ataque e derruba o inimigo (18 de especial).`
}
,"Conjurador": { 
  "vidaPorNivel": 5,
  "sanidadePorNivel": 3,
  "armaduraPorNivel": 1,
  "resistencia": "Distorção",
  "movimento_pass": 4.5,

  "bonusPass": `
  <p><strong>Nível 0:</strong> <strong>Passivas</strong> e <strong>Magias</strong> têm custo reduzido baseado em 1d6, válido por combate.</p>
  `,

  // ===============================
  // ⚔️ ESPADACHIM ARCANO
  // ===============================
  bonustitulo_1: `<p>⚔️ <strong>Espadachim Arcano</strong></p>`,

  bonusTexto1N1: `<strong>Lampejo Arcano</strong> — Conjura magia pela espada. +2 em ataques corpo a corpo ao canalizar.`,
  bonusTexto1N3: `<strong>Corte Espectral</strong> — <a href="https://terras-de-calisto-ficha-rpg.netlify.app/#tc=p37"><strong>Aura Manifestada</strong></a> + investida de 6m com 3d6 de dano e derruba (3 de especial).`,
  bonusTexto1N5: `<strong>Discípulo do Raio Fendido</strong> — Aprende 2 magias nível 1–2 do tipo <a href="javascript:TC && TC.open && TC.open()">Laser</a>; +1 em Conexão com espada.`,
  bonusTexto1N9: `<strong>Plasma Pulsante</strong> — Corte com 2d8 adicionais de <strong>Plasma</strong> por 2 turnos (3 de especial).`,
  bonusTexto1N13: `<strong>Golpe Espiritual</strong> — Reduz 3 de armadura no acerto (4 de especial).`,
  bonusTexto1N16: `<strong>Manifesto dos Sentinelas Invisíveis</strong> — Aprende 2 magias nível 2–3 do tipo <a href="javascript:TC && TC.open && TC.open()">Aura</a>, pode conjurar 1 delas 1x/dia sem custo.`,
  bonusTexto1N20: `<strong>Lâmina da Extinção</strong> — Aprende 2 magias nível 3–4 do tipo <a href="javascript:TC && TC.open && TC.open()">Plasma</a>, +2 em Conexão com espada.`,
  bonusTexto1N22: `<strong>Corte da Condenação</strong> — Aprende 2 magias nível 4–5 do tipo <a href="javascript:TC && TC.open && TC.open()">Morte</a>; golpe final causa 2d10 e impede cura por 1 turno.`,
  bonusTexto1N25: `<strong>Assalto Arcano</strong> — Aprende 1 <a href="javascript:TC && TC.open && TC.open()">Magia</a> nível 6 (<strong>Plasma</strong>, <strong>Laser</strong>, <strong>Aura</strong> ou <strong>Morte</strong>); realiza 3 ataques com +1d12 de dano mágico.`,

  // ===============================
  // 👻 INVOCADOR DAS SOMBRAS
  // ===============================
  bonustitulo_2: `<p>👻 <strong>Invocador das Sombras</strong></p>`,

  bonusTexto2N1: `<strong>Sombras Profundas</strong> — +2 em Conexão e Libertação para magias de <strong>Escuridão</strong> ou <strong>Alma</strong>.`,
  bonusTexto2N3: `<strong>Véu da Distopia</strong> — Passiva <a href="https://terras-de-calisto-ficha-rpg.netlify.app/#tc=p34"><strong>Sombra da Distopia</strong></a> para ocultação em baixa luz.`,
  bonusTexto2N5: `<strong>Golpe da Alma Perdida</strong> — Ataque causa +4d6 de dano <strong>Alma</strong> (2 de especial).`,
  bonusTexto2N9: `<strong>Chamado das Trevas</strong> — +2 em Conexão e Libertação para <strong>Escuridão</strong>.`,
  bonusTexto2N13: `<strong>Laço Obscuro</strong> — Reduz armadura do alvo em 2 por 2 turnos (3 de especial).`,
  bonusTexto2N16: `<strong>Passagem Oculta</strong> — Intangível por 2 turnos, imune a dano físico (6 de especial).`,
  bonusTexto2N20: `<strong>Maestria Sombria</strong> — Ganha 3 <a href="javascript:TC && TC.open && TC.open()">magias</a> nível 1–4 de <strong>Escuridão</strong> ou <strong>Alma</strong> (1x/dia, sem custo).`,
  bonusTexto2N22: `<strong>Profundezas da Alma</strong> — Absorve +3d6 de sanidade com habilidades de <strong>Alma</strong> ou <strong>Escuridão</strong> (passivo).`,
  bonusTexto2N25: `<strong>Avanço da Penumbra</strong> — Véu sombrio: +4d8 de armadura por 10 turnos e Pavor em inimigos (1x por combate).`,

  // ===============================
  // 🌪️ CONJURAÇÃO CAÓTICA
  // ===============================
  bonustitulo_3: `<p>🌪️ <strong>Conjuração Caótica</strong></p>`,

  bonusTexto3N1: `<strong>Estudo Elemental</strong> — +2 em <a href="javascript:TC && TC.open && TC.open()">magias</a> de nível 1–2 dos elementos <strong>Fogo</strong>, <strong>Gelo</strong>, <strong>Água</strong> e <strong>Eletricidade</strong>.`,
  bonusTexto3N3: `<strong>Chama Persistente</strong> — Rajada causa 2d8 de dano de <strong>Fogo</strong> por 2 turnos (6 de especial).`,
  bonusTexto3N5: `<strong>Toque Gélido</strong> — Aura de <strong>Gelo</strong> reduz pela metade o movimento inimigo por 1 turno.`,
  bonusTexto3N9: `<strong>Tempestade Condutora</strong> — Tempestade causa 1d12 de dano de <strong>Eletricidade</strong> em área (4 de especial).`,
  bonusTexto3N13: `<strong>Escudo Caótico</strong> — <strong>Água</strong> protege contra dano de Caos por 2 turnos.`,
  bonusTexto3N16: `<strong>Maestria Elemental</strong> — Ganha 3 <a href="javascript:TC && TC.open && TC.open()">magias</a> nível 1–4 de <strong>Fogo</strong>, <strong>Gelo</strong>, <strong>Água</strong> ou <strong>Eletricidade</strong> (1x/dia sem custo).`,
  bonusTexto3N20: `<strong>Vórtice de Gelo</strong> — Empurra inimigos 3m e causa 3d8 de <strong>Gelo</strong> (3 de especial).`,
  bonusTexto3N22: `<strong>Caos Elemental</strong> — Magias de dano ganham +1d8 adicional de <strong>Fogo</strong>, <strong>Gelo</strong>, <strong>Água</strong> ou <strong>Eletricidade</strong>.`,
  bonusTexto3N25: `<strong>Mestre Elemental</strong> — Libera 4 <a href="javascript:TC && TC.open && TC.open()">magias</a> de nível 1–5 dos <strong>elementos</strong> e pode usar uma 1x/dia sem custo.`
}
,"Costeiro": { 
  "vidaPorNivel": 6,
  "sanidadePorNivel": 2,
  "armaduraPorNivel": 3,
  "resistencia": "Água",
  "movimento_pass": 4.5,

  "bonusPass": `
  <p><strong>Nível 0:</strong> +1d6 com <strong>porretes</strong> ou <strong>katanas</strong>, +2 de <strong>armadura</strong> e não pode ser <strong>Desarmado</strong>.</p>
  `,

  // ===============================
  // 🌊 MARÉS CORTANTES
  // ===============================
  bonustitulo_1: `<p>🌊 <strong>Marés Cortantes</strong></p>`,

  bonusTexto1N1: `<strong>Toque das Ondas</strong> — +1 em ataque com <strong>katana</strong>; +1d4 de <strong>dano de água</strong> (1 de especial).`,
  bonusTexto1N3: `<strong>Redemoinho Fluido</strong> — Ao acertar dois ataques consecutivos, +1 no próximo ataque.`,
  bonusTexto1N5: `<strong>Fúria das Marés</strong> — Adiciona +1d8 de <strong>dano de água</strong> em arma por dois turnos (2 de especial).`,
  bonusTexto1N9: `<strong>Correnteza Precisa</strong> — +1 em <strong>Esquiva</strong> e +2 em ataques com katana ao usar <strong>dano de água</strong>.`,
  bonusTexto1N13: `<strong>Maré Inquebrável</strong> — Reduz o dano recebido pela metade por 1 turno (3 de especial).`,
  bonusTexto1N16: `<strong>Pressão Submersa</strong> — Ataques com <strong>katana</strong> causam <strong>Debilitado</strong> se o alvo não tiver resistência à <strong>água</strong>.`,
  bonusTexto1N20: `<strong>Ritmo da Maré</strong> — Ao acertar três ataques consecutivos, realiza 1 ataque adicional (passivo).`,
  bonusTexto1N22: `<strong>Corte Torrencial</strong> — Aumenta o <strong>dano de água</strong> em +1d12 por três turnos (3 de especial).`,
  bonusTexto1N25: `<strong>Último Suspiro da Correnteza</strong> — Ação extra com +4d10 de <strong>dano de água</strong> (1x por combate).`,

  // ===============================
  // 🌀 FORÇA DAS MARÉS
  // ===============================
  bonustitulo_2: `<p>🌀 <strong>Força das Marés</strong></p>`,

  bonusTexto2N1: `<strong>Golpe Contundente</strong> — +3 em ataque com <strong>porrete</strong> e +1d4 de <strong>dano esmagante</strong> (1 de especial).`,
  bonusTexto2N3: `<strong>Ataque de Oportunidade</strong> — Reação contra inimigo que sai do alcance. +2 em acerto; inimigo faz teste de <strong>agilidade</strong>.`,
  bonusTexto2N5: `<strong>Vingança das Ondas</strong> — Adiciona +1d12 de <strong>dano esmagante</strong> em reações (2 de especial).`,
  bonusTexto2N9: `<strong>Rastro de Destroços</strong> — Ao atingir inimigo em movimento, recebe +5 de <strong>dano esmagante</strong> por dois turnos.`,
  bonusTexto2N13: `<strong>Defesa das Marés</strong> — Golpe de reação que causa +3d8 de <strong>dano esmagador</strong> ao inimigo que não atacou (3 de especial).`,
  bonusTexto2N16: `<strong>Investida da Correnteza</strong> — Ação adicional com 4d8 de <strong>dano esmagante</strong> e deixa o alvo <strong>Caído</strong> (5 de especial, teste de agilidade).`,
  bonusTexto2N20: `<strong>Muralha Intransponível</strong> — Se ignorado por mais de um inimigo, ganha +2 de <strong>armadura</strong> e +2 de <strong>dano de água</strong> em reações.`,
  bonusTexto2N22: `<strong>Impacto das Profundezas</strong> — Ao derrubar um inimigo, recebe um ataque livre extra.`,
  bonusTexto2N25: `<strong>Força Brutal da Maré</strong> — Ação completa extra + 1 ataque reativo com +3d10 de <strong>dano</strong> (1x por combate).`,

  // ===============================
  // 💧 CORRENTEZA MÍSTICA – HIDROMANTE
  // ===============================
  bonustitulo_3: `<p>💧 <strong>Correnteza Mística – Hidromante</strong></p>`,

  bonusTexto3N1: `<strong>Iniciado da Maré</strong> — Ganha uma <a href="javascript:TC && TC.open && TC.open()">Magia</a> Água Nível 1.`,
  bonusTexto3N3: `<strong>Tecelão das Correntes</strong> — Ganha uma <a href="javascript:TC && TC.open && TC.open()">Magia</a> Água Nível 2 e +1 em <strong>Preservação</strong> com magias de água.`,
  bonusTexto3N5: `<strong>Senhor dos Rios</strong> — Ganha uma <a href="javascript:TC && TC.open && TC.open()">Magia</a> Água Nível 3 e recupera 2 de <strong>sanidade</strong> ao acertar ataque aquático.`,
  bonusTexto3N9: `<strong>Guardião dos Oceanos</strong> — Ganha uma <a href="javascript:TC && TC.open && TC.open()">Magia</a> Água Nível 4</strong></a> e adiciona +1d8 de <strong>dano de água</strong> em magias (2 de sanidade).`,
  bonusTexto3N13: `<strong>Profeta das Profundezas</strong> — Ganha uma <a href="javascript:TC && TC.open && TC.open()">Magia</a> Água Nível 5 e +2 em <strong>armadura</strong> por 5 turnos ao conjurar.`,
  bonusTexto3N16: `<strong>Aura da Hidrocinese</strong> — +3 de <strong>dano</strong> com magias e -2 de <strong>sanidade</strong> no custo por 3 turnos (6 de especial).`,
  bonusTexto3N20: `<strong>Chamada do Abismo</strong> — Recupera +1d12 de <strong>sanidade</strong> ao fim do combate se usou magia de água.`,
  bonusTexto3N22: `<strong>Guardião das Marés</strong> — Ao conjurar <strong>magia de água</strong>, recebe -2 de <strong>dano de ataques elementais</strong> (fé, desconhecido, poder) por 2 turnos.`,
  bonusTexto3N25: `<strong>Mestre da Correnteza</strong> — Duas vezes por combate, lança uma <strong>Magia de Água até Nível 5</strong> sem custo de sanidade.`
},"Criatura": { 
  "vidaPorNivel": 7,
  "sanidadePorNivel": 1,
  "armaduraPorNivel": 4,
  "resistencia": "Gelo",
  "movimento_pass": 4.5,

  "bonusPass": `
  <p><strong>Nível 0:</strong> Passiva <strong><a href="https://terras-de-calisto-ficha-rpg.netlify.app/#tc=p13">Pavor</a></strong> com custo removido uma vez por dia ou sem efeito colateral.</p>
  `,

  // ===============================
  // 🦍 FÚRIA PRIMORDIAL
  // ===============================
  bonustitulo_1: `<p>🦍 <strong>Fúria Primordial</strong></p>`,

  bonusTexto1N1: `<strong>Golpe Selvagem</strong> — +1 em <strong>Brutalidade</strong> e +2 de dano corpo a corpo (1 de especial).`,
  bonusTexto1N3: `<strong>Investida Brutal</strong> — Após ataque bem-sucedido, teste de <strong>Brutalidade</strong> concede ataque adicional (2 de especial).`,
  bonusTexto1N5: `<strong>Fúria Incontrolável</strong> — +1d6 de dano bruto corpo a corpo quando com menos de metade da vida.`,
  bonusTexto1N9: `<strong>Resiliência Selvagem</strong> — Reduz metade do dano de um ataque (3 de especial, 1x por combate).`,
  bonusTexto1N13: `<strong>Ira Devastadora</strong> — Ganha a passiva <strong><a href="https://terras-de-calisto-ficha-rpg.netlify.app/#tc=p14">Raiva</a></strong>, ativável 2x por dia sem custo.`,
  bonusTexto1N16: `<strong>Força Descomunal</strong> — +3 em <strong>Brutalidade</strong> e +1d10 em críticos.`,
  bonusTexto1N20: `<strong>Estouro de Poder</strong> — Executa dois ataques extras em uma ação completa (5 de especial, 1x por combate).`,
  bonusTexto1N22: `<strong>Predador Incansável</strong> — Ao derrotar inimigo, recupera 2 de especial e ganha ação de movimento grátis.`,
  bonusTexto1N25: `<strong>Carnificina Absoluta</strong> — Gira e atinge todos a 2m com 3d10 de dano bruto (7 de especial, 1x por combate).`,

  // ===============================
  // 🐉 CAUDA LETAL
  // ===============================
  bonustitulo_2: `<p>🐉 <strong>Cauda Letal</strong></p>`,

  bonusTexto2N1: `<strong>Chicote Natural</strong> — +1 em <strong>Brutalidade</strong>. Cauda causa 1d12+1d6 de dano (1 de especial, corpo a corpo).`,
  bonusTexto2N3: `<strong>Presença Intimidadora</strong> — Ataques com cauda reduzem precisão do alvo em -1.`,
  bonusTexto2N5: `<strong>Golpe Estonteante</strong> — Ataque com cauda impede movimento do alvo por 1 turno (3 de especial).`,
  bonusTexto2N9: `<strong>Barreira Instintiva</strong> — Reduz metade do dano recebido ao bloquear com cauda (2 de especial por bloqueio).`,
  bonusTexto2N13: `<strong>Círculo de Espinhos</strong> — Ataque em área com a cauda em 3m, causando +1d8 (4 de especial).`,
  bonusTexto2N16: `<strong>Reflexos Predatórios</strong> — Ao evitar um ataque, revida automaticamente com cauda (3 de especial).`,
  bonusTexto2N20: `<strong>Flagelo Impiedoso</strong> — Ataque em área com cauda causa 2d8 de dano e empurra 3m (5 de especial, 1x por combate).`,
  bonusTexto2N22: `<strong>Cauda Sombria</strong> — +2 em <strong>Furtividade</strong> e +1d10 em ataques furtivos com cauda.`,
  bonusTexto2N25: `<strong>Destruição Implacável</strong> — Cone de 6m com 3d10 de dano e derrubada dos alvos (7 de especial).`,

  // ===============================
  // 🦊 ÁGIL E PREDATÓRIO
  // ===============================
  bonustitulo_3: `<p>🦊 <strong>Ágil e Predatório</strong></p>`,

  bonusTexto3N1: `<strong>Movimentos Ágeis</strong> — +2 em <strong>Furtividade</strong> e <strong>Acrobacia</strong>.`,
  bonusTexto3N3: `<strong>Instinto Selvagem</strong> — Ganha a passiva <strong><a href="https://terras-de-calisto-ficha-rpg.netlify.app/#tc=p1">Consumir</a></strong>, ativável sem custo 1x por combate.`,
  bonusTexto3N5: `<strong>Golpe Preciso</strong> — Ataques furtivos causam +1d6 adicional contra inimigos desatentos (1 de especial).`,
  bonusTexto3N9: `<strong>Velocidade Predatória</strong> — Ganha ação de movimento adicional (2 de especial).`,
  bonusTexto3N13: `<strong>Fúria Controlada</strong> — Ganha a passiva <strong><a href="https://terras-de-calisto-ficha-rpg.netlify.app/#tc=p14">Raiva</a></strong>.`,
  bonusTexto3N16: `<strong>Predador das Sombras</strong> — +3 em <strong>Furtividade</strong>; ataques furtivos ignoram resistências (3 de especial).`,
  bonusTexto3N20: `<strong>Vantagem Natural</strong> — Ao passar em teste de <strong>Acrobacia</strong> ou <strong>Furtividade</strong>, ganha ataque livre (1x por turno).`,
  bonusTexto3N22: `<strong>Caçador das Profundezas</strong> — +3 em <strong>Enganação</strong> e <strong>Intimidação</strong> contra inimigos solitários.`,
  bonusTexto3N25: `<strong>Golpe Impecável</strong> — Primeiro acerto contra inimigo isolado é crítico automático com +3d12 de dano (5 de especial, 1x por combate).`
}

,"Duelista": { 
  "vidaPorNivel": 7,
  "sanidadePorNivel": 1,
  "armaduraPorNivel": 1,
  "resistencia": "Perfurante",
  "movimento_pass": 4,

  "bonusPass": `
  <p><strong>Nível 0:</strong> +1d10 de <strong>dano</strong> contra <strong>alvos isolados</strong> (sem ninguém próximo de 10m) e +4 em <strong>testes de Furtividade</strong>.</p>
  `,

  // ===============================
  // 🗡️ ESPADACHIM SOLITÁRIO
  // ===============================
  bonustitulo_1: `<p>🗡️ <strong>Espadachim Solitário</strong></p>`,

  bonusTexto1N1: `<strong>Foco do Duelista</strong> — +2 de <strong>dano</strong> e +1 em <strong>testes de ataque</strong> contra <strong>inimigos isolados</strong>.`,
  bonusTexto1N3: `<strong>Estocada Perfeita</strong> — 1x por turno, +1d6 de <strong>dano</strong> ao atingir <strong>alvo isolado</strong> com <strong>rapiera</strong>.`,
  bonusTexto1N5: `<strong>Resistência da Solidão</strong> — Sem aliados/inimigos por perto, +2 em <strong>armadura</strong> contra ataques diretos.`,
  bonusTexto1N9: `<strong>Rapidez Refinada</strong> — <strong>Ação de ataque adicional</strong> contra inimigo isolado (1x por combate).`,
  bonusTexto1N13: `<strong>Precisão Mortal</strong> — <strong>Críticos</strong> com <strong>rapiera</strong> causam +2d8 em <strong>alvos isolados</strong>.`,
  bonusTexto1N16: `<strong>Arte do Duelista</strong> — +3 em <strong>Acrobacia</strong> enfrentando <strong>inimigos isolados</strong>.`,
  bonusTexto1N20: `<strong>Supremacia Solitária</strong> — Ignora 5 de <strong>armadura</strong> de <strong>inimigo único</strong>.`,
  bonusTexto1N22: `<strong>Dança das Lâminas</strong> — Dois ataques extras contra <strong>isolado</strong> (4 <strong>especial</strong>, 1x por combate).`,
  bonusTexto1N25: `<strong>Corte Final</strong> — <strong>Ataque mortal</strong> com +4d10 e ignora <strong>armadura</strong> (5 <strong>especial</strong>, 1x por combate).`,

  // ===============================
  // ⚔️ CONVITE AO DUELO
  // ===============================
  bonustitulo_2: `<p>⚔️ <strong>Convite ao Duelo</strong></p>`,

  bonusTexto2N1: `<strong>Marca do Duelo</strong> — Marca 1 <strong>alvo</strong> (1 <strong>especial</strong>); +2 em <strong>ataque</strong> e +3 de <strong>dano de Escuridão</strong> contra ele.`,
  bonusTexto2N3: `<strong>Bravura Crescente</strong> — Cada <strong>inimigo vencido</strong> no duelo concede +1 permanente em <strong>testes de ataque</strong>.`,
  bonusTexto2N5: `<strong>Defesa do Desafiante</strong> — Reduz em metade o <strong>dano recebido</strong> no duelo (2 <strong>especial</strong>).`,
  bonusTexto2N9: `<strong>Golpe Honrado</strong> — +1d8 de <strong>dano</strong> em <strong>críticos</strong> contra <strong>alvo do duelo</strong>.`,
  bonusTexto2N13: `<strong>Vontade Invencível</strong> — Enquanto <strong>invicto</strong>: +2 em todos os <strong>testes de resistência</strong>.`,
  bonusTexto2N16: `<strong>Provocação Mortal</strong> — Pode chamar 1 segundo <strong>alvo</strong> para duelo (3 <strong>especial</strong>).`,
  bonusTexto2N20: `<strong>Maestria do Desafio</strong> — Ignora 6 de <strong>armadura</strong> de <strong>marcados</strong> e libera <strong><a href="https://terras-de-calisto-ficha-rpg.netlify.app/#tc=p8">Vingança</a></strong>.`,
  bonusTexto2N22: `<strong>Corte Vitorioso</strong> — Ao derrotar um <strong>duelista</strong>: +3 <strong>especial</strong> e 1 <strong>ação de movimento</strong> extra.`,
  bonusTexto2N25: `<strong>Campeão Invicto</strong> — Enquanto <strong>invicto</strong>: +4 em <strong>ataque</strong> e <strong>resistência</strong>. Pode causar +6d10 (1x por combate).`,

  // ===============================
  // 🕶️ ASSASSINO FURTIVO
  // ===============================
  bonustitulo_3: `<p>🕶️ <strong>Assassino Furtivo</strong></p>`,

  bonusTexto3N1: `<strong>Silêncio Mortal</strong> — +2 em <strong>Furtividade</strong> e +1d4 em <strong>ataques furtivos</strong> contra <strong>isolados</strong>.`,
  bonusTexto3N3: `<strong>Predador Sutil</strong> — Ao eliminar <strong>alvo isolado</strong> furtivamente, recupera 2 <strong>especial</strong>.`,
  bonusTexto3N5: `<strong>Movimentos Sombrios</strong> — +2 em <strong>Acrobacia</strong> e ganha <strong>ação de movimento furtiva</strong> extra.`,
  bonusTexto3N9: `<strong>Lâmina Oculta</strong> — <strong>Adagas furtivas</strong> causam +1d6 em <strong>alvos isolados</strong>.`,
  bonusTexto3N13: `<strong>Instinto de Sobrevivência</strong> — Sozinho, recebe +2 em <strong>Agilidade</strong>.`,
  bonusTexto3N16: `<strong>Golpe Preciso</strong> — Ignora metade da <strong>armadura</strong> em <strong>ataques furtivos</strong>.`,
  bonusTexto3N20: `<strong>Mestre da Sombra</strong> — Ataca e se move furtivamente contra <strong>alvo isolado</strong> (2 <strong>especial</strong>).`,
  bonusTexto3N22: `<strong>Execução Silenciosa</strong> — <strong>Crítico automático</strong> contra <strong>isolado</strong> (4 <strong>especial</strong>, 1x por combate).`,
  bonusTexto3N25: `<strong>Fim das Sombras</strong> — <strong>Ataque mortal</strong> com +6d8 em <strong>isolado</strong>. Movimento sem ser detectado por 1 turno (5 <strong>especial</strong>).`
}
,"Escudeiro": { 
  "vidaPorNivel": 7,
  "sanidadePorNivel": 1,
  "armaduraPorNivel": 3,
  "resistencia": "Esmagante",
  "movimento_pass": 3.5,

  "bonusPass": `
  <p><strong>Nível 0:</strong> +4 de dano com escudo. Passiva <strong><a href="https://terras-de-calisto-ficha-rpg.netlify.app/#tc=p6">Emanar Energia</a></strong> sem negativo e sem custo 1x por dia.</p>
  `,

  // ===============================
  // 🛡️ BASTIÃO IMÓVEL
  // ===============================
  bonustitulo_1: `<p>🛡️ <strong>Bastião Imóvel</strong></p>`,

  bonusTexto1N1: `<strong>Muralha de Ferro</strong> — +2 de <strong>armadura</strong> com escudo. Libera a passiva <strong><a href="https://terras-de-calisto-ficha-rpg.netlify.app/#tc=p11">Sonambulismo</a></strong>, permitindo bloquear até dormindo e reduzindo o dano pela metade.`,
  bonusTexto1N3: `<strong>Postura Inabalável</strong> — Resistência a dano <strong>esmagante</strong> e cortante enquanto em defesa.`,
  bonusTexto1N5: `<strong>Aura de Proteção</strong> — Libera a magia <strong><a href="https://terras-de-calisto-ficha-rpg.netlify.app/#tc=m125">Aura de Proteção</a></strong>, utilizável sem custo 1x por dia.`,
  bonusTexto1N9: `<strong>Barreira Crescente</strong> — Acumula +1 de <strong>armadura</strong> a cada turno bloqueando (máximo +3).`,
  bonusTexto1N13: `<strong>Escudo Resiliente</strong> — Pode anular o dano de 1 ataque por combate.`,
  bonusTexto1N16: `<strong>Defesa Elemental</strong> — Resistência contra dano de <strong>Fé</strong>, <strong>Desconhecido</strong>, <strong>Poder</strong> ou <strong>Caos</strong> (6 de especial).`,
  bonusTexto1N20: `<strong>Fortaleza Imóvel</strong> — Reduz pela metade o dano de todos os ataques recebidos no turno (8 de especial).`,
  bonusTexto1N22: `<strong>Bônus de Persistência</strong> — Após 2 turnos consecutivos bloqueando, recebe +2 em testes contra ataque.`,
  bonusTexto1N25: `<strong>Sentinela Inquebrável</strong> — Imune a 1 ataque por combate e reflete metade do dano ao inimigo.`,

  // ===============================
  // 👐 GUARDIÃO DOS FRACOS
  // ===============================
  bonustitulo_2: `<p>👐 <strong>Guardião dos Fracos</strong></p>`,

  bonusTexto2N1: `<strong>Proteção Aliada</strong> — Redireciona até 1d8 de dano de um aliado. Libera passiva <strong><a href="https://terras-de-calisto-ficha-rpg.netlify.app/#tc=p16">Inveja</a></strong>: ao ver aliados sofrerem dano, ganha +2 de especial por turno.`,
  bonusTexto2N3: `<strong>Escudo Coletivo</strong> — +1 de <strong>armadura</strong> por aliado próximo (máximo +4).`,
  bonusTexto2N5: `<strong>Aura de Retaliação</strong> — Libera <strong><a href="https://terras-de-calisto-ficha-rpg.netlify.app/#tc=m131">Aura de Retaliação</a></strong>, conjurável 1x a cada 2 dias por 8 de especial (ou custo normal via sanidade).`,
  bonusTexto2N9: `<strong>Presença Inspiradora</strong> — Aliados a 5m ganham +2 em esquiva enquanto você estiver vivo.`,
  bonusTexto2N13: `<strong>Barreira Protetora</strong> — Cria barreira que anula até 2d8 de dano em aliados (5 de especial).`,
  bonusTexto2N16: `<strong>Guarda Impecável</strong> — Bloqueia ataques a aliados sem penalidade (1x por combate).`,
  bonusTexto2N20: `<strong>Escudo Vingador</strong> — Bloqueia ataque a aliado e devolve 2d12 de dano (10 de especial).`,
  bonusTexto2N22: `<strong>Vínculo de Proteção</strong> — Aliado recebe metade da sua <strong>armadura</strong> como bônus por 1 turno (8 de especial, ação livre na reação).`,
  bonusTexto2N25: `<strong>Defensor Supremo</strong> — Protege todos os aliados em raio de 10m por 1 turno completo (1x por combate).`,

  // ===============================
  // ⚔️ COMBATENTE DO ESCUDO
  // ===============================
  bonustitulo_3: `<p>⚔️ <strong>Combatente do Escudo</strong></p>`,

  bonusTexto3N1: `<strong>Golpe com Escudo</strong> — +1d6 de <strong>dano esmagante</strong>. Libera passiva <strong><a href="https://terras-de-calisto-ficha-rpg.netlify.app/#tc=p30">Escudo Elemental</a></strong>, causando 1d6 de dano elemental aleatório em ataques com escudo.`,
  bonusTexto3N3: `<strong>Impacto Devastador</strong> — +2 de <strong>dano</strong> com escudo em combate corpo a corpo.`,
  bonusTexto3N5: `<strong>Marcas das Cinzas</strong> — Enfraquece inimigo, reduzindo <strong>armadura</strong> em -2 por 2 turnos (8 de especial).`,
  bonusTexto3N9: `<strong>Força do Escudo</strong> — +2 em testes de <strong>Brutalidade</strong> ao usar escudo como arma principal.`,
  bonusTexto3N13: `<strong>Carga do Colosso</strong> — Investida com escudo causa 2d8 e empurra 3m (6 de especial).`,
  bonusTexto3N16: `<strong>Defesa Ofensiva</strong> — +1 de <strong>armadura</strong> enquanto ataca com o escudo.`,
  bonusTexto3N20: `<strong>Impacto Elemental</strong> — Causa +3d12 de <strong>dano elemental</strong> com o poder do escudo (10 de especial).`,
  bonusTexto3N22: `<strong>Pressão Incessante</strong> — Ganha 1 ataque adicional por turno ao usar o escudo como arma principal.`,
  bonusTexto3N25: `<strong>Campeão do Escudo</strong> — “Investida Final”: série de ataques com escudo causa 4d10 de dano e aplica condição <strong>Confuso</strong> por 1 turno (15 de especial, 1x por combate).
  <details>
  <summary><strong>Condição — Confuso</strong></summary>

  <p style="margin: 0 0 8px 0;">O personagem está desorientado, incapaz de focar em suas ações.</p>
  <p style="margin: 0 0 4px 0;"><strong>Efeito:</strong> Ao realizar uma ação, o personagem deve rolar 1d4:</p>
  <p style="margin: 0 0 2px 16px;">1: Tenta atacar um aliado.</p>
  <p style="margin: 0 0 2px 16px;">2: Perde a ação por completo.</p>
  <p style="margin: 0 0 2px 16px;">3: Erra qualquer ação de precisão.</p>
  <p style="margin: 0 0 2px 16px;">4: Age normalmente.</p>
</details>
`
},
"Especialista": { 
  "vidaPorNivel": 8,
  "sanidadePorNivel": 0,
  "armaduraPorNivel": 1,
  "resistencia": "Fogo",
  "movimento_pass": 4.5,

  "bonusPass": `
  <p><strong>Nível 0:</strong> Tem <strong>Vantagem</strong> com <strong>Passivas</strong>.</p>
  <p>🧠 <strong>Especialista em Passivas</strong><br>“Para escolher quais as passivas, deve sempre falar com o mestre.”</p>
  `,

  //- =============================== -->
  // 🧩 MESTRE DAS PASSIVAS -->
  // =============================== -->
  bonustitulo_1: `<p>🧩 <strong>Mestre das Passivas</strong></p>`,

  bonusTexto1N1: `<strong>Passiva Inicial</strong> — Ganha uma passiva aleatória relacionada ao estilo de combate. Além disso, +1 em todos os testes de <strong>Resistência</strong>.`,
  bonusTexto1N3: `<strong>Passiva Desbloqueada 1</strong> — Desbloqueia uma passiva adicional. A cada dois turnos, ganha +1 de <strong>Armadura Temporária</strong>.`,
  bonusTexto1N5: `<strong>Passiva Desbloqueada 2</strong> — Ganha mais uma passiva. Além disso, ganha uma <strong>Ação Extra de Movimento</strong> por combate.`,
  bonusTexto1N9: `<strong>Passiva Desbloqueada 3 e 4</strong> — Ganha duas passivas adicionais. Além disso, +2 em <strong>Resistência</strong> contra <strong>Dano Mental</strong>.`,
  bonusTexto1N13: `<strong>Passiva Desbloqueada 5</strong> — Ganha uma passiva focada em <strong>Resistência</strong> ou <strong>Evasão</strong>. Além disso, +1 turno de duração em todas as passivas que afetam <strong>Armadura</strong>.`,
  bonusTexto1N16: `<strong>Passiva Desbloqueada 6 e 7</strong> — Ganha duas novas passivas, incluindo uma de <strong>Cura</strong> ou <strong>Regeneração</strong>. Pode usar uma <strong>Ação Extra de Ataque</strong> uma vez por combate.`,
  bonusTexto1N20: `<strong>Passiva Desbloqueada 8 e 9</strong> — Ganha duas passivas adicionais. Todas as passivas que aumentam <strong>Armadura Temporária</strong> têm seu efeito aumentado em <strong>1d4</strong>.`,
  bonusTexto1N22: `<strong>Passiva Desbloqueada 10 e 11</strong> — Duas passivas com foco em <strong>Poder Ofensivo</strong> e <strong>Armadura</strong>. Ganha +1d6 de dano em todas as ações de dano.`,
  bonusTexto1N25: `<strong>Passiva Desbloqueada 12</strong> — Desbloqueia a última passiva. Ganha uma <strong>Ação Bônus Única</strong> por combate para ativar qualquer passiva sem custo.`,

  //<!-- =============================== -->
  // 🌪️ ESPECIALISTA DO CAOS -->
  //<!-- =============================== -->
  bonustitulo_2: `<p>🌪️ <strong>Especialista do Caos</strong></p>`,

  bonusTexto2N1: `<strong>+2 em Testes de Preservação</strong> — Aumenta a resistência ao <strong>Caos</strong>.`,
  bonusTexto2N3: `<strong>+1d8 de dano</strong> em magias de <a href="javascript:TC && TC.open && TC.open()">Caos</a> de nível 1 e 2 — Libera uma magia de <strong>Caos</strong> de nível 1 ou 2.`,
  bonusTexto2N5: `Ganha uma magia de <strong>Ordem do Caos</strong> (nível 1 a 3) ou escolha uma magia do elemento <a href="javascript:TC && TC.open && TC.open()">Caos</a> para aprender.`,
  bonusTexto2N9: `Pode usar magias de <strong><a href="javascript:TC && TC.open && TC.open()">Caos</a></strong> de níveis 1–3 sem consumir sanidade uma vez por dia.`,
  bonusTexto2N13: `<strong>+1 em Testes de Preservação</strong> ao usar magias de <a href="javascript:TC && TC.open && TC.open()">Caos</a>. Ganha +1 de <strong>Armadura Temporária</strong> contra <strong>Dano Mental</strong> e <strong>Psicológico</strong> ao conjurar.`,
  bonusTexto2N16: `Ganha uma magia de <strong>Ordem do Caos</strong> (nível 3–4) ou escolha uma magia do elemento <a href="javascript:TC && TC.open && TC.open()">Caos</a> para aprender.`,
  bonusTexto2N20: `<strong>Magia Avançada de Caos</strong> — Aprende uma magia de nível 5 ou 6 de <a href="javascript:TC && TC.open && TC.open()">Caos</a> e pode conjurá-la 1x/dia sem custo de sanidade.`,
  bonusTexto2N22: `<strong>Custo Mínimo</strong> — Reduz o custo de uma magia de <a href="javascript:TC && TC.open && TC.open()">Caos</a> por dia para apenas 1 ponto de sanidade.`,
  bonusTexto2N25: `<strong>Mestre Elemental do Caos</strong> — Ganha uma magia de nível 6 de <a href="javascript:TC && TC.open && TC.open()">Caos</a> e pode conjurá-la 1x/dia sem custo.`,

  //<!-- =============================== -->
  //<!-- ⚙️ MESTRE DOS EQUIPAMENTOS -->
  //<!-- =============================== -->
  bonustitulo_3: `<p>⚙️ <strong>Mestre dos Equipamentos</strong></p>`,

  bonusTexto3N1: `<strong>Talento de Armas – Espadas</strong> — Desbloqueia o uso de <strong>Espadas</strong> e <strong>Adagas</strong>. +2 de dano com ataques corpo a corpo usando essas armas.`,
  bonusTexto3N3: `<strong>Talento de Armas – Machados e Martelos</strong> — Desbloqueia o uso dessas armas e ganha +1 de dano extra com elas.`,
  bonusTexto3N5: `<strong>Talento de Armas – Lanças e Hastes</strong> — +1 de alcance e +1 de dano com <strong>Lanças</strong> e <strong>Alabardas</strong>.`,
  bonusTexto3N9: `<strong>Talento de Armas – Arcos e Bestas</strong> — Pode realizar ataques à distância com +1d4 de dano adicional.`,
  bonusTexto3N13: `<strong>Talento de Armas – Katanas</strong> — Desbloqueia o uso de <strong>Katanas</strong> e <strong>Nagamakis</strong>. +2 de dano e 1 ataque adicional por turno.`,
  bonusTexto3N16: `<strong>Talento de Armas – Fundas e Estilingues</strong> — Ganha a capacidade de atingir alvos distantes com +1d6 de dano.`,
  bonusTexto3N20: `<strong>Talento de Armas – Armas Exóticas</strong> — Pode usar <strong>Nunchakus</strong> e <strong>Shurikens</strong>. +2 de dano e bônus em <strong>Acrobacia</strong>.`,
  bonusTexto3N22: `<strong>Talento de Armas – Armas de Cerco</strong> — Usa <strong>Catapultas</strong> e <strong>Balistas</strong>. Ganha bônus em dano de área (custo: 4 especial).`,
  bonusTexto3N25: `<strong>Talento de Armas – Escudos</strong> — Desbloqueia o uso de <strong>Escudos</strong> e ganha +1 de <strong>Armadura</strong>. Pode atacar com escudo (custo: 2 especial).`
}
,
    "Espectro": { 
  "vidaPorNivel": 5,
  "sanidadePorNivel": 3,
  "armaduraPorNivel": 1,
  "resistencia": "Laser",
  "movimento_pass": 4.5,

  "bonusPass": `
  <p><strong>Nível 0:</strong> +1d12 em danos de <strong>Plasma</strong>, a magia <strong><a href="https://terras-de-calisto-ficha-rpg.netlify.app/#tc=m110">Orbe Negro</a></strong> atinge inimigos em até 5m do alvo principal e o personagem pode voar.</p>
  `,

  // =============================== -->
  // 👻 ASSOMBRAÇÃO RELÂMPAGO -->
  // =============================== -->
  bonustitulo_1: `<p>👻 <strong>Assombração Relâmpago</strong></p>`,

  bonusTexto1N1: `<strong>Passiva Exclusiva:</strong> <strong><a href="https://terras-de-calisto-ficha-rpg.netlify.app/#tc=p23">Teleporte Repentino</a></strong> — Pode se teleportar 1x por combate sem custo.`,
  bonusTexto1N3: `<strong>Desaparecimento Sombrio</strong> — Após teleporte, +2 em esquiva até o próximo turno.`,
  bonusTexto1N5: `<strong>Surto Espectral</strong> — Ao mover mais de 6m, +1d6 de dano <strong>Laser</strong> no próximo ataque.`,
  bonusTexto1N9: `<strong>Escapar da Realidade</strong> — Teleporta-se para evitar totalmente um ataque (4 de especial).`,
  bonusTexto1N13: `<strong>Passo da Fenda</strong> — O primeiro teleporte do combate não consome ação.`,
  bonusTexto1N16: `<strong>Reflexos Sombrios</strong> — Ao esquivar de um ataque, teleporta até 2m (gratuito).`,
  bonusTexto1N20: `<strong>Evasão Instantânea</strong> — Evita ataques em área com teleporte (6 de especial).`,
  bonusTexto1N22: `<strong>Golpe Relâmpago</strong> — Pode atacar ao final de um teleporte (1x por turno).`,
  bonusTexto1N25: `<strong>Sombra Imparável</strong> — Teleporte livre para lugar visto nos últimos 2 turnos (8 de especial).<br><strong>Devorador do Espaço</strong> — Após teleporte, o próximo ataque recebe +2d12 de dano <strong>Laser</strong>.`,

  // =============================== -->
  // 🌌 ESPÍRITO DESVINCULADO -->
  // =============================== -->
  bonustitulo_2: `<p>🌌 <strong>Espírito Desvinculado</strong></p>`,

  bonusTexto2N1: `<strong>Passiva Exclusiva:</strong> <strong><a href="https://terras-de-calisto-ficha-rpg.netlify.app/#tc=p22">Separar a Alma</a></strong> — Pode agir separado do corpo, imune a estados negativos por 1 turno (1x por combate sem custo).`,
  bonusTexto2N3: `<strong>Presença Etérea</strong> — +2 em Libertação enquanto “Separar a Alma” estiver ativa.`,
  bonusTexto2N5: `<strong>Essência Restauradora</strong> — Regenera 1d6 de sanidade no fim do turno em forma espiritual.`,
  bonusTexto2N9: `<strong>Toque do Além</strong> — +1d8 de dano <strong>Plasma</strong> em corpo a corpo durante forma espiritual.`,
  bonusTexto2N13: `<strong>Véu do Espectro</strong> — Fica intangível por 1 turno (6 de especial).`,
  bonusTexto2N16: `<strong>Chamado do Vazio</strong> — Ao atingir inimigo em forma espiritual, ganha +2 de especial.`,
  bonusTexto2N20: `<strong>Dualidade Sombria</strong> — Troca entre corpo e alma 1x por turno sem custo de ação.`,
  bonusTexto2N22: `<strong>Distorção da Alma</strong> — Entra e sai da forma espiritual após ataque (8 de especial).`,
  bonusTexto2N25: `<strong>Ressurgência Fantasma</strong> — Recupera +6 de sanidade ao atingir inimigo na forma espiritual.<br><strong>Manifestação Completa</strong> — Ao retornar ao corpo, libera explosão de 3d12 de dano <strong>Plasma</strong> em 5m.`,

  // =============================== -->
  // 🔮 FEIXE ESPECTRAL -->
  // =============================== -->
  bonustitulo_3: `<p>🔮 <strong>Feixe Espectral</strong></p>`,

  bonusTexto3N1: `<strong>Passiva Exclusiva:</strong> <strong>Sinergia de Plasma</strong> — Magias de <strong><a href="javascript:TC && TC.open && TC.open()">Plasma</a></strong> ganham +1d6 de dano extra (2 de especial).`,
  bonusTexto3N3: `<strong>Carga Instável</strong> — Ganha uma magia de nível 1 do tipo <strong><a href="javascript:TC && TC.open && TC.open()">Plasma</a></strong>.`,
  bonusTexto3N5: `<strong>Emissão Energética</strong> — Ao lançar magia de <strong>Plasma</strong>, causa +1d4 de dano extra.`,
  bonusTexto3N9: `<strong>Rajada Crescente</strong> — Ganha uma magia de nível 2 do tipo <strong><a href="javascript:TC && TC.open && TC.open()">Plasma</a></strong>.`,
  bonusTexto3N13: `<strong>Sobrecarga Conectada</strong> — Ao acertar com magia de <strong>Plasma</strong>, ganha +1 de especial.`,
  bonusTexto3N16: `<strong>Explosão Radiante</strong> — Ganha uma magia de nível 3 do tipo <strong><a href="javascript:TC && TC.open && TC.open()">Plasma</a></strong>.`,
  bonusTexto3N20: `<strong>Liberação Instável</strong> — Adiciona +1d10 de dano em magia de <strong>Plasma</strong> (5 de especial).`,
  bonusTexto3N22: `<strong>Descarga Destrutiva</strong> — Ganha uma magia de nível 4 do tipo <strong><a href="javascript:TC && TC.open && TC.open()">Plasma</a></strong>.`,
  bonusTexto3N25: `<strong>Pulso Volátil</strong> — Ao conjurar magia de <strong>Plasma</strong>, realiza ataque adicional com -2 de dano e ganha magia de nível 5.<br><strong>Estouro Final</strong> — Ganha uma magia de nível 6 de <strong>Plasma</strong> e pode conjurá-la sem custo de sanidade 1x por combate.`
}
,
    "Espiritualista": { 
      "vidaPorNivel": 5,
      "sanidadePorNivel": 3,
      "armaduraPorNivel": 1,
      "resistencia": "Aura",
      "movimento_pass": 4,

      "bonusPass": `
      <p><strong>Nível 0:</strong> Magia <strong><a href="https://terras-de-calisto-ficha-rpg.netlify.app/#tc=m106">Possessão de Luz</a></strong> sem custo, 1x por dia.</p>
      `,

      // =============================== -->
      // 💀 DISCÍPULO DO ABISMO -->
      // =============================== -->
      bonustitulo_1: `<p>💀 <strong>Discípulo do Abismo</strong></p>`,

      bonusTexto1N1: `<strong>Pele Sombria</strong> — Sempre que passar um turno sem atacar, ganha +2 de Armadura até o próximo turno (acumula até +6).`,
      bonusTexto1N3: `<strong>Marcas do Vazio</strong> — Se estiver com pelo menos +4 de Armadura Extra, próximo ataque causa +2d6 de dano <strong>Escuridão</strong>.`,
      bonusTexto1N5: `<strong>Conhecimento Proibido</strong> — Ganha 1 <strong><a href="javascript:TC && TC.open && TC.open()">magia</a></strong> de nível 1 a 3 do tipo <strong>Escuridão</strong> ou <strong>Aura</strong> (apenas uma por vez).`,
      bonusTexto1N9: `<strong>Guardião do Abismo</strong> — Se passar 2 turnos sem atacar, pode gastar Ação Completa para receber +5 de Armadura Extra por 3 turnos.`,
      bonusTexto1N13: `<strong>Despertar das Sombras</strong> — Consome toda Armadura Extra para causar +2d10 de dano <strong>Escuridão</strong> no próximo ataque.`,
      bonusTexto1N16: `<strong>Caminho da Aniquilação</strong> — Escolha 1 <strong><a href="javascript:TC && TC.open && TC.open()">magia</a></strong> de nível 3 a 5 do tipo <strong>Escuridão</strong> ou <strong>Aura</strong> (apenas uma por vez).`,
      bonusTexto1N20: `<strong>Fardo Sombrio</strong> — Se estiver com +6 de Armadura Extra, primeiro ataque que acertar ignora 10 de Armadura e é <strong>CRÍTICO</strong>.`,
      bonusTexto1N22: `<strong>Existência Abissal</strong> — Ganha Resistência a <strong>Escuridão</strong> e ignora os primeiros 20 de dano do tipo <strong>Distorção</strong>.`,
      bonusTexto1N25: `<strong>Avatar do Vazio</strong> — Se começar turno com +6 ou mais de Armadura Extra, pode gastar Ação Completa para ignorar toda Armadura do alvo por 2 turnos e causar +1d12 de dano <strong>Aura</strong>.`,

      // =============================== -->
      // 👊 PUNHO ETÉREO -->
      // =============================== -->
      bonustitulo_2: `<p>👊 <strong>Punho Etéreo</strong></p>`,

      bonusTexto2N1: `<strong>Absorção Espiritual</strong> — Ao acertar ataque corpo a corpo, ganha 1d6 de Vida Temporária. Se derrotar inimigo, ganha +10 de Vida Temporária.`,
      bonusTexto2N3: `<strong>Impacto Etéreo</strong> — Se estiver com pelo menos 8 de Vida Temporária, próximo ataque causa +1d10 de dano <strong>Plasma</strong>.`,
      bonusTexto2N5: `<strong>Mestre do Fluxo</strong> — Ganha 1 <strong><a href="javascript:TC && TC.open && TC.open()">magia</a></strong> de nível 1 a 3 do tipo <strong>Plasma</strong> ou <strong>Alma</strong> (apenas uma por vez).`,
      bonusTexto2N9: `<strong>Espírito Indomável</strong> — Pode gastar 2 de Especial para dobrar ganho de Vida Temporária por 2 turnos.`,
      bonusTexto2N13: `<strong>Alma da Tempestade</strong> — Se estiver com pelo menos 12 de Vida Temporária, primeiro ataque do turno recebe +3 em Acerto.`,
      bonusTexto2N16: `<strong>Lótus dos Espíritos</strong> — Escolha 1 <strong><a href="javascript:TC && TC.open && TC.open()">magia</a></strong> de nível 3 a 5 do tipo <strong>Plasma</strong> ou <strong>Alma</strong> (apenas uma por vez).`,
      bonusTexto2N20: `<strong>Pulso Vital</strong> — Ao recuperar Vida Temporária por Absorção Espiritual, pode gastar 3 de Especial para causar +3d8 de dano <strong>Plasma</strong> no próximo ataque.`,
      bonusTexto2N22: `<strong>Fonte de Energia</strong> — Sempre que atacar inimigo com menos de 50% da vida máxima, ganha 1d20 de Vida Temporária.`,
      bonusTexto2N25: `<strong>Espírito Ascendente</strong> — Se estiver com 20 ou mais de Vida Temporária, pode gastar Ação Completa para liberar explosão de 7d12 de dano <strong>Plasma</strong> em 5m.`,

      // =============================== -->
      // 👻 ARAUTO DOS ESPÍRITOS -->
      // =============================== -->
      bonustitulo_3: `<p>👻 <strong>Arauto dos Espíritos</strong></p>`,

      bonusTexto3N1: `<strong>Chamado Espectral</strong> — +2 em testes de Conexão ao ativar <strong><a href="https://terras-de-calisto-ficha-rpg.netlify.app/#tc=p38">Fluxo da Vida</a></strong> (Specter)</strong>.`,
      bonusTexto3N3: `<strong>Guardião Sombrio</strong> — Enquanto Specter estiver ativo, pode gastar 3 de Especial para fazê-lo atacar 2x no turno.`,
      bonusTexto3N5: `<strong>Alma Forjada</strong> — Pode ativar <strong>Specter</strong> sem custo.`,
      bonusTexto3N9: `<strong>Vínculo Inquebrável</strong> — Ganha Ação Completa Extra 1x por combate enquanto Specter estiver ativo.`,
      bonusTexto3N13: `<strong>Protetor Etéreo</strong> — Sempre que <strong>Specter</strong> atacar, pode gastar 2 de Especial para causar +1d6 de dano <strong>Alma</strong>.`,
      bonusTexto3N16: `<strong>Espírito Devoto</strong> — <strong>Specter</strong> dura +2 turnos e pode atacar 2x em um turno consumindo apenas 1 de Especial.`,
      bonusTexto3N20: `<strong>Presença Maldita</strong> — 1x por combate, pode ativar segundo <strong>Specter</strong> ao custo dobrado de Especial. Ao término, causa +1d20 de dano <strong>Psicológico</strong>.`,
      bonusTexto3N22: `<strong>Aliança Sobrenatural</strong> — Sempre que <strong>Specter</strong> atacar, usuário recupera 1d4 de sanidade.`,
      bonusTexto3N25: `<strong>Emissário da Eternidade</strong> — Ao ativar <strong>Specter</strong>, pode gastar 4 de Especial para aumentar dano para 2d12+8 de <strong>Alma</strong> e conceder +5 em Conexão por 8 turnos.`
    }
,
    "Fera": { 
      "vidaPorNivel": 8,
      "sanidadePorNivel": 0,
      "armaduraPorNivel": 3,
      "resistencia": "Eclipse",
      "movimento_pass": 4.5,

      "bonusPass": `
      <p><strong>Nível 0:</strong> +5 em <strong>Atletismo</strong> e <strong>Adestrar Animais</strong>.</p>
      `,

      // =============================== -->
      // 🌘 ARAUTO DO ECLIPSE -->
      // =============================== -->
      bonustitulo_1: `<p>🌘 <strong>Arauto do Eclipse</strong></p>`,

      bonusTexto1N1: `<strong>Sombras Cortantes</strong> — Ataques físicos e mágicos de <strong>Eclipse</strong> causam +1d8 de dano extra.`,
      bonusTexto1N3: `<strong>Presságio Sombrio</strong> — Ao causar dano de <strong>Eclipse</strong>, rola 1d6: em 4+, ganha Ação de Movimento extra no próximo turno.`,
      bonusTexto1N5: `<strong>Presa Lunar</strong> — Pode gastar 3 de Especial para atacar 2x na mesma Ação de Ataque.`,
      bonusTexto1N9: `<strong>Manto do Eclipse</strong> — Ganha +3 de Armadura Temporária se começar o turno sem atacar.`,
      bonusTexto1N13: `<strong>Devastação Noturna</strong> — Se for o primeiro a atacar no combate, causa +2d12 de dano <strong>Eclipse</strong> no primeiro golpe.`,
      bonusTexto1N16: `<strong>Eclipse Vivo</strong> — Ao reduzir inimigo a 0 de vida, recupera 1d8 de vida.`,
      bonusTexto1N20: `<strong>Rajada Crepuscular</strong> — Pode gastar 4 de Especial para atacar todos inimigos em 3m, causando +2d10 de dano <strong>Eclipse</strong>.`,
      bonusTexto1N22: `<strong>Presságio Final</strong> — Se atingir inimigo com menos de 30 de vida, ataque causa dano dobrado.`,
      bonusTexto1N25: `<strong>Cataclismo da Fera Sombria</strong> — 1x por combate, libera onda de <strong>Eclipse</strong> causando 6d12 de dano em inimigos próximos e ganha +2 em todas jogadas de ataque até o fim da cena.`,

      // =============================== -->
      // 🔮 ARTESÃO ESPIRITUAL -->
      // =============================== -->
      bonustitulo_2: `<p>🔮 <strong>Artesão Espiritual</strong></p>`,

      bonusTexto2N1: `<strong>Instinto Lunar</strong> — De dia: +2 em Agilidade. À noite: Forma Bestial, +3 em Brutalidade.`,
      bonusTexto2N3: `<strong>Fúria da Lua</strong> — Na Forma Bestial, ataques corpo a corpo causam +1d6 de dano extra.`,
      bonusTexto2N5: `<strong>Passos das Sombras</strong> — De dia, pode gastar 2 de Especial para mover-se sem ser detectado.`,
      bonusTexto2N9: `<strong>Sangue da Noite</strong> — Na Forma Bestial, ganha Resistência a dano físico (cortante, perfurante, esmagante).`,
      bonusTexto2N13: `<strong>Devastação Lupina</strong> — Pode gastar 3 de Especial para atacar 2x seguidas quando transformado.`,
      bonusTexto2N16: `<strong>Presságio da Caçada</strong> — À noite, pode farejar inimigos ocultos e detectar presas até 30m.`,
      bonusTexto2N20: `<strong>Golpe da Noite Eterna</strong> — Se atacar inimigo antes dele agir, causa +3d8 de dano.`,
      bonusTexto2N22: `<strong>Forma Selvagem Aprimorada</strong> — À noite, recebe +4 de Armadura e +4 de Movimento enquanto transformado.`,
      bonusTexto2N25: `<strong>Fera Primordial</strong> — Na Forma Bestial, ataques corpo a corpo causam +2d12 de dano e ignoram 6 de Armadura.`,

      // =============================== -->
      // 🐺 TIRANO CARNICEIRO -->
      // =============================== -->
      bonustitulo_3: `<p>🐺 <strong>Tirano Carniceiro</strong></p>`,

      bonusTexto3N1: `<strong>Fome Voraz</strong> — Sempre que usar <strong><a href="https://terras-de-calisto-ficha-rpg.netlify.app/#tc=p1">Consumir</a></strong>, dano causado aumenta em +1d6.`,
      bonusTexto3N3: `<strong>Devorador de Dor</strong> — Ao consumir Sanidade, alvo recebe -1 em testes de Conexão até fim do combate.`,
      bonusTexto3N5: `<strong>Voracidade Crescente</strong> — Ao reduzir inimigo a 0 de vida, recupera 1d12 de Vida.`,
      bonusTexto3N9: `<strong>Sangue Predador</strong> — Se estiver com menos da metade da vida máxima, ganha +2 em Brutalidade e Resistência a <strong>Sangue</strong>.`,
      bonusTexto3N13: `<strong>Mastigar a Alma</strong> — Se usar <strong>Consumir</strong> contra inimigo com menos de 22 de vida, ataque causa dano máximo.`,
      bonusTexto3N16: `<strong>Predador Incansável</strong> — Ao causar dano com <strong>Consumir</strong>, pode gastar 3 de Especial para realizar ataque extra.`,
      bonusTexto3N20: `<strong>Regeneração Maldita</strong> — Ao consumir Vida de inimigo, recupera +1d6 de Vida Temporária.`,
      bonusTexto3N22: `<strong>Devorador Supremo</strong> — Se derrotar inimigo com <strong>Consumir</strong>, recebe +2 em todas rolagens de ataque até fim do combate.`,
      bonusTexto3N25: `<strong>Glutão da Carnificina</strong> — 1x por combate, pode gastar 6 de Especial para atacar todos inimigos próximos, causando 4d12 de dano <strong>Sangue</strong> e absorvendo metade como Vida Temporária.`
    }
,
    "Ferreiro": { 
      "vidaPorNivel": 7,
      "sanidadePorNivel": 1,
      "armaduraPorNivel": 2,
      "resistencia": "Fogo",
      "movimento_pass": 3.5,

      "bonusPass": `
      <p><strong>Nível 0:</strong> Vantagem em testes de <strong>Ofício</strong>.</p>
      `,

      // =============================== -->
      // 🔨 MESTRE DO ENCANTAMENTO -->
      // =============================== -->
      bonustitulo_1: `<p>🔨 <strong>Mestre do Encantamento</strong></p>`,

      bonusTexto1N1: `<strong>Forjador das Chamas</strong> — Imbuir armas com <strong>Fogo</strong>, causando +1d4 de dano de <strong>Fogo</strong> por 3 turnos. Alvos devem passar em Determinação ou sofrem queimaduras persistentes. +1 em Ofício.`,
      bonusTexto1N3: `<strong>Artesão do Gelo</strong> — Imbuir armas com <strong>Gelo</strong>. Alvo deve passar em Preservação ou fica congelado por 1 turno. Armas causam +1 de dano fixo.`,
      bonusTexto1N5: `<strong>Moldador da Corrosão</strong> — Adiciona <strong>Ácido</strong> às criações. Inimigos sofrem 1d4 de dano por 2 turnos, salvo em Determinação. +1 em testes de reparo.`,
      bonusTexto1N9: `<strong>Engenheiro da Água Viva</strong> — Forja com <strong>Água</strong>, reduzindo deslocamento do inimigo em 4m por 2 turnos (teste de Agilidade). +1 em criação de armaduras.`,
      bonusTexto1N13: `<strong>Senhor do Trovão</strong> — Acesso ao elemento <strong>Eletricidade</strong>. Armas causam +1d6 extra contra alvos metálicos/molhados. Alvos devem passar em Libertação ou ficam atordoados. +1 em ataques com armas próprias.`,
      bonusTexto1N16: `<strong>Ferreiro da Tempestade</strong> — Imbuir com <strong>Tempestade</strong> empurra alvo 2m por golpe (teste de Brutalidade evita). Escudos criados oferecem +1 de Armadura contra ataques à distância.`,
      bonusTexto1N20: `<strong>Arquimestre do Abismo</strong> — Forja com <strong>Aura</strong>, aplicando <strong><a href="https://terras-de-calisto-ficha-rpg.netlify.app/#tc=p9">Medo oculto</a></strong> por 1 turno se alvo falhar em Intimidação. +1 em Percepção e Intimidação com equipamentos próprios.`,
      bonusTexto1N22: `<strong>Metalurgista do Caos Primordial</strong> — Forja com <strong>Caos</strong>, armas imprevisíveis: rola 1d4 para efeitos aleatórios (fogo, gelo, ácido, eletricidade). +2 em Ofício.`,
      bonusTexto1N25: `<strong>Lenda das Forjas Eternas</strong> — Pode imbuir até 2 elementos em uma arma. Uma vez por combate, cria arma temporária com 3 elementos por 3 turnos. +2 em Preservação.`,

      // =============================== -->
      // 🔥 METALURGIA DO FOGO -->
      // =============================== -->
      bonustitulo_2: `<p>🔥 <strong>Metalurgia do Fogo</strong></p>`,

      bonusTexto2N1: `<strong>Fagulha da Criação</strong> — +2 em Ofício ao lidar com metais (Preservação).`,
      bonusTexto2N3: `<strong>Mãos Flamejantes</strong> — 1x por turno, adiciona +1d6 de dano <strong>Fogo (Caos)</strong> ao ataque com arma criada (Brutalidade).`,
      bonusTexto2N5: `<strong>Magia: Chama Persistente</strong> — Ganha <strong><a href="javascript:TC && TC.open && TC.open()">magia</a></strong> de <strong>Fogo</strong> nível 1.`,
      bonusTexto2N9: `<strong>Escudo de Brasas</strong> — Ao sofrer dano corpo a corpo, inimigo sofre 1d8 de dano <strong>Fogo (Caos)</strong> (Determinação).`,
      bonusTexto2N13: `<strong>Magia: Fornalha Ardente</strong> — Ganha <strong><a href="javascript:TC && TC.open && TC.open()">magia</a></strong> de <strong>Fogo</strong> nível 2.`,
      bonusTexto2N16: `<strong>Controle Térmico</strong> — Pode fundir duas peças metálicas instantaneamente, até em combate (Preservação).`,
      bonusTexto2N20: `<strong>Arma Incandescente</strong> — Infunde arma por 3 turnos, causando +2d8 de dano <strong>Fogo (Caos)</strong> (custo: 3 de Especial).`,
      bonusTexto2N22: `<strong>Magia: Pilar de Fogo</strong> — Ganha <strong><a href="javascript:TC && TC.open && TC.open()">magia</a></strong> de <strong>Fogo</strong> nível 3.`,
      bonusTexto2N25: `<strong>Fusão Ígnea</strong> — Transforma arma metálica em versão flamejante permanente com +1d10 de dano <strong>Fogo (Caos)</strong> (custo: 5 de Especial).`,

      // =============================== -->
      // 🌀 COPIADOR DO METAL -->
      // =============================== -->
      bonustitulo_3: `<p>🌀 <strong>Copiador do Metal</strong></p>`,

      bonusTexto3N1: `<strong>Duplicador Ágil</strong> — Pode usar <strong><a href="https://terras-de-calisto-ficha-rpg.netlify.app/#tc=p33">Réplica Imperfeita</a></strong> como ação bônus sem custo 1x por combate.`,
      bonusTexto3N3: `<strong>Duplo Fantasma</strong> — Pode manter 2 réplicas ativas ao mesmo tempo (custo: 3 de Especial).`,
      bonusTexto3N5: `<strong>Refino da Réplica</strong> — Réplicas causam +1d8 de dano extra se atingirem mesmo inimigo que original no turno anterior.`,
      bonusTexto3N9: `<strong>Eco de Precisão</strong> — +1 em testes de acerto ao usar réplicas (Agilidade).`,
      bonusTexto3N13: `<strong>Especialista em Cópias</strong> — +2 em Ofício ao replicar qualquer item (Preservação).`,
      bonusTexto3N16: `<strong>Fluxo Espelhado</strong> — Réplicas não desaparecem se passar teste de Preservação (Dificuldade 12).`,
      bonusTexto3N20: `<strong>Reflexo Agressivo</strong> — Réplicas causam +1d6 de dano adicional se alvo já tiver sido atingido no turno.`,
      bonusTexto3N22: `<strong>Ressonância de Metal</strong> — Cada vez que réplica desaparece, conjurador regenera +2 de Especial.`,
      bonusTexto3N25: `<strong>Réplica Lendária</strong> — Cria réplica perfeita com 100% das propriedades do original, dura 2 turnos e ignora destruição mágica (custo: 5 de Especial).`
    }
,
    "Forasteiro": { 
      "vidaPorNivel": 6,
      "sanidadePorNivel": 2,
      "armaduraPorNivel": 1,
      "resistencia": "Laser",
"bonusPass": `
<p>Nível 0: +5 em dados de dano com <strong>armas de fogo</strong> (pistolas, rifles, escopetas) e +1d10 com dano de Laser e +1d10 com espadas curtas.</p>
`,

bonustitulo_1: "<p>🔫 <strong>Exterminador Implacável</strong></p>",
bonusTexto_1: `
<p><strong>Regra de Caçada:</strong> A partir do Nível 1, você pode <strong>marcar um inimigo como "alvo caçado"</strong>. Apenas um alvo pode ser marcado por vez, e essa marca <strong>permanece até sua morte</strong>. Você não pode trocar de alvo enquanto o anterior estiver vivo.</p>

<p>Nível 1: +1 em testes de <strong>Percepção</strong> ao rastrear o <strong>alvo caçado</strong>. Ganha a <a href="https://terrasdecalistoficha.wordpress.com/ainda-em-criacao-passivas/#:~:text=do%20Alvo%3A%C2%A0Intui%C3%A7%C3%A3o-,Muta%C3%A7%C3%A3o,-Mutatio" target="_blank">[mutação](https://terrasdecalistoficha.wordpress.com/ainda-em-criacao-passivas/#:~:text=do%20Alvo%3A%C2%A0Intui%C3%A7%C3%A3o-,Muta%C3%A7%C3%A3o,-Mutatio)</a> e pode usar 2 vezes sem custo ao dia.</p>
<p>Nível 3: Aumenta o alcance efetivo de <strong>armas de fogo</strong> em +10 metros contra o <strong>alvo caçado</strong>.</p>
<p>Nível 5: <strong>Rajada Letal</strong> — Uma vez por combate, pode realizar um <strong>ataque adicional</strong> com arma de fogo contra o <strong>alvo caçado</strong>.</p>
<p>Nível 9: +2 em testes de <strong>furtividade</strong> ao preparar emboscadas contra o <strong>alvo caçado</strong>.</p>
<p>Nível 13: <strong>Munição Penetrante</strong> — Ignora 2 pontos de armadura do <strong>alvo caçado</strong>.</p>
<p>Nível 16: Causa +1d8 de dano adicional ao <strong>alvo caçado</strong> se ele estiver com menos da metade da vida.</p>
<p>Nível 20: <strong>Instinto Predador</strong> — +2 em testes de resistência contra <strong>medo</strong> e <strong>desorientação</strong> ao perseguir o <strong>alvo caçado</strong>.</p>
<p>Nível 22: <strong>Execução Tática</strong> — Pode realizar <strong>2 ataques extras</strong> com armas de fogo contra o <strong>alvo caçado</strong>, uma vez por combate.</p>
<p>Nível 25: <strong>Disparo Final</strong> — Uma vez por combate, executa um disparo fatal que causa +2d10 de dano e ignora toda a armadura do <strong>alvo caçado</strong>.</p>
`,bonustitulo_2: "<p>⚔️ <strong>Executor da Luz Partida</strong></p>",
bonusTexto_2: `
<p><strong>Disciplina de Combate:</strong> Você treina com foco absoluto no uso de lâminas laser, desenvolvendo reflexos, esquiva e percepção. Inspirado nos guerreiros antigos da galáxia.</p>

<p>Nível 1: Ganha as magias [Pulso de Plasma](https://terrasdecalistoficha.wordpress.com/magias/#:~:text=do%20Alvo%3A%20Agilidade-,Pulso%20de%20Plasma,-Plasmae%20Pulsus) e [Tremor Abissal](https://terrasdecalistoficha.wordpress.com/magias/#:~:text=do%20Alvo%3A%20Determina%C3%A7%C3%A3o-,Tremor%20Abissal,-Abissalis%20tremor).</p>
<p>Nível 3: +2 em <strong>esquiva</strong> ao usar apenas a lâmina. Uma vez a cada 3 turnos, pode evitar totalmente uma área de efeito com um salto preciso.</p>
<p>Nível 5: +1d8 de dano se atacar após uma esquiva bem-sucedida. Ganha a passiva [Invadir a mente](https://terrasdecalistoficha.wordpress.com/ainda-em-criacao-passivas/#:~:text=do%20Alvo%3A%C2%A0Agilidade-,Invadir%20a%20mente,-Invadere%20mentem).</p>
<p>Nível 9: Pode refletir uma magia de energia com um teste de esquiva (1 vez por combate).</p>
<p>Nível 13: +1d10 extra de dano contra inimigos que usaram magia no turno anterior.</p>
<p>Nível 16: Pode realizar 1 ataque extra com a lâmina se estiver com menos da metade da vida.</p>
<p>Nível 20: Ao derrotar um inimigo com a lâmina, recupera 15 de sanidade (1 vez por combate).</p>
<p>Nível 22: +2 permanente em testes de <strong>agilidade</strong> e <strong>esquiva</strong>.</p>
<p>Nível 25: <strong>Ruptura de Foco</strong> — Executa 3 cortes com +2d8 de dano cada. (1 vez por combate)</p>
`,bonustitulo_3: "<p>🛠️ Engenheiro Arcano</p>",
bonusTexto_3: `
<p>Nível 1: Núcleo Condutor – Cria um canalizador de energia mágica em um objeto improvisado. Ataques com ele causam <strong>+1 de dano mágico</strong>. Libera uma magia de nível 1 de [Laser](https://terrasdecalistoficha.wordpress.com/magias/#:~:text=top%20da%20p%C3%A1gina-,Laser%20%E2%80%93%20Disc%C3%ADpulos%20do%20Raio%20Fendido,-Hierarquias%20de%20Disc%C3%ADpulos) ou [Tremor](https://terrasdecalistoficha.wordpress.com/magias/#:%3Cu%3E:text=do%20Alvo%3A%20Agilidade-,Pulso%20de%20Plasma,-Plasmae%20Pulsus:~:text=top%20da%20p%C3%A1gina-,Tremor,-%E2%80%93%20C%C3%ADrculo%20dos%20Tremores).</p>
<p>Nível 3: Reator Artesanal – Constrói um dispositivo rudimentar com pedaços de entulho que causa <strong>+1d8 de dano mágico</strong> ao colidir com o inimigo (1 vez por combate). Libera uma magia de nível 2 do mesmo elemento escolhido.</p>
<p>Nível 5: Dronizador Improvisado – Cria um pequeno drone voador que te acompanha por 2 turnos, concedendo <strong>+1 de Armadura</strong> enquanto ativo. (1 vez por combate) Libera uma magia de nível 3.</p>
<p>Nível 9: Armazenamento Arcano – Pode guardar até 2 magias dentro de sucata mágica e conjurá-las mais tarde, mesmo se estiver impedido de conjurar verbalmente. Dura até o fim da sessão. Libera uma magia de nível 4.</p>
<p>Nível 13: Circuito de Fusão – Conecta dois efeitos mágicos distintos em um único dispositivo improvisado. Exemplo: explosão + desaceleração. Libera uma magia de nível 5.</p>
<p>Nível 16: Núcleo Potencializado – Magias de [Laser](https://terrasdecalistoficha.wordpress.com/magias/#:~:text=top%20da%20p%C3%A1gina-,Laser%20%E2%80%93%20Disc%C3%ADpulos%20do%20Raio%20Fendido,-Hierarquias%20de%20Disc%C3%ADpulos) ou [Tremor](https://terrasdecalistoficha.wordpress.com/magias/#:~:text=top%20da%20p%C3%A1gina-,Tremor%20%E2%80%93%20C%C3%ADrculo%20dos%20Tremores,-Hierarquias%20de%20C%C3%ADrculo) canalizadas via objetos causam <strong>+1d10 de dano adicional</strong> e duram <strong>+2 turnos</strong>. Libera uma magia de nível 6.</p>
<p>Nível 20: Engenho Singular – Pode fabricar 1 item tec-mágico por sessão, como granadas de pulso, campos de energia ou uma <strong>torreta sentinela</strong> que dispara automaticamente por 3 turnos. (Alcance: 10m | Dano: <strong>2d8 de Laser</strong> por turno em um inimigo visível.)</p>
<p>Nível 22: Canalização Improvisada – Pode conjurar magias usando <strong>objetos arremessados</strong> como meio de impacto. Ex: lançar uma engrenagem que libera energia de Tremor ao colidir.</p>
<p>Nível 25: Laboratório de Batalha – Monta um campo improvisado repleto de engenhocas: até 3 efeitos tec-mágicos (ex: escudos, minas ou lasers orbitais) ativos por 3 turnos. (1 vez por combate)</p>
`,
      "movimento_pass": 4
    },
    "Glacinata": { 
      "vidaPorNivel": 7,
      "sanidadePorNivel": 1,
      "armaduraPorNivel": 1,
      "resistencia": "Gelo",
      "bonusPass": "+1d12 em magias de Gelo e Força Gélida com modificador de atributo de Brutalidade.",
      "movimento_pass": 3.5
    },
    "Guerreiro": { 
      "vidaPorNivel": 6,
      "sanidadePorNivel": 2,
      "armaduraPorNivel": 3,
      "resistencia": "Balístico",
      "bonusPass": "+5 de dano em armas corpo a corpo.",
      "movimento_pass": 4
    },
    "Hemomantico": { 
      "vidaPorNivel": 5,
      "sanidadePorNivel": 3,
      "armaduraPorNivel": 1,
      "resistencia": "Sangue",
      "bonusPass": "Magias de sangue causam Hemorragia no inimigo por 2 turnos.",
      "movimento_pass": 4.5
    },
    "Imitador": { 
      "vidaPorNivel": 4,
      "sanidadePorNivel": 4,
      "armaduraPorNivel": 1,
      "resistencia": "Alma",
"bonusPass": `Nível 0: <strong>Mutação</strong> sem custo <strong>1 vez por dia</strong>.`,

"bonustitulo_1": `<p>🎭<strong>Mímico do Inexistente</strong></p>`,
"bonusTexto_1": `
<p><em>Um artista do vazio, que transforma a ilusão em realidade e manipula o invisível como se fosse palpável. O mundo é seu palco, e a plateia jamais percebe o truque.</em></p>

<p><strong>Nível 1: Objeto Invisível</strong> – Pode <strong>transformar um objeto em invisível</strong>. Ele só pode ser detectado se o alvo realizar um <strong>teste de Observação 18+</strong>. Caso contrário, a invisibilidade dura <strong>8 turnos</strong> ou até o fim da cena. (<strong>Custo: 5 Especial</strong>).</p>
<p><strong>Nível 3: Magia Invisível</strong> – Pode <strong>conjurar magias invisíveis</strong>. O alvo só saberá que algo foi conjurado se presenciar a ação. 
<br>– Se <strong>viu a conjuração</strong>: acerto com <strong>DT 8</strong>. 
<br>– Se <strong>não viu</strong>: acerto com <strong>DT 5</strong>. 
<br>(Não funciona em <strong>magias de suporte/buffs</strong>). (<strong>Custo: +3 Especial</strong> por magia).</p>
<p><strong>Nível 5: Potência Oculta</strong> – <strong>Magias invisíveis</strong> recebem <strong>+2 em testes</strong>.</p>
<p><strong>Nível 9: Construção Invisível</strong> – Cria um <strong>objeto invisível e indetectável</strong> que pode <strong>obstruir passagens</strong>. O objeto possui <strong>55 de Vida</strong>. (<strong>Custo: 8 Especial</strong>).</p>
<p><strong>Nível 13: Armamento Espectral</strong> – <strong>Armas invisíveis</strong> ganham <strong>+3m de alcance</strong>.</p>
<p><strong>Nível 16: Barreira Indestrutível</strong> – Cria uma <strong>barreira invisível</strong> que o torna <strong>imune ao próximo golpe</strong>. Pode ser usada como <strong>reação</strong>. (<strong>Custo: 13 Especial</strong>).</p>
<p><strong>Nível 20: Aura do Silêncio</strong> – Libera a magia <strong>Aura do Silêncio</strong>, afetando uma área de <strong>30m</strong> ao redor. <strong>Inimigos</strong> dentro da área <strong>não conseguem conjurar</strong> ou usar <strong>habilidades verbais</strong>. (<strong>Custo: 10 Especial</strong>).</p>
<p><strong>Nível 22: Diplopia Binocular</strong> – Ganha a magia <strong>Diplopia Binocular</strong>, podendo conjurá-la <strong>1 vez por dia sem custo</strong>. Conjurações adicionais exigem <strong>7 Especial</strong>.</p>
<p><strong>Nível 25: Materialização do Inexistente</strong> – Pode <strong>materializar objetos ou criaturas mimetizadas</strong>. 
<br>– Só pode conjurar <strong>criaturas do elemento Desconhecido</strong>, exceto <strong>Raras ou Lendárias</strong>. 
<br>– Essas criaturas possuem <strong>vontade própria</strong>, mas <strong>não atacam o Mímico</strong>. (<strong>Custo: 15 Especial</strong>). 
<br>– Também pode criar <strong>objetos</strong> que são destruídos após <strong>5 golpes</strong>; se forem <strong>itens ou equipamentos</strong> que não possui, causam <strong>metade do dano</strong>. (<strong>Custo: 15 Especial</strong>).</p>
`,
      "movimento_pass": 4.5
    },
    "Juíz": { 
      "vidaPorNivel": 5,
      "sanidadePorNivel": 3,
      "armaduraPorNivel": 1,
      "resistencia": "Cortante",
      "bonusPass": "Julga o desempenho de um ALVO, ele recebe 1d20 de dano caso tire menos que 10 em um teste, uma vez por luta.",
      "movimento_pass": 3.5
    },
      "Lacaio": {
        "vidaPorNivel": 7,
        "sanidadePorNivel": 1,
        "armaduraPorNivel": 2,
        "resistencia": "Eletricidade",
        "bonusPass": "Passiva Vingança sem custo uma vez por dia.",
        "movimento_pass": 4
      },
      "Ladrão": {
        "vidaPorNivel": 7,
        "sanidadePorNivel": 1,
        "armaduraPorNivel": 1,
        "resistencia": "Laser",
        "bonusPass": "+4 em furtividade, +2 roubar, tem vantagem em testes de ladinagem e agilidade.",
        "movimento_pass": 4.5
      },
      "Louco": {
        "vidaPorNivel": 8,
        "sanidadePorNivel": 0,
        "armaduraPorNivel": 1,
        "resistencia": "Sono",
        "bonusPass": `
Nível 0: Menos sanidade por nível e dobra os danos com magias.
`,

"bonustitulo_1": `<p>🎭<strong>Mestre das Brincadeiras</strong></p>`,
"bonusTexto_1": `
<p>Nível 1: <strong>Peguei Seu Nariz</strong> – Agarrar contra Agilidade. O alvo fica sem respirar até alguém pegar o nariz de volta (DT8). Todo turno recebe <strong>1d12 de Distorção</strong> e adiciona <strong>+1d20 ao dano</strong> que recebe por turno acumulado.</p>
<p>Nível 3: <strong>Sumiu... Achou</strong> – Fica invisível até tirar a mão do rosto. Enquanto invisível, sofre <strong>–5m de movimento</strong> e não pode esquivar de habilidades em área. Libera uma magia de <strong>Maldição</strong> Nível 1 ou 2.</p>
<p>Nível 5: <strong>Jo Ken Pô — Pedra</strong> – Conjura uma pedra de 2 metros sobre um inimigo. O alvo deve passar em um teste de Agilidade ou sofre <strong>2d12 de dano Esmagador</strong>.</p>
<p>Nível 9: <strong>Jo Ken Pô — Papel</strong> – Surge uma parede de papel de 3 metros em área. É altamente inflamável e replica <strong>danos de Fogo</strong> duas vezes se o alvo estiver dentro da área. Libera uma magia de <strong>Aura</strong> Nível 2 ou 3.</p>
<p>Nível 13: <strong>Jo Ken Pô — Tesoura</strong> – Movimento cortante com o braço. Objetos orgânicos sofrem <strong>3d12 de dano de Maldição</strong>. Objetos inorgânicos são divididos em dois.</p>
<p>Nível 16: <strong>Vaca Amarela</strong> – Todos na área que falarem após a ativação devem fazer um teste de Determinação. Falhar causa <strong>6d12 de Maldição</strong>. Magias que exigem fala são desabilitadas por 2 turnos. Libera uma magia de <strong>Sono</strong> Nível 3 ou 4.</p>
<p>Nível 20: <strong>Invocação da Loira do Banheiro</strong> – Invoca uma criatura maldita [No Link Selecione Ela](https://bestiario-terrasdecalisto.netlify.app/?criatura=Loira%20do%20Banheiro). Custo: <strong>23 de Sanidade</strong>.</p>
<p>Nível 22: <strong>Salamê Minguê</strong> – Causa <strong>5d12 de Distorção</strong> em um alvo aleatório. O alvo pode transferir o dano para alguém a até 1 metro com um teste de Conexão. Libera uma magia de <strong>Fogo</strong> ou <strong>Tempestade</strong> de Nível 4.</p>
<p>Nível 25: <strong>Batata Quente</strong> – Todo turno, uma batata surge na cabeça de um inimigo. Pode ser passada com um teste de Libertação. Todo alvo que recebe a batata faz um teste; se tirar menos que 8, ela explode causando <strong>2d20 de Fogo</strong> em área de 3m. A explosão causa mais <strong>4d4 de dano</strong> para cada vez que a batata foi passada.</p>
`,

"bonustitulo_2": `<p>😵<strong>Mestre da Loucura</strong></p>`,
"bonusTexto_2": `
<p>Nível 1: <strong>Loucura Velada</strong> – Quando sua sanidade zera, role 1d4:<br>
1: falha — você fica perdido, incapaz de agir até recuperar a sanidade por tratamento ou teste futuro.<br>
2-4: cura sanidade igual ao valor rolado.</p>
<p>Nível 3: <strong>Imersão Mental</strong> – Você aprende uma magia de nível 1 do elemento Psicológico. Seus ataques com magias desse tipo de dano causam +1d8 de dano extra.</p>
<p>Nível 5: <strong>Distorção da Realidade</strong> – Você escolhe duas magias: uma de nível 1 e outra de nível 2, dos elementos Distorção e Mental (à sua escolha). Seus ataques com magias desses elementos causam +1d6 de dano extra.</p>
<p>Nível 9: <strong>Sanidade Fragmentada</strong> – Enquanto estiver com sanidade zero, o dano causado por suas magias é multiplicado por 2x. Além disso, você ganha 40 de vida temporária.</p>
<p>Nível 13: <strong>Névoa Envolvente</strong> – Você escolhe duas magias: uma de nível 2 e outra de nível 3, do elemento Névoa. Seus ataques com magias desse tipo de dano causam +2d6 de dano extra.</p>
<p>Nível 16: <strong>Sussurros do Sono</strong> – Você escolhe duas magias: uma de nível 2 e outra de nível 3, do elemento Sono. Seus ataques com magias desse tipo de dano causam +2d8 de dano extra.</p>
<p>Nível 20: <strong>Ato Insano</strong> – Você pode realizar uma ação extra em seu turno. Essa ação pode ser usada para atacar, lançar magia ou se mover.</p>
<p>Nível 22: <strong>Eclipse da Razão</strong> – Você escolhe três magias: uma de nível 3 e duas de nível 4, do elemento Eclipse. Seus ataques com magias desse tipo de dano causam +3d8 de dano extra.</p>
<p>Nível 25: <strong>Mente Indestrutível</strong> – Você pode manter sua sanidade em zero sem que seu personagem seja eliminado. Sua mente vive no limite, dominando a loucura ao máximo. Além disso, conjura magias com custo de Especial reduzido pela metade.</p>
`,

 "bonustitulo_3": "<p>🧠 <strong>Fragmentado</strong></p>",
  "bonusTexto_3": `
<p><strong>Regra especial:</strong> No início do combate, role 1d10 para determinar a personalidade dominante. Se o resultado for igual ou menor que o seu nível, você fica preso a essa personalidade (Exemplo: no nível 6, se tirar 1 a 6, fica com a personalidade do número tirado). Se tirar um número maior que seu nível, pode escolher qualquer personalidade para usar. Quanto maior o nível, maior a chance de se “perder” e ser forçado a usar uma personalidade aleatória.
   
  </p>
<p>Nível 1: <strong>A Criança Ingênua</strong> – Personalidade doce, usa magias de <strong>Sagrado (Luz)</strong> para cura e proteção. +2 em testes de <strong>Determinação</strong>.</p>
<p>Nível 3: <strong>A Mulher Sedutora</strong> – Manipuladora com magias de <strong>Maldição</strong>. +2 em testes de <strong>Furtividade</strong> e manipulação social.</p>
<p>Nível 5: <strong>O Senhor Agressivo</strong> – Raivoso e brutal, com magias de <strong>Sangue</strong>. +2 em testes de <strong>Brutalidade</strong> e dano físico.</p>
<p>Nível 9: <strong>A Sábia Anciã</strong> – Calma e centrada, invoca magias de <strong>Alma</strong>. +2 em testes de <strong>Libertação</strong> e resistência mental.</p>
<p>Nível 13: <strong>O Guerreiro Errante</strong> – Ágil e ofensivo, usa magias de <strong>Plasma</strong>. +2 em testes de <strong>Agilidade</strong> e +4 em testes com <strong>espadas</strong>.</p>
<p>Nível 16: <strong>O Guardião Estoico</strong> – Defensivo e firme, usa magias de <strong>Tremor</strong>. +4 em testes com <strong>escudos</strong> e +2 em resistência física.</p>
<p>Nível 20: <strong>A Curandeira Serena</strong> – Empática, usa magias de <strong>Aura</strong>. +2 em testes de <strong>Conexão</strong> e +1 em cura.</p>
<p>Nível 22: <strong>O Arauto da Morte</strong> – Sombrio e fatalista, invoca magias de <strong>Morte</strong>. +4 em testes de <strong>Brutalidade</strong> e +2 em dano com magias de morte.</p>
<p>Nível 25: <strong>O Mestre Fragmentado</strong> – Caótico e versátil, pode escolher magias dos grupos <strong>Laser, Alma, Escuridão, Plasma, Tremor, Aura, Maldição, Sagrado, Cinzas, Morte</strong>. +4 em testes com <strong>espadas</strong> e +2 em todos testes físicos e mágicos.</p>
`
,       "movimento_pass": 4.5
      },
      "Mago": {
        "vidaPorNivel": 5,
        "sanidadePorNivel": 3,
        "armaduraPorNivel": 1,
        "resistencia": "Eletricidade",
       bonusPass: `
<p><strong>Nível 0:</strong> Magias de atributo Preservação custam metade, libera uma [magia](https://terrasdecalistoficha.wordpress.com/magias/) de nível 1 que use Preservação como teste. +2 de movimento.</p>
`,

bonustitulo_1: `<p>🌪️<strong>Condutor do Vórtice Caótico</strong></p>`,
bonusTexto_1: `
<p><strong>Nível 1:</strong> <strong>Chamar o Caos</strong> – Sempre que conjurar uma magia de Caos, pode realizar um teste de Preservação (CD 12). Se passar, pode conjurar outra magia com custo até 3 sem gastar ação – Libera uma magia de nível 1 do elemento [Caos](https://terrasdecalistoficha.wordpress.com/magias/#:~:text=Sombra%20do%20Infinito-,Caos,-Caos%20%E2%80%93%20Ordem%20do).</p>
<p><strong>Nível 2:</strong> <strong>Toque do Abismo</strong> – Magias de Caos causam +1d6 de dano e aplicam um efeito aleatório secundário escolhido pelo mestre ([Paralisado](https://terrasdecalistoficha.wordpress.com/como-jogar/#:~:text=ou%20magia.-,Paralisado,-%3A%20O%20personagem%20est%C3%A1) ou [Debilitado](https://terrasdecalistoficha.wordpress.com/como-jogar/#:~:text=se%20esquentar.-,Debilitado,-%3A%20O%20personagem%20est%C3%A1))).</p>
<p><strong>Nível 3:</strong> <strong>Coração Rasgado</strong> – Pode gastar 2 de Especial para fazer testes de Preservação com Vantagem – Libera uma magia de nível 2 do elemento [Caos](https://terrasdecalistoficha.wordpress.com/magias/#:~:text=Sombra%20do%20Infinito-,Caos,-Caos%20%E2%80%93%20Ordem%20do).</p>
<p><strong>Nível 4:</strong> <strong>Fluxo Instável</strong> – Sempre que uma magia de Caos for conjurada com sucesso, recupera 1 de Especial.</p>
<p><strong>Nível 5:</strong> <strong>Duplicação Arcana</strong> – Uma vez por combate, pode conjurar duas magias no mesmo turno, desde que ambas sejam de Preservação e ao menos uma seja de Caos – Libera uma magia de nível 3 do elemento [Caos](https://terrasdecalistoficha.wordpress.com/magias/#:~:text=Sombra%20do%20Infinito-,Caos,-Caos%20%E2%80%93%20Ordem%20do).</p>
<p><strong>Nível 6:</strong> <strong>Eco do Impossível</strong> – Se um inimigo for reduzido a 0 por uma magia de Caos, pode repetir a mesma magia em outro alvo sem gastar custo.</p>
<p><strong>Nível 7:</strong> <strong>Círculo do Destino Torcido</strong> – Ao iniciar um turno com 0 de Especial, recebe +3 em testes de Preservação até o fim da rodada – Libera uma magia de nível 4 do elemento [Caos](https://terrasdecalistoficha.wordpress.com/magias/#:~:text=Sombra%20do%20Infinito-,Caos,-Caos%20%E2%80%93%20Ordem%20do).</p>
<p><strong>Nível 8:</strong> <strong>Raiva Elemental</strong> – Pode conjurar uma magia de Caos como reação quando sofrer dano mágico.</p>
<p><strong>Nível 9:</strong> <strong>Avatar da Quebra</strong> – Uma vez por combate, conjurar uma magia de Caos não consome ação nem Especial, e ela atinge todos os inimigos próximos (até 6 metros) – Libera uma magia de nível 5 do elemento [Caos](https://terrasdecalistoficha.wordpress.com/magias/#:~:text=Sombra%20do%20Infinito-,Caos,-Caos%20%E2%80%93%20Ordem%20do).</p>
`,

bonustitulo_2: `<p>🛡️<strong>Guardião dos Ecos Fragmentados</strong></p>`,
bonusTexto_2: `
<p><strong>Nível 1:</strong> <strong>Desmanchar</strong> – Adiciona ao Arsenal a magia [Desmanchar](https://terrasdecalistoficha.wordpress.com/magias/#:~:text=do%20Alvo%3A%20Agilidade-,Desmanchar,-Dismantle) (Distorção). Sempre que conjurar essa magia, pode reduzir temporariamente a Armadura do alvo em -7 até o fim do próximo turno.</p>
<p><strong>Nível 2:</strong> <strong>Lança da Luz</strong> – Adiciona ao Arsenal a magia [Lança da Luz](https://terrasdecalistoficha.wordpress.com/magias/#:~:text=do%20Alvo%3A%20Determina%C3%A7%C3%A3o-,Lan%C3%A7a%20da%20Luz,-Hasta%20Lucis) (Luz). Ao conjurá-la, se causar dano, recupera 2 pontos de Sanidade – Libera uma magia de nível 1.</p>
<p><strong>Nível 3:</strong> <strong>Eco da Dor</strong> – Adiciona ao Arsenal a magia [Eco da Dor](https://terrasdecalistoficha.wordpress.com/magias/#:~:text=do%20Alvo%3A%20Determina%C3%A7%C3%A3o-,Eco%20da%20Dor,-Echo%20Doloris) (Maldição). Sempre que o alvo falhar no teste contra essa magia, sofre 1d4 de dano adicional no início do próximo turno.</p>
<p><strong>Nível 4:</strong> <strong>Fuligem Obscura</strong> – Adiciona ao Arsenal a magia [Fuligem Obscura](https://terrasdecalistoficha.wordpress.com/magias/#:~:text=do%20Alvo%3A%20Determina%C3%A7%C3%A3o-,Fuligem%20obscura,-M%C3%B8rk%20Sot) (Cinzas). Conjurar essa magia impõe Desvantagem no próximo teste de Determinação do alvo.</p>
<p><strong>Nível 5:</strong> <strong>Chama do Limiar</strong> – Adiciona ao Arsenal a magia [Chama do Limiar](https://terrasdecalistoficha.wordpress.com/magias/#:~:text=do%20Alvo%3A%20Brutalidade-,Chama%20do%20Limiar,-Grensen%20Flamme) (Morte). Uma vez por combate, ao conjurá-la, pode optar por causar metade do dano, mas o alvo não pode se curar até o fim da próxima rodada – Libera uma magia de nível 2.</p>
<p><strong>Nível 6:</strong> <strong>Corte Prismático</strong> – Adiciona ao Arsenal a magia [Corte Prismático](https://terrasdecalistoficha.wordpress.com/magias/#:~:text=do%20Alvo%3A%20Agilidade-,Corte%20Prism%C3%A1tico,-Prisma%20Sectura) (Laser). Sempre que conjurar essa magia, pode realizar um ataque adicional com uma arma leve como ação bônus.</p>
<p><strong>Nível 7:</strong> <strong>Vínculo Runiforme</strong> – Sempre que conjurar qualquer magia adversa do seu Arsenal, causa +1d8 de dano adicional e o alvo sofre -3 em todos os testes até o fim do próximo turno.</p>
<p><strong>Nível 8:</strong> <strong>Fragmento da Ruína</strong> – Sempre que causar dano com duas magias diferentes no mesmo turno, o alvo recebe mais 1d12 de dano no fim do turno – Libera uma magia de nível 3.</p>
<p><strong>Nível 9:</strong> <strong>Enciclopédia do Colapso</strong> – Pode ser usada uma vez por combate, com custo de 12 de Especial. Escolha até 6 magias do Arsenal. Pode conjurá-las uma após a outra sem gastar ação, mas deve passar em um teste de Preservação (CD 16) ou sofre 3d10 de dano de Sanidade.</p>
`,

bonustitulo_3: `<p>🌿<strong>Sábio da Natureza Profunda</strong></p>`,
bonusTexto_3: `
<p><strong>Nível 1:</strong> <strong>Sabedoria Instintiva</strong> – Ganha a passiva “[Sabedoria Natural](https://terrasdecalistoficha.wordpress.com/ainda-em-criacao-passivas/#:~:text=Liberta%C3%A7%C3%A3o%0AN%C3%A9voa%3A%20Conex%C3%A3o-,Sabedoria%20Natural,-Sapientia%20Naturae)“. Sempre que conjurar uma magia de Caos, recupera 2d6 de vida.</p>
<p><strong>Nível 2:</strong> <strong>Voz da Terra</strong> – Pode se comunicar com criaturas não-humanoides de forma empática e receber respostas básicas. Quando “Sabedoria Natural” estiver ativa, testes de Libertação podem ser feitos usando Preservação, e vice-versa.</p>
<p><strong>Nível 3:</strong> <strong>Chamado Verdejante</strong> – Cria uma área de 3m onde alvos sofrem 2d6 de dano de Caos por turno e têm -2 em testes de ataque – custo 3 de Especial – Libera duas magias de nível 1 de [Poder](https://terrasdecalistoficha.wordpress.com/magias/#:~:text=Culto%20da%20Morte-,Poder,-Laser%20%E2%80%93%20Disc%C3%ADpulos%20do).</p>
<p><strong>Nível 4:</strong> <strong>Pele Selvagem</strong> – Recebe +4 de Armadura enquanto estiver em ambientes naturais, templos ou florestais – Libera duas magias de nível 2 e 3 de [Caos](https://terrasdecalistoficha.wordpress.com/magias/#:~:text=Sombra%20do%20Infinito-,Caos,-Caos%20%E2%80%93%20Ordem%20do).</p>
<p><strong>Nível 5:</strong> <strong>Explosão Natural</strong> – Pode gastar 4 de Especial para causar 5d10 de dano de Água ou Fogo a todos os inimigos próximos (3m), com teste de Preservação para evitar a metade.</p>
<p><strong>Nível 6:</strong> <strong>Mestre da Mutação</strong> – Pode conjurar uma magia de Caos e imediatamente alterar seu alvo ou área após ver o resultado da rolagem.</p>
<p><strong>Nível 7:</strong> <strong>Raízes Eternas</strong> – Enquanto estiver parado, regenera 3d8 de vida por turno. Não pode se mover nesse estado – ativar custa 6 de Especial.</p>
<p><strong>Nível 8:</strong> <strong>Guardião Selvagem</strong> – Conjurar magias de Caos concede +6 em todas as resistências até o próximo turno.</p>
<p><strong>Nível 9:</strong> <strong>Alma das Tempestades</strong> – Uma vez por combate, entra em estado de fúria natural: todas as magias de Caos têm dano dobrado por 2 turnos, e ignora o custo de Sanidade nesse período.</p>
`,

        "movimento_pass": 3.5
      },
      "Malabarista": {
        "vidaPorNivel": 6,
        "sanidadePorNivel": 2,
        "armaduraPorNivel": 1,
        "resistencia": "Tremor",
        "bonusPass": "+5 em testes de arremesso e +2 em testes com acrobacia.",
        "movimento_pass": 4.5
      },
      "Marinheiro": {
        "vidaPorNivel": 7,
        "sanidadePorNivel": 1,
        "armaduraPorNivel": 1,
        "resistencia": "Tremor",
        "bonusPass": "+6 em testes de agarrar, +4 em testes para se livrar de status negativos.",
        "movimento_pass": 3.5
      },
      "Masoquista": {
        "vidaPorNivel": 6,
        "sanidadePorNivel": 2,
        "armaduraPorNivel": 1,
        "resistencia": "Sangue",
      "bonusPass": `
Nível 0: Correntes com <strong>+1d6</strong>, autoinfligir <strong>dano (1d6)</strong> como <strong>ação livre</strong> para ganhar <strong>+1d12 extra</strong>.
`,
"bonustitulo_1": `<p>🏴<strong>Sofrimento Prolongado</strong></p>`,
"bonusTexto_1": `
<p><em>O verdadeiro sobrevivente conhece a dor como única aliada. Isolado, ferido, enlouquecido… é quando está mais perto da morte que ele finalmente vive.</em></p>
<p><strong>Nível 1: Primeiro Ferimento</strong> – Sempre que iniciar um combate, recebe <strong>+2 de movimento por 3 turnos</strong>.</p>
<p><strong>Nível 2: Dor Afiada</strong> – Sempre que sofre <strong>dano físico</strong>, ganha <strong>+2 em Esquiva até o próximo turno</strong>.<br>
Se o dano for do tipo <strong>Sangue</strong>, cura <strong>1d12 de Vida</strong> e <strong>2 de Sanidade</strong>.</p>
<p><strong>Nível 3: Vício em Sofrimento</strong> – Se receber <strong>dano duas vezes em um mesmo turno</strong>, todos os ataques contra você causam <strong>-1d6 de dano</strong> até o fim do próximo turno.</p>
<p><strong>Nível 4: Pele que Endurece</strong> – Em qualquer turno em que você <strong>não estiver sob cobertura</strong> e for alvo de uma magia, ganha <strong>+1 em Resistência contra o efeito</strong>.<br>
Se estiver com a condição <strong>Sangrando</strong>, ganha <strong>+2 em vez de +1</strong>.</p>
<p><strong>Nível 5: Frieza Letal</strong> – Se for atingido e sobreviver, pode realizar um <strong>contra-ataque com +2d8 de dano</strong> (<strong>custo: 3 Especial</strong>).<br>
Se tiver se ferido neste turno, esse contra-ataque <strong>ignora 2 pontos de Armadura</strong>.</p>
<p><strong>Nível 6: Improviso Doloroso</strong> – Você pode <strong>usar o ambiente para criar uma armadura rudimentar</strong>, reduzindo <strong>o próximo dano recebido em 50%</strong> (<strong>custo: 4 Especial</strong>).<br>
Se estiver <strong>Sangrando</strong>, o atacante sofre <strong>1d6 de dano de volta</strong>.</p>
<p><strong>Nível 7: Coração Quebra-Ossos</strong> – Se receber <strong>dano</strong>, ganha <strong>+2 em Esquiva</strong> e <strong>+2 em Resistência</strong> até o fim do combate.<br>
Se estiver <strong>Sangrando</strong>, também causa <strong>+1d8 de dano físico</strong> em todos os ataques corpo a corpo.</p>
<p><strong>Nível 8: Último Delírio</strong> – Se um golpe for capaz de te matar, você realiza um <strong>último ataque com +3d10 de dano</strong> antes de cair.<br>
Se o ataque for contra quem causou <strong>dano de Sangue</strong> em você, você <strong>permanece com 1 de Vida</strong> por <strong>1 turno</strong> antes de cair.</p>
<p><strong>Nível 9: Sobrevivente da Dor</strong> – Uma vez por combate, você pode <strong>recuperar 3d12 de Vida</strong> (<strong>custo: 5 Especial</strong>).<br>
Se estiver <strong>Sangrando</strong>, recupera também <strong>+1d12 de Vida</strong> e <strong>3 de Sanidade</strong>.</p>
`
,

        "movimento_pass": 4.5
      },
      "Médico": {
        "vidaPorNivel": 6,
        "sanidadePorNivel": 2,
        "armaduraPorNivel": 1,
        "resistencia": "Sagrado",
        "bonusPass": "+5 em testes de medicina, -1h para tratar feridas, vantagem em Curas.",
        "movimento_pass": 3.5
      },
      "Mendigo": {
        "vidaPorNivel": 6,
        "sanidadePorNivel": 2,
        "armaduraPorNivel": 3,
        "resistencia": "Névoa",
        "bonusPass": "Pode usar a passiva Selvageria sem custo.",
        "movimento_pass": 4.5
      },
      "Monge": {
        "vidaPorNivel": 5,
        "sanidadePorNivel": 3,
        "armaduraPorNivel": 1,
        "resistencia": "Luz",
        "bonusPass": "+1d10 com bastões e a magia Sombra animal sem custo uma vez por dia.",
        "movimento_pass": 4.5
      },
      "Naturalista": {
        "vidaPorNivel": 4,
        "sanidadePorNivel": 4,
        "armaduraPorNivel": 1,
        "resistencia": "Água",
        "bonusPass": "+1d6 de dano com Magia Vinhas mágicas e +2 em testes de Preservação.",
        "movimento_pass": 4.5
      },
      "Nobre": {
        "vidaPorNivel": 5,
        "sanidadePorNivel": 2,
        "armaduraPorNivel": 2,
        "resistencia": "Luz",
        "bonusPass": "+1d20 em curas descansando.",
        "movimento_pass": 3.5
      },
      "Perseguidor": {
        "vidaPorNivel": 6,
        "sanidadePorNivel": 2,
        "armaduraPorNivel": 1,
        "resistencia": "Ácido",
        "bonusPass": "+5 em furtividade e Pressão sem custo uma vez por dia.",
        "movimento_pass": 5.5
      },
      "Pervertido": {
        "vidaPorNivel": 8,
        "sanidadePorNivel": 0,
        "armaduraPorNivel": 1,
        "resistencia": "Sagrado",
        "bonusPass": "+5 em testes de agarrar, caso esteja sem roupa o teste fica em +10 bônus.",
        "movimento_pass": 4
      },
      "Pescador": {
        "vidaPorNivel": 7,
        "sanidadePorNivel": 1,
        "armaduraPorNivel": 1,
        "resistencia": "Água",
        "bonusPass": "Magias de água causa 2d8 extras.",
        "movimento_pass": 3.5
      },
      "Pirata": {
        "vidaPorNivel": 6,
        "sanidadePorNivel": 2,
        "armaduraPorNivel": 1,
        "resistencia": "Água",
        "bonusPass": "+5 em dados de investigação, +1d8 em danos com pistolas e rapieiras.",
        "movimento_pass": 4
      },
      "Prefeito": {
        "vidaPorNivel": 5,
        "sanidadePorNivel": 3,
        "armaduraPorNivel": 1,
        "resistencia": "Psicológico",
        "bonusPass": "+10 em testes de diplomacia e +5 em intimidação.",
        "movimento_pass": 3.5
      },
      "Prisioneiro": {
        "vidaPorNivel": 7,
        "sanidadePorNivel": 1,
        "armaduraPorNivel": 1,
        "resistencia": "Cortante",
        "bonusPass": "+2d6 agarrando, +2 em testes de agarrar, +2d8 com ataque usando algemas.",
        "movimento_pass": 3.5
      },
      "Profanado": {
        "vidaPorNivel": 7,
        "sanidadePorNivel": 1,
        "armaduraPorNivel": 2,
        "resistencia": "Escuridão",
        "bonusPass": "Passiva Consumir sem custo uma vez por dia.",
        "movimento_pass": 3.5
      },
      "Protetor": {
        "vidaPorNivel": 5,
        "sanidadePorNivel": 3,
        "armaduraPorNivel": 2,
        "resistencia": "Alma",
        "bonusPass": "Magia Mestre das passivas sem custo uma vez por dia.",
        "movimento_pass": 4.5
      },
      "Pugilista": {
        "vidaPorNivel": 7,
        "sanidadePorNivel": 1,
        "armaduraPorNivel": 2,
        "resistencia": "Esmagante",
        "bonusPass": "+1d12 desarmado, +1d8 com manoplas e tem a passiva Salvaguarda sem custo uma vez por dia.",
        "movimento_pass": 4
      },
      "Revivido": {
        "vidaPorNivel": 3,
        "sanidadePorNivel": 5,
        "armaduraPorNivel": 1,
        "resistencia": "Maldição",
        "bonusPass": "A magia Órgãos sombrios sem custo uma vez por combate, +2 em curas.",
        "movimento_pass": 3.5
      },
      "Samurai": {
        "vidaPorNivel": 7,
        "sanidadePorNivel": 1,
        "armaduraPorNivel": 1,
        "resistencia": "Cortante",
        "bonusPass": `
+1d8 de dano com <strong>Katanas</strong> e desembainhar no contra-ataque gasta ação livre e ganha +1d8 de dano (armas corpo a corpo).</p>
`,

"bonustitulo_1": "<p>🗡️ <strong>Desonrado</strong></p>",
"bonusTexto_1": `
<p>Nível 1: <strong>Marca da Traição</strong> — +2 em testes de <strong>Furtividade</strong> e <strong>Intimidação</strong> ao usar katanas.</p>
<p>Nível 2: <strong>Corte pelas Costas</strong> — Ataques de surpresa ou pelas costas com katana causam +2d8 de dano adicional e têm +1 em chance de acerto.</p>
<p>Nível 3: <strong>Emboscada Veloz</strong> — Desembainhar no contra-ataque concede +3d6 de dano e ignora a armadura do alvo (1 vez por rodada).</p>
<p>Nível 4: <strong>Assassinato sem Honra</strong> — Críticos contra inimigos desprevenidos causam sangramento (1d8 por 2 turnos) e aplicam a passiva <strong>Pavor</strong> no alvo.</p>
<p>Nível 5: <strong>Amedrontador</strong> — Inimigos que presenciarem uma morte causada por você recebem -2 em ataques e sofrem <strong>Pavor</strong> por 1 turno.</p>
<p>Nível 6: <strong>Golpe Corrupto</strong> — Pode sacrificar 2 de <strong>Sanidade</strong> para aplicar +3d10 de dano em um ataque furtivo.</p>
<p>Nível 7: <strong>Sombras Cortantes</strong> — Enquanto estiver escondido, pode realizar um ataque com vantagem total e +4d6 de dano (uma vez por combate).</p>
<p>Nível 8: <strong>Caminho do Exílio</strong> — +3 em testes de <strong>Furtividade</strong> ao portar katanas. Inimigos sofrem -2 em <strong>Percepção</strong> para detectá-lo.</p>
<p>Nível 9: <strong>Execução Infame</strong> — Contra inimigos com menos da metade da vida, ataque furtivo com katana causa +6d10, ignora qualquer armadura ou defesa especial e aplica <strong>Pavor</strong> (custo: 5 especial).</p>
`,

"bonustitulo_2": "<p>🛡️ <strong>Bushido</strong></p>",
"bonusTexto_2": `
<p>Nível 1: <strong>Código do Guerreiro</strong> — +2 em testes de <strong>Resistência</strong> e +1 em ataque ao enfrentar um único inimigo.</p>
<p>Nível 2: <strong>Desafio Formal</strong> — Pode declarar duelo com um inimigo (1 vez por combate). Ambos ganham +2 em ataque contra o outro, mas -1 contra terceiros.</p>
<p>Nível 3: <strong>Retaliação Justa</strong> — Contra-ataques com katana causam +3d6 de dano e recuperam 2 de <strong>Especial</strong>.</p>
<p>Nível 4: <strong>Espírito de Aço</strong> — +3 em testes de resistência contra efeitos de <strong>Pavor</strong> e <strong>Confusão</strong>.</p>
<p>Nível 5: <strong>Perfeição do Golpe</strong> — Crítico com katana permite um segundo ataque gratuito com +1 de acerto e +2d6 de dano (uma vez por rodada).</p>
<p>Nível 6: <strong>Domínio da Postura</strong> — +2 em <strong>Armadura</strong> e +2 em <strong>Esquiva</strong> enquanto estiver em duelo direto.</p>
<p>Nível 7: <strong>Juízo de Lâmina</strong> — Pode declarar um <strong>Corte de Justiça</strong>: se o inimigo violar regras acordadas, seu próximo ataque com katana tem dano triplicado (1 vez por combate).</p>
<p>Nível 8: <strong>Aura da Honra</strong> — Todos os aliados em até 5 metros ganham +2 em <strong>Resistência</strong> contra <strong>Pavor</strong> e +2 em <strong>Armadura</strong> enquanto você estiver de pé.</p>
<p>Nível 9: <strong>Corte do Destino</strong> — Um único golpe de katana, concentrando toda sua disciplina: +8d10 de dano, ignora qualquer escudo, barreira ou magia defensiva (custo: 5 especial, uma vez por combate).</p>
`,

"bonustitulo_3": "<p>☯️ <strong>Sepukku</strong></p>",
"bonusTexto_3": `
<p>Nível 1: <strong>Marca Espiritual</strong> — +2 em ataques com katana contra inimigos amaldiçoados ou afetados por magias.</p>
<p>Nível 2: <strong>Sopro do Além</strong> — Pode usar 1 de <strong>Sanidade</strong> para aumentar o alcance do corte da katana em +2 metros por 1 turno.</p>
<p>Nível 3: <strong>Contra-Ataque Espectral</strong> — Desembainhar em contra-ataque conjura uma cópia etérea que causa +3d6 de dano mágico.</p>
<p>Nível 4: <strong>Lâmina da Alma</strong> — Katana causa +3d6 de dano do tipo <strong>Alma</strong> em inimigos com menos da metade da vida e reduz 1 de <strong>Sanidade</strong>.</p>
<p>Nível 5: <strong>Oferta Dolorosa</strong> — Pode perder 3 de vida para causar +3d10 de dano em um ataque com katana. Se for um crítico, regenera a vida gasta.</p>
<p>Nível 6: <strong>Presença Fantasmal</strong> — Inimigos têm -2 em testes para te atingir por 1 turno após sofrerem um ataque seu.</p>
<p>Nível 7: <strong>Pacto das Sombras</strong> — Em combate, pode convocar uma sombra samurai que repete seu último ataque com metade do dano (uma vez por combate). A sombra dura 1 turno.</p>
<p>Nível 8: <strong>Lâmina do Vazio</strong> — Ataques com katana ignoram 4 de <strong>Armadura</strong> e causam dano direto à <strong>Sanidade</strong>. Se o alvo estiver com menos da metade da vida, aplica <strong>Pavor</strong>.</p>
<p>Nível 9: <strong>Sepukku Final</strong> — Ao cair a 0 de vida, pode realizar um último golpe antes de morrer: +8d10 de dano em um inimigo adjacente, aplica <strong>Pavor</strong> em todos os inimigos em até 10 metros, e explode em energia espiritual, restaurando 5 de <strong>Sanidade</strong> a todos os aliados próximos. (Usuário morre em seguida.)</p>
`
,
        "movimento_pass": 4.5
      
      },
      "Sacerdote": {
        "vidaPorNivel": 7,
        "sanidadePorNivel": 1,
        "armaduraPorNivel": 1,
        "resistencia": "Fogo",
        "bonusPass": "Magias Benção antiga e Conexão santa sem custo uma vez ao dia.",
        "movimento_pass": 3.5
      },
  "Soberano": {
    "vidaPorNivel": 4,
    "sanidadePorNivel": 4,
    "armaduraPorNivel": 1,
    "resistencia": "Psicológico",
    "bonusPass": "Magia Diplopia binocular Sem custo uma vez por dia e cria 2 cópias.",
    "movimento_pass": 4
  },
  "Taverneiro": {
    "vidaPorNivel": 6,
    "sanidadePorNivel": 2,
    "armaduraPorNivel": 1,
    "resistencia": "Balístico",
    "bonusPass": "+2 em testes de Libertação, +2 em testes de Conexão.",
    "movimento_pass": 3.5
  },
  "Tormentalista": {
    "vidaPorNivel": 5,
    "sanidadePorNivel": 3,
    "armaduraPorNivel": 1,
    "resistencia": "Tempestade",
    "bonusPass": "+1d12 em magias de Tempestade e elas usam o atributo de Brutalidade e personagem pode voar.",
    "movimento_pass": 4
  }
  
  
};



let nivelPersonagemSelecionado = null;
let nivelHabilidadeEscolhida = null;

function carregarEspecializacoes(pastData) {
  const container = document.getElementById("especializacoesContainer");
  container.innerHTML = '';

  for (const [nomePassado, dados] of Object.entries(pastData)) {

    const bloco = document.createElement('div');
    bloco.className = 'passado-bloco';

    const titulo = document.createElement('h3');
    titulo.className = 'nome-passado';
    titulo.textContent = nomePassado;
    bloco.appendChild(titulo);

    for (let esp = 1; esp <= 3; esp++) {
      const tituloKey = `bonustitulo_${esp}`;
      if (!dados[tituloKey]) continue;

      const h4 = document.createElement('div');
      h4.className = 'especializacao-opcao';
      h4.innerHTML = dados[tituloKey];
      h4.onclick = () => selecionarEspecializacaoNova(nomePassado, esp);

      bloco.appendChild(h4);
    }

    container.appendChild(bloco);
  }
}
function selecionarEspecializacaoNova(passado, num) {
  const dados = pastData[passado];
  const titulo = dados[`bonustitulo_${num}`];

  const nivel = Number(nivelEscolhidoPopup);
  const escolhaNivel = Number(escolhaEscolhidaPopup);

  // ✅ Garante que os níveis existam
  if (!nivel || !escolhaNivel) {
    console.warn("Nível inválido ao salvar especialização:", { nivel, escolhaNivel });
    return;
  }

  // ✅ Salva corretamente a especialização associada a este nível
  chosenBonuses[`especializacaoNivel${nivel}`] = { passado, num, titulo, escolhaNivel };
  console.log(`Especialização salva no nível ${nivel}:`, chosenBonuses);

  // === Atualiza visual ===
  const destino = document.getElementById(`resultadoEspecializacaoNivel${nivel}`);
  const descricaoOriginal = document.querySelector(`#nivel${nivel}Texto .descricao-nivel${nivel}`);
  if (!destino || !descricaoOriginal) return;

  descricaoOriginal.style.display = "none";
  destino.style.display = "block";

  const niveisRef = [1, 3, 5, 9, 13, 16, 20, 22, 25];
  const nivelMaisProximo = [...niveisRef].reverse().find(n => n <= escolhaNivel);

  let textoFinal = `
    <div class="resultado-especializacao">
      <p class="nivel-label"><strong>Nível ${nivel}:</strong></p>
      <div class="resultado-conteudo">
        <h3 class="resultado-titulo">${titulo}</h3>
        <hr class="resultado-divisor">
  `;

  if (nivelMaisProximo) {
    const key = `bonusTexto${num}N${nivelMaisProximo}`;
    textoFinal += `<p><strong>Habilidade de Nível ${nivelMaisProximo}:</strong> ${dados[key] || '(sem bônus)'}</p>`;
  } else {
    textoFinal += `<p>Sem bônus disponível neste nível.</p>`;
  }

  textoFinal += `</div></div>`;
  destino.innerHTML = textoFinal;

  fecharPopupEspecializacoes();
}


// ==============================
// EVENTOS DE INTERFACE
// ==============================
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById("popupOverlay").addEventListener("click", (event) => {
    const popup = document.getElementById("popupEspecializacoes");
    if (!popup.contains(event.target)) fecharPopupEspecializacoes();
  });

  document.querySelectorAll(".botao-abrir-especializacoes").forEach(botao => {
  botao.addEventListener("click", (e) => {
    const btn = e.currentTarget;
    nivelEscolhidoPopup = parseInt(btn.dataset.nivelPersonagem, 10);
    escolhaEscolhidaPopup = parseInt(btn.dataset.escolhaNivel, 10);
    abrirPopupEspecializacoes();
  });
});

});

function abrirPopupEspecializacoes() {
  document.getElementById("popupOverlay").style.display = "block";
  document.getElementById("popupEspecializacoes").style.display = "block";
  carregarEspecializacoes(pastData);
}

function fecharPopupEspecializacoes() {
  document.getElementById("popupOverlay").style.display = "none";
  document.getElementById("popupEspecializacoes").style.display = "none";
}










// Ativação do popup e tutorial
document.addEventListener("DOMContentLoaded", function () {
  // 🎲 Dice Popup
  const dicePopup = document.getElementById("dicePopup");
  const openDiceBtn = document.getElementById("openPopup");
  const closeDiceBtn = dicePopup.querySelector(".close");

  openDiceBtn.onclick = function () {
    dicePopup.style.display = "flex";

    const physical = document.getElementById("physicalDamage").textContent;
    const elemental = document.getElementById("elementalDamage").textContent;
    document.getElementById("diceInput").value = physical + "+" + elemental;
  };

  closeDiceBtn.onclick = function () {
    dicePopup.style.display = "none";
  };

  // Fecha popup ao clicar fora
  window.addEventListener("click", function (event) {
    if (event.target === dicePopup) {
      dicePopup.style.display = "none";
    }
  });

  // 📘 Tutorial Popup
  const tutorialPopup = document.getElementById("tutorialPopup");
  const closeTutorial = document.getElementById("closeTutorial");
  const openTutorialButton = document.getElementById("openTutorialButton");

  let timesClosed = localStorage.getItem("calisto_fechamentos");
  if (!timesClosed) timesClosed = 0;
  else timesClosed = parseInt(timesClosed);

  if (timesClosed < 5) {
    tutorialPopup.style.display = "flex";
  }

  closeTutorial.onclick = () => {
    tutorialPopup.style.display = "none";
    timesClosed++;
    localStorage.setItem("calisto_fechamentos", timesClosed);
  };

  openTutorialButton.onclick = () => {
    tutorialPopup.style.display = "flex";
  };

  window.addEventListener("click", function (event) {
    if (event.target === tutorialPopup) {
      tutorialPopup.style.display = "none";
      timesClosed++;
      localStorage.setItem("calisto_fechamentos", timesClosed);
    }
  });
});

// ✅ Controle dos modos ativados
let usarMelhoresOuPiores = false;
let usarModificador = false;

const btnRegra = document.getElementById("ativarRegraBtn");
const btnMod = document.getElementById("usarModificadorBtn");

// Toggle botão Melhores/Piores
btnRegra.addEventListener("click", () => {
  usarMelhoresOuPiores = !usarMelhoresOuPiores;
  btnRegra.classList.toggle("ativo");
});

// Toggle botão Modificador
btnMod.addEventListener("click", () => {
  usarModificador = !usarModificador;
  btnMod.classList.toggle("ativo");
});

// 🎞️ GIFs possíveis — coloque quantos quiser
const diceGifUrls = [
  "https://i.gifer.com/GLoa.gif",
  "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHZiMjE1dG1iOXZhbTExdWoyY3h4cG8zNGk1Yndjbjh1emZldm13MyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/lcySndwSDLxC4eOU86/giphy.gif",
  "https://media0.giphy.com/media/NnafYvjXZK9j2/giphy.gif",
  "https://observer.com/wp-content/uploads/sites/2/2013/01/roll-dice.gif?quality=80",
  "https://media.tenor.com/izm3CkQjl9EAAAAM/dark-souls-roll.gif",
  "https://media.tenor.com/akss-JznKWcAAAAM/neymar-roll.gif"
];

// Função auxiliar para sortear e tocar o GIF
function playRandomGif(id = "diceGif", urls = diceGifUrls, hideDelay = 50) {
  const gif = document.getElementById(id);
  if (!gif || urls.length === 0) return;

  const randomUrl = urls[Math.floor(Math.random() * urls.length)];

  gif.style.display = "none";
  gif.src = "";

  setTimeout(() => {
    gif.src = randomUrl;
    gif.style.display = "block";
  }, hideDelay);
}

// -------------------------------------------
// 🎲 Função principal de rolagem de dados
// -------------------------------------------
function rollDice() {
  const input = document.getElementById("diceInput").value.trim();
  const gif = document.getElementById("diceGif");

  let dicePart = input;
  let modifier = 0;

  const modMatch = input.match(/([+-]\d+)$/);
  if (modMatch) {
    modifier = parseInt(modMatch[1]);
    dicePart = input.slice(0, modMatch.index);
  }

  const pattern = /(\d*)d(\d+)/gi;
  let match;
  let total = 0;
  let detailed = "";

  while ((match = pattern.exec(dicePart)) !== null) {
    const count = parseInt(match[1] || "1");
    const sides = parseInt(match[2]);

    let rolls = [];
    for (let i = 0; i < count; i++) {
      rolls.push(Math.floor(Math.random() * sides) + 1);
    }

    let usedRolls = rolls;
    let infoExtra = "";

    if (usarMelhoresOuPiores && modifier !== 0) {
      const sorted = [...rolls].sort((a, b) => a - b);
      const qtd = Math.min(Math.abs(modifier), rolls.length);
      usedRolls = modifier > 0 ? sorted.slice(-qtd) : sorted.slice(0, qtd);
      total += usedRolls.reduce((a, b) => a + b, 0);
      infoExtra = ` → usados: <strong>${usedRolls.join(", ")}</strong>`;
    } else {
      total += rolls.reduce((a, b) => a + b, 0);
    }

    detailed += `<strong>${count}d${sides}:</strong> ${rolls.join(", ")}${infoExtra}<br>`;
  }

  if (modifier !== 0) {
    if (!usarMelhoresOuPiores && usarModificador) {
      total += modifier;
      detailed += `<strong>Modificador:</strong> ${modifier > 0 ? "+" : ""}${modifier}<br>`;
    } else if (usarMelhoresOuPiores) {
      detailed += `<strong>Tipo de seleção:</strong> ${modifier > 0 ? "maiores" : "menores"} ${Math.abs(modifier)}<br>`;
    }
  }

  // ▶️ Chama a função de GIF aleatório
  playRandomGif("diceGif");

  document.getElementById("diceOverlay").innerText = `Total: ${total}`;
  document.getElementById("detailedResults").innerHTML = detailed;
}

// -------------------------------------------
// 🎯 Resetar e limitar perícias
// -------------------------------------------
document.getElementById("resetSkillsButton")?.addEventListener("click", () => {
  document.querySelectorAll(".pericia button").forEach((btn) => (btn.innerText = "0"));
});

function toggleSkill(button) {
  const selected = Array.from(document.querySelectorAll(".pericia button")).filter(
    (btn) => btn.innerText === "+2"
  ).length;

  if (button.innerText !== "+2" && selected >= 3) return;

  button.innerText = button.innerText === "+2" ? "0" : "+2";
}

// -------------------------------------------
// 🎲 Rolagem automática de d20 + bônus de teste
// -------------------------------------------
document.querySelectorAll(".roll-attr-dice").forEach(btn => {
  btn.addEventListener("click", () => {
    const attr = btn.getAttribute("data-attr"); // ex: 'for', 'des', etc.
    const bonusSpan = document.getElementById(`${attr}-bonus-test`);
    const bonus = parseInt(bonusSpan?.textContent || "0");

    const d20 = Math.floor(Math.random() * 20) + 1;
    const total = d20 + bonus;

    const attrMap = {
      for: "BRU",
      des: "AGI",
      con: "DET",
      int: "PRE",
      sab: "LIB",
      car: "CNX"
    };

    const attrName = attrMap[attr] || attr.toUpperCase();

    const detailed = `
      <strong>${attrName}</strong><br>
      Rolagem: d20 = ${d20}<br>
      Bônus de Teste: ${bonus >= 0 ? "+" : ""}${bonus}<br>
      <strong>Total:</strong> ${total}
    `;

    // ▶️ Também usa o GIF aleatório
    playRandomGif("diceGif");

    document.getElementById("diceOverlay").innerText = `Total: ${total}`;
    document.getElementById("detailedResults").innerHTML = detailed;
    document.getElementById("dicePopup").style.display = "flex";
  });
});

  
const chessPopup = document.getElementById("chessTutorialPopup");
const openChess = document.getElementById("openChessPopup");
const closeChess = document.getElementById("closeChessPopup");

const combatPopup = document.getElementById("combatPopup");
const openCombat = document.getElementById("openCombatPopup");
const closeCombat = document.getElementById("closeCombatPopup");

// Abrir e fechar principal
if (openChess && chessPopup && closeChess) {
  openChess.onclick = () => chessPopup.style.display = "flex";
  closeChess.onclick = () => chessPopup.style.display = "none";
}

// Abrir e fechar secundário
if (openCombat && combatPopup && closeCombat) {
  openCombat.onclick = () => combatPopup.style.display = "flex";
  closeCombat.onclick = () => combatPopup.style.display = "none";
}

// Fechar se clicar fora do popup
window.onclick = (e) => {
  if (e.target === chessPopup) chessPopup.style.display = "none";
  if (e.target === combatPopup) combatPopup.style.display = "none";
};
  
function formatBonusText(text, type = "default") {
  let className;
  if (type === "bonus1") className = "bonus1-paragraph";
  else if (type === "bonus2") className = "bonus2-paragraph";
  else if (type === "bonus3") className = "bonus3-paragraph";
  else if (type === "bonus4") className = "bonus4-paragraph";
  else if (type === "bonus5") className = "bonus5-paragraph";
  else className = "bonus-paragraph";

  return text
    .split(/\n+/)
    .map(sentence => {
      if (sentence.trim()) {
        const formattedSentence = sentence
          .replace(/\*(.*?)\*/g, '<strong>$1</strong>')
          .replace(/_(.*?)_/g, '<em>$1</em>')
          .replace(/~(.*?)~/g, '<u>$1</u>')
          .replace(/tachado\((.*?)\)/g, '<s>$1</s>')
          .replace(/{pigmento}(.*?){\/pigmento}/g, '<span class="pigmento">$1</span>')
          .replace(/\[(.*?)\]\((https?:\/\/[^\s]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');
        return `<p class="${className}">${formattedSentence}</p>`;
      } else {
        return '';
      }
    })
    .join('');
}



function abrirSecaoBonusPassado() {
  const secao = document.getElementById("secaoBonusPassado");

  // Verifica se a seção está aberta ou fechada
  if (secao.style.display === "none" || secao.style.display === "") {
    // Abre a seção
    secao.style.display = "block";
    
    // Preenche os conteúdos
    document.getElementById("tituloBonus1").textContent = dadosBonus.bonustitulo_1;
    document.getElementById("tituloBonus2").textContent = dadosBonus.bonustitulo_2;
    document.getElementById("tituloBonus3").textContent = dadosBonus.bonustitulo_3;
    document.getElementById("tituloBonus4").textContent = dadosBonus.bonustitulo_4;
    document.getElementById("tituloBonus5").textContent = dadosBonus.bonustitulo_5;



    document.getElementById("textoBonus1").innerHTML = formatBonusText(dadosBonus.bonusTexto_1, "bonus1");
    document.getElementById("textoBonus2").innerHTML = formatBonusText(dadosBonus.bonusTexto_2, "bonus2");
    document.getElementById("textoBonus3").innerHTML = formatBonusText(dadosBonus.bonusTexto_3, "bonus3");
    document.getElementById("textoBonus4").innerHTML = formatBonusText(dadosBonus.bonusTexto_4, "bonus4");
    document.getElementById("textoBonus5").innerHTML = formatBonusText(dadosBonus.bonusTexto_5, "bonus5");

  } else {
    // Fecha a seção
    secao.style.display = "none";
  }
}

// Chama automaticamente ao carregar a página
window.addEventListener("DOMContentLoaded", abrirSecaoBonusPassado);


function alternarTextoBonus(num) {
  const el = document.getElementById(`textoBonus${num}`);
  el.style.display = el.style.display === "none" ? "block" : "none";
}



// Abrir ou fechar a seção de bônus
// Abrir ou fechar a seção de bônus
// Abrir ou fechar a seção de bônus
// Abrir ou fechar a seção de bônus
// Abrir ou fechar a seção de bônus
// Abrir ou fechar a seção de bônus
// Abrir ou fechar a seção de bônus
// Abrir ou fechar a seção de bônus

// Atualiza o conteúdo com base no select
function atualizarBonusDoPassado(passadoSelecionado) {
  const dados = pastData[passadoSelecionado];

  document.getElementById('tituloBonusPassado').textContent =
    `Especializações do ${passadoSelecionado || 'N/A'}`;

  for (let i = 1; i <= 3; i++) {
    const titulo = dados?.[`bonustitulo_${i}`] || '';
    const texto = dados?.[`bonusTexto_${i}`] || '';
    document.getElementById(`tituloBonus${i}`).innerHTML = formatBonusText(titulo, `bonus${i}`);
    document.getElementById(`textoBonus${i}`).innerHTML = formatBonusText(texto, `bonus${i}`);
  }
  // Novo trecho para bonusPass
  const bonusPassText = dados?.bonusPass || '';
  document.getElementById("textoBonusPassado").innerHTML = formatBonusText(bonusPassText);
}

// Ao carregar a página ou mudar o select
document.addEventListener('DOMContentLoaded', () => {
  const selectPassado = document.getElementById('past');

  if (selectPassado) {
    atualizarBonusDoPassado(selectPassado.value);

    selectPassado.addEventListener('change', (e) => {
      atualizarBonusDoPassado(e.target.value);
    });
  }
});


function alternarTextoBonus(numero) {
  const texto = document.getElementById(`textoBonus${numero}`);
  texto.style.display = (texto.style.display === 'none' || texto.style.display === '') ? 'block' : 'none';
}
// Abrir ou fechar a seção de bônus
// Abrir ou fechar a seção de bônus
// Abrir ou fechar a seção de bônus
// Abrir ou fechar a seção de bônus






// Abrir ou fechar a seção de bônus
// Abrir ou fechar a seção de bônus
// Abrir ou fechar a seção de bônus
// Abrir ou fechar a seção de bônus
let equippedItemId = null;
let equippedSlots = {
  cabeca: null,
  peito: null,
  pernas: null,
  botas: null,
  maos: null,
  acessorio: null
};



const items = [
 {
    id: "capa_verde_folha",
    name: "Capa Verde Folha",
    desc: "Uma capa simples com cintos de couro, usada por viajantes para se proteger do clima.",
    img: "imagens/Armas/capa.png",
    slot: "acessorio",
  damageDice: "Acessório",
   armor: 0,
    tipo: "Comum",
    damageType: "N/A",
    TipoItem: "Equipamento"
  },{
    id: "capacete_guardiao",
    name: "Capacete do Guardião",
    desc: "Capacete de ferro com viseira simples, usado por guardas da cidade.",
    img: "imagens/Armas/capacete.png",
    slot: "cabeca",
    damageDice: "Cabeça",
    armor: 1,
    tipo: "Comum",
    damageType: "N/A",
    TipoItem: "Equipamento"
  }, 
  {
    id: "peitoral_funcional",
    name: "Peitoral Funcional",
    desc: "Peitoral de couro reforçado com placas metálicas, oferece boa proteção sem sacrificar mobilidade.",
    img: "imagens/Armas/peitoral.png",
    slot: "peito",
    damageDice: "Peito",
    armor: 1,
    tipo: "Comum",
    damageType: "N/A",
    TipoItem: "Equipamento"
  },
  
  {
    id: "luvas_simples_couro",
    name: "Luvas Simples de Couro",
    desc: "Luvas modestas feitas de couro curtido, oferecem proteção básica contra o frio e arranhões.",
    img: "imagens/Armas/luvas.png",
    slot: "maos",
    damageDice: "Mãos",
    armor: 0,
    tipo: "Comum",
    damageType: "N/A",
    TipoItem: "Equipamento"
  },
 
  {
    id: "botas_explorador",
    name: "Botas do Explorador",
    desc: "Botas resistentes com sola reforçada, ideais para longas caminhadas e terrenos irregulares.",
    img: "imagens/Armas/botas.png",
    slot: "pernas",
    damageDice: "Pernas",
    armor: 0,
    tipo: "Comum",
    damageType: "N/A",
    TipoItem: "Equipamento"
  },{
  id: "thorville_olho_ressecado",
  name: "Thorvilles Tørre Øye",
  desc: "O Olho Ressecado de Thorville, um amuleto sagrado dito ser uma relíquia da Grande Guerra. Quem o carrega pode invocar a magia Conexão Santa sem custo uma vez ao dia.",
  img: "imagens/Armas/olho.png",
  slot: "acessorio",
  damageDice: "Acessório",
armor: 0,
  tipo: "Sagrado",
  damageType: "N/A",
  TipoItem: "Equipamento"
},

{
  id: "gyllen_ravnhjelm",
  name: "Gyllen Ravnhjelm",
  desc: "Capacete dourado do Corvo Negro. Dizem que suas sombras ainda sussurram. Concede a magia Sombra Animal ao usuário.",
  img: "imagens/Armas/capacete corvo negro.png",
  slot: "cabeca",
      damageDice: "Cabeça",

  armor: 1,
  tipo: "Pesado",
  damageType: "N/A",
  TipoItem: "Equipamento"
},

{
  id: "gylden_pectoral",
  name: "Gylden Pectoral",
  desc: "Peitoral dourado do Corvo Negro. Seu brilho vivo pulsa como asas. Desbloqueia a passiva Metamorfose.",
  img: "imagens/Armas/peito corvo negro.png",
  slot: "peito",
      damageDice: "Peito",

  armor: 1,
  tipo: "Pesado",
  damageType: "N/A",
  TipoItem: "Equipamento"
},

{
  id: "gylden_glove",
  name: "Gylden Glove",
  desc: "Luva dourada do Corvo Negro, imbuída com magia antiga. Aumenta o dano crítico de todas as magias em 4x.",
  img: "imagens/Armas/luva corvo negro.png",
  slot: "maos",
      damageDice: "Mãos",

  armor: 0,
  tipo: "Arcano",
  damageType: "N/A",
  TipoItem: "Equipamento"
},

{
  id: "gylden_of_crov",
  name: "Gylden of Crov",
  desc: "Botas douradas do Corvo Negro, leves e rápidas como sombras voando. Dobra sua distância de movimento.",
  img: "imagens/Armas/bota corvo negro.png",
  slot: "pernas",
      damageDice: "Pernas",

  armor: 1,
  tipo: "Leve",
  damageType: "N/A",
  TipoItem: "Equipamento"
},
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
      id: "Rapieira", 
      name: "Rapieira", 
      desc: "Rapieira leve e versátil, eficaz em combate corpo a corpo e em duelos.", 
      img: "imagens/Armas/Simples/Rapieira.png", 
      damageType: "1d12+3d4", 
      elementalDamage: "-", 
      damageDice: "Perfurante", 
      range: "2m", 
      critical: "(19) - Dano(x3)", 
      equipBonus: "-"
    ,TipoItem:"Corpo a Corpo,Clássica"
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
    "elementalDamage": "3d12",
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
,
  {
    "id": "lasanhaCogumelos",
    "name": "Lasanha de Cogumelos",
    "desc": "Prato reconfortante das tavernas montanhosas de Calisto. Feito com massa artesanal e cogumelos salteados, melhora o descanso e restaura profundamente o corpo. Resistência a Sangramento por 1 descanso",
    "img": "imagens/Comidas/lasanhaCogumelos.png",
    "damageType": "cura 2d12",
    "elementalDamage": "–",
    "damageDice": "Caos",
    "range": "–",
    "critical": "19 - Cura adicional(+1d12)",
    "equipBonus": "-",
    "TipoItem": "Alimento"
  },
  {
    "id": "feijaoArrozEnsopado",
    "name": "Feijão Preto ao Molho com Arroz Ensopado",
    "desc": "Servido em tavernas costeiras, esse prato fortalece viajantes e pescadores. Ideal para restaurar energia após longas jornadas.",
    "img": "imagens/Comidas/feijaoArrozEnsopado.png",
    "damageType": "cura 1d20",
    "elementalDamage": "–",
    "damageDice": "Caos",
    "range": "–",
    "critical": "20 - Cura adicional(+1d10)",
    "equipBonus": "-",
    "TipoItem": "Alimento"
  },
  {
    "id": "macarraoCobraFrita",
    "name": "Macarrão com Cobra Frita",
    "desc": "Prato exótico das tavernas do deserto de Calisto. Pode causar desconforto se mal digerido, mas oferece regeneração poderosa durante o descanso. Resistência a Maldição por 1 descanso.",
    "img": "imagens/Comidas/macarraoCobraFrita.png",
    "damageType": "cura 3d12 - risco de dano 1d6",
    "elementalDamage": "Ácido",
    "damageDice": "Caos",
    "range": "–",
    "critical": "18 - Cura total e resistência a Maldição",
    "equipBonus": "-",
    "TipoItem": "Alimento"
  },
  {
    "id": "sopaToxica",
    "name": "Sopa Tóxica com Molho Rosado e Carne Meia Crua",
    "desc": "Servida em bares experimentais de Calisto. Altamente potente, mas arriscada. Pode regenerar profundamente o corpo ou causar efeitos colaterais. Resistência a Maldição por 2 descansos.",
    "img": "imagens/Comidas/sopaToxica.png",
    "damageType": "cura 4d10 - risco de dano 2d6",
    "elementalDamage": "Ácido",
    "damageDice": "Caos",
    "range": "–",
    "critical": "17 - Cura total e resistência a Maldição",
    "equipBonus": "-",
    "TipoItem": "Alimento"
  },
  {
    "id": "bananaPeixeOvos",
    "name": "Banana Frita com Ovos e Peixe ao Molho Branco",
    "desc": "Prato típico das praias de Calisto. Fortalece o corpo e melhora o sono profundo, ideal para recuperação muscular.",
    "img": "imagens/Comidas/bananaPeixeOvos.png",
    "damageType": "cura 2d10",
    "elementalDamage": "–",
    "damageDice": "Caos",
    "range": "–",
    "critical": "20 - Cura adicional(+1d10)",
    "equipBonus": "-",
    "TipoItem": "Alimento"
  },
  {
    "id": "cervejaCarneAssada",
    "name": "Copo Medieval de Cerveja e Carne Assada",
    "desc": "Banquete rústico das tavernas de Calisto. A carne fortalece, a cerveja relaxa. Ideal para recuperação física e mental.",
    "img": "imagens/Comidas/cervejaCarneAssada.png",
    "damageType": "cura 3d10",
    "elementalDamage": "–",
    "damageDice": "Caos",
    "range": "–",
    "critical": "19 - Cura adicional(+1d12)",
    "equipBonus": "-",
    "TipoItem": "Alimento"
  },
  {
    "id": "peixeRecheadoMilho",
    "name": "Peixe Recheado com Ovos e Feijão e Espiga de Milho ao Molho",
    "desc": "Prato cerimonial das vilas costeiras. Recheado com ingredientes nutritivos, acelera a regeneração natural durante o descanso. Resistência a Veneno por 1 descanso.",
    "img": "imagens/Comidas/peixeRecheadoMilho.png",
    "damageType": "cura 2d20",
    "elementalDamage": "–",
    "damageDice": "Caos",
    "range": "–",
    "critical": "18 - Cura adicional(+1d20)",
    "equipBonus": "-",
    "TipoItem": "Alimento"
  },
  {
    "id": "paoSeco",
    "name": "Pão Seco",
    "desc": "Alimento básico das regiões áridas. Simples, mas eficaz para recuperação leve durante o descanso.",
    "img": "imagens/Comidas/paoSeco.png",
    "damageType": "cura 1d10",
    "elementalDamage": "–",
    "damageDice": "Caos",
    "range": "–",
    "critical": "20 - Cura adicional(+1d6)",
    "equipBonus": "-",
    "TipoItem": "Alimento"
  },
  {
    "id": "frutasInventadas",
    "name": "Frutas, Maçãs e Variados",
    "desc": "Mistura vibrante de frutas típicas e exóticas das florestas de Calisto. Servidas em feiras e mercados, restauram energia e protegem contra maldições. Resistência a Sono por 1 descanso.",
    "img": "imagens/Comidas/frutasInventadas.png",
    "damageType": "cura 2d12",
    "elementalDamage": "–",
    "damageDice": "Caos",
    "range": "–",
    "critical": "20 - Cura adicional(+1d12) e resistência a Maldição",
    "equipBonus": "-",
    "TipoItem": "Alimento"
  }
  
  
  
  //em andamento
];

// ==============================================
// CARREGAR CUSTOM ITEMS DO LOCALSTORAGE
// ==============================================
let savedData = JSON.parse(localStorage.getItem("playerData")) || {};

if (savedData.customItems && Array.isArray(savedData.customItems)) {
  savedData.customItems.forEach(ci => items.push(ci));
}




document.addEventListener("DOMContentLoaded", function () {
  // TODO SEU CÓDIGO ORIGINAL AQUI DENTRO
(function () {
  const racasLista = [
    { id: "elfo", nome: "Lyrithil – Elfo", imagens: [
        "Elfo1.png", "Elfo2.png", "Elfo3.png", "Elfo4.png", "Elfo5.png",
        "Elfo6.png", "Elfo7.png", "Elfo8.png", "Elfo9.png"
      ]},
    { id: "humano", nome: "Zhilak – Humano", imagens: [
        "humano1.png", "humano2.png", "humano3.png", "humano4.png", "humano5.png",
        "humano6.png", "humano7.png", "humano8.png", "humano9.png"
      ]},
    { id: "anao", nome: "Grunthrok – Anão", imagens: [
        "Anão1.png", "Anão2.png", "Anão3.png", "Anão4.png", "Anão5.png",
        "Anão6.png", "Anão7.png", "Anão8.png", "Anão9.png"
      ]},
    { id: "gigante", nome: "Thudrok – Gigante", imagens: [
        "gigante1.png", "gigante2.png", "gigante3.png", "gigante4.png", "gigante5.png",
        "gigante6.png", "gigante7.png", "gigante8.png", "gigante9.png"
      ]},
    { id: "krahzhik", nome: "Krahzhik – IgnisAlatus", imagens: [
        "Ignis1.png", "Ignis2.png", "Ignis3.png", "Ignis4.png", "Ignis5.png",
        "Ignis6.png", "Ignis7.png", "Ignis8.png", "Ignis9.png"
      ]},
    { id: "skywalker", nome: "Skywalkers – Flumplux", imagens: [
        "skywalkers1.png", "skywalkers2.png", "skywalkers3.png", "skywalkers4.png", "skywalkers5.png",
        "skywalkers6.png", "skywalkers7.png", "skywalkers8.png", "skywalkers9.png"
      ]},
    { id: "umbrowalker", nome: "Umbrowalker – Shlurp", imagens: [
        "umbrowalker1.png", "umbrowalker2.png", "umbrowalker3.png", "umbrowalker4.png", "umbrowalker5.png",
        "umbrowalker6.png", "umbrowalker7.png", "umbrowalker8.png", "umbrowalker9.png"
      ]},
    { id: "elfo_profundezas", nome: "Glublorp – Elfo da Profundeza", imagens: [
        "elfo_profundezas1.png", "elfo_profundezas2.png", "elfo_profundezas3.png", "elfo_profundezas4.png", "elfo_profundezas5.png",
        "elfo_profundezas6.png", "elfo_profundezas7.png", "elfo_profundezas8.png", "elfo_profundezas9.png"
      ]},
    { id: "tritao", nome: "Glubrust – Tritão", imagens: [
        "Tritão1.png", "Tritão2.png", "Tritão3.png", "Tritão4.png", "Tritão5.png",
        "Tritão6.png", "Tritão7.png", "Tritão8.png", "Tritão9.png"
      ]},
    { id: "shrivvel", nome: "Shrivvel – Pele Pálida", imagens: [
        "Pele-Palida1.png", "Pele-Palida2.png", "Pele-Palida3.png", "Pele-Palida4.png", "Pele-Palida5.png",
        "Pele-Palida6.png", "Pele-Palida7.png", "Pele-Palida8.png", "Pele-Palida9.png"
      ]},
    { id: "gronklech", nome: "Gronklech – Durock", imagens: [
        "Durock1.png", "Durock2.png", "Durock3.png", "Durock4.png", "Durock5.png",
        "Durock6.png", "Durock7.png", "Durock8.png", "Durock9.png"
      ]},
  ];

  function criarCartaoRaca(raca) {
    const card = document.createElement("div");
    card.className = "cartao-criatura-custom";
    card.innerHTML = `
      <img src="imagens/raças/${raca.imagens[0]}" alt="${raca.nome}">
      <p>${raca.nome}</p>
    `;
    card.onclick = () => abrirPopupImagemRacaCustom(raca);
    return card;
  }

  function abrirPopupRacasCustom() {
    const content = document.getElementById("racaContentCustom");
    content.innerHTML = ""; // limpa o conteúdo
    racasLista.forEach(raca => content.appendChild(criarCartaoRaca(raca)));
    document.getElementById("popupRacaCustom").style.display = "flex";
  }

  function abrirPopupImagemRacaCustom(raca) {
    const content = document.getElementById("imagemRacaContentCustom");
    content.innerHTML = `<h3 style="width: 100%; text-align: center;">Escolha a imagem de ${raca.nome}</h3>`;
    raca.imagens.forEach(imagem => {
      const card = document.createElement("div");
      card.className = "cartao-criatura-custom";
      card.innerHTML = `<img src="imagens/raças/${imagem}" alt="${raca.nome}">`;
      card.onclick = () => {
        alert(`Você escolheu a imagem: ${imagem} da raça ${raca.nome}`);
        fecharTodosPopupsCustom();
      };
      content.appendChild(card);
    });
    document.getElementById("popupImagemRacaCustom").style.display = "flex";
  }

  function fecharTodosPopupsCustom() {
    document.getElementById("popupRacaCustom").style.display = "none";
    document.getElementById("popupImagemRacaCustom").style.display = "none";
  }

  // Botão inicial
  document.getElementById("abrirPopupRacaCustom").addEventListener("click", abrirPopupRacasCustom);

  // Fecha popups ao clicar fora do conteúdo
  document.querySelectorAll(".popup-overlay-custom").forEach(popup => {
    popup.addEventListener("click", e => {
      if (e.target.classList.contains("popup-overlay-custom")) {
        fecharTodosPopupsCustom();
      }
    });
  });
})();

});



const resistenciaColors = {
  "Gelo": { background: "#b7e1cd", color: "black" },
  "Ácido": { background: "#38761d", color: "white" },
  "Fogo": { background: "#ff9900", color: "white" },
  "Água": { background: "#46bdc6", color: "black" },
  "Eletricidade": { background: "#ffff00", color: "black" },
  "Tempestade": { background: "#a4f4cf", color: "black" },
  "Sangue": { background: "#980000", color: "white" },
  "Luz": { background: "#ffe599", color: "black" },
  "Maldição": { background: "#4c1130", color: "white" },
  "Sagrado": { background: "#D8902D", color: "white" },
  "Laser": { background: "#3cff92", color: "white" },
  "Alma": { background: "#d5a6bd", color: "white" },
  "Escuridão": { background: "black", color: "white" },
  "Plasma": { background: "#c3dfb3", color: "#005e31" },
  "Tremor": { background: "#311e5b", color: "#8eb8ff" },
  "Aura": { background: "#b4a7d6", color: "black" },
  "Psicológico": { background: "#c164f5", color: "black" },
  "Mental": { background: "#281922", color: "white" },
  "Distorção": { background: "#c27ba0", color: "white" },
  "Névoa": { background: "#9fc5e8", color: "white" },
  "Sono": { background: "#d9d2e9", color: "#666666" },
  "Balístico": { background: "#434343", color: "black" },
  "Perfurante": { background: "#d9d9d9", color: "black" },
  "Cortante": { background: "#191818", color: "white" },
  "Esmagante": { background: "#edfff6", color: "black" },
  "Cinzas": { background: "#B0BEC5", color: "#455A64" }, // não presente no HTML, mantido original
  "Morte": { background: "#424242", color: "#D32F2F" }, // idem
  "Eclipse": { background: "#212121", color: "#FFA000" }, // idem
  "N/A": { background: "#f0f0f0", color: "#333333" }
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
  tagsContainer.className = 'item-tags';

  const tipos = (item.TipoItem || "Clássica").split(',');
  tipos.forEach(tipo => {
    const trimmedTipo = tipo.trim();
    const tag = document.createElement('div');
    tag.className = 'item-tag';

    // Traduções ou renomeações
    let label = trimmedTipo;
    if (label.toLowerCase() === "gun") label = "Arma";
    if (label.toLowerCase() === "melee") label = "Corpo a Corpo";

    tag.textContent = label;

    // Definir classe específica para cores
    switch (label.toLowerCase()) {
      case "lendário":
        tag.classList.add("prismatic");
        break;
      case "normal":
        tag.classList.add("normal");
        break;
      case "distância":
        tag.classList.add("distancia");
        break;
      case "corpo a corpo":
        tag.classList.add("corpoacorpo");
        break;
      case "arma":
        tag.classList.add("arma");
        break;
      case "clássica":
        tag.classList.add("classica");
        break;
      case "medieval":
        tag.classList.add("medieval");
        break;
        case "alimento":
        tag.classList.add("alimento");
        break;
      default:
        tag.classList.add("default");
        break;
    }

    tagsContainer.appendChild(tag);
  });

  card.appendChild(tagsContainer);

  // Imagem do item
  const img = document.createElement('img');
  img.src = item.img;
  img.loading = "lazy";
  card.appendChild(img);

  // Nome do item
  const title = document.createElement('h3');
  title.textContent = item.name;
  card.appendChild(title);

  // Badge de dano
  const damageDice = document.createElement('div');
  damageDice.className = 'damage-badge';
  const colors = resistenciaColors[item.damageDice] || resistenciaColors["N/A"];
  damageDice.textContent = item.damageDice;
  damageDice.style.backgroundColor = colors.background;
  damageDice.style.color = colors.color;
  card.appendChild(damageDice);

  // Evento de clique
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

  // ---------------------------------
  // 🔥 É EQUIPAMENTO?
  // ---------------------------------
  const isEquipment =
    item.slot ||
    item.armor !== undefined ||
    item.tipo !== undefined ||
    item.TipoItem?.toLowerCase() === "equipamento";

  if (isEquipment) {

    // Mostra apenas dados relevantes de equipamento
    damageTypeElem.textContent = `Armadura: ${item.armor ?? "—"}`;
    elementalDamageElem.textContent = `Tipo: ${item.tipo || item.TipoItem || "—"}`;
    damageDiceElem.textContent = `Slot: ${item.slot?.toUpperCase() || "—"}`;
    rangeElem.textContent = "";     // limpa campo desnecessário
    criticalElem.textContent = "";  // limpa campo desnecessário
    equipBonusElem.textContent = `Bônus: ${item.equipBonus || "Nenhum"}`;

    // Configura botão Equipar/Remover

    const slot = item.slot;
    equipBtn.textContent =
      equippedSlots[slot]?.id === item.id ? "Remover" : "Equipar";

    equipBtn.onclick = (event) => {
      event.preventDefault();
      event.stopPropagation();

      // alterna estado
      if (equippedSlots[slot]?.id === item.id) {
        equippedSlots[slot] = null;
      } else {
        equippedSlots[slot] = item;
      }

      saveEquippedSlots();
      updateSlotsUI();

      equipBtn.textContent =
        equippedSlots[slot]?.id === item.id ? "Remover" : "Equipar";

      descPopup.classList.add("hidden");
    };

    descPopup.classList.remove("hidden");
    return;
  }

  // ---------------------------------
  // 🔥 SE CHEGOU AQUI → É ARMA
  // ---------------------------------

  damageTypeElem.textContent = `Dano Físico: ${item.damageType || 'N/A'}`;
  elementalDamageElem.textContent = `Dano Elemental: ${item.elementalDamage || 'N/A'}`;
  damageDiceElem.textContent = `Tipo de Dano: ${item.damageDice || 'N/A'}`;
  rangeElem.textContent = `Alcance: ${item.range || 'N/A'}`;
  criticalElem.textContent = `Crítico: ${item.critical || 'N/A'}`;
  equipBonusElem.textContent = `Bônus ao Equipar: ${item.equipBonus || 'Nenhum'}`;

  // SISTEMA DE ARMAS
  equipBtn.textContent = item.id === equippedItemId ? "Remover" : "Equipar";

  equipBtn.onclick = (event) => {
    event.preventDefault();
    event.stopPropagation();

    if (equippedItemId === item.id) {
      equippedItemId = null;
      equippedSlot.innerHTML = "";
    } else {
      equippedItemId = item.id;

      equippedSlot.innerHTML = `
        <div class="equipped-item-container">
          <div class="equipped-visible">
            <img src="${item.img}" alt="${item.name}">
            <div class="item-info">
              <div>${item.name}</div>
              <div>${item.damageType || 'Dano N/A'}</div>
            </div>
          </div>
          <div class="equipped-hover-info">
            <div>Dano Físico: ${item.damageType || 'N/A'}</div>
            <div>Dano Elemental: ${item.elementalDamage || 'N/A'}</div>
            <div>Tipo de Dano: ${item.damageDice || 'N/A'}</div>
            <div>Alcance: ${item.range || 'N/A'}</div>
            <div>Crítico: ${item.critical || 'N/A'}</div>
            <div>Bônus ao Equipar: ${item.equipBonus || 'Nenhum'}</div>
          </div>
        </div>
      `;
    }

    equipBtn.textContent = item.id === equippedItemId ? "Remover" : "Equipar";
    descPopup.classList.add('hidden');
  };

  descPopup.classList.remove('hidden');
}


// Função para carregar o item equipado do armazenamento localStorage
function loadEquippedItem() {
  const savedCharacter = JSON.parse(localStorage.getItem('savedCharacter'));
  if (savedCharacter && savedCharacter.equippedItemId) {
    equippedItemId = savedCharacter.equippedItemId;

    // Procura o item no array e exibe no slot de item equipado
    const equippedItem = items.find(item => item.id === equippedItemId);
    if (equippedItem) {
      equippedSlot.innerHTML = `
        <img src="${equippedItem.img}" alt="${equippedItem.name}">
        <div class="item-info">
          <div>${equippedItem.name}</div>
          <div>Dano Físico: ${equippedItem.damageType || 'N/A'}</div>
          <div>Dano Elemental: ${equippedItem.elementalDamage || 'N/A'}</div>
          <div>Tipo de Dano: ${equippedItem.damageDice || 'N/A'}</div>
        </div>
      `;
    } else {
      console.error('Item equipado não encontrado');
    }
  } else {
    console.log('Nenhum item equipado encontrado no localStorage');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  loadEquippedItem(); // ok manter
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
function updateSlotsUI() {
  Object.entries(equippedSlots).forEach(([slot, item]) => {
    const elem = document.getElementById(`slot-${slot}`);
    if (!elem) return;

    const img = elem.querySelector(".slot-img");
    const label = elem.querySelector(".slot-label");
    const tooltip = elem.querySelector(".item-tooltip");

    const tName = tooltip.querySelector(".tooltip-name");
    const tDesc = tooltip.querySelector(".tooltip-desc");
    const tStats = tooltip.querySelector(".tooltip-stats");

    // Se não tem item
    if (!item) {
      img.style.display = "none";
      label.style.display = "block";
      tooltip.classList.remove("active-tooltip");

      tName.textContent = "";
      tDesc.textContent = "";
      tStats.innerHTML = "";
      return;
    }

    // Mostrar imagem
    img.src = item.img;
    img.style.display = "block";
    label.style.display = "none";

    // Tooltip ativo
    tooltip.classList.add("active-tooltip");

    // Nome e descrição
    tName.textContent = item.name || "Item";
    tDesc.textContent = item.desc || "Sem descrição.";

    // ============================
    // Detecta se é equipamento
    // ============================
   const isEquipamento = item.slot !== undefined || item.TipoItem === "Equipamento";


    // ============================
    // Preenche as informações
    // ============================
if (isEquipamento) {
  tStats.innerHTML = `
    <li><strong>Tipo:</strong> ${item.tipo || "—"}</li>
    <li><strong>Armadura:</strong> ${item.armor ?? "—"}</li>
    <li><strong>Slot:</strong> ${item.slot?.toUpperCase() || "—"}</li>
  `;
} else {
  // ARMA CORRETAMENTE EXIBIDA
  tStats.innerHTML = `
    <li><strong>Dano Físico:</strong> ${item.damageType || 'N/A'}</li>
    <li><strong>Dano Elemental:</strong> ${item.elementalDamage || 'N/A'}</li>
    <li><strong>Tipo de Dano:</strong> ${item.damageDice || 'N/A'}</li>
    <li><strong>Alcance:</strong> ${item.range || 'N/A'}</li>
    <li><strong>Crítico:</strong> ${item.critical || 'N/A'}</li>
    <li><strong>Bônus ao Equipar:</strong> ${item.equipBonus || 'Nenhum'}</li>
  `;
}

  });
}



// Mostrar/esconder os popups
// Para abrir o popup de itens
document.getElementById('openItemPopup').addEventListener('click', (event) => {
  event.preventDefault();
  event.stopPropagation();
  
  document.getElementById('itemSelectPopup').classList.remove('hidden');
});

// Para fechar o popup de seleção de itens pelo botão
document.getElementById('closeItemPopup').addEventListener('click', (event) => {
  event.preventDefault();
  event.stopPropagation();
  
  document.getElementById('itemSelectPopup').classList.add('hidden');
});

// Para fechar o popup de descrição de itens pelo botão
document.getElementById('closeDescPopup').addEventListener('click', (event) => {
  event.preventDefault();
  event.stopPropagation();
  
  descPopup.classList.add('hidden');
});

// Fechar popup ao clicar fora da área do conteúdo
window.addEventListener('click', (event) => {
  // Fechar popup de seleção de itens se o clique foi no fundo (fundo = próprio elemento do popup)
  const itemSelectPopup = document.getElementById('itemSelectPopup');
  if (!itemSelectPopup.classList.contains('hidden') && event.target === itemSelectPopup) {
    itemSelectPopup.classList.add('hidden');
  }

  // Fechar popup de descrição se o clique foi no fundo do popup
  if (!descPopup.classList.contains('hidden') && event.target === descPopup) {
    descPopup.classList.add('hidden');
  }
});
function saveEquippedSlots() {
  const savedCharacter = JSON.parse(localStorage.getItem('savedCharacter')) || {};
  savedCharacter.equippedSlots = equippedSlots;
  localStorage.setItem('savedCharacter', JSON.stringify(savedCharacter));
}
// Carrega os slots
function loadEquippedSlots() {
  const savedCharacter = JSON.parse(localStorage.getItem('savedCharacter'));

  if (savedCharacter && savedCharacter.equippedSlots) {
    equippedSlots = savedCharacter.equippedSlots;
    updateSlotsUI();
  }
}


function updateSlotTooltip(slotElement, item) {
    const tooltip = slotElement.querySelector(".item-tooltip");
    const nameElem = tooltip.querySelector(".tooltip-name");
    const descElem = tooltip.querySelector(".tooltip-desc");
    const statsElem = tooltip.querySelector(".tooltip-stats");

    nameElem.textContent = item.name;
    descElem.textContent = item.desc;
    statsElem.innerHTML = "";

    if (item.TipoItem === "Equipamento") {
        if (item.armor !== undefined) statsElem.innerHTML += `<li>Armadura: ${item.armor}</li>`;
        if (item.tipo) statsElem.innerHTML += `<li>Tipo: ${item.tipo}</li>`;
        if (item.slot) statsElem.innerHTML += `<li>Slot: ${item.slot}</li>`;
    }

    if (item.TipoItem === "Arma") {
        if (item.damageType) statsElem.innerHTML += `<li>Dano Físico: ${item.damageType}</li>`;
        if (item.elementalDamage) statsElem.innerHTML += `<li>Dano Elemental: ${item.elementalDamage}</li>`;
        if (item.damageDice) statsElem.innerHTML += `<li>Tipo de Dano: ${item.damageDice}</li>`;
        if (item.range) statsElem.innerHTML += `<li>Alcance: ${item.range}</li>`;
        if (item.critical) statsElem.innerHTML += `<li>Crítico: ${item.critical}</li>`;
        if (item.equipBonus) statsElem.innerHTML += `<li>Bônus: ${item.equipBonus}</li>`;
    }
}
function equipItem(item) {
    const slotName = item.slot;

    // Slot DOM
    const slot = document.querySelector(`[data-slot="${slotName}"]`);
    const img = slot.querySelector(".slot-img");

    // Coloca imagem
    img.src = item.img;
    img.style.display = "block";

    // Salva no sistema
    equippedSlots[slotName] = item.id;

    // Atualiza tooltip
    updateSlotTooltip(slot, item);

    console.log(`Item equipado no slot: ${slotName}`);
}


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


// Garante que a vida não seja menor que a vida base da raça
attributes.vida = Math.max(attributes.vida, raceData[race].vidaBase);

  attributes.sanidade += (intLevel * raceData[race].sanidadePorNivel.int) + (sabLevel * raceData[race].sanidadePorNivel.sab) + (carLevel * raceData[race].sanidadePorNivel.car)-30;
  
// Garante que a sanidade não seja menor que a sanidade base da raça
attributes.sanidade = Math.max(attributes.sanidade, raceData[race].sanidadeBase);

attributes.especial += level * raceData[race].especialPorNivel + 15; 
  // Garante que o especial não seja menor que o especial base da raça
attributes.especial = Math.max(attributes.especial, raceData[race].especialBase);
  let valorSubtrair = 0; // Inicializa o valor de subtração
  function atualizarValorSubtrair() {
    valorSubtrair = parseInt(document.getElementById('valor-subtrair').value) || 0;
}


  return attributes;
}



// LEMBRAR
// Atualiza a barra principal fora do popup


// Obtendo os elementos do botão e popup
const abrirBtn = document.getElementById("abrir-status-rpg");
const fecharBtn = document.getElementById("fechar-status-rpg");
const popup = document.getElementById("status-rpg-popup");
const app = document.getElementById("status-rpg-app");

// Função para obter o valor total de cada status
const obterTotal = (estado) => {
  if (estado === "vida") {
    return parseInt(document.getElementById('life-view').textContent) || 0;
  } else if (estado === "sanidade") {
    return parseInt(document.getElementById('sanity-view').textContent) || 0;
  } else if (estado === "especial") {
    return parseInt(document.getElementById('special-view').textContent) || 0;
  }
  return 0;
};

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

  // Adiciona o evento de input para atualização automática
  container.querySelector(`#${estado}-atual`).addEventListener("input", () => atualizar(estado));
  container.querySelector(`#${estado}-temp`).addEventListener("input", () => atualizar(estado));

  return container;
};

// Função para atualizar as barras de status
const atualizar = (estado) => {
  const total = obterTotal(estado);
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
  const total = obterTotal(estado);
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
  const total = obterTotal(estado);
  let atual = parseInt(document.getElementById(`${estado}-atual`).value);

  // Aplica a cura sem ultrapassar o total
  atual = Math.min(atual + cura, total);

  // Atualiza a barra de status
  atualizarBarra(estado, atual, total, temporarios[estado]);
};
const nomeCapitalizado = (estado) => {
  return {
    vida: 'Vida',
    sanidade: 'Sanidade',
    especial: 'Especial'
  }[estado] || estado.charAt(0).toUpperCase() + estado.slice(1);
};

// Função para atualizar a barra de status
// Função para atualizar a barra de status
const atualizarBarra = (estado, atual, total, temp) => {
  const porcentagem = total > 0 ? Math.floor((atual / total) * 100) : 0;
  const barra = document.getElementById(`${estado}-barra`);
  const barraTemp = document.getElementById(`${estado}-temp-bar`);

  barra.style.width = `${porcentagem}%`;
  barra.textContent = `${porcentagem}% (${atual} / ${total})`;

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

  const tempPorcentagem = total > 0 ? Math.floor((temp / total) * 100) : 0;
  barraTemp.style.width = `${tempPorcentagem}%`;

  // Atualiza os inputs
  document.getElementById(`${estado}-atual`).value = atual;
  document.getElementById(`${estado}-temp`).value = temp;

  // Atualiza a barra principal fora do popup
  const barraPrincipalId = {
    vida: 'life-fill',
    sanidade: 'sanity-fill',
    especial: 'special-fill'
  }[estado];

  const barraPrincipal = document.getElementById(barraPrincipalId);
  if (barraPrincipal) {
    const porcentagemPrincipal = total > 0 ? Math.floor((atual / total) * 100) : 0;
    barraPrincipal.style.width = `${porcentagemPrincipal}%`;
    barraPrincipal.textContent = `${nomeCapitalizado(estado)}: ${atual} / ${total}`;
  }
};

// Adiciona as barras ao app dentro do popup
estados.forEach(e => app.appendChild(criarBarra(e)));

//LEMBRAR
// Função para mostrar as barras quando raça ou pass for selecionado

// Obtendo os elementos de seleção
const pastSelect = document.getElementById("past");
const raceSelect = document.getElementById("race");

// Função para mostrar as barras quando "Passado" ou "Raça" forem selecionados
const ativarBarras = () => {
  const barrasExternas = document.querySelectorAll('.status-externo');
  
  // Se alguma opção de "Passado" ou "Raça" for selecionada, mostra as barras
  if (pastSelect.value !== "" || raceSelect.value !== "") {
    barrasExternas.forEach(barra => barra.classList.add('ativo'));
  } else {
    // Se nenhuma seleção for feita, esconde as barras
    barrasExternas.forEach(barra => barra.classList.remove('ativo'));
  }
};

// Adiciona os eventos de mudança nos selects de "Passado" e "Raça"
pastSelect.addEventListener('change', ativarBarras);
raceSelect.addEventListener('change', ativarBarras);

// Chama a função inicial para garantir que as barras estejam invisíveis quando a página carregar
ativarBarras();

// Function to calculate total level based on attribute levels
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
// Calcular a vida e sanidade baseadas no nível
let vidaTotal = currentAttributes.vida + (level * vidaPorNivel);
let sanidadeTotal = currentAttributes.sanidade + (level * sanidadePorNivel);

// Reforçar o mínimo garantido da raça
vidaTotal = Math.max(vidaTotal, raceData[document.getElementById('race').value].vidaBase);
sanidadeTotal = Math.max(sanidadeTotal, raceData[document.getElementById('race').value].sanidadeBase);
currentAttributes.especial = Math.max(currentAttributes.especial, raceData[document.getElementById('race').value].especialBase);


  
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
  bonusRaceElement.innerHTML = `Bônus de Raça: ${currentAttributes.bonusRace}`;
} else {
  bonusRaceElement.innerHTML = 'Bônus de Raça: N/A';
}

const PassivaDisponivelElement = document.querySelector('.Bonus-passiva-tex');
if (currentAttributes.bonusRace) {
  PassivaDisponivelElement.innerHTML = `Passiva: ${currentAttributes.PassivaDisponivel}`;
} else {
  PassivaDisponivelElement.innerHTML = 'Passiva: N/A';
}

const MagiaDisponivelElement = document.querySelector('.Bonus-magia-tex');
if (currentAttributes.bonusRace) {
  MagiaDisponivelElement.innerHTML = `Magia: ${currentAttributes.MagiaDisponivel}`;
} else {
  MagiaDisponivelElement.innerHTML = 'Magia: N/A';
}

const TalentoDisponivelElement = document.querySelector('.Bonus-talento-tex');
if (currentAttributes.bonusRace) {
  TalentoDisponivelElement.innerHTML = `Talento: ${currentAttributes.TalentoDisponivel}`;
} else {
  TalentoDisponivelElement.innerHTML = 'Talento: N/A';
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

// ============================
// BLOCO DE NOTAS (LOCAL DO JOGADOR)
// ============================
const notesButton = document.getElementById('open-notes');
const notesOverlay = document.getElementById('notes-overlay');
const notesTextarea = document.getElementById('notes-textarea');
const closeNotesButton = document.getElementById('close-notes');

let currentNotes = ""; // Mantém texto atual do bloco

// Abrir bloco de notas
notesButton.addEventListener('click', () => {
  notesOverlay.style.display = 'flex';
  notesTextarea.value = currentNotes || "";
  notesTextarea.focus();
});

// Fechar bloco de notas
closeNotesButton.addEventListener('click', () => {
  currentNotes = notesTextarea.value; // guarda localmente
  notesOverlay.style.display = 'none';
});






// Ativar seleção dos botões de bônus
document.addEventListener("click", (event) => {
  if (event.target.classList.contains("bonus-btn")) {
    const nivel = event.target.getAttribute("data-nivel");
    const escolha = event.target.getAttribute("data-escolha");

    escolherBonus(nivel, escolha); // chama sua função ✅

    // Visual de botão selecionado
    document.querySelectorAll(`.bonus-btn[data-nivel="${nivel}"]`)
      .forEach(btn => btn.classList.remove("selected-bonus"));

    event.target.classList.add("selected-bonus");
  }
});


// Event listener for loading character
// ... (We'll add this back later when we work on loading)
document.addEventListener("click", (e) => {
  if (e.target.closest(".especializacao-card")) {
    const selecionada = e.target.closest(".especializacao-card");
    const cards = document.querySelectorAll(".especializacao-card");

    cards.forEach(c => c.classList.remove("selecionada"));
    selecionada.classList.add("selecionada");

    // Aqui você pode chamar sua função existente:
    const id = selecionada.dataset.especializacao;
    alternarTextoBonus(id);
  }
});

// Event listener for closing the character selection section
// ... (We'll add this back later when we work on loading)
function getDadosDoPassado() {
  const passadoSelecionado = document.getElementById("past")?.value;

  if (!passadoSelecionado || !pastData[passadoSelecionado]) {
    console.warn("Passado não encontrado ou não selecionado:", passadoSelecionado);
    return null;
  }

  return pastData[passadoSelecionado];
}

function aplicarEspecializacao(id) {
  const dadosRaciais = getDadosDoPassado();
  if (!dadosRaciais) return; // impede erro se passado não selecionado

  const prefixo = `bonusTexto${id}`;

  const niveis = {
    1: `${prefixo}N1`,
    3: `${prefixo}N3`,
    5: `${prefixo}N5`,
    9: `${prefixo}N9`,
    13: `${prefixo}N13`,
    16: `${prefixo}N16`,
    20: `${prefixo}N20`,
    22: `${prefixo}N22`,
    25: `${prefixo}N25`
  };

  Object.entries(niveis).forEach(([nivel, chave]) => {
    const campo = document.querySelector(`#nivel${nivel} .nivel-texto`);
    if (campo) campo.innerHTML = dadosRaciais[chave] ?? "(sem bônus definido)";
  });
}


document.addEventListener("click", (e) => {
  const btn = e.target.closest(".especializacao-card");
  if (!btn) return;

  const id = btn.dataset.especializacao;
  document.querySelectorAll(".especializacao-card").forEach(c => c.classList.remove("selecionada"));
  btn.classList.add("selecionada");

  aplicarEspecializacao(id);
  alternarTextoBonus(id);
    // ✅ Salvar no objeto de bônus principal
  chosenBonuses["especializacaoPrincipal"] = id;
});


// Event listener for form submission (Create Character)
  let chosenBonuses = {}; // Ex: {1: "armaFavorita", 2: "agilidade", 4: "resistenciaFogo"}







  // Event listener for form submission (Create Character)
// Event listener for form submission (Create Character)
function escolherBonus(nivel, escolha) {
  chosenBonuses[nivel] = escolha;
  console.log("Escolhas salvas:", chosenBonuses);
}
function aplicarBonusesSalvos() {
  Object.entries(chosenBonuses).forEach(([nivel, escolha]) => {

    if (nivel == 1 && escolha == "armaFavorita") {
      // exemplo → +2 dano arma favorita
      // aqui você aplica seu efeito interno ou atualiza o personagem
    }

    if (nivel == 1 && escolha == "armadura") {
      characterData.armor += 2;
    }

    // etc...
  });

  updateStats();
}

// Event listener for form submission (Create Character)
// Event listener for form submission (Create Character)
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('character-form');
  const saveButton = document.getElementById('save-character');
  const loadButton = document.getElementById('load-character');
  const confirmButton = document.getElementById('confirm-load');
  const cancelButton = document.getElementById('cancel-load');
  const listContainer = document.getElementById('character-list');
  const section = document.getElementById('character-select-section');
  let selectedCharacterIndex = null;

  // 🛑 Impede que qualquer botão dentro do form recarregue a página
  form.addEventListener('submit', (event) => {
    event.preventDefault();
  });

  // ============================
  // SALVAMENTO — APENAS NO BOTÃO
  // ============================
  saveButton.addEventListener('click', (event) => {
    event.preventDefault(); // segurança extra

    const name = document.getElementById('char-name').value.trim();
    const race = document.getElementById('race').value;
    const past = document.getElementById('past').value;

    if (!name) {
      alert('⚠️ Dê um nome ao personagem antes de salvar.');
      return;
    }

    const forLevel = parseInt(document.getElementById('for').value, 10);
    const desLevel = parseInt(document.getElementById('des').value, 10);
    const conLevel = parseInt(document.getElementById('con').value, 10);
    const intLevel = parseInt(document.getElementById('int').value, 10);
    const sabLevel = parseInt(document.getElementById('sab').value, 10);
    const carLevel = parseInt(document.getElementById('car').value, 10);

    const skills = {};
    document.querySelectorAll('.pericia').forEach((skillElement) => {
      const skillName = skillElement.getAttribute('data-name');
      const skillValue = parseInt(skillElement.querySelector('button').innerText, 10);
      skills[skillName] = skillValue;
    });

    let characterCount = localStorage.getItem('characterCount')
      ? parseInt(localStorage.getItem('characterCount'), 10)
      : 0;
    characterCount++;
    localStorage.setItem('characterCount', characterCount);

    localStorage.setItem(`characterData${characterCount}`, JSON.stringify({
      name, race, past,
      for: forLevel, des: desLevel, con: conLevel, int: intLevel, sab: sabLevel, car: carLevel,
      skills,
      life: 100, sanity: 100, special: 0, armor: 0, movement: 0,   level: parseInt(document.getElementById('level-view').textContent, 10) || 1, // ✅ pega valor atual

      equippedItemId: equippedItemId,
  equippedSlots: equippedSlots,
      notes: currentNotes, // 🧾 <--- adiciona o texto do bloco de notas
      chosenBonuses: chosenBonuses // ✅ <<<<< AQUI




    }));

    document.getElementById('char-name-view').textContent = name;
    document.getElementById('char-race-view').textContent = race;
    document.getElementById('char-past-view').textContent = past;
    updateStats();

// Mostrar aviso de salvamento flutuante
const saveAlert = document.getElementById('save-alert');
if (saveAlert) {
  saveAlert.classList.add('show');
  setTimeout(() => saveAlert.classList.remove('show'), 2500);
}

  });

  // ============================
  // CARREGAMENTO VISUAL
  // ============================
  loadButton.addEventListener('click', (event) => {
    event.preventDefault();

    listContainer.innerHTML = '';
    selectedCharacterIndex = null;

    const characterCount = parseInt(localStorage.getItem('characterCount'), 10) || 0;
    let hasNamedCharacter = false;

    for (let i = 1; i <= characterCount; i++) {
      const data = JSON.parse(localStorage.getItem(`characterData${i}`));
      if (data && data.name && data.name.trim() !== '') {
        hasNamedCharacter = true;

        const card = document.createElement('div');
        card.classList.add('character-card');
        card.innerHTML = `
          <h4>${data.name}</h4>
          <small>Raça: ${data.race || '-'}</small>
          <small>Passado: ${data.past || '-'}</small>
          <small>Nível: ${data.level || 1}</small>
        `;

        card.addEventListener('click', () => {
          document.querySelectorAll('.character-card').forEach(c => c.classList.remove('selected'));
          card.classList.add('selected');
          selectedCharacterIndex = i;
        });

        listContainer.appendChild(card);
      }
    }

    if (!hasNamedCharacter) {
      listContainer.innerHTML = '<p style="color:#aaa;">Nenhum personagem nomeado salvo.</p>';
    }

    section.style.display = 'block';
  });

  cancelButton.addEventListener('click', (event) => {
    event.preventDefault();
    section.style.display = 'none';
  });

  confirmButton.addEventListener('click', (event) => {
  event.preventDefault();

  if (!selectedCharacterIndex) {
    alert('Selecione um personagem para carregar.');
    return;
  }

  const characterData = JSON.parse(localStorage.getItem(`characterData${selectedCharacterIndex}`));
  if (!characterData) return;

  // ============================
  // CARREGA OS DADOS BÁSICOS
  // ============================
  document.getElementById('char-name').value = characterData.name;
  document.getElementById('race').value = characterData.race;
  document.getElementById('past').value = characterData.past;
  document.getElementById('for').value = characterData.for;
  document.getElementById('des').value = characterData.des;
  document.getElementById('con').value = characterData.con;
  document.getElementById('int').value = characterData.int;
  document.getElementById('sab').value = characterData.sab;
  document.getElementById('car').value = characterData.car;

  document.getElementById('char-name-view').textContent = characterData.name;
  document.getElementById('char-race-view').textContent = characterData.race;
  document.getElementById('char-past-view').textContent = characterData.past;
  document.getElementById('life-view').textContent = characterData.life;
  document.getElementById('sanity-view').textContent = characterData.sanity;
  document.getElementById('special-view').textContent = characterData.special;
  document.getElementById('armor-view').textContent = characterData.armor;
  document.getElementById('movement-view').textContent = characterData.movement;
  document.getElementById('level-view').textContent = characterData.level;

  // ============================
  // CARREGA AS PERÍCIAS
  // ============================
  Object.entries(characterData.skills).forEach(([skillName, skillValue]) => {
    const skillElement = document.querySelector(`.pericia[data-name="${skillName}"] button`);
    if (skillElement) skillElement.innerText = skillValue;
  });

  atualizarBonusDoPassado(characterData.past);
  loadEquippedItem(characterData);
 if (characterData.equippedSlots) {
  equippedSlots = characterData.equippedSlots;
  updateSlotsUI();
}
  equippedItemId = characterData.equippedItemId || null;

  // ============================
// CARREGA BLOCO DE NOTAS 🧾
// ============================
currentNotes = characterData.notes || "";
notesTextarea.value = currentNotes;
chosenBonuses = characterData.chosenBonuses || {};
console.log("Bônus por nível carregados:", chosenBonuses);

// ✅ Recarrega escolhas de especializações adicionais por nível
const niveisComEspecializacaoExtra = [7, 8, 11, 15, 17, 19, 21, 23, 27, 28, 29];

niveisComEspecializacaoExtra.forEach(nivel => {
  const saved = chosenBonuses[`especializacaoNivel${nivel}`];
  if (!saved) return;

  const { passado, num, titulo } = saved;
  const dados = pastData[passado];
  if (!dados) return;

  const destino = document.getElementById(`resultadoEspecializacaoNivel${nivel}`);
  const descricaoOriginal = document.querySelector(`#nivel${nivel}Texto .descricao-nivel${nivel}`);
  if (!destino || !descricaoOriginal) return;

  // Oculta o texto padrão e exibe o resultado salvo
  descricaoOriginal.style.display = "none";
  destino.style.display = "block";

  // === EXIBE O BLOCO ALINHADO ===
  let textoFinal = `
    <div class="resultado-especializacao">
      <p class="nivel-label"><strong>Nível ${nivel}:</strong></p>
      <div class="resultado-conteudo">
        <h3 class="resultado-titulo">${titulo}</h3>
        <hr class="resultado-divisor">
  `;

  // Lista dos marcos de nível
  const niveis = [1, 3, 5, 9, 13, 16, 20, 22, 25];

  // Acha o nível mais próximo (igual ou menor)
const nivelMaisProximo = [...niveis].reverse().find(n => n <= saved.escolhaNivel);

  if (nivelMaisProximo) {
    const key = `bonusTexto${num}N${nivelMaisProximo}`;
    if (dados[key]) {
      textoFinal += `<p><strong>Habilidade de Nível ${nivelMaisProximo}:</strong> ${dados[key]}</p>`;
    } else {
      textoFinal += `<p>Sem bônus específico para o nível ${nivelMaisProximo}.</p>`;
    }
  } else {
    textoFinal += `<p>Sem bônus disponível neste nível.</p>`;
  }

  textoFinal += `
      </div>
    </div>
  `;

  destino.innerHTML = textoFinal;
});



  // ✅ Recarrega a especialização principal escolhida
if (chosenBonuses.especializacaoPrincipal) {
  const id = chosenBonuses.especializacaoPrincipal;

  const card = document.querySelector(`.especializacao-card[data-especializacao="${id}"]`);
  if (card) {
    document.querySelectorAll(".especializacao-card").forEach(c => c.classList.remove("selecionada"));
    card.classList.add("selecionada");
  }

  aplicarEspecializacao(id);
}


  // ============================
  // ITENS EQUIPADOS
  // ============================
  if (equippedItemId) {
    const equippedItem = items.find(item => item.id === equippedItemId);
    if (equippedItem) {
      equippedSlot.innerHTML = `
        <div class="equipped-item-container">
          <div class="equipped-visible">
            <img src="${equippedItem.img}" alt="${equippedItem.name}">
            <div class="item-info">
              <div>${equippedItem.name}</div>
              <div>${equippedItem.damageType || 'Dano N/A'}</div>
            </div>
          </div>
          <div class="equipped-hover-info">
            <div>Dano Físico: ${equippedItem.damageType || 'N/A'}</div>
            <div>Dano Elemental: ${equippedItem.elementalDamage || 'N/A'}</div>
            <div>Tipo de Dano: ${equippedItem.damageDice || 'N/A'}</div>
            <div>Alcance: ${equippedItem.range || 'N/A'}</div>
            <div>Crítico: ${equippedItem.critical || 'N/A'}</div>
            <div>Bônus ao Equipar: ${equippedItem.equipBonus || 'Nenhum'}</div>
          </div>
        </div>
      `;
    }
  }
// Depois de carregar chosenBonuses:
Object.entries(chosenBonuses).forEach(([nivel, escolha]) => {
  const btn = document.querySelector(`.bonus-btn[data-nivel="${nivel}"][data-escolha="${escolha}"]`);
  if (btn) btn.classList.add("selected-bonus");
});
  updateStats();
  section.style.display = 'none';
});

});


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
function toggleSectionInfo(id) {
  const section = document.getElementById(id);
  section.style.display = section.style.display === 'none' ? 'block' : 'none';
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


  // Atualiza os campos de entrada
  document.getElementById(`${estado}-atual`).value = atual;
  document.getElementById(`${estado}-temp`).value = temp;

  // Atualiza a barra principal fora do popup (ex: life-fill, sanity-fill, special-fill)
  const barraPrincipalId = {
    vida: 'life-fill',
    sanidade: 'sanity-fill',
    especial: 'special-fill'
  }[estado];

  const barraPrincipal = document.getElementById(barraPrincipalId);
  if (barraPrincipal) {
    const porcentagemPrincipal = total > 0 ? Math.floor((atual / total) * 100) : 0;
    barraPrincipal.style.width = `${porcentagemPrincipal}%`;
    barraPrincipal.textContent = `${atual} / ${total}`;
  }




// Atualiza a barra e o display do "life-view" com base no valor de vida
// Atualiza a barra e o display do "life-view" com base no valor de vida
// Atualiza a barra e o display do "life-view" com base no valor de vida
// Atualiza a barra e o display do "life-view" com base no valor de vida
// Atualiza a barra e o display do "life-view" com base no valor de vida
// Atualiza a barra e o display do "life-view" com base no valor de vida
// Atualiza a barra e o display do "life-view" com base no valor de vida
// Atualiza a barra e o display do "life-view" com base no valor de vida
// Atualiza a barra e o display do "life-view" com base no valor de vida
// Atualiza a barra e o display do "life-view" com base no valor de vida
// Atualiza a barra e o display do "life-view" com base no valor de vida
// Atualiza a barra e o display do "life-view" com base no valor de vida
// Atualiza a barra e o display do "life-view" com base no valor de vida
// Atualiza a barra e o display do "life-view" com base no valor de vida
// Atualiza a barra e o display do "life-view" com base no valor de vida
// Atualiza a barra e o display do "life-view" com base no valor de vida
  // Atualiza as barras principais do HTML (fora do popup)
  // Atualiza as barras principais do HTML (fora do popup)
// Atualiza a barra principal fora do popup
function gerarPromptPersonagem() {
  const descricao = document.getElementById('descricao-personagem').value.trim();
  const raca = document.getElementById('race').value.trim();
  const passado = document.getElementById('past').value.trim();
  const imagemRaca = document.getElementById('race-image').src.trim();
  const imagemPassado = document.getElementById('past-image').src.trim();

  if (!descricao) {
    alert('Por favor, escreva a aparência do personagem.');
    return;
  }

  const prompt = `
Chat, Crie uma imagem, seguindo as regras abaixo, sem exceção;🫡  

✅ PROMPT_FIXO Full-body character, from head to toe (no crop); isometric angle, slightly top-down perspective; PNG format; transparent background (no scenery); high-quality, masterpiece level. Art style: stylized medieval fantasy RPG; dramatic lighting; heroic body proportions (realistic head-to-body ratio); fantasy realism. Character only — no background. Camera angle: 3/4 front view (right-facing), isometric perspective from a slightly higher angle, almost top-down; showing chest and both legs clearly. Character slightly turned to the viewer’s left, but eyes looking forward. Arms positioned visibly, one possibly holding an item or posed dynamically. Lighting from top front, with light-shadow definition on muscles and armor folds.

Aparência do personagem: ${descricao}
Raça: ${raca}
Passado: ${passado}

📌 Imagens de referência:
- Raça: ${imagemRaca}
- Passado: ${imagemPassado}

❌ NEGATIVE_PROMPT
blurry, cropped, extra limbs, disfigured, low quality, watermark, signature, text, background, scenery, jpeg artifacts
  `;

  navigator.clipboard.writeText(prompt).then(() => {
    alert("Prompt copiado! Agora você será redirecionado ao ChatGPT. Basta colar (Ctrl+V) e enviar.");
    window.open("https://chat.openai.com/", "_blank");
  }).catch(err => {
    console.error("Erro ao copiar para a área de transferência:", err);
    alert("Ocorreu um erro ao copiar o prompt.");
  });
}
  function togglePromptBox() {
    const box = document.getElementById("promptBox");
    box.classList.toggle("hidden");
  }



      






































