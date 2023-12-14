const caixa = document.getElementById('caixa')

const carros =['polo', 'golf', 't-cross', 'hrv']

let ol = `<ul>`
carros.map((el)=>{
    ol+=`<li> ${el} </li>`
})
ol+=`</ul>`

caixa.innerHTML = ol






/*const curso = 'javascript'
const canal ='cfb curso'
//const frase = 'esté é o curso de '+curso+ ' do canal '+ canal
const frase = `esté é o</br> curso de ${curso} do canal ${canal}`

caixa.innerHTML = frase*/