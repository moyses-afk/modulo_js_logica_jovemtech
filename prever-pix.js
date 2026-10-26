let saldo = 150;
let valor = -50;

if (saldo >= valor) {
    saldo = saldo - valor;
    console.log("pix enviado. Saldo: RS", saldo.toFixed(2));
} else {
    console.log("saldo insuficiente");
}