import {cxmsg} from './cxmsg.js'

const config={
    cor: 'pink',
    tipo: 'sn',
    comando_sn:()=>{}
}

Cxmsg.config(config)

//const cxmsg = new Cxmsg(config)


const btn_mostrarcxmsg = document.getElementById('btn_mostrarcxmsg')

const btn_mostrarcxmsg2 = document.getElementById('btn_mostrarcxmsg2')

const btn_mostrarcxmsg3 = document.getElementById('btn_mostrarcxmsg3')


btn_mostrarcxmsg.addEventListener('click', ()=>{
    cxmsg.mostrar('Amando', 'quer que')
})

btn_mostrarcxmsg2.addEventListener('click', ()=>{
    cxmsg.mostrar('Anthony', 'aprenda')
})

btn_mostrarcxmsg3.addEventListener('click', ()=>{
    cxmsg.mostrar('Javascript', 'também')
})