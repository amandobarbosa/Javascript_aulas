
function Pessoa(pnome, pidade){
        this.nome = pnome,
        this.idade = pidade,

    this.getNome = function(){
        return this.nome
    },

    this.getIdade = function(){
        return this.idade
    },

    this.setNome = function(nome){
        this.nome = nome
    },

    this.setIdade = function(idade){
        this.idade = idade
    },



    this.info = function(){
        console.log(`nome: ${this.nome}`)
        console.log(`tipo: ${this.idade}`)
        console.log('-------------------')
    }
    
}

let pessoas=[]
const btn_add = document.getElementById('btn_add')
const res = document.querySelector('.res')

const addpessoas=()=>{
    res.innerHTML = ''
    pessoas.map((p)=>{
        const div = document.createElement('div')
        div.setAttribute('class', 'pessoa')
        div.innerHTML = `Nome: ${p.getNome()} </br> Idade ${p.getIdade()}`
        res.appendChild(div)
    })
}

btn_add.addEventListener('click',(evt)=>{
    const nome = document.querySelector('#fnome')
    const idade = document.querySelector('#fidade')
    const p = new Pessoa(nome.value, idade.value)
    pessoas.push(p)
    nome.value = ''
    idade.value =''
    nome.focus()
    console.log(pessoas)
    addpessoas()
})


