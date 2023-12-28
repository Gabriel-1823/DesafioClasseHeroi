class Heroi {
    constructor(nome, idade, classe) {
        this.nome = nome
        this.idade = idade
        this.classe = classe
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
                this.status.estamina = 140
                this.status.magia = 80
                this.status.força = 50
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
                this.status.magia = 150
                this.status.força = this.status.vida / 10
                break

            case 'ninja':
                this.ataque_tipo = 'shuriken'
                this.status.vida = 180
                this.status.estamina = 240
                this.status.magia = 190
                this.status.força = 45
                break

            case 'ladino':
                this.ataque_tipo = 'adaga'
                this.status.vida = 200
                this.status.estamina = 270
                this.status.magia = 140
                this.status.força = 30
                break
        }
    }

    Atacar(alvo) {
        if (alvo.status.vida >0 ){
        console.log(`${alvo.nome} possui ${alvo.status.vida} pontos de vida`)
        console.log(`O herói ${this.nome} da classe ${this.classe} atacou ${alvo.nome} usando ${this.ataque_tipo}`)
        alvo.status.vida -= this.status.força
        console.log(`${alvo.nome} agora esta com ${alvo.status.vida} pontos de vida \n`)}
        
        else {console.log(`O herói ${alvo} esta inconsciente`)}
    }
}

const Oliver = new Heroi('Oliver', 47, 'ladino')
Marcus = new Heroi('Marcus', 35, 'guerreiro')
Farengard = new Heroi('Farengard', 77, 'mago')
Lee = new Heroi('Lee', 33, 'ninja')
Ping = new Heroi('Ping', 48, 'monge')

Oliver.Atacar(Farengard)
Marcus.Atacar(Ping)
Farengard.Atacar(Oliver)
Lee.Atacar(Marcus)
Ping.Atacar(Lee)