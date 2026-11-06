let texto = prompt("Digite o valor da compra: ");
let valor = parseFloat(texto);

if (valor <= 100){
    console.log("O valor da compra é: " + valor);
} else if (valor > 100 && valor <= 300){
    let desconto = valor * 0.10;
    let valorFinal = valor - desconto;
    console.log("O valor da compra com desconto é: " + valorFinal);
} else {
    let desconto = valor * 0.15;
    let valorFinal = valor - desconto;
    console.log("O valor da compra com desconto é: " + valorFinal);
}