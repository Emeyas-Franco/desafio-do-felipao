class hero{
    constructor(nameHero, ageHero, typeHero){
        this.nameHero = nameHero
        this.ageHero = ageHero
        this.typeHero = typeHero
    }
    atacar(){
        let attack
        switch (this.typeHero){
            case "mage":
                attack = "magia";
                break
            case "warrior":
                attack = "espada";
                break
            case "monk":
                attack = "artes marciais";
                break
            case "ninja":
                attack = "shuriken";
        }
        console. log(`O ${this.typeHero} ${this.nameHero} atacou usando ${attack}`)
    }
}
        
let mage = new hero("Emeyas", 38, "mage")
let warrior = new hero("Arthur", 24, "warrior")
let monk = new hero("Tenzin", 32, "monk")
let ninja = new hero(`Akarai`, 27, `ninja`)

ninja.atacar()


