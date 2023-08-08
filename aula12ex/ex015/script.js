 function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if(fano.value.length ==0 || fano.value > ano){
        window.alert('valor errado')
    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        res.innerHTML = `idade calculada: ${idade}`
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 10){
                img.setAttribute('src', 'imagens/bebe-h.jpg')
            } else if(idade < 21){
                img.setAttribute('src', 'imagens/jovem-h.jpg')
            } else if(idade < 50){ 
                img.setAttribute('src', 'imagens/adulto-h.jpg')
            } else{
                img.setAttribute('src', 'imagens/idoso-h.jpg')
            }
        }
        else{
            genero = 'mulher'
            if(idade >= 0 && idade < 10){
                img.setAttribute('src', 'imagens/bebe-m.jpg')
            } else if(idade < 21){
                img.setAttribute('src', 'imagens/jovem-m.jpg')
            } else if(idade < 50){ 
                 img.setAttribute('src', 'imagens/adulta-m.jpg')
            } else{
                img.setAttribute('src', 'imagens/idosa-m.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
 }