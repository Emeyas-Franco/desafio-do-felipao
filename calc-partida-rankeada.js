let saldo = calcularSaldo(30, 9)
let nivelHeroi = [`Ferro`, `Bronze`, `Prata`, `Ouro`, `Diamante`, `Lendário`, `Imortal`]

if(saldo <= 10){
    console.log(`O Herói tem o saldo de ${saldo} vitórias e está no nível de ${nivelHeroi[0]}.`)
} else if (saldo <= 20){
    console.log(`O Herói tem o saldo de ${saldo} vitórias e está no nível de ${nivelHeroi[1]}.`)
} else if (saldo <= 50){
    console.log(`O Herói tem o saldo de ${saldo} vitórias e está no nível de ${nivelHeroi[2]}.`)
} else if (saldo <= 80){
    console.log(`O Herói tem o saldo de ${saldo} vitórias e está no nível de ${nivelHeroi[3]}.`)
} else if (saldo <= 90){
    console.log(`O Herói tem o saldo de ${saldo} vitórias e está no nível de ${nivelHeroi[4]}.`)
} else if (saldo <= 100) {
    console.log(`O Herói tem o saldo de ${saldo} vitórias e está no nível de ${nivelHeroi[5]}.`)
} else {
    console.log(`O Herói tem o saldo de ${saldo} vitórias e está no nível de ${nivelHeroi[6]}.`)
}



function calcularSaldo(quantVitoria, quantDerrota){
    let saldoVitorias = quantVitoria - quantDerrota
    return saldoVitorias
}