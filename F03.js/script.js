let texto = prompt("Digite o numero de ovos que vc tem: ");
let ovos = parseInt(texto)

let caixas = Math.floor(ovos / 6);
let ovosSobrando = ovos % 6;

console.log("Caixas: " + caixas + "\nSoltos: " + ovosSobrando);