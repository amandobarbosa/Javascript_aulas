var num = document.getElementById('fnum')
var lista = document.getElementById('flista')
var res = document.getElementById('res')

var valores = []

function isnumero(n){
     if(Number(n) >=1 && Number(n) <=100){
        return true
     }
     else{
        return false
     }
}

function inlista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    } else{
        return false
    }
}

function adcionar(){
    if(isnumero(num.value) && !inlista(num.value, valores)){
        valores.push(Number(num.value))
        var item = document.createElement('option')
        item.text = `valor ${num.value} foi adcionado`
        lista.appendChild(item)
        res.innerHTML = ''
    } else{
        window.alert('valor invalido ou já encontrado na lista')
    }
    num.value = ''
    num.focus()
}

function finalizar(){
    if(valores.length == 0){
        window.alert('adcione valores antes de finalizar')
    } else {
        var tot = valores.length
        res.innerHTML = ''
        var maior = valores[0]
        var menor = valores[0]

        for (let pos in valores){
            if(valores[pos] > maior)
                maior = valores[pos]
            if(valores[pos] < menor)
            menor = valores[pos]
            
        }

        res.innerHTML += `<p> ao todo temos ${tot} numeros cadastrados </p>`
        res.innerHTML += `<p> o maior valor é ${maior} </p>`
        res.innerHTML += `<p> o menor valor é ${menor} </p>`
    }
}