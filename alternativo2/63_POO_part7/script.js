const f_tipoMilitar = document.querySelector('#f_tipoMilitar')

const f_tipoNormal = document.querySelector('#f_tipoNormal')

const f_blindagem = document.querySelector('#f_blindagem')

const f_municao = document.querySelector('#f_municao')

const f_nome = document.querySelector('#f_nome')

const f_portas = document.querySelector('#f_portas')

const carros= document.querySelector('#carros')


const btn_addCarro = document.querySelector('#btn_addCarro')

let a_carros=[]

f_tipoMilitar.addEventListener('click',(evt)=>{
    f_nome.value = ''
    f_portas.value = '0'
    f_blindagem.value = 0
    f_municao.value = 0
    f_blindagem.removeAttribute('disabled')
    f_municao.removeAttribute('disabled')
    
})

f_tipoNormal.addEventListener('click',(evt)=>{
    f_nome.value = ''
    f_portas.value = '0'
    f_blindagem.value = 0
    f_municao.value = 0
    f_blindagem.setAttribute('disabled', 'disabled')
    f_municao.setAttribute('disabled', 'disabled')
    
})

const gerenciarExibicaoCarros=()=>{
    carros.innerHTML = ''
    a_carros.forEach((c)=>{
        const div = document.createElement('div')
        div.setAttribute('class', 'carro')

        div.innerHTML = `Nome: ${c.nome} </br>`
        div.innerHTML += `Portas: ${c.portas} </br>`
        div.innerHTML += `Blindagem: ${c.blindagem} </br>`
        div.innerHTML += `Munição: ${c.municao} </br>`
        div.innerHTML += `Cor: ${c.cor} </br>`
        carros.appendChild(div)
    })
}

btn_addCarro.addEventListener('click', ()=>{
    if(f_tipoNormal.checked){
        const c = new Carro(f_nome.value, f_portas.value)
        a_carros.push(c)
        console.log(Carro)
    }else{
        const c = new Militar(f_nome.value, f_portas.value,f_blindagem.value, f_municao.value)
        a_carros.push(c)
    }
    gerenciarExibicaoCarros()
})



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
