import { Cxmsg } from "./cxmsg.js";
const config={
    titulo: 'teste 123',
    texto: 'Curso de JS',
    cor: 'pink'
}

const cxmsg = new Cxmsg(config)

 
const btn_mostrarcxmsg = document.getElementById('btn_mostrarcxmsg')

const btn_mostrarcxmsg2 = document.getElementById('btn_mostrarcxmsg2')

const btn_mostrarcxmsg3 = document.getElementById('btn_mostrarcxmsg3')


btn_mostrarcxmsg.addEventListener('click', ()=>{
    Cxmsg.mostrar('Amando', 'quer que')
})

btn_mostrarcxmsg2.addEventListener('click', ()=>{
    Cxmsg.mostrar('Anthony', 'aprenda')
})

btn_mostrarcxmsg3.addEventListener('click', ()=>{
    Cxmsg.mostrar('Javascript', 'também')
})