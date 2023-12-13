const caixa = document.getElementById('caixa')

let mapa = new Map()

mapa.set('curso', 'javascript')
mapa.set(10, '100')
mapa.set(1, 70)
mapa.set('canal', 400)

mapa.delete(1)

console.log(mapa)
let res =''
if(mapa.has('curso')){
    caixa.innerHTML = 'a chave existe com o valor: '+ mapa.get('curso') +'</br> o tamanho da coleção é: '+ mapa.size
}else{
    caixa.innerHTML='a chave não existe'+'</br> o tamanho da coleção é: '+ mapa.size
}

mapa.forEach((el)=>{
    console.log(el)
})
//caixa.innerHTML = mapa.get(1)

