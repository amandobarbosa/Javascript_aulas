const s1 = Symbol()
const s2 = Symbol()
const s3 = Symbol.for('Amando')
const s4 = Symbol.for('canal')
console.log(s2)

console.log(s3==s4)

console.log(Symbol.keyFor(s3))
console.log(Symbol.keyFor(s4))