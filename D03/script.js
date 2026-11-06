let dias = [1, 1, 0, 1, 1, 1, 0, 1]
let sequencia = 0
let maiorSequencia = 0

for (let i = 0; i < dias.length; i++) {
    if (dias[i] === 1) {
        sequencia++
    }
    if (dias[i] === 0) {
        if (sequencia > maiorSequencia) {
            maiorSequencia = sequencia
        }
        sequencia = 0
    }
}

if (sequencia > maiorSequencia) {
    maiorSequencia = sequencia
}

console.log(maiorSequencia)