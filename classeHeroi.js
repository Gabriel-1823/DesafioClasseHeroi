class Heroi {
    constructor(nome, idade, classe) {
        this.nome = nome
        this.idade = idade
        this.classe = classe || 'camponês'
        this.ataque_tipo = 'soco'
        this.status = {
            vida: 100,
            estamina: 100,
            magia: 100,
            força: 10
        }

        switch (classe) {

            case 'guerreiro':
                this.ataque_tipo = 'espada'
                this.status.vida = 350
                this.status.estamina = 130
                this.status.magia = 80
                this.status.força = this.status.vida / 10
                break

            case 'mago':
                this.ataque_tipo = 'magia'
                this.status.vida = 140
                this.status.estamina = 120
                this.status.magia = 450
                this.status.força = this.status.magia / 10
                break

            case 'monge':
                this.ataque_tipo = 'artes marciais'
                this.status.vida = 280
                this.status.estamina = 200
                this.status.magia = 180
                this.status.força = this.status.vida / 10
                break

            case 'ninja':
                this.ataque_tipo = 'shuriken'
                this.status.vida = 180
                this.status.estamina = 240
                this.status.magia = 190
                this.status.força = this.status.vida / 10
                break

            case 'ladino':
                this.ataque_tipo = 'adaga'
                this.status.vida = 200
                this.status.estamina = 270
                this.status.magia = 140
                this.status.força = this.status.vida / 10
                break

        }
    }

    Atacar(alvo) {

        if (alvo) {
            if (alvo.status.vida > 0) {
                console.log(`${alvo.nome} possui ${alvo.status.vida} pontos de vida`)
                console.log(`O herói ${this.nome} da classe ${this.classe} atacou ${alvo.nome} usando ${this.ataque_tipo}`)
                alvo.status.vida -= this.status.força
                console.log(`${alvo.nome} agora esta com ${alvo.status.vida} pontos de vida \n`)
            }

            else { console.log(`O herói ${alvo} esta inconsciente`) }
        }

        else {
            console.log(`O "heroi" ${this.nome} atacou a si mesmo usando ${this.ataque_tipo}`)
            this.status.vida -= this.status.força
            console.log(`${this.nome} agora esta com ${this.status.vida} pontos de vida \n`)
        }
    }
}

const Oliver = new Heroi('Oliver', 47, 'ladino')
const Marcus = new Heroi('Marcus', 35, 'guerreiro')
const Farengard = new Heroi('Farengard', 77, 'mago')
const Lee = new Heroi('Lee', 33, 'ninja')
const Ping = new Heroi('Ping', 48, 'monge')
const Jeffrey = new Heroi('Jeffrey', 25)

Oliver.Atacar(Farengard)
Marcus.Atacar(Ping)
Farengard.Atacar(Oliver)
Lee.Atacar(Marcus)
Ping.Atacar(Lee)
Jeffrey.Atacar()