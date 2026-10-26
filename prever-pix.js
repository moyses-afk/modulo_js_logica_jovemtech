const prompt = require("prompt-sync")();

let limite = 0
let saldo = Number(prompt("Quanto de saldo tem na conta?"));
let valor = Number(prompt("Qual o valor da compra?"));
let hora = Number(prompt("Qual o horario da transferencia?\nDe 0 a 23."));

if (hora >= 20){
    limite = 1000
}

if (saldo >= valor && valor <= 1000) {
    saldo = saldo - valor;
    console.log("pix enviado. Saldo: RS", saldo.toFixed(2));
} else {
    console.log("saldo insuficiente");
}