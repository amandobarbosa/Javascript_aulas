const endpoint = 'https://b1ed8103-f6b2-4b77-a989-b6ad105310e4-00-1wh4eysnq0tb6.kirk.replit.dev/'

const p_temp = document.getElementById('p_temp')
const p_nivel = document.getElementById('p_nivel')
const p_press = document.getElementById('p_press')

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

let intervalo = setInterval(obterDados, 3000)