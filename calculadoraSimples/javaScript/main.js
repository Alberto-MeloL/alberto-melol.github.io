var operedores = window.document.querySelectorAll(".operadores");// + - x ÷
var numeros = window.document.querySelectorAll(".numeros");// 0 ao 9
var subOperadores = window.document.querySelectorAll(".subOperadores");// . 
var igual = window.document.querySelector("#igual");//=
var tirarTudo = window.document.querySelector(".limparTudo");//AC
var tirarPouco = window.document.querySelector(".limparPouco");//CE
var exibirResultado = window.document.querySelector("#exibirResultado");//input de entrada
const erroMensagem = document.getElementById("erroMensagem");//mensagem que será exibida caso haja algum erro

//validações da input
function validarEntrada() {
    if (exibirResultado.value.trim() === "" ||  isNaN(exibirResultado.value)) {
        erroMensagem.textContent = "Preencha corretamente!";
        erroMensagem.style.display = "block"; // Exibe a mensagem de erro
    } else {
        erroMensagem.textContent = ""; // Limpa a mensagem de erro
        erroMensagem.style.display = "none"; // Oculta a mensagem de erro
        Number(exibirResultado.value)
    }
}

// Chama a função de validação quando a entrada muda
exibirResultado.addEventListener("input", validarEntrada);

//capturando o numero clicado
function numerosClicado(event) {
    //obtendo o valor do botão clicado
    var valorBotao = event.target.value;

    //adicionando a entrada
    exibirResultado.value += valorBotao
}
//adicionando um ouvinte ao evento
numeros.forEach(function(botao) {
    botao.addEventListener("click", numerosClicado);
});

 //capturando o operador clicado
function operadorClicado(event) {
    var operadorClicado = event.target.value;
exibirResultado.value += operadorClicado;
}
//adicionando um ouvinte ao evento
operedores.forEach(function(botao) {
    botao.addEventListener("click", operadorClicado)
});

//capturando o subOperador
function subOperadorClicado(event) {
    var subOperadorClicado = event.target.value;
    exibirResultado.value += subOperadorClicado;
}
//adicionando um ouvinte ao evento
subOperadores.forEach(function(botao) {
    botao.addEventListener("click", subOperadorClicado);
});


//limpando a input 
tirarTudo.addEventListener("click", function() {
    exibirResultado.value = ""
});

//limpando um por um
tirarPouco.addEventListener("click", function() {
   var valorAtualInput = exibirResultado.value;

    //verificando se há algum número para ser removido
    if (valorAtualInput.length > 0) {
        //remove o último caractere
        valorAtualInput = valorAtualInput.slice(0, -1);

        //atualizando a valor atual
        exibirResultado.value = valorAtualInput;
    }
})
 
igual.addEventListener("click", function(){
    var resultado = eval(exibirResultado.value)
    exibirResultado.value = resultado
})


// var converterNumero;
// function numerosClicado(numeros) {
//     converterNumero = Number(numeros)
//   exibirResultado.value += Number(numeros.value)
// }

// operedores.addEventListener("click", function name(operador) {
//     exibirResultado.value += operedores
// })
// botoesNumerico.forEach(function(button) {
//     button.addEventListener("click", function() {
//         //o valor do botao clicado esta em botao.value
//         const valorClicado = numeros.value;
// //exibir na caixa de entrada
// exibirResultado.value += valorClicado;
//     })
// });
    