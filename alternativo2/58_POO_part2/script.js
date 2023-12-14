class Carro{
    canal = 'Cfb cursos'
    constructor(pnome, ptipo){
        this.nome = pnome
        this.canal = 'youtube'
        if(ptipo == 1){
            this.ptipo = 'esportivo'
            this.velmax=300
        } else if(ptipo == 2){
            this.ptipo ='utilitario'
            this.velmax=100
        } else if(ptipo == 3){
            this.ptipo ='passeio'
            this.velmax=160
        } else{
            this.ptipo = 'militar'
            this.velmax=180
        }
    }
    getNome(){
        return this.nome
    }

    getTipo(){
        return this.ptipo
    }

    getVmax(){
        return this.velmax
    }

    getInfo(){
        return [this.nome, this.ptipo, this.velmax]
    }

    setNome(nome){
        this.nome = nome
    }

    setTipo(tipo){
        this.ptipo = tipo
    }

    setVel(vel){
        this.velmax = vel
    }

    info(){
        console.log(`nome: ${this.nome}`)
        console.log(`tipo: ${this.ptipo}`)
        console.log(`v.max: ${this.velmax}`)
        console.log(`canal: ${this.canal}`)
        console.log('-------------------')
    }
    
}
 


let c1 = new Carro('rapidão', 1)
let c2 = new Carro('super luxo', 3)
let c3 = new Carro('bombadão', 8)
let c4 = new Carro('carrego tudo', 2)

//c2.info()
//c1.info()
//console.log(c1.getNome())
//console.log(c4.getInfo()[1])
c1.setNome('Golf')
c1.setTipo('bonito')
c1.setVel(500)
c1.info()