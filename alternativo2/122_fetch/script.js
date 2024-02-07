const endpoint = 'https://b1ed8103-f6b2-4b77-a989-b6ad105310e4-00-1wh4eysnq0tb6.kirk.replit.dev/'

const texto = document.getElementById('texto')
const btn_texto = document.getElementById('btn_texto')

fetch(endpoint)

.then(res=>res.json())
.then(dados=>{
    console.log(dados)
})