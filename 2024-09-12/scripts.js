var botaoCorCinza = document.getElementById("mudarCorCinza");

botaoCorCinza.addEventListener("click", mudarCorCinza);

function mudarCorCinza() {
    document.body.style.backgroundColor = "gray";
}

// Mudar a cor do texto e do fundo da página
var botao = document.getElementById("botaoTextoFundo");
botao.addEventListener("click", mudarTextoFundo);

function mudarTextoFundo() {
    var corFundo = document.getElementById("corFundo").value;
    var corTexto = document.getElementById("corTexto").value;

    document.body.style.backgroundColor = corFundo;
    document.body.style.color = corTexto;
}

var botao2 = document.getElementById("botao2");
botao2.addEventListener("click", aumentarTexto);

var tamanho = parseInt(window.getComputedStyle(document.body).fontSize);

function aumentarTexto() {
    tamanho += 2;
    document.body.style.fontSize = `${tamanho}px`;
}

