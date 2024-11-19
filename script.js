// Dados de butos das raças (Exemplo: Raça Alfo, Passado Aldeão)
const raceData = {
  "Elfo": {
    "vidaBase": 51,
    "sanidadeBase": 25,
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
    "vidaBase": 5,
    "sanidadeBase": 0,
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

    **Combatente**
    Nível 1: +1d4 de dano com ferramentas improvisadas.
    Nível 2: +1 em testes de Brutalidade.
    Nível 3: +1 em testes de Sobrevivência.
    Nível 4: +2 em ataques corpo a corpo com ferramentas ou armas simples.
    Nível 5: Golpe Improvável - Dano extra de +1d6 ao atacar em condições desfavoráveis.
    Nível 6: +1d6 de dano com armas cortantes ou perfurantes.
    Nível 7: Combate Resiliente - +2 em testes de resistência contra Hemorragia e Paralisado.
    Nível 8: +1d8 de dano com armas pesadas.
    Nível 9: Frenesi Berserker - Quando atinge 0 HP, pode realizar um ataque adicional sem custo de ação e recupera +1d6 HP a cada ataque bem-sucedido. (5 de especial por ativação, uma vez por combate)

    Estrategista
    Nível 1: +1 em precisão à distância.
    Nível 2: +2 em testes de Agilidade.
    Nível 3: Observador - +1 em testes de percepção em situações de combate ou exploração.
    Nível 4: +1 em iniciativas e bônus de evasão contra ataques mágicos.
    Nível 5: Estratégia Rápida - +1 em testes de comando e bônus em ações táticas.
    Nível 6: +1d8 de dano em ataques com projéteis.
    Nível 7: Alvo Improvável - Inimigos com mais de 50% de vida recebem -1d6 em ataques contra você.
    Nível 8: Tático Experiente - Pode dar um bônus de +2 em testes de iniciativa para um aliado por dia.
    Nível 9: Plano de Batalha - Uma vez por combate, pode usar uma ação para aumentar o dano de todos os aliados em +1d6.

    Conjuração
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
    "bonusPass": "Passiva Medo oculto sem custo uma vez por dia",
    "movimento_pass": 2
  },
  "Arqueiro": { // Mago adicionado como exemplo
    "vidaPorNivel": 11,
    "sanidadePorNivel": 5,
    "armaduraPorNivel": 1,
    "resistencia": "Maldição",
    "bonusPass": "+5 em dados de dano com fundas, arcos e bestas.",
    "movimento_pass": 2
  },
  "Assassino": { // Mago adicionado como exemplo
    "vidaPorNivel": 13,
    "sanidadePorNivel": 3,
    "armaduraPorNivel": 1,
    "resistencia": "Escuridão",
    "bonusPass": "Passiva Furtividade sombria 1 vez no dia sem custo,+5 com Adagas.",
    "movimento_pass": 3
  },
  "Assombração": { // Assombração adicionado como exemplo
    "vidaPorNivel": 11,
    "sanidadePorNivel": 5,
    "armaduraPorNivel": 1,
    "resistencia": "Alma",
    "bonusPass": "+1d12 em magias de Alma e a magia Poltergeist pode ser usado em dois objetos por vez.",
    "movimento_pass": 3
  },
    "Atirador": { 
      "vidaPorNivel": 13,
      "sanidadePorNivel": 3,
      "armaduraPorNivel": 1,
      "resistencia": "Laser",
      "bonusPass": "+2 em dados de acerto com armas a distância, pode Mirar sem lado negativo uma vez por combate.",
      "movimento_pass": 4
    },
    "Barão": { 
      "vidaPorNivel": 14,
      "sanidadePorNivel": 2,
      "armaduraPorNivel": 1,
      "resistencia": "Ácido",
      "bonusPass": "+1 para todas as rolagens de dados, Magia Cuspe ácido sem custo uma vez por dia.",
      "movimento_pass": 4.5
    },
    "Bárbaro": { 
      "vidaPorNivel": 15,
      "sanidadePorNivel": 1,
      "armaduraPorNivel": 3,
      "resistencia": "Fogo",
      "bonusPass": "+2 em curas recebidas, + 5 de dano com Machados e Martelos.",
      "movimento_pass": 4
    },
    "Bardo": { 
      "vidaPorNivel": 9,
      "sanidadePorNivel": 7,
      "armaduraPorNivel": 1,
      "resistencia": "Luz",
      "bonusPass": "+2 em qualquer rolagem de dados em Conexão e + 2 em diplomacia.",
      "movimento_pass": 3.5
    },
    "Bruxo": { 
      "vidaPorNivel": 9,
      "sanidadePorNivel": 7,
      "armaduraPorNivel": 1,
      "resistencia": "Escuridão",
      "bonusPass": "Magias de atributo Libertação custam metade.",
      "movimento_pass": 3.5
    },
    "Carpinteiro": { 
      "vidaPorNivel": 13,
      "sanidadePorNivel": 3,
      "armaduraPorNivel": 1,
      "resistencia": "Tempestade",
      "bonusPass": "Uma ação livre extra por turno.",
      "movimento_pass": 3.5
    },
    "Catador": { 
      "vidaPorNivel": 8,
      "sanidadePorNivel": 8,
      "armaduraPorNivel": 1,
      "resistencia": "Alma",
      "bonusPass": "Cada órgão adiciona +1 invocação extra, magia LEVANTA sem custo uma vez por dia.",
      "movimento_pass": 3.5
    },
    "Colosso": { 
      "vidaPorNivel": 16,
      "sanidadePorNivel": 0,
      "armaduraPorNivel": 4,
      "resistencia": "Esmagante",
      "bonusPass": "Passiva armadura sobrenatural sem custo uma vez por dia.",
      "movimento_pass": 3.5
    },
    "Conjurador": { 
      "vidaPorNivel": 10,
      "sanidadePorNivel": 6,
      "armaduraPorNivel": 1,
      "resistencia": "Distorção",
      "bonusPass": "Passivas e Magias têm custo reduzido baseado em 1d6, valido por combate.",
      "movimento_pass": 4.5
    },
    "Costeiro": { 
      "vidaPorNivel": 12,
      "sanidadePorNivel": 4,
      "armaduraPorNivel": 3,
      "resistencia": "Água",
      "bonusPass": "+1d6 com porretes ou katanas, +2 armadura e não pode ser Desarmado.",
      "movimento_pass": 4.5
    },
    "Criatura": { 
      "vidaPorNivel": 15,
      "sanidadePorNivel": 1,
      "armaduraPorNivel": 4,
      "resistencia": "Gelo",
      "bonusPass": "Passiva Pavor custo uma vez por dia ou sem lado negativo.",
      "movimento_pass": 4.5
    },
    "Duelista": { 
      "vidaPorNivel": 14,
      "sanidadePorNivel": 2,
      "armaduraPorNivel": 1,
      "resistencia": "Perfurante",
      "bonusPass": "+1d10 de dano contra alvos isolados (sem ninguém próximo de 10m) e tem +4 em testes de Furtividade.",
      "movimento_pass": 4
    },
    "Escudeiro": { 
      "vidaPorNivel": 15,
      "sanidadePorNivel": 1,
      "armaduraPorNivel": 3,
      "resistencia": "Esmagante",
      "bonusPass": "+4 dano com escudo, passiva Emanar energia sem Negativo e sem custo uma vez por dia.",
      "movimento_pass": 3.5
    },
    "Especialista": { 
      "vidaPorNivel": 16,
      "sanidadePorNivel": 0,
      "armaduraPorNivel": 1,
      "resistencia": "Fogo",
      "bonusPass": "Tem Vantagem com Passivas.",
      "movimento_pass": 4.5
    },
    "Espectro": { 
      "vidaPorNivel": 10,
      "sanidadePorNivel": 6,
      "armaduraPorNivel": 1,
      "resistencia": "Laser",
      "bonusPass": "+1d12 em danos de Plasma e magia Orbe negro em área (pode acertar mais de um alvo em até 5m do alvo principal).",
      "movimento_pass": 4.5
    },
    "Espiritualista": { 
      "vidaPorNivel": 11,
      "sanidadePorNivel": 5,
      "armaduraPorNivel": 1,
      "resistencia": "Aura",
      "bonusPass": "Magia Possessão de Luz Sem custo uma vez por dia.",
      "movimento_pass": 4
    },
    "Fera": { 
      "vidaPorNivel": 16,
      "sanidadePorNivel": 0,
      "armaduraPorNivel": 3,
      "resistencia": "Eclipse",
      "bonusPass": "+5 em Atletismo e Adestrar animais.",
      "movimento_pass": 4.5
    },
    "Ferreiro": { 
      "vidaPorNivel": 13,
      "sanidadePorNivel": 3,
      "armaduraPorNivel": 2,
      "resistencia": "Fogo",
      "bonusPass": "Vantagem em testes de Ofício",
      "movimento_pass": 3.5
    },
    "Forasteiro": { 
      "vidaPorNivel": 12,
      "sanidadePorNivel": 4,
      "armaduraPorNivel": 1,
      "resistencia": "Laser",
      "bonusPass": "+1d10 com dano de Maldição e +1d10 com espadas curtas.",
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
    "bonusPass": "+1d12 em magias de Tempestade e elas usam o atributo de Brutalidade.",
    "movimento_pass": 4
  }
  
  
};



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
    raceImage.src = "imagens/raças/elfo.png";
  } else if (race === "Humano") {
    raceImage.src = "imagens/raças/humano.png";
  } else if (race === "Krahzhik") {
    raceImage.src = "imagens/raças/Krahzhik.png";
  } else if (race === "Anão") {
    raceImage.src = "imagens/raças/Anão.png";
  } else if (race === "Gigante") {
    raceImage.src = "imagens/raças/Gigante.png";
  } else if (race === "Skywalker") {
    raceImage.src = "imagens/raças/Skywalkers.png";
  } else if (race === "Elfo da profundeza") {
    raceImage.src = "imagens/raças/Elfo da profundeza.png";
  } else if (race === "Tritão") {
    raceImage.src = "imagens/raças/Tritão.png";
  } else if (race === "Shrivvel – Pele Palida") {
    raceImage.src = "imagens/raças/Shrivvel – Pele Palida.png";
  } else if (race === "Gronklech – Durock") {
    raceImage.src = "imagens/raças/Gronklech – Durock.png";
  } else if (race === "Umbrowalker – Shlurp") {
    raceImage.src = "imagens/raças/Umbrowalker – Shlurp.png";
  } else if (race === "Gornis - Temp") {
    raceImage.src = "imagens/raças/Gornis - Temp.png";
  } else {
    raceImage.src = "sua raça"; // Clear the image if no race is selected
  }
}



