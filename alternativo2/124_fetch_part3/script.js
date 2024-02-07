const endpoint = 'https://b1ed8103-f6b2-4b77-a989-b6ad105310e4-00-1wh4eysnq0tb6.kirk.replit.dev/'

const p_temp = document.getElementById('p_temp')
const p_nivel = document.getElementById('p_nivel')
const p_press = document.getElementById('p_press')
const btn_texto = document.getElementById('btn_texto')

const obterDados=()=>{

fetch(endpoint)

.then(res=>res.json())
.then(dados=>{
    console.log(dados)
    p_temp.innerHTML = 'Temperatura ' + dados.temperatura
    p_nivel.innerHTML = 'Nivel ' + dados.nivel
    p_press.innerHTML = 'Pressao ' + dados.pressao
})
}

//let intervalo = setInterval(obterDados, 3000)

let dados ={
    nome: 'Amando',
    canal: 'youtube',
    curso: 'javascript'
}

let cabecalho={
    method: 'POST',
    body:JSON.stringify(dados)
}

const gravardados=()=>{
    const endpoint ='https://b1ed8103-f6b2-4b77-a989-b6ad105310e4-00-1wh4eysnq0tb6.kirk.replit.dev/'
    fetch(endpoint,cabecalho)
    .then(res=>res.json())
    .then(ret=>{
        console.log(ret)
    })
}

btn_texto.addEventListener('click', ()=>{
    gravardados()
})