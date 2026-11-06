let texto = prompt("Digite numero de pessoas: ");
let pessoas = parseInt(texto);
let texto2 = prompt("Digite numero de lugares no onibus: ");
let lugares = parseInt(texto2);

let onibus = Math.floor(pessoas / lugares);

if (pessoas % lugares !== 0){
    onibus = onibus + 1;
}

console.log("O número de ônibus necessários é: " + onibus);