class Carro{ //classe PAI / classe base
    constructor(nome, portas){
        this.cor = ''
        this.nome = nome
        this.portas = portas
        this.ligado = false
        this.vel = 0
    }
    ligar = function(){
        this.ligado = undefined
    }
    desligar = function(){
        this.ligado = false
    }
    setCor= function(cor){
        this.cor = cor
    }
}

class Militar extends Carro{ //Classe filho
    constructor(nome, portas,blindagem,municao){
        super(nome, portas)
        this.blindagem = blindagem
        this.municao = municao
        this.setCor('Verde')
    }
    atirar=function(){
        if(this.municao >0){
            this.municao--
        }
    }
}

class Utilitario extends Carro{
    constructor(nome, portas,lugares){
        super(nome, portas)
        this.lugares = lugares
    }
}

const c1 = new Carro('comum', 4)
c1.ligar
c1.setCor('Preto')
const c2 = new  Militar('lutador', 6, 100, 50)
c2.setCor('Azulzão')
c2.atirar()
c2.atirar()
c2.atirar()
c2.atirar()

console.log(`Nome: ${c1.nome}`)
console.log(`Portas: ${c1.portas}`)
console.log(`Ligado: ${(c1.ligado?'sim':'não')}`)
console.log(`Vel: ${c1.vel}`)
console.log(`Cor: ${c1.cor}`)
console.log(`-----------`)

console.log(`Nome: ${c2.nome}`)
console.log(`Portas: ${c2.portas}`)
console.log(`Ligado: ${(c2.ligado?'sim':'não')}`)
console.log(`Vel: ${c2.vel}`)
console.log(`Cor: ${c2.cor}`)
console.log(`Blindagem: ${c2.blindagem}`)
console.log(`Munição: ${c2.municao}`)
console.log(`-----------`)