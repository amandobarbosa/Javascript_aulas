const caixa = document.getElementById('caixa')

let musicas  = new Set(['musica1', 'musica boa', 10])

musicas.add('drip da roça')
musicas.add('musica1')
musicas.add('drip da roça')
musicas.add('drip da roça')

musicas.delete('musica1')


console.log(musicas)

musicas.forEach((el)=>{
    caixa.innerHTML += el + '</br>'
})

/*for(let m of musicas){
    caixa.innerHTML += m + '</br>'
}*/