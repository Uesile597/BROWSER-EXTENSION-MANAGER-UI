# Frontend Mentor - Gerenciador de Extensões de Navegador UI solução

Esta é uma solução para o desafio Gerenciador de Extensões de Navegador UI no Frontend Mentor. Os desafios do Frontend Mentor ajudam você a melhorar suas habilidades de programação construindo projetos realistas.

# Sumário

- O desafio
- Screenshot
- Links
- Meu processo
- Feito com
- O que aprendi
- Desenvolvimento contínuo
- Recursos úteis
- Colaboração com IA
- Autor

### Screenshot

Caminho do screenshot: (assets/images/screenshot.png)

### Links
URL da Solução no GitHub: [https://github.com/Uesile597/BROWSER-EXTENSION-MANAGER-UI.git]

URL do Site Ao Vivo: Adicione a URL do site ao vivo aqui

### Meu processo

Foi um projeto que eu consegui desenvolver em dois dias, com html e css eu tenho uma familiaridade e consegui desenvolver sem problemas, mas com o javascript eu demorei um pouco mais. Com tudo, esse projeto foi muito importante para o meu crescimento, conseguindo agora confeccionar switchs, fazer os temas escuro/claro e aprendi muito sobre javascript.

### Feito com

- HTML5 semântico
- Propriedades CSS customizadas
- Flexbox
- JavaScript

### O que aprendi

Aprendi a fazer um switch, fazer temas escuro/claro e aprendi mais sobre javascript.

xml
<div class="switch">
    <input type="checkbox"class="chk" id="chk1" />
    <label for="chk1" class="switch">
    <span class="slider"></span>
    </label>
</div>

css
@media (max-width: 375px) {
    #main {
        padding: 30px 20px;
    }

    .topo-corpo {
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        gap: 20px;
    }
}

js
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

### Desenvolvimento contínuo

Eu quero focar em conceito como mobilefirst, uma utilização do javascript.

### Recursos úteis

IA - Isso me ajudou muito quando eu esquecia como usar alguma tag html, ou uma classe css ou javascript, eu não precisava ir em documentações extensas e perder muito tempo.

Youtube - Aqui foi onde achei um vídeo que me ensinou a criar um switch de uma forma muito simples.

### Colaboração com IA

Eu utilizei ela como forma de pesquisa, para não perder tempo trzendo mais efetividade.
Utilizei ChatGPT e Perplexity.
Mais como pesquisa, e algumas vezes como debug.
As pesquisas eram sempre muito boas, mas os debugs as vezes não eram 100% eficazes.

### Autor
- Website - [Uesile Alisson de Carvalho](https://www.your-site.com)
- Frontend Mentor - [@Uesile](https://www.frontendmentor.io/profile/Uesile)