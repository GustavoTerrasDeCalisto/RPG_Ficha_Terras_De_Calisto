// Dados de atributos das raças (Exemplo: Raça Alfo, Passado Aldeão)
const raceData = {
  "Elfo": {
    "vidaBase": 80,
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
    "especialPorNivel": 3
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
    "especialPorNivel": 3
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
    "especialPorNivel": 3
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
    "especialPorNivel": 3
  }
};

const pastData = {
  "Aldeão": {
    "vidaPorNivel": 14,
    "sanidadePorNivel": 6,
    "armaduraPorNivel": 1,
    "resistencia": "Sagrado",
    "bonusPass": "+2 em testes de carisma, +5 em testes de Sobrevivência",
    "movimento_pass": 2
  },
  "Arauto": { // Cavaleiro adicionado como exemplo
    "vidaPorNivel": 12,
    "sanidadePorNivel": 8,
    "armaduraPorNivel": 1,
    "resistencia": "Mental",
    "bonusPass": "Passiva Medo oculto sem custo uma vez por dia, + 6 especial",
    "movimento_pass": 2
  },
  "Arqueiro": { // Mago adicionado como exemplo
    "vidaPorNivel": 13,
    "sanidadePorNivel": 7,
    "armaduraPorNivel": 1,
    "resistencia": "Maldição",
    "bonusPass": "+5 em dados de dano com fundas, arcos e bestas",
    "movimento_pass": 2
  },
  "Assassino": { // Mago adicionado como exemplo
    "vidaPorNivel": 15,
    "sanidadePorNivel": 5,
    "armaduraPorNivel": 1,
    "resistencia": "Escuridão",
    "bonusPass": "Passiva Furtividade sombria 1 vez no dia sem custo,+5 com Adagas",
    "movimento_pass": 3
  },
  "Assombração": { // Assombração adicionado como exemplo
    "vidaPorNivel": 13,
    "sanidadePorNivel": 7,
    "armaduraPorNivel": 1,
    "resistencia": "Alma",
    "bonusPass": "+1d12 em magias de Alma e a magia Poltergeist pode ser usado em dois objetos por vez",
    "movimento_pass": 3
  }
};


