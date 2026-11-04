let texto = prompt("Digite o ano, em formato de 4 dígitos (ex: 2023): ");
let ano = parseInt(texto)

if (ano % 4 == 0 && ano % 100 != 0 || ano % 400 == 0){
    console.log("bissexto");
} else {
    console.log("não bissexto");
}
