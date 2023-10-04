//1
function soma(a, b) {
    return a + b;
}
const soma = (a, b) => {
    return a + b;
}

//2
function quadrado(x) {
    return x * x;
}
const quadrado = x => {
    //return x *= x;
    //certo
    return x * x;
}
/*  let x = 5;

x *= x; // x agora é 25
console.log(x); // Saída: 25

x = 5; // Resetando o valor de x

x * x; // Calcula o quadrado de x (25), mas não altera o valor de x
console.log(x); // Saída: 5


    x *= x; é uma expressão de atribuição composta. Ela multiplica o valor atual de x por ele mesmo e, em seguida, atribui o resultado de volta à variável x. Isso significa que x será atualizado com o seu quadrado.

x * x; é uma expressão que simplesmente calcula o quadrado de x sem alterar o valor de x em si. Isso significa que o valor de x não será modificado após essa operação.

    Portanto, se você deseja calcular o quadrado de x e manter o valor original de x, você deve usar x * x;. Se desejar calcular o quadrado de x e atualizar x com o resultado, use x *= x;. A escolha entre eles depende do seu objetivo específico no código.
*/

//3
function saudacao(nome) {
    return `Olá, ${nome}!`;
}
const saudacao = nome => {
    return `Olá, ${nome}`
}
/////////    ATENÇÂO    \\\\\\\
/*Arrow functions devem ser atribuídas a variáveis, ou constantes para serem usadas posteriormente, ou onde forem necessárias*/

//Exercício 2:
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numeros);

const filtrarPar = numeros =>{
if (numeros % 2 == 0) {
    console.log(numeros)
}
};
filtrarPar(numeros)

//correção:
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numeros);

const filtrarPar = numeros =>{
    for (const numero of numeros){
        if (numero % 2 === 0) {
            console.log(numero)
        }else{
            console.log(numero);
        }  
    }
};
filtrarPar(numeros);
//terminar o resto<----