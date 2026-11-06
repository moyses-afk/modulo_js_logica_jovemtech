let texto = prompt("Digite o tamanho do primeiro lado do triângulo: ");
let lado1 = parseFloat(texto);
let texto2 = prompt("Digite o tamanho do segundo lado do triângulo: ");
let lado2 = parseFloat(texto2);
let texto3 = prompt("Digite o tamanho do terceiro lado do triângulo: ");
let lado3 = parseFloat(texto3);

if (isNaN(lado1) || isNaN(lado2) || isNaN(lado3) || lado1 <= 0 || lado2 <= 0 || lado3 <= 0) {
    console.log("Entrada inválida.");
} else if (lado1 + lado2 > lado3 && lado1 + lado3 > lado2 && lado2 + lado3 > lado1) {
    if (lado1 === lado2 && lado2 === lado3) {
        console.log("O triângulo é equilátero.");
    } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) { 
        console.log("O triângulo é isósceles.");
    } else {
        console.log("O triângulo é escaleno.");
    }
} else {
    console.log("Os lados fornecidos não formam um triângulo.");
}