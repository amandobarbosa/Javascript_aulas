const p_array = document.getElementById('array')
const btn_reduzir = document.getElementById('caixa_reduzir')
const btnPesquisar = document.getElementById('btnPesquisar')
const resultado = document.getElementById('resultado')

const elementos_array=[1,2,3,4,5]
let ant=[]
let atu=[]
let dobro=[]

p_array.innerHTML='['+elementos_array+']'

btn_reduzir.addEventListener('click',(evt)=>{
    dobro.push(elementos_array[0]*2)
    resultado.innerHTML = elementos_array.reduce((anterior, atual,pos)=>{
        ant.push(anterior)
        atu.push(atual)
        dobro.push(atual*2)
        return atual+anterior
    })
    resultado.innerHTML+='<br/ > v.anterior:'+ant+ '<br/> v.atual:'+atu+ '<br/> dobro:'+dobro
})