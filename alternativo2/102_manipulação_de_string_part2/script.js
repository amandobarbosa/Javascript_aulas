let nome = new String('Amando barbosa')
let nome2 = new String('Amando barbosa')

let canal = new String('Youtube')
console.log(nome)
console.log(typeof(nome))

console.log(nome.charAt(3))
console.log(nome.charCodeAt(0))
console.log(nome.concat(canal))
console.log(nome.indexOf('n'))
console.log(nome.lastIndexOf('a'))

console.log(nome.localeCompare(nome2))

console.log(nome.replace('a','z'))

console.log(nome.search('n'))

console.log(nome.slice(4,6))

let arr_nome = nome.split('o')
console.log(arr_nome)
