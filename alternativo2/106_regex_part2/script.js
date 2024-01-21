let nome = new String('Amandoooooooo Barbosaaaaaaaaaa 1998')
let email = 'amando@amando.com.br'

let numeros = '1, 10, 100, 1000'

console.log(nome)

console.log(nome.search(/barbosa/i))

console.log(nome.match(/a/ig))

console.log(nome.replace(/a/ig, 'z'))

console.log(nome.match(/[a-m|0-9]/ig))

//Meta caracteres
console.log(nome.match(/\d/ig))//numeros
console.log(nome.match(/\s/ig))//espaços
console.log(nome.match(/\bp/ig))//dword

//Quantificadores
console.log(numeros)
console.log(nome.match(/o+|a+/ig))
console.log(numeros.match(/10/ig))
console.log(numeros.match(/10+/ig))
console.log(numeros.match(/10*/ig))
console.log(numeros.match(/10?/ig))
