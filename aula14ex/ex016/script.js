function contar() {
    var ini = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var passo = document.getElementById('txtp')
    var res = document.getElementById('res')

    
    if(ini.value.length == 0 || fim.value.length == 0 || passo.value == 0){
        res.innerHTML = 'impossivel contar'
        /*alert('tem erro')*/
    } else{
        res.innerHTML = 'contando: '

        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(passo.value)


        if(p <= 0){
            alert('passo invalido, considerando passo 1')
            p = 1
        }
 
        /*contagem crescente*/
        if(i < f){
            for(c = i; c<= f; c+= p){
                res.innerHTML += `${c} \u{1F601}`
            }
            /* contagem decrescente */
        } else{
            for(c = i; c>= f; c-=p){
                res.innerHTML += `${c} \u{1F601}`
            }
        }


    }
}