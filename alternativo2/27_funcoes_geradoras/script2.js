function* perguntas(){
    const nome = yield 'qual o seu nome?'
    const esporte = yield 'qual seu esporte preferido?'
    return 'seu nome é ' + nome + ' seu esporte favorito é ' + esporte
}

const itp = perguntas()

console.log(itp.next().value)
console.log(itp.next('Amando').value)
console.log(itp.next('Futebol').value)