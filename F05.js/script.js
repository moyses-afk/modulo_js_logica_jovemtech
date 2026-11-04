let texto = prompt("Digite o valor do produto, em formatacao de decimal (ex: 10,00): ");
let texto2 = prompt("Digite o valor pago, em formatacao de decimal (ex: 10,00): ");

let valorproduto = parseFloat(texto.replace(",", "."));
let valorpago = parseFloat(texto2.replace(",", "."));

if (valorpago > valorproduto){
    console.log("Troco R$: " + (valorpago - valorproduto).toFixed(2));
} else if (valorpago < valorproduto){
    console.log("Faltam R$: " + (valorproduto - valorpago).toFixed(2));
} else {
    console.log("Pagamento exato");
}