const resistenciaColors = {
  "Gelo": { background: "#CDE1B7", color: "#3D340C" },
  "Ácido": { background: "#4FA86A", color: "#471B74" },
  "Fogo": { background: "#0099FF", color: "#000000" },
  "Água": { background: "#C6BD46", color: "#000000" },
  "Eletricidade": { background: "#00FFFF", color: "#043F78" },
  "Tempestade": { background: "#CFF4A4", color: "#5C4F13" },
  "Sangue": { background: "#000098", color: "#FFFFFF" },
  "Luz": { background: "#76EFFF", color: "#666666" }, // Corrigido para "Luz" (antes estava como "luz")
  "Maldição": { background: "#30114C", color: "#A74E67" },
  "Sagrado": { background: "#7F6000", color: "#FFFF00" },
  "Laser": { background: "#00FF00", color: "#134E27" },
  "Alma": { background: "#BDA6D5", color: "#FF00FF" },
  "Escuridão": { background: "#190D00", color: "#D9D9D9" },
  "Plasma": { background: "#FFFFFF", color: "#000000" },
  "Tremor": { background: "#5B1E31", color: "#FFB88E" },
  "Aura": { background: "#D6A7B4", color: "#30114C" },
  "Psicológico": { background: "#F564C1", color: "#000000" },
  "Mental": { background: "#A77783", color: "#FF00FF" },
  "Distorção": { background: "#A07BC2", color: "#DCD1EA" },
  "Névoa": { background: "#E8C59F", color: "#FFFFFF" },
  "Sono": { background: "#E9D2D9", color: "#666666" },
  "Balístico": { background: "#434343", color: "#000000" },
  "Perfurante": { background: "#D9D9D9", color: "#000000" },
  "Cortante": { background: "#000000", color: "#FFFFFF" },
  "Esmagante": { background: "#EFEFEF", color: "#999999" },
  "N/A": { background: "#f0f0f0", color: "#333333" } // Caso não haja resistência
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

  
  }

  attributes.vida += (forLevel * raceData[race].vidaPorNivel.for) + (desLevel * raceData[race].vidaPorNivel.des) + (conLevel * raceData[race].vidaPorNivel.con);
  attributes.sanidade += (intLevel * raceData[race].sanidadePorNivel.int) + (sabLevel * raceData[race].sanidadePorNivel.sab) + (carLevel * raceData[race].sanidadePorNivel.car);
  attributes.especial += level * raceData[race].especialPorNivel; 

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
  return forLevel + desLevel + conLevel + intLevel + sabLevel + carLevel - (10 * 6);
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
    bonusTeste = Math.floor((attributeLevel - 8) / 2); // Calcula o bônus de teste
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
  
  // Elemento para Bônus de Passado
  const bonusPassElement = document.querySelector('.Bonus-pass-tex');
  if (currentAttributes.bonusPass) {
    bonusPassElement.textContent = `Bônus de Passado: ${currentAttributes.bonusPass}`;
  } else {
    bonusPassElement.textContent = 'Bônus de Passado: N/A';
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

function updateRaceImage() {
  const race = document.getElementById('race').value;
  const raceImage = document.getElementById('race-image');

  if (race === "Elfo") {
    raceImage.src = "imagens/elfo.png";
  } else if (race === "Humano") {
    raceImage.src = "imagens/humano.png";
  } else if (race === "Krahzhik") {
    raceImage.src = "imagens/Krahzhik.png";
  } else if (race === "Anão") {
    raceImage.src = "imagens/Anão.png";
  } else {
    raceImage.src = ""; // Clear the image if no race is selected
  }
}

function updatePastImage() {
  const past = document.getElementById('past').value;
  const pastImage = document.getElementById('past-image');

  if (past === "Aldeão") {
    pastImage.src = "imagens/aldeao.png";
  } else if (past === "Arauto") {
    pastImage.src = "imagens/arauto.png";
  } else if (past === "Assassino") {
    pastImage.src = "imagens/assassino.png";
  } else if (past === "Arqueiro") {
    pastImage.src = "imagens/arqueiro.png";
  
  } else if (past === "Assombração") {
    pastImage.src = "imagens/assombração.png";
  
  } else if (past === "Krahzhik") {
    pastImage.src = "imagens/Krahzhik.png";
  
  } else if (past === "Arqueiro") {
    pastImage.src = "imagens/arqueiro.png";
  
  } else if (past === "Arqueiro") {
    pastImage.src = "imagens/arqueiro.png";
  
  } else if (past === "Arqueiro") {
    pastImage.src = "imagens/arqueiro.png";
  } else {
    pastImage.src = ""; // Limpa a imagem se nenhum passado for selecionado
  }
}

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

  // Check if the user has created 3 characters already
  if (localStorage.getItem('characterCount') && parseInt(localStorage.getItem('characterCount'), 10) >= 3) {
    alert("Você só pode criar no máximo 3 personagens.");
    return;
  }

  // Store character data in local storage 
  let characterCount = 0;
  if (localStorage.getItem('characterCount')) {
    characterCount = parseInt(localStorage.getItem('characterCount'), 10);
  }
  characterCount++;
  localStorage.setItem('characterCount', characterCount);

  localStorage.setItem(`characterData${characterCount}`, JSON.stringify({
    name: name,
    race: race,
    past: past,
    for: forLevel,
    des: desLevel,
    con: conLevel,
    int: intLevel,
    sab: sabLevel,
    car: carLevel
  }));

  // Update character view section with data
  document.getElementById('char-name-view').textContent = name;
  document.getElementById('char-race-view').textContent = race;
  document.getElementById('char-past-view').textContent = past;

  // Call updateAttributes to display initial values
  updateStats();

  // Show success message
  const saveMessage = document.getElementById('save-message');
  saveMessage.textContent = 'Personagem salvo!';
  saveMessage.style.display = 'block';
  setTimeout(() => {
    saveMessage.style.display = 'none';
  }, 5000);
});
function menuShow() {
  let menuMobile = document.querySelector('.mobile-menu');
  if (menuMobile.classList.contains('open')) {
    menuMobile.classList.remove('open');
  } else {
    menuMobile.classList.add('open');
  }
}




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