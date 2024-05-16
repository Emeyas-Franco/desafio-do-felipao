let nomeHeroi = "Emeyas"
let expHeroi = 20700
let nivelHeroi = [`Ferro`, `Bronze`, `Prata`, `Ouro`, `Platina`, `Ascendente`, `Imortal`, `Radiante`]

if(expHeroi < 1000){
    console.log(`O Herói de nome ${nomeHeroi} está no nível de ${nivelHeroi[0]}!`)
} else if (expHeroi < 2000){
    console.log(`O Herói de nome ${nomeHeroi} está no nível de ${nivelHeroi[1]}!`)
} else if (expHeroi < 5000) {
    console.log(`O Herói de nome ${nomeHeroi} está no nível de ${nivelHeroi[2]}!`)
} else if (expHeroi < 7000) {
    console.log(`O Herói de nome ${nomeHeroi} está no nível de ${nivelHeroi[3]}!`)
} else if (expHeroi < 8000) {
    console.log(`O Herói de nome ${nomeHeroi} está no nível de ${nivelHeroi[4]}!`)
} else if (expHeroi < 9000) {
    console.log(`O Herói de nome ${nomeHeroi} está no nível de ${nivelHeroi[5]}!`)
} else if (expHeroi < 10000) {
    console.log(`O Herói de nome ${nomeHeroi} está no nível de ${nivelHeroi[6]}!`)
} else {
    console.log(`O Herói de nome ${nomeHeroi} está no nível supremo de ${nivelHeroi[7]}`)
}




