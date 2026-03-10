const btn_todos = document.getElementById("todos")
const btn_ativo = document.getElementById("ativo")
const btn_desativo = document.getElementById("desativo")
let estado_ativo = false
let estado_destivo = false
let estado_todos = false

function trocarfundo(){
    document.body.classList.toggle("light")
}

function Remover(botao){
    let card = botao.closest(".card")
    card.style.display = "none"
}

function Todos(){
    if (estado_ativo) {
        estado_ativo = false

        btn_ativo.style.backgroundColor = ""
        btn_ativo.style.color = ""

        for (i = 1; i <= 12; i++) {
            document.getElementById(`card${i}`).style.display = ""
        }
    }

    if (estado_destivo) {
        estado_destivo = false

        btn_desativo.style.backgroundColor = "";
        btn_desativo.style.color = "";

        for (i = 1; i <= 12; i++) {
            document.getElementById(`card${i}`).style.display = ""
        }
    }

    if (estado_todos) {
        estado_todos = false

        btn_todos.style.backgroundColor = "";
        btn_todos.style.color = "";
        return
    }

    estado_todos = true
    if (document.body.classList.contains("light")) {
        btn_todos.style.backgroundColor = "hsl(3, 77%, 44%)";
        btn_todos.style.color = "hsl(200, 60%, 99%)";
    } else {
        btn_todos.style.backgroundColor = "hsl(3, 77%, 44%)";
        btn_todos.style.color = "hsl(227, 75%, 14%)";
    }

    return estado_todos
}

function Ativados(){
    if (estado_destivo) {
        estado_destivo = false

        btn_desativo.style.backgroundColor = "";
        btn_desativo.style.color = "";

        for (i = 1; i <= 12; i++) {
            document.getElementById(`card${i}`).style.display = ""
        }
    }

    if (estado_todos) {
        estado_todos = false

        btn_todos.style.backgroundColor = "";
        btn_todos.style.color = "";
    }

    if (estado_ativo) {
        estado_ativo = false

        btn_ativo.style.backgroundColor = ""
        btn_ativo.style.color = ""

        for (i = 1; i <= 12; i++) {
            document.getElementById(`card${i}`).style.display = ""
        }
        return
    }
    
    estado_ativo = true
    if (document.body.classList.contains("light")) {
        btn_ativo.style.backgroundColor = "hsl(3, 77%, 44%)";
        btn_ativo.style.color = "hsl(200, 60%, 99%)";
    } else {
        btn_ativo.style.backgroundColor = "hsl(3, 77%, 44%)";
        btn_ativo.style.color = "hsl(227, 75%, 14%)";
    }  

    for (i = 1; i <=12; i++) {
        let chk = document.getElementById(`chk${i}`)
        let card = document.getElementById(`card${i}`)
        if (chk.checked == false){
            card.style.display = "none"
        } else {
            continue
        }
    }
    return estado_ativo
}

function Desativados(){
    if (estado_todos) {
        estado_todos = false

        btn_todos.style.backgroundColor = "";
        btn_todos.style.color = "";
    }

    if (estado_ativo) {
        estado_ativo = false

        btn_ativo.style.backgroundColor = ""
        btn_ativo.style.color = ""

        for (i = 1; i <= 12; i++) {
            document.getElementById(`card${i}`).style.display = ""
        }
    }

    if (estado_destivo) {
        estado_destivo = false

        btn_desativo.style.backgroundColor = "";
        btn_desativo.style.color = "";

        for (i = 1; i <= 12; i++) {
            document.getElementById(`card${i}`).style.display = ""
        }
        return
    }

    estado_destivo = true 
    if (document.body.classList.contains("light")) {
        btn_desativo.style.backgroundColor = "hsl(3, 77%, 44%)";
        btn_desativo.style.color = "hsl(200, 60%, 99%)";
    } else {
        btn_desativo.style.backgroundColor = "hsl(3, 77%, 44%)";
        btn_desativo.style.color = "hsl(227, 75%, 14%)";
    }

    for (i = 1; i <=12; i++) {
        let chk = document.getElementById(`chk${i}`)
        let card = document.getElementById(`card${i}`)
        if (chk.checked == true){
            card.style.display = "none"
        } else {
            continue
        }
    }
    return estado_destivo
}