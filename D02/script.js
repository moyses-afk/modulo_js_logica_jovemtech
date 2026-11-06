let texto = prompt("Digite um numero: ");
let numero = parseInt(texto);
let termoatual = 0;
let termoanterior = 1;
let termos = [];

while (termoatual <= numero) {
    termos.push(termoatual);
    let termo = termoatual + termoanterior;
    termoanterior = termoatual;
    termoatual = termo;
}

console.log(termos);