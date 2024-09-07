document.write("Bem-vindo ao site!"); // Permite inserir texto diretamente na página HTML durante o carregamento do documento

// As propriedades title e URL da página podem ser acessadas usando o objeto document e window
document.write("<br>Título: " + document.title + "<br>");
document.write("URL:" + window.location.href);

// Com o document.write(), é possível também escrever tags HTML diretamente da página
document.write("<h1>Título</h1><h2>Subtítulo</h2><p>parágrafo</p>");

// É possível associar funções JavaScript a eventos em elementos HTML, como o evento onclick de um botão
function emitirAlerta() {
    alert("Botão clicado!");
}

// A função getElementById() é usada para acessar um elemento HTML pelo seu ID e modificar seu conteúdo
document.getElementById("texto").innerHTML = "Texto alterado com JavaScript";

// É possível alterar qualquer atributo de um elemento HTML usando JavaScript, como no caso de mudar a cor de um parágrafo
document.getElementById("paragrafo").style.color = "blue";

// É possível declarar variáveis em JavaScript e manipular valores inseridos em uma caixa de texto
function mostrarTexto() {
    var texto = document.getElementById("entrada").value;
    document.getElementById("resultado").innerHTML = "Você digitou: " + texto.toUpperCase();
}

// Os arrays em JavaScript permitem armazenar múltiplos valores em uma única variável
var frutas = ["Maçã", "Banana", "Laranja"];
document.write("Frutas: " + frutas.join(", "));

// Os objetos em JavaScript permitem armazenar dados como pares de chave-valor
var carro = {modelo: "Civic", ano: 2020}
document.write("<br>Modelo: " + carro.modelo + "<br>");
document.write("Ano: " + carro.ano);