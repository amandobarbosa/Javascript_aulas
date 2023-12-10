const p_array = document.getElementById('array')
const txt_pesquisar = document.getElementById('txt_pesquisar')
const btnPesquisar = document.getElementById('btnPesquisar')
const resultado = document.getElementById('resultado')




const elementosArray=['html', 'css', 'javascript']

p_array.innerHTML = '['+elementosArray+']'

btnPesquisar.addEventListener('click',(evt)=>{
    resultado.innerHTML='valor não encontrado'
    const ret=elementosArray.find((e,i)=>{
        if(e.toUpperCase==txt_pesquisar.value.toUpperCase){
            i++
            resultado.innerHTML = ' valor encontrado ' + e +' na posição ' +i
            return e
        }
    })
    console.log(ret)
})