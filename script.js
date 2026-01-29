/* ======================
   TEMAS VISUAIS
====================== */
const temasCategoria = {
    Animais: { fundo: "#2e7d32", palavra: "#ffffff", botoes: "#66bb6a" },
    Países: { fundo: "#eeff00", palavra: "#ffffff", botoes: "#cbdd00" },
    Cidades: { fundo: "#37474f", palavra: "#ffffff", botoes: "#607d8b" },
    Tecnologia: { fundo: "#263238", palavra: "#00e676", botoes: "#455a64" },
    Ciências: { fundo: "#4a148c", palavra: "#ffffff", botoes: "#7b1fa2" },
    Esportes: { fundo: "#e65100", palavra: "#ffffff", botoes: "#ff9800" },
    Filmes: { fundo: "#212121", palavra: "#ffffff", botoes: "#424242" },
    Música: { fundo: "#880e4f", palavra: "#ffffff", botoes: "#c2185b" },
    TimesDeFutebol: { fundo: "#2800f1", palavra: "#ffffff", botoes: "#1976d2" }
};

/* ======================
   BANCO DE PALAVRAS E FRASES
====================== */
const bancoPalavras = {
    Animais: [
        "LEAO-AFRICANO", "TIGRE-DE-BENGALA", "CACHORRO-DOMESTICO",
        "GATO-SIAMES", "URSO-POLAR", "LOBO-GUARA",
        "TUBARAO-BRANCO", "PEIXE-PALHACO", "AGUIA-REAL",
        "CAVALO-MARINHO", "RINOCERONTE-NEGRO", "ELEFANTE-ASIATICO", "ELEFANTE", "CACHORRO", "GATO", "GIRAFA", "LEOPARDO",
        "TARTARUGA", "CANGURU", "ORNITORRINCO", "CROCODILO",
        "HIPOPOTAMO", "RINOCERONTE", "BORBOLETA", "ESCORPIAO",
        "MORCEGO", "TAMANDUA", "PINGUIM", "SALAMANDRA",
        "CORUJA", "JAVALI", "CHIMPANZE", "PANDA",
        "ZEBRA", "CAMELO", "FALCAO", "GOLFINHO"
    ],

    Países: [
        "ESTADOS-UNIDOS", "REINO-UNIDO", "COREIA-DO-SUL",
        "NOVA-ZELANDIA", "AFRICA-DO-SUL", "COSTA-RICA",
        "ARABIA-SAUDITA", "EMIRADOS-ARABES", "SRI-LANKA",
        "REPUBLICA-TCHECA", "BRASIL", "ARGENTINA", "PORTUGAL", "ALEMANHA",
        "MOÇAMBIQUE", "ESLOVAQUIA", "TAILANDIA", "INDONESIA",
        "AFEGANISTAO", "MADAGASCAR", "CINGAPURA",
        "NOVA-ZELANDIA", "SUICA", "NORUEGA", "DINAMARCA", "FINLANDIA", "ISLANDIA", "JAPAO"
    ],

    Cidades: [
        "SAO-PAULO", "RIO-DE-JANEIRO", "BELO-HORIZONTE",
        "PORTO-ALEGRE", "CURITIBA", "FLORIANOPOLIS",
        "NOVA-IORQUE", "LOS-ANGELES", "SAN-FRANCISCO",
        "BUENOS-AIRES", "CIDADE-DO-MEXICO",
        "SANTIAGO-DO-CHILE", "LIMA-PERU",
        "LONDRES", "PARIS", "ROMA", "MADRI",
        "BERLIM", "AMSTERDA", "LISBOA",
        "TOKYO", "OSAKA", "PEQUIM", "HONG-KONG",
        "DUBAI", "ABU-DHABI", "CIDADE-DO-CABO",
        "RIO-GRANDE-DO-SUL", "SAO-JOSE-DOS-CAMPOS",
        "CAMPINAS-SAO-PAULO"
    ],

    Tecnologia: [
        "INTELIGENCIA-ARTIFICIAL", "APRENDIZADO-DE-MAQUINA",
        "DESENVOLVIMENTO-WEB", "BANCO-DE-DADOS",
        "SEGURANCA-DA-INFORMACAO", "ENGENHARIA-DE-SOFTWARE",
        "SISTEMAS-DISTRIBUIDOS", "CIENCIA-DE-DADOS",
        "PROGRAMACAO-ORIENTADA", "JAVASCRIPT", "PROGRAMACAO", "ALGORITMO",
        "CRIPTOGRAFIA", "MICROPROCESSADOR",
        "FRAMEWORK", "BACKEND", "FRONTEND",
        "ENGENHARIA-DE-SOFTWARE"

    ],

    Ciências: [
        "SISTEMA-SOLAR", "TEORIA-DA-EVOLUCAO",
        "LEI-DA-GRAVIDADE", "FUSAO-NUCLEAR",
        "CICLO-DA-AGUA", "AQUECIMENTO-GLOBAL",
        "ENERGIA-RENOVAVEL", "REACAO-QUIMICA", "ASTRONOMIA", "BIOTECNOLOGIA", "EVOLUCAO",
        "GRAVIDADE", "FOTOSSINTESE", "METAMORFOSE",
        "ELETROMAGNETISMO", "RADIOATIVIDADE",
        "MICROORGANISMO", "SUSTENTABILIDADE"
    ],

    Esportes: [
        "FUTEBOL", "BASQUETE", "VOLEIBOL",
        "ATLETISMO", "NATACAO", "CICLISMO",
        "SURFE", "TENIS", "GINASTICA-ARTISTICA",
        "COPA-DO-MUNDO", "OLIMPIADAS-DE-VERAO",
        "JOGOS-OLIMPICOS", "CAMPEONATO-BRASILEIRO",
        "LIGA-DOS-CAMPEOES", "FORMULA-UM",
        "MOTOGP", "CORRIDA-DE-RUA",
        "MARATONA-INTERNACIONAL",
        "FUTEBOL-AMERICANO",
        "ARTES-MARCIAIS-MISTAS"
    ],

    Filmes: [
        "O-PODEROSO-CHEFAO",
        "DE-VOLTA-PARA-O-FUTURO",
        "SENHOR-DOS-ANEIS",
        "A-SOCIEDADE-DO-ANEL",
        "AS-DUAS-TORRES",
        "O-RETORNO-DO-REI",
        "STAR-WARS",
        "GUERRA-NAS-ESTRELAS",
        "O-IMPERIO-CONTRA-ATACA",
        "O-RETORNO-DE-JEDI",
        "HOMEM-ARANHA",
        "BATMAN-O-CAVALEIRO-DAS-TREVAS",
        "VINGADORES-GUERRA-INFINITA",
        "VINGADORES-ULTIMATO",
        "JURASSIC-PARK",
        "MATRIX",
        "CLUBE-DA-LUTA",
        "ILHA-DO-MEDO",
        "O-LOBO-DE-WALL-STREET",
        "O-SENHOR-DAS-ARMAS",
        "CIDADE-DE-DEUS",
        "TITANIC",
        "FORREST-GUMP",
        "A-ORIGEM",
        "INTERSTELLAR",
        "GLADIADOR",
        "TRUQUE-DE-MESTRE",
        "GUARDIOES-DA-GALAXIA",
        "PANICO",
        "MISSAO-IMPOSIVEL",
        "FIVE-NIGHTS-AT-FREDDY'S"
    ],

    Música: [
        "ROCK-AND-ROLL", "MUSICA-CLASSICA",
        "SAMBA-ENREDO", "HIP-HOP",
        "MUSICA-ELETRONICA", "POP-INTERNACIONAL",
        "SERTANEJO-UNIVERSITARIO", "FUNK-CARIOCA",
        "JAZZ-BLUES",
        "REGGAE", "COUNTRY",
        "MUSICA-LATINA",
        "MUSICA-INFANTIL", "TRADICIONALISTA",
        "GOSPEL", "FORRO", "AXE", "MPB", "SAMBA"
    ],

    TimesDeFutebol: [
        /* 🇧🇷 BRASIL */
        "ATLETICO-MINEIRO",
        "ATHLETICO-PARANAENSE",
        "RED-BULL-BRAGANTINO",
        "VASCO-DA-GAMA",
        "BOTAFOGO-DE-FUTEBOL-E-REGATAS",
        "SAO-PAULO-FUTEBOL-CLUBE",
        "SPORT-CLUB-INTERNACIONAL",
        "GREMIO-FOOT-BALL-PORTO-ALEGRENSE",
        "ESPORTE-CLUBE-BAHIA",
        "FORTALEZA-ESPORTE-CLUBE",
        "CEARA-SPORTING-CLUB",
        "SANTA-CRUZ-FUTEBOL-CLUBE",
        "AMERICA-FUTEBOL-CLUBE",
        "CRUZEIRO-ESPORTE-CLUBE",
        "CLUBE-ATLETICO-GOIANIENSE",
        "CLUBE-DE-REGATAS-DO-FLAMENGO",
        "FLUMINENSE-FOOTBALL-CLUB",
        "SOCIEDADE-ESPORTIVA-PALMEIRAS",
        "SANTOS-FUTEBOL-CLUBE",
        "SPORT-CLUB-CORINTHIANS-PAULISTA",

        /* 🌍 EUROPA */
        "REAL-MADRID-CLUB-DE-FUTBOL",
        "FUTBOL-CLUB-BARCELONA",
        "ATLETICO-DE-MADRID",
        "MANCHESTER-UNITED-FOOTBALL-CLUB",
        "MANCHESTER-CITY-FOOTBALL-CLUB",
        "LIVERPOOL-FOOTBALL-CLUB",
        "CHELSEA-FOOTBALL-CLUB",
        "TOTTENHAM-HOTSPUR-FOOTBALL-CLUB",
        "ARSENAL-FOOTBALL-CLUB",
        "NEWCASTLE-UNITED-FOOTBALL-CLUB",
        "BAYERN-DE-MUNIQUE",
        "BORUSSIA-MOENCHENGLADBACH",
        "BORUSSIA-DORTMUND",
        "RB-LEIPZIG",
        "BAYER-LEVERKUSEN",
        "JUVENTUS-FOOTBALL-CLUB",
        "INTERNAZIONALE-DI-MILANO",
        "ASSOCIAZIONE-CALCIO-MILAN",
        "SOCIETA-SPORTIVA-LAZIO",
        "ASSOCIAZIONE-SPORTIVA-ROMA",
        "PARIS-SAINT-GERMAIN-FOOTBALL-CLUB",
        "OLYMPIQUE-LYONNAIS",
        "OLYMPIQUE-DE-MARSELHA",
        "ATHLETIC-CLUB-DE-BILBAO",
        "REAL-SOCIEDAD-DE-FUTBOL",

        /* 🌎 AMÉRICA DO SUL */
        "CLUB-ATLETICO-RIVER-PLATE",
        "CLUB-ATLETICO-BOCA-JUNIORS",
        "RACING-CLUB-DE-AVELLANEDA",
        "CLUB-ATLETICO-INDEPENDIENTE",
        "CLUB-NACIONAL-DE-FOOTBALL",
        "PENAROL-MONTEVIDEO",
        "COLO-COLO",
        "UNIVERSIDAD-DE-CHILE",
        "LIGA-DEPORTIVA-UNIVERSITARIA",
        "INDEPENDIENTE-DEL-VALLE",

        /* 🌍 OUTROS CONTINENTES */
        "AL-AHLY-SPORTING-CLUB",
        "AL-HILAL-SAUDI-FOOTBALL-CLUB",
        "URAWA-RED-DIAMONDS",
        "KASHIMA-ANTLERS",
        "JEONBUK-HYUNDAI-MOTORS",
        "GUANGZHOU-EVERGRANDE",
        "MELBOURNE-VICTORY-FOOTBALL-CLUB",
        "AUCKLAND-CITY-FOOTBALL-CLUB",
        "TP-MAZEMBE",
        "ESPERANCE-SPORTIVE-DE-TUNIS",
        "WYDAD-ATHLETIC-CLUB",

        /* 🏆 SELEÇÕES */
        "SELECAO-BRASILEIRA-DE-FUTEBOL",
        "SELECAO-ARGENTINA-DE-FUTEBOL",
        "SELECAO-FRANCESA-DE-FUTEBOL",
        "SELECAO-ALEMA-DE-FUTEBOL",
        "SELECAO-ITALIANA-DE-FUTEBOL",
        "SELECAO-ESPANHOLA-DE-FUTEBOL",
        "SELECAO-INGLESA-DE-FUTEBOL",
        "SELECAO-PORTUGUESA-DE-FUTEBOL"
    ]

};

