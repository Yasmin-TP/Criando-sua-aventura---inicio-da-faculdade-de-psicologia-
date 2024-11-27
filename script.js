const app = document.getElementById("app");
const textElement = document.getElementById("text");
const choicesElement = document.getElementById("choices");

// História do jogo e lógica de navegação
const story = {
    inicio: {
        text: "Você foi aprovado em duas faculdades de Psicologia. Onde irá estudar?",
        choices: [
            { text: "Universidade na capital", next: "capital" },
            { text: "Faculdade próxima de casa", next: "local" }
        ]
    },
    capital: {
        text: "Você escolheu a universidade na capital. Como irá se adaptar?",
        choices: [
            { text: "Trabalhar meio período", next: "emprego_capital" },
            { text: "Focar nos estudos", next: "estudos_capital" }
        ]
    },
    local: {
        text: "Você escolheu a faculdade próxima de casa. Como vai se destacar?",
        choices: [
            { text: "Participar de pesquisas", next: "pesquisa_local" },
            { text: "Fazer estágios desde o início", next: "estagio_local" }
        ]
    },
    emprego_capital: {
        text: "Você está cansado de conciliar trabalho e estudos. O que fazer?",
        choices: [
            { text: "Reduzir carga horária", next: "final_sucesso" },
            { text: "Continuar no ritmo atual", next: "final_abandono" }
        ]
    },
    estudos_capital: {
        text: "Surge uma oportunidade de intercâmbio. O que fazer?",
        choices: [
            { text: "Aceitar o intercâmbio", next: "final_intercambio" },
            { text: "Focar no TCC", next: "final_tcc" }
        ]
    },
    pesquisa_local: {
        text: "Você se destacou na pesquisa e recebeu uma proposta acadêmica. O que fazer?",
        choices: [
            { text: "Seguir carreira acadêmica", next: "final_academia" },
            { text: "Procurar trabalho clínico", next: "final_dificuldade" }
        ]
    },
    estagio_local: {
        text: "Você acumulou experiência prática e pensa em abrir sua clínica. O que fazer?",
        choices: [
            { text: "Abrir sua clínica", next: "final_sucesso_clinica" },
            { text: "Continuar como funcionário", next: "final_estavel" }
        ]
    },
    final_sucesso: {
        text: "Você conseguiu melhorar o desempenho e se formou com sucesso!",
        choices: []
    },
    final_abandono: {
        text: "Infelizmente, você abandonou o curso devido ao cansaço.",
        choices: []
    },
    final_intercambio: {
        text: "O intercâmbio foi incrível e abriu portas no mercado de trabalho!",
        choices: []
    },
    final_tcc: {
        text: "Você concluiu o TCC com excelência, mas perdeu uma grande oportunidade.",
        choices: []
    },
    final_academia: {
        text: "Você se tornou um pesquisador respeitado e contribui para a psicologia.",
        choices: []
    },
    final_dificuldade: {
        text: "Você encontrou dificuldades no mercado sem experiência prática.",
        choices: []
    },
    final_sucesso_clinica: {
        text: "Você abriu uma clínica e, apesar dos desafios, alcançou sucesso!",
        choices: []
    },
    final_estavel: {
        text: "Você teve uma carreira estável, mas sente falta de independência.",
        choices: []
    }
};

// Função para exibir a história
function showStory(part) {
    const storyPart = story[part];
    textElement.textContent = storyPart.text;
    choicesElement.innerHTML = "";

    storyPart.choices.forEach(choice => {
        const button = document.createElement("button");
        button.textContent = choice.text;
        button.onclick = () => showStory(choice.next);
        choicesElement.appendChild(button);
    });

    if (storyPart.choices.length === 0) {
        const restartButton = document.createElement("button");
        restartButton.textContent = "Recomeçar";
        restartButton.onclick = () => showStory("inicio");
        choicesElement.appendChild(restartButton);
    }
}

// Inicializar o jogo
showStory("inicio");