function updatePastImage() {
  const past = document.getElementById('past').value;
  const pastImage = document.getElementById('past-image');

  if (past === "Aldeão") {
    pastImage.src = "imagens/pass/aldeao.png";
  } else if (past === "Arauto") {
    pastImage.src = "imagens/pass/arauto.png";
  } else if (past === "Assassino") {
    pastImage.src = "imagens/pass/assassino.png";
  } else if (past === "Arqueiro") {
    pastImage.src = "imagens/pass/arqueiro.png";
  
  } else if (past === "Assombração") {
    pastImage.src = "imagens/pass/assombração.png";
  
  } else if (past === "Krahzhik") {
    pastImage.src = "imagens/pass/Krahzhik.png";
  
  } else if (past === "Arqueiro") {
    pastImage.src = "imagens/pass/arqueiro.png";
  
  } else if (past === "Arqueiro") {
    pastImage.src = "imagens/pass/arqueiro.png";
  
  } else if (past === "Arqueiro") {
    pastImage.src = "imagens/pass/arqueiro.png";
  } else if (past === "Atirador") { pastImage.src = "imagens/pass/Atirador.png"; 
  }
  else if (past === "Barão") { pastImage.src = "imagens/pass/Barão.png"; 
  }
  else if (past === "Bárbaro") { pastImage.src = "imagens/pass/Bárbaro.png"; 
  }
  else if (past === "Bardo") { pastImage.src = "imagens/pass/Bardo.png"; 
  }
  else if (past === "Bruxo") { pastImage.src = "imagens/pass/Bruxo.png"; 
  }
  else if (past === "Carpinteiro") { pastImage.src = "imagens/pass/Carpinteiro.png"; 
  }
  else if (past === "Catador") { pastImage.src = "imagens/pass/Catador.png"; 
  }
  else if (past === "Colosso") { pastImage.src = "imagens/pass/Colosso.png"; 
  }
  else if (past === "Conjurador") { pastImage.src = "imagens/pass/Conjurador.png"; 
  }
  else if (past === "Costeiro") { pastImage.src = "imagens/pass/Costeiro.png"; 
  }
  else if (past === "Criatura") { pastImage.src = "imagens/pass/Criatura.png"; 
  }
  else if (past === "Duelista") { pastImage.src = "imagens/pass/Duelista.png"; 
  }
  else if (past === "Escudeiro") { pastImage.src = "imagens/pass/Escudeiro.png"; 
  }
  else if (past === "Especialista") { pastImage.src = "imagens/pass/Especialista.png"; 
  }
  else if (past === "Espectro") { pastImage.src = "imagens/pass/Espectro.png"; 
  }
  else if (past === "Espiritualista") { pastImage.src = "imagens/pass/Espiritualista.png"; 
  }
  else if (past === "Fera") { pastImage.src = "imagens/pass/Fera.png"; 
  }
  else if (past === "Ferreiro") { pastImage.src = "imagens/pass/Ferreiro.png"; 
  }
  else if (past === "Forasteiro") { pastImage.src = "imagens/pass/Forasteiro.png"; 
  }
  else if (past === "Glacinata") { pastImage.src = "imagens/pass/Glacinata.png"; 
  }
  else if (past === "Guerreiro") { pastImage.src = "imagens/pass/Guerreiro.png"; 
  }
  else if (past === "Hemomantico") { pastImage.src = "imagens/pass/Hemomantico.png"; 
  }
  else if (past === "Imitador") { pastImage.src = "imagens/pass/Imitador.png"; 
  }
  else if (past === "Juíz") { pastImage.src = "imagens/pass/Juiz.png"; 
  }
  else if (past === "Lacaio") { pastImage.src = "imagens/pass/Lacaio.png"; 
  }
  else if (past === "Ladrão") { pastImage.src = "imagens/pass/Ladrão.png"; 
  }
  else if (past === "Louco") { pastImage.src = "imagens/pass/Louco.png"; 
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
  else if (past === "Monge") { pastImage.src = "imagens/pass/Monge.png"; 
  }
  else if (past === "Naturalista") { pastImage.src = "imagens/pass/Naturalista.png"; 
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
  else if (past === "Pugilista") { pastImage.src = "imagens/pass/Pugilista.png"; 
  }
  else if (past === "Revivido") { pastImage.src = "imagens/pass/Revivido.png"; 
  }
  else if (past === "Samurai") { pastImage.src = "imagens/pass/Samurai.png"; 
  }
  else if (past === "Sacerdote") { pastImage.src = "imagens/pass/Sacerdote.png"; 
  }
  else if (past === "Soberano") { pastImage.src = "imagens/pass/Soberano.png"; 
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
document.getElementById('character-form').addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.getElementById('char-name').value;
  const race = document.getElementById('race').value;
  const past = document.getElementById('past').value;
  const forLevel = parseInt(document.getElementById('for').value, 10);
  const desLevel = parseInt(document.getElementById('des').value, 10);
  const conLevel = parseInt(document.getElementById('con').value, 10);
  const intLevel = parseInt(document.getElementById('int').value, 10);
  const sabLevel = parseInt(document.getElementById('sab').value, 10);
  const carLevel = parseInt(document.getElementById('car').value, 10);
  // Coleta as perícias e seus valores atuais
  const skills = {};
  document.querySelectorAll('.pericia').forEach((skillElement) => {
    const skillName = skillElement.getAttribute('data-name');
    const skillValue = parseInt(skillElement.querySelector('button').innerText, 10);
    skills[skillName] = skillValue;
  });
  // Store character data in local storage 
  let characterCount = localStorage.getItem('characterCount') ? parseInt(localStorage.getItem('characterCount'), 10) : 0;
  characterCount++;
  localStorage.setItem('characterCount', characterCount);

  // Save character data, including all fields
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
      skills: skills, // Adicionando as perícias

      life: 100,   // Defina o valor inicial da vida
      sanity: 100, // Defina o valor inicial da sanidade
      special: 0,  // Defina o valor inicial da especial
      armor: 0,    // Defina o valor inicial da armadura
      movement: 0, // Defina o valor inicial do movimento
      level: 1,     // Defina o nível inicial
  }));

  // Update character view section with data
  document.getElementById('char-name-view').textContent = name;
  document.getElementById('char-race-view').textContent = race;
  document.getElementById('char-past-view').textContent = past;

  // Call updateStats to display initial values
  updateStats();

  // Show success message
  const saveMessage = document.getElementById('save-message');
  saveMessage.textContent = 'Personagem salvo!';
  saveMessage.style.display = 'block';
  setTimeout(() => {
      saveMessage.style.display = 'none';
  }, 5000);
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
                skillElement.innerText = skillValue; // Assuming you're displaying the value in a button
            }
        });
          // Call updateStats to display loaded values
          updateStats();
      }

      document.getElementById('character-select-section').style.display = 'none';
  }
});