/* ======================
   ESTADO DO JOGO
====================== */
let palavraSecreta = "";
let letrasDescobertas = [];
let vidas = 6;
let pontuacao = 0;

/* ======================
   ELEMENTOS DOM
====================== */
const palavraDiv = document.querySelector(".palavra");
const letrasDiv = document.querySelector(".letras");
const categoriaDiv = document.querySelector(".categoria");
const vidasSpan = document.getElementById("vidas");
const mensagemDiv = document.querySelector(".mensagem");
const pontuacaoSpan = document.getElementById("pontuacao");
const caracteresFixos = [" ", "-", "_"];

const canvas = document.getElementById("forca");
const ctx = canvas.getContext("2d");

/* ======================
   FUNÇÕES PRINCIPAIS
====================== */
function iniciarJogo() {
    letrasDiv.innerHTML = "";
    mensagemDiv.textContent = "";
    vidas = 6;
    limparForca();

    const categorias = Object.keys(bancoPalavras);
    const categoria = categorias[Math.floor(Math.random() * categorias.length)];
    const palavras = bancoPalavras[categoria];

    palavraSecreta = palavras[Math.floor(Math.random() * palavras.length)];
    letrasDescobertas = palavraSecreta
        .split("")
        .map(l => caracteresFixos.includes(l) ? l : "_");

    categoriaDiv.textContent = `📌 Categoria: ${categoria}`;
    vidasSpan.textContent = vidas;
    pontuacaoSpan.textContent = pontuacao;

    atualizarPalavra();
    criarTeclado();
    aplicarTema(categoria);
}

