function* cores(){
    yield 'vermelho'
    yield 'verde'
    yield 'branco'
}

const itc = cores()

console.log(itc.next().value)
console.log(itc.next().value)
console.log(itc.next().value)
console.log(itc.next().value)