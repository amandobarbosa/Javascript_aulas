const carro = document.getElementById('carro')
const btn_esquerda = document.getElementById('btn_esquerda')
const btn_direita = document.getElementById('btn_direita')
const btn_parar = document.getElementById('btn_parar')

const init=()=>{
    carro.style='position: relative;left:0px;width:100px'

    tamax = window.innerWidth - parseInt(carro.style.width)


}

let anima = null 

let tamax = null

const move=(dir)=>{
    if(dir >0){
        if(parseInt(carro.style.left) <= tamax){
            carro.style.left = parseInt(carro.style.left) + (10*dir)+'px'
            anima = setTimeout(move,20,dir)
        }else{
            clearTimeout(anima)
        }
    }else if(dir< 0){
        if(parseInt(carro.style.left) <= 0){
            carro.style.left = parseInt(carro.style.left) + (10*dir)+'px'
            anima = setTimeout(move,20,dir)
        }else{
            clearTimeout(anima)
        }
    }

}

btn_parar.addEventListener('click',()=>{
    clearTimeout(anima)
})

btn_esquerda.addEventListener('click',()=>{
    clearTimeout(anima)
    move(-1)
})

btn_direita.addEventListener('click',()=>{
    clearTimeout(anima)
    move(1)
})



//window.onload=init
window.addEventListener('load', init())
window.addEventListener('resize', ()=>{
    tamax = window.innerWidth - parseInt(carro.style.width)
})


