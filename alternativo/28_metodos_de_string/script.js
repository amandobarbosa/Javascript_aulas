
var frase = 'EStá é a frase que vamos manipular'

console.log(frase.toUpperCase())

console.log(frase.toLocaleLowerCase())

//trim

var nome = '        matheus           '

var nometrim = nome.trim()
console.log(nometrim)

//split

console.log(frase.split(' '))

var tags = 'php, java, html'
console.log(tags.split(', '))


//lastindexof

var frasedois = 'quero a ultima frase'
console.log(frasedois.lastIndexOf('frase'))