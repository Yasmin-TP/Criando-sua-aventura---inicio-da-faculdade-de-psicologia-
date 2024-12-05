function makeChoice(choice) {
    const storyDiv = document.getElementById("story");
    const choicesDiv = document.getElementById("choices");

    if (choice === 'amizades') {
        storyDiv.innerHTML = `
            <p>Você decide conhecer seus colegas de classe. Logo, conhece uma garota chamada Ana que também está ansiosa pelo curso. Vocês começam a conversar e descobrem interesses em comum. O que você faz?</p>
        `;
        choicesDiv.innerHTML = `
            <button onclick="makeChoice('grupoEstudo')">Sugerir formar um grupo de estudos</button>
            <button onclick="makeChoice('cafe')">Convidar Ana para um café</button>
        `;
    } else if (choice === 'biblioteca') {
        storyDiv.innerHTML = `
            <p>Você vai para a biblioteca e encontra um livro fascinante sobre Freud. Enquanto lê, um professor passa e elogia sua escolha. Ele menciona que haverá uma palestra no próximo dia. O que você faz?</p>
        `;
        choicesDiv.innerHTML = `
            <button onclick="makeChoice('palestra')">Decide ir à palestra</button>
            <button onclick="makeChoice('voltarSala')">Voltar para a sala de aula</button>
        `;
    } else if (choice === 'grupoEstudo') {
        storyDiv.innerHTML = `
            <p>Ana adora a ideia de um grupo de estudos! Em pouco tempo, vocês recrutam outros colegas e começam a organizar encontros semanais. Você sente que já está no caminho certo para aprender muito.</p>
        `;
        choicesDiv.innerHTML = `<button onclick="restart()">Recomeçar</button>`;
    } else if (choice === 'cafe') {
        storyDiv.innerHTML = `
            <p>Ana aceita seu convite e vocês têm uma conversa incrível durante o café. Você sente que ganhou uma amiga para toda a vida e está animado para o que vem pela frente.</p>
        `;
        choicesDiv.innerHTML = `<button onclick="restart()">Recomeçar</button>`;
    } else if (choice === 'palestra') {
        storyDiv.innerHTML = `
            <p>A palestra é incrível! O professor compartilha experiências valiosas e dá conselhos para os iniciantes no curso. Você sai inspirado e cheio de ideias.</p>
        `;
        choicesDiv.innerHTML = `<button onclick="restart()">Recomeçar</button>`;
    } else if (choice === 'voltarSala') {
        storyDiv.innerHTML = `
            <p>Você volta para a sala e percebe que uma atividade prática está começando. Você se envolve e já sente o entusiasmo pelo curso aumentando.</p>
        `;
        choicesDiv.innerHTML = `<button onclick="restart()">Recomeçar</button>`;
    }
}

function restart() {
    const storyDiv = document.getElementById("story");
    const choicesDiv = document.getElementById("choices");

    storyDiv.innerHTML = `
        <p>Você acaba de ser aprovado na faculdade de Psicologia! É o primeiro dia de aula. O que você faz?</p>
    `;
    choicesDiv.innerHTML = `
        <button onclick="makeChoice('amizades')">Ir conhecer seus colegas</button>
        <button onclick="makeChoice('biblioteca')">Explorar a biblioteca</button>
    `;
}
