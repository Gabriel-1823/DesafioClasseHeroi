class Heroi {
    constructor(nome, idade, classe) {
        this.nome = nome
        this.idade = idade
        this.classe = classe || 'Camponês'
        this.ataque_tipo = 'soco'
        this.status = {
            vida: 100,
            estamina: 100,
            magia: 100,
            força: 10
        }

        switch (classe) {

            case 'Guerreiro':
                this.ataque_tipo = 'espada'
                this.status.vida = 350 + this.idade
                this.status.estamina = 130 + this.idade
                this.status.magia = 80 + this.idade
                this.status.força = Math.round(this.status.vida / 10)
                break

            case 'Mago':
                this.ataque_tipo = 'magia'
                this.status.vida = 140 + this.idade
                this.status.estamina = 120 + this.idade
                this.status.magia = 450 + this.idade
                this.status.força = Math.round(this.status.vida / 10)
                break

            case 'Monge':
                this.ataque_tipo = 'artes marciais'
                this.status.vida = 260 + this.idade
                this.status.estamina = 150 + this.idade
                this.status.magia = 180 + this.idade
                this.status.força = Math.round(this.status.vida / 10)
                break

            case 'Ninja':
                this.ataque_tipo = 'shuriken'
                this.status.vida = 180 + this.idade
                this.status.estamina = 240 + this.idade
                this.status.magia = 190 + this.idade
                this.status.força = Math.round(this.status.vida / 10)
                break

            case 'Ladino':
                this.ataque_tipo = 'adaga'
                this.status.vida = 200 + this.idade
                this.status.estamina = 270 + this.idade
                this.status.magia = 140 + this.idade
                this.status.força = Math.round(this.status.vida / 10)
                break

        }
    }

    Atacar(alvo, furtividade = undefined) {

        if (alvo) {
            if (alvo.status.vida > 0) {
                console.log(`${alvo.nome} possui ${alvo.status.vida} pontos de vida`)

                switch (furtividade) {

                    case true:
                        console.log(`O herói ${this.nome} da classe ${this.classe} atacou de modo furtivo ${alvo.nome} usando ${this.ataque_tipo}`)
                        alvo.status.vida -= Math.round(this.status.força + this.status.estamina / 10)
                        console.log(`${alvo.nome} agora esta com ${alvo.status.vida} pontos de vida \n`)
                        break

                    case false || undefined:
                        console.log(`O herói ${this.nome} da classe ${this.classe} atacou ${alvo.nome} usando ${this.ataque_tipo}`)
                        alvo.status.vida -= this.status.força
                        console.log(`${alvo.nome} agora esta com ${alvo.status.vida} pontos de vida \n`)
                        break
                }
            }

            else { console.log(`O alvo ${alvo.nome} esta inconsciente \n`) }
        }

        else {
            if (this.status.vida > 0) {
                console.log(`O "heroi" ${this.nome} atacou a si mesmo usando ${this.ataque_tipo}`)
                this.status.vida -= this.status.força
                console.log(`${this.nome} agora esta com ${this.status.vida} pontos de vida \n`)
            }
            else { console.log(`O "heroi" ${this.nome} esta inconsciente\n`) }
        }
    }
}

const Oliver = new Heroi('Oliver', 47, 'Ladino')
const Marcus = new Heroi('Marcus', 35, 'Guerreiro')
const Farengard = new Heroi('Farengard', 77, 'Mago')
const Lee = new Heroi('Lee', 33, 'Ninja')
const Ping = new Heroi('Ping', 48, 'Monge')
const Jeffrey = new Heroi('Jeffrey', 25)

Oliver.Atacar(Farengard, true)
Marcus.Atacar(Ping)
Farengard.Atacar(Oliver)
Lee.Atacar(Marcus, true)
Ping.Atacar(Lee)
Jeffrey.Atacar()

for (let x = 0; x < 10; x++) {
    Jeffrey.Atacar()
}

for (let x = 0; x < 7; x++) {
    Marcus.Atacar(Oliver)
}

for (let x = 0; x < 9; x++) {
    Farengard.Atacar()
}