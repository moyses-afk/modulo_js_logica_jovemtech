let texto = prompt("Digite a hora, no máximo 23 no minimo 0: ");
let hora = parseInt(texto)

let texto2 = prompt("Digite os minutos, no máximo 59 no minimo 0: ");
let minutos = parseInt(texto2)

let horaEmMinutos = hora * 60 + minutos;

console.log(horaEmMinutos);