function atualizarPalavra() {
    palavraDiv.textContent = letrasDescobertas.join(" ");
}

function criarTeclado() {
    const alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (let letra of alfabeto) {
        const botao = document.createElement("button");
        botao.textContent = letra;
        botao.onclick = () => verificarLetra(letra, botao);
        letrasDiv.appendChild(botao);
    }
}

function verificarLetra(letra, botao) {
    botao.disabled = true;
    let acertou = false;

    for (let i = 0; i < palavraSecreta.length; i++) {
        if (palavraSecreta[i] === letra) {
            letrasDescobertas[i] = letra;
            pontuacao += 10;
            acertou = true;
        }
    }

    if (!acertou) {
        vidas--;
        pontuacao -= 5;
        desenharForca();
    }

    vidasSpan.textContent = vidas;
    pontuacaoSpan.textContent = pontuacao;

    atualizarPalavra();
    verificarFim();
}

function verificarFim() {
    if (!letrasDescobertas.includes("_")) {
        mensagemDiv.textContent = "🎉 Você venceu!";
        pontuacao += 50;
        pontuacaoSpan.textContent = pontuacao;
        desativarTeclado();
    }

    if (vidas <= 0) {
        mensagemDiv.textContent = `💀 Você perdeu! Palavra: ${palavraSecreta}`;
        desativarTeclado();
    }
}

