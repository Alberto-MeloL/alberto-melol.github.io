var inputElement = document.querySelector("input")
var listElement = document.querySelector("ul")
//var itemElement = listElement.querySelectorAll("li")
//var listElementCodigo = document.querySelector("ul")
//var itemCodigo = listElement.querySelectorAll("li")

//criando um objeto para armazenar os produtos
const produtos = {
    "Maçã": { codigo: 1, quantidade: 0 },
    "Banana": { codigo: 2, quantidade: 0 },
    "Pera": { codigo: 3, quantidade: 0 },
    "Uva": { codigo: 4, quantidade: 0 },
    "Mamão": { codigo: 5, quantidade: 0 },
    "Manga": { codigo: 6, quantidade: 0 },
    "Morango": { codigo: 7, quantidade: 0 },
    "Abacaxi": { codigo: 8, quantidade: 0 },
    "Kiwi": { codigo: 9, quantidade: 0 },
    "Caju": { codigo: 10, quantidade: 0 },
    "Framboesa": { codigo: 11, quantidade: 0 }
}
var contCodigo = 11;//pois já se inicia com 11 produtos

// Modifique a função exibirProdutos para aceitar um objeto de produtos
function exibirProdutos(produtosParaExibir) {
    const tabela = document.querySelector("#tabela");
    tabela.innerHTML = ""; // Limpa a tabela

    // Cria uma linha de cabeçalho
    const cabecalho = tabela.insertRow(0);
    const nomeCabecalho = cabecalho.insertCell(0);
    const codigoCabecalho = cabecalho.insertCell(1);
    const quantidadeCabecalho = cabecalho.insertCell(2);
    nomeCabecalho.innerHTML = "Nome";
    codigoCabecalho.innerHTML = "Código";
    quantidadeCabecalho.innerHTML = "Quantidade";

    // Preencha a tabela com os produtos do objeto fornecido
    let linha = 1;
    for (const nomeProduto in produtosParaExibir) {
        const produto = produtosParaExibir[nomeProduto];
        const row = tabela.insertRow(linha);
        const nomeCelula = row.insertCell(0);
        const codigoCelula = row.insertCell(1);
        const quantidadeCelula = row.insertCell(2);
        nomeCelula.innerHTML = nomeProduto;
        codigoCelula.innerHTML = produto.codigo;
        quantidadeCelula.innerHTML = produto.quantidade;
        linha++;
    }
}

// Função para filtrar e exibir produtos com base no texto de pesquisa
function filtrarProdutos() {
    const termoDeBusca = document.querySelector(".buscando-produtos").value.toLowerCase();

    const produtosFiltrados = {};

    // Filtrar produtos com base no termo de busca
    for (const nomeProduto in produtos) {
        if (nomeProduto.toLowerCase().includes(termoDeBusca)) {
            produtosFiltrados[nomeProduto] = produtos[nomeProduto];
        }
    }

    // Chame a função exibirProdutos com os produtos filtrados
    exibirProdutos(produtosFiltrados);
}

// Ouvinte de evento "input" à caixa de pesquisa
document.querySelector(".buscando-produtos").addEventListener("input", filtrarProdutos);

// Chame a função exibirProdutos inicialmente para exibir todos os produtos
exibirProdutos(produtos);

//função para adicionar produtos
function esconderDiv(el) {
    var display = document.querySelector("." + el).style.display;
    if (display === 'none' || display === '') {
        document.querySelector("." + el).style.display = 'block';
    } else {
        document.querySelector("." + el).style.display = 'none';
    }
}

//função para adicionar novos produtos

const adicionar = document.querySelector("#confirmarAdicao");

adicionar.addEventListener("click", function () {
    const novoNomeProduto = document.querySelector("#nome-produto").value;
    const novoCodigoProduto = document.querySelector("#codigo-produto").value;
    const novaQuantidadeProduto = document.querySelector("#quantidade-produto").value;
   
    if (!novoNomeProduto || !novoCodigoProduto || !novaQuantidadeProduto) {
        alert("Preencha todos os campos corretamente antes de adicionar novos produtos!");
    } else if (novoNomeProduto in produtos) {
        alert("Já existe um produto com esse nome. Escolha um nome único.");
    }else{
        produtos[novoNomeProduto] = {
            codigo: parseInt(novoCodigoProduto),
            quantidade: parseInt(novaQuantidadeProduto)
        };
        //limpa os valores das input
        document.querySelector("#nome-produto").value = "";
        document.querySelector("#codigo-produto").value = "";
        document.querySelector("#quantidade-produto").value = "";
        
        //atualiza a exibição dos produtos 
        contCodigo++;
        exibirProdutos(produtos); 
    }
});

//função para alterar produtos
const confirmarAlteracao = document.querySelector("#confirmarAlteracao");

confirmarAlteracao.addEventListener("click", function() {
    const alteracaoNomeProduto = document.querySelector("#nome-produto-alterar").value;
    const alteracaoCodigoProduto = document.querySelector("#codigo-produto-alterar").value;
    const alteracaoQuantidadeProduto = document.querySelector("#quantidade-produto-alterar").value;
     
    if (alteracaoNomeProduto && alteracaoCodigoProduto && alteracaoQuantidadeProduto) {
        produtos[alteracaoNomeProduto] = {
            codigo: parseInt(alteracaoCodigoProduto),
            quantidade: parseInt(alteracaoQuantidadeProduto)
        };

         //limpa os valores das input
         document.querySelector("#nome-produto-alterar").value = "";
         document.querySelector("#codigo-produto-alterar").value = "";
         document.querySelector("#quantidade-produto-alterar").value = "";

         //atualiza a exibição dos produtos
         exibirProdutos(produtos);
    }else if (!alteracaoNomeProduto || !alteracaoCodigoProduto || !alteracaoQuantidadeProduto) {
        alert("Preencha corretamente!");
    }
});

//função para remover produtos

const removerProdutos = document.querySelector("#confirmarRemocao");

removerProdutos.addEventListener("click", function() {
    const produtoAserRemovido = document.querySelector("#nome-produto-remover").value;
    if (produtoAserRemovido in produtos) {
       delete produtos[produtoAserRemovido]//remove o produto do objeto -> resto do código não é necessário //= {
            // codigo : "",
            // quantidade : ""
        //}

        //atualiza a exibição dos produtos
        exibirProdutos(produtos);
    }else{
        alert("Produto não existe, impossível ser removido!")
    }
});


// inputElement.addEventListener("input", (e) => {
//     let inputed = e.target.value.toLowerCase()
//     itemElement.forEach((li) => {
//         let text = li.textContent.toLowerCase()
//         if (text.includes(inputed)) {
//             li.style.display = "block"
//         } else {
//             li.style.display = "none"
//         }
//     })
// })