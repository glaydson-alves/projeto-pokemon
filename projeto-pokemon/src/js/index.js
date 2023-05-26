const botaoAlterarTema = document.getElementById("botao-alterar-tema");
const body = document.querySelector("body");
const imagemBotaoTrocarDeTema = document.querySelector(".imagem-botao")
botaoAlterarTema.addEventListener("click", () => {
    const modoEscuroAtivado = body.classList.contains("modo-escuro");

    body.classList.toggle("modo-escuro");
    if (modoEscuroAtivado) {
        imagemBotaoTrocarDeTema.setAttribute("src","./src/imagens/sun.png")
    }
    else {
        imagemBotaoTrocarDeTema.setAttribute("src", "./src/imagens/moon.png")
    }
});