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
        this.cor = config.cor
        this.destino = document.body
    }
    mostrar=(titulo, texto)=>{
        this.titulo = titulo
        this.texto = texto
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

        const corpocxmsg = document.createElement('div')
        corpocxmsg.setAttribute('id', 'corpocxmsg')
        corpocxmsg.innerHTML= this.texto
        areacxmsg.appendChild(corpocxmsg)

        const rodapecxmsg = document.createElement('div')
        rodapecxmsg.setAttribute('id', 'rodapecxmsg')
        areacxmsg.appendChild(rodapecxmsg)


        const estilo_botao=
        'background-color:'+this.cor+ ';'+
        'color: #fff;'+
        'padding: 10px 50px;'+
        'border-radius: 5px;'+
        'cursor: pointer;'+
        'text-transform: uppercase;'
        const btn_ok = document.createElement('button')
        btn_ok.setAttribute('style', estilo_botao)
        btn_ok.innerHTML='OK'
        btn_ok.addEventListener('click', ()=>{
            this.ocultar()
        })
        rodapecxmsg.appendChild(btn_ok)
    }
    ocultar=()=>{
        this.divmsg.remove()
    }
}