function desativarTeclado() {
    document.querySelectorAll(".letras button").forEach(b => b.disabled = true);
}

/* ======================
   TEMA VISUAL
====================== */
function aplicarTema(categoria) {
    const tema = temasCategoria[categoria];
    if (!tema) return;

    document.body.style.background = tema.fundo;
    palavraDiv.style.color = tema.palavra;

    document.querySelectorAll(".letras button").forEach(btn => {
        btn.style.background = tema.botoes;
        btn.style.color = "#fff";
    });
}

/* ======================
   FORCA (CANVAS)
====================== */
function limparForca() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function desenharForca() {
    const cores = ["#00ff00", "#ccff00", "#ffcc00", "#ff9900", "#ff3300", "#cc0000"];
    ctx.strokeStyle = cores[6 - vidas] || "#000";
    ctx.lineWidth = 3;

    if (vidas <= 5) { ctx.beginPath(); ctx.moveTo(20, 230); ctx.lineTo(180, 230); ctx.stroke(); }
    if (vidas <= 4) { ctx.beginPath(); ctx.moveTo(50, 230); ctx.lineTo(50, 20); ctx.stroke(); }
    if (vidas <= 3) { ctx.beginPath(); ctx.moveTo(50, 20); ctx.lineTo(130, 20); ctx.stroke(); }
    if (vidas <= 2) { ctx.beginPath(); ctx.moveTo(130, 20); ctx.lineTo(130, 50); ctx.stroke(); }
    if (vidas <= 1) { ctx.beginPath(); ctx.arc(130, 70, 20, 0, Math.PI * 2); ctx.stroke(); }
    if (vidas <= 0) {
        ctx.beginPath(); ctx.moveTo(130, 90); ctx.lineTo(130, 150); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(130, 110); ctx.lineTo(100, 130);
        ctx.moveTo(130, 110); ctx.lineTo(160, 130); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(130, 150); ctx.lineTo(110, 190);
        ctx.moveTo(130, 150); ctx.lineTo(150, 190); ctx.stroke();
    }
}

/* ======================
   INICIAR
====================== */
iniciarJogo();
