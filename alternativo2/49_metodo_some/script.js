const p_array = document.getElementById('array')
const btn_verificar = document.getElementById('caixa_verificar')
const btnPesquisar = document.getElementById('btnPesquisar')
const resultado = document.getElementById('resultado')




const elementosArray=[16,12,14,17,15,13,19]

p_array.innerHTML = '['+elementosArray+']'

btn_verificar.addEventListener('click',(evt)=>{
    const ret = elementosArray.some((e,i)=>{
        if(e<=18){
            resultado.innerHTML = 'array não conforme na posição '+i
        }
        return e>=18
    })
    if(ret == true){
        resultado.innerHTML = 'OK'
    }
    console.log(ret)
})