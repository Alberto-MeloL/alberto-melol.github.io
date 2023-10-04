var imagens = window.document.querySelectorAll(".imagem img");
var ligar = window.document.getElementById("ligar");
var desligar = window.document.getElementById("desligar");
var reparar = window.document.getElementById("reparar");

var contadorDeClick = 0;
//validações
reparar.style.display = 'none';
ligar.addEventListener("click", function name() {
    imagens[0].style.display = 'block';
    imagens[1].style.display = 'none';
    imagens[2].style.display = 'none';
   
    contadorDeClick++; //incrementa o click
    
    //verifica se atingiu o limite de 5, e exibe o botao reparar
    if (contadorDeClick === 5) {
        imagens[0].style.display = 'none';
        imagens[1].style.display = 'none';
        imagens[2].style.display = 'block';
        reparar.style.display = 'block'
        desligar.style.display ='none'
        ligar.style.display = 'none'
    }
    reparar.addEventListener("click", () =>{
        imagens[0].style.display = 'none';
        imagens[1].style.display = 'block';
        imagens[2].style.display = 'none'; 
        reparar.style.display = 'none'
        desligar.style.display ='block'
        ligar.style.display = 'block'
        contadorDeClick = 0; 
    })
});
desligar.addEventListener("click", function name() {
    imagens[0].style.display = 'none';
    imagens[1].style.display = 'block';
    imagens[2].style.display = 'none';
});


