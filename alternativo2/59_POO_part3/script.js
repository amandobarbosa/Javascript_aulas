
class Pessoa{
    constructor(pnome, pidade){
        this.nome = pnome
        this.idade = pidade
    
    }
    getNome(){
        return this.nome
    }

    getIdade(){
        return this.idade
    }

    setNome(nome){
        this.nome = nome
    }

    setIdade(idade){
        this.idade = idade
    }



    info(){
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


