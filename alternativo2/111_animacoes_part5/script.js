const carro = document.getElementById('carro')
const btn_rodar = document.getElementById('btn_rodar')
const btn_parar = document.getElementById('btn_parar')

const init=()=>{
    carro.style='position: relative;left:0px;width:100px; height:40px;'

    tamCarro = parseInt(parseInt(carro.style.width))
    tamax = window.innerWidth - tamCarro


}

let anima = null 
let tamax = null
let tamCarro = null
let dir = 0


const move=(dir)=>{
        if(parseInt(carro.style.left) <= tamax){
            dir = 1
        }else if(parseInt(carro.style.left) <=0){
            dir = -1
        }
        carro.style.left= parseInt(parseInt(carro.style.left) + (10*dir) + 'px')
        anima = setTimeout(move,20,dir)
    }


btn_parar.addEventListener('click',()=>{
    clearTimeout(anima)
})

btn_rodar.addEventListener('click',()=>{
    move()
})



//window.onload=init
window.addEventListener('load', init())
window.addEventListener('resize', ()=>{
    tamax = window.innerWidth - parseInt(carro.style.width)
})


