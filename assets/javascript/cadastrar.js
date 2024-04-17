document.querySelector("#botao-cadastrar").addEventListener("click",() => {

    const form = document.querySelector("form")

    const tarefa = {
        titulo: form.titulo.value,
        descricao: form.descricao.value,
        pontos: form.pontos.value
    }

    validar(tarefa)
    
    console.log(tarefa)

})

function validar(tarefa){
    limparErros()

    if (tarefa.titulo.trim() == ""){
        document.querySelector("#titulo").classList.add("is-error")
        document.querySelector("#titulo-erro").innerText = ("titulo obrigatorio")
    }
    if (tarefa.descricao.trim() == "" || tarefa.descricao.length < 10){
        document.querySelector("#descricao").classList.add("is-error")
        document.querySelector("#descricao-erro").innerText = ("a descricao deve ter pelo menos 10 caracteres")
    }

    if (tarefa.pontos <= 0){
        document.querySelector("#pontos").classList.add("is-error")
        document.querySelector("#pontos-erro").innerText = ("pontos deve ser maior que zero")
    }    
}

function limparErros(){
    document.querySelector("input .is-error, textarea .iserror").classList.remove("is-error")
}