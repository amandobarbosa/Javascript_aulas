const nome = Symbol('nome')
const numero = Symbol('numero')
const cor_uniforme = Symbol('cor do uniforme')

const jogador={
    nome:'j1'
}
jogador[numero]=10.
jogador[cor_uniforme]='amarelo'
for(p in jogador){
    console.log(p)
}
console.log(jogador)
console.log(jogador.nome)
console.log(jogador[numero])
console.log(jogador[cor_uniforme])