// Download character data as JSON file
document.getElementById('download-character').addEventListener('click', () => {
  const characterData = {
      name: document.getElementById('char-name-view').textContent,
      race: document.getElementById('char-race-view').textContent,
      past: document.getElementById('char-past-view').textContent,
      for: parseInt(document.getElementById('for').value, 10),
      des: parseInt(document.getElementById('des').value, 10),
      con: parseInt(document.getElementById('con').value, 10),
      int: parseInt(document.getElementById('int').value, 10),
      sab: parseInt(document.getElementById('sab').value, 10),
      car: parseInt(document.getElementById('car').value, 10),
      life: parseInt(document.getElementById('life-view').textContent, 10),
      sanity: parseInt(document.getElementById('sanity-view').textContent, 10),
      special: parseInt(document.getElementById('special-view').textContent, 10),
      armor: parseInt(document.getElementById('armor-view').textContent, 10),
      movement: parseInt(document.getElementById('movement-view').textContent, 10),
      level: parseInt(document.getElementById('level-view').textContent, 10),
      skills: {} // Inclua as perícias no download

  };
    // Adiciona as perícias no objeto characterData
    document.querySelectorAll('.pericia').forEach((skillElement) => {
      const skillName = skillElement.getAttribute('data-name');
      const skillValue = parseInt(skillElement.querySelector('button').innerText, 10);
      characterData.skills[skillName] = skillValue;
  });

  const blob = new Blob([JSON.stringify(characterData, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  
  const a = document.createElement('a');
  a.href = url;
  a.download = `${characterData.name}_character.json`; // Nome do arquivo
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
});

// Event listener for uploading character file
document.getElementById('load-file-character').addEventListener('click', () => {
  document.getElementById('upload-character').click();
});

// Handle file upload and load character data
document.getElementById('upload-character').addEventListener('change', (event) => {
  const file = event.target.files[0];
  if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
          const characterData = JSON.parse(e.target.result);

          // Preenche os campos do personagem com os dados carregados
          document.getElementById('char-name-view').textContent = characterData.name;
          document.getElementById('char-race-view').textContent = characterData.race;
          document.getElementById('char-past-view').textContent = characterData.past;

          // Atualiza os campos de input e select com os dados do arquivo
          document.getElementById('char-name').value = characterData.name;
          document.getElementById('race').value = characterData.race;
          document.getElementById('past').value = characterData.past;
          document.getElementById('for').value = characterData.for;
          document.getElementById('des').value = characterData.des;
          document.getElementById('con').value = characterData.con;
          document.getElementById('int').value = characterData.int;
          document.getElementById('sab').value = characterData.sab;
          document.getElementById('car').value = characterData.car;

          // Carrega estatísticas adicionais
          document.getElementById('life-view').textContent = characterData.life;
          document.getElementById('sanity-view').textContent = characterData.sanity;
          document.getElementById('special-view').textContent = characterData.special;
          document.getElementById('armor-view').textContent = characterData.armor;
          document.getElementById('movement-view').textContent = characterData.movement;
          document.getElementById('level-view').textContent = characterData.level;

          Object.entries(characterData.skills).forEach(([skillName, skillValue]) => {
            const skillElement = document.querySelector(`.pericia[data-name="${skillName}"] button`);
            if (skillElement) {
                skillElement.innerText = skillValue; // Assuming you're displaying the value in a button
            }
        });

          // Atualiza as estatísticas
          updateStats();
      };

      reader.readAsText(file);
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