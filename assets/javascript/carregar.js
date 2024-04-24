const tarefas = JSON.parse(localStorage.getItem("tarefas")) || []

tarefas.forEach(tarefa => card(tarefa))

function card(tarefa){
    const cardTarefa = `
    
    <div class="nes-container with-title is-centered">
    <p class="title">Figma</p>
    <p>Criar o protótipo do app</p>
    <a href="#" class="nes-badge is-icon">
        <span class="is-warning"><i class="nes-icon star is-small"></i></span>
        <span class="is-primary">150</span>
    </a>
    <progress class="nes-progress is-success" value="50" max="100"></progress>
    <button type="button" class="nes-btn is-primary">-</button>
    <button type="button" class="nes-btn is-error">apagar</button>
    <button type="button" class="nes-btn is-primary">+</button>
    
    
    </div>
    
    `

    const card = document.createElement("div")
    card.innerHTML = cardTarefa
    document.querySelector("#lista-de-tarefas").appendChild(card)
}