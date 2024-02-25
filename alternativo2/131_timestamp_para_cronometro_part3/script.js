const timer = document.getElementById('timer')

const btn_iniciar = document.getElementById('btn_iniciar')
const btn_parar = document.getElementById('btn_parar')
const btn_zerar = document.getElementById('btn_zerar')

let intervalo = null

let tmpini = null

const contador=()=>{
    const tmpatual = Date.now()
    let cont = tmpatual-tmpini
    let seg = (tmpatual-tmpini)/1000
    timer.innerHTML = converter(seg)
}

const converter=(seg)=>{

    const hora = Math.floor(seg/3600)
    let resto = seg%3600
    const minuto = Math.floor(resto/60)
    const segundo = Math.floor(resto%60)

    const tempoform = (hora <10?'0'+hora:hora)+':'+(minuto <10?'0'+minuto:minuto)+':'+(segundo <10?'0'+segundo:segundo)
    return tempoform
}


btn_iniciar.addEventListener('click',(evt)=>{
    tmpini = Date.now()
    intervalo = setInterval(contador, 1000)

})
btn_parar.addEventListener('click',(evt)=>{
    clearInterval(intervalo)
})
btn_zerar.addEventListener('click',(evt)=>{
    tmpini = Date.now()
    timer.innerHTML = '00:00:00'
    clearInterval(intervalo)
})