// Dados das escolhas
const escolhas = {
    inicio: {
        texto1: "Você decidiu se inscrever no curso de psicologia.",
        texto2: "Você preferiu tirar um ano sabático.",
        proximo1: "psicologia",
        proximo2: "sabatico"
    },
    psicologia: {
        texto1: "Você começou a fazer amizades na faculdade.",
        texto2: "Você preferiu focar apenas nos estudos.",
        proximo1: "amizades",
        proximo2: "foco"
    },
    sabatico: {
        texto1: "Você decidiu viajar para outro país.",
        texto2: "Você começou um estágio antes da faculdade.",
        proximo1: "viagem",
        proximo2: "estagio"
    },
    amizades: {
        texto1: "Você foi convidado para um grupo de estudos.",
        texto2: "Você preferiu conhecer mais pessoas.",
        proximo1: "grupo_estudos",
        proximo2: "conhecer_pessoas"
    },
    foco: {
        texto1: "Você passou em todas as provas com excelentes notas.",
        texto2: "Você conseguiu um estágio relacionado à psicologia.",
        proximo1: "excelentes_notas",
        proximo2: "estagio_psicologia"
    },
    // Adicione mais escolhas conforme necessário
};

// Elementos principais
const escolha1 = document.getElementById("escolha1");
const escolha2 = document.getElementById("escolha2");

// Função para atualizar as escolhas
function atualizarEscolhas(cenario) {
    const dados = escolhas[cenario];
    escolha1.textContent = dados.texto1;
    escolha2.textContent = dados.texto2;

    // Atualizar os eventos de clique dos botões
    escolha1.onclick = () => atualizarEscolhas(dados.proximo1);
    escolha2.onclick = () => atualizarEscolhas(dados.proximo2);
}

// Inicializa o jogo com o primeiro conjunto de escolhas
atualizarEscolhas("inicio");
