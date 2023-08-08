function carregar(){

var msg = window.document.getElementById('msg')

var img = window.document.getElementById('imagem')


var data = new Date()

var hora = data.getHours()

/*var hora = 5*/

msg.innerHTML = `agora são ${hora} horas`


if(hora >=6 && hora <12){
    img.setAttribute('src', 'imagens/manha.png')
    document.body.style.background = 'yellow'
} else if(hora >12 && hora < 18){
    img.setAttribute('src', 'imagens/tarde.jpg')
    document.body.style.background = 'blue'
} else{
    img.setAttribute('src', 'imagens/noite.jpg')
    document.body.style.background = 'gray'
}

}

