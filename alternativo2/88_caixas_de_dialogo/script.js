const btn_alert = document.getElementById('btn_alert')
const btn_confirm = document.getElementById('btn_confirm')
const btn_prompt = document.getElementById('btn_prompt')

btn_alert.addEventListener('click',(evt)=>{
    alert('olá, td bem?')
})

btn_confirm.addEventListener('click',(evt)=>{
    const ret = confirm('vc está aprendendo mt?')
    if(ret){
        console.log('ok, botão pressionado')
    }else{
        console.log('ok, botão cancelar pressionado')
    }
})

btn_prompt.addEventListener('click',(evt)=>{
    const nome = prompt('Digite seu nome:', 'Digite seu nome aqui')
    if(nome == null){
        console.log('botão cancelar digitado')
    }else{
        console.log(`nome digitado: ${nome}`)
    }
})