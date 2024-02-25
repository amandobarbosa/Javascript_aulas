const head = document.head

const estilo = '<link rel="stylesheet" href="caixa.css"></link>'

head.innerHTML += estilo

class Cxmsg{
    titulo = null
    texto = null
    cor = null
    destino = null
    divmsg = null
    constructor(config){
        this.titulo = config.titulo
        this.texto = config.texto
        this.cor = config.cor
        this.destino = document.body
    }
    mostrar=()=>{
        this.divmsg=document.createElement('div')
        this.divmsg.setAttribute('id', 'divmsg')
        this.destino.prepend(this.divmsg)


        const areacxmsg = document.createElement('div')
        areacxmsg.setAttribute('id', 'areacxmsg')
        this.divmsg.appendChild(areacxmsg)


        const estilotitulomsg=
       'display: flex;'+
        'justify-content: flex-start;'+
        'align-items: center;'+
        'width: 100%;'+
        'background-color:' +this.cor+';'+
        'color: #fff;'+
        'padding: 5px;'+
        'border-radius: 5px 5px 0px 0px;'

        const titulocxmsg = document.createElement('div')
        titulocxmsg.setAttribute('id', 'titulocxmsg')
        titulocxmsg.innerHTML= this.titulo
        areacxmsg.appendChild(titulocxmsg)
    }
    ocultar=()=>{

    }
}
