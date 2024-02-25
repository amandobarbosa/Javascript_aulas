const config={
    titulo: 'teste',
    texto: 'Curso de JS',
    cor: 'pink'
}

const cxmsg = new Cxmsg(config)


const btn_mostrarcxmsg = document.getElementById('btn_mostrarcxmsg')


btn_mostrarcxmsg.addEventListener('click', ()=>{
    cxmsg.mostrar()
})