const botaoAlterarTema = document.getElementById("botao-alterar-tema");
// getElementById = Vai buscar por um elemento no documento pelo id e armazenar na varievél botaoAlterarTema
const body = document.querySelector("body");
//O método querySelector() do documento retorna o primeiro elemento dentro do documento que corresponde ao seletor ou grupo de seletores especificado, no caso a Busca foi o BODY
const imagemBotaoTrocarDeTema = document.querySelector(".imagem-botao")
// nessa variavél será feita a busca da imagem do button de alteração de tema e ter acesso a troca de imagem.
botaoAlterarTema.addEventListener("click", () => {
    const modoEscuroAtivado = body.classList.contains("modo-escuro");
    //O método addEventListener() do JavaScript permite que você configure funções a serem chamadas quando um evento específico acontece, no caso toda vez que acontecer um evento 'click' acontecerá uma ação pré-definida.
    body.classList.toggle("modo-escuro");
    //nesse comando é adicionado a classe "modo-escuro" no body,O toggle()método que adiciona uma classe pré definida, fica alternando entre adicionar e remover.
    if (modoEscuroAtivado) {
        imagemBotaoTrocarDeTema.setAttribute("src","./src/imagens/sun.png")
        // O método setAttribute () define um novo valor para um atributo. Se o atributo não existir, ele será criado primeiro. dentro da primeira "" contem o valor atual e na segunda "" será o caminho do novo valor que será atualizado.
    }
    else {
        imagemBotaoTrocarDeTema.setAttribute("src", "./src/imagens/moon.png")
    }
});