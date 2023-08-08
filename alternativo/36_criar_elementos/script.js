var novoparagrafo = document.createElement('p')


var texto = document.createTextNode('este é o conteudo do paragrafo')

novoparagrafo.appendChild(texto)

console.log(novoparagrafo)

var body = document.querySelector('body')

console.log(body)

body.appendChild(novoparagrafo)

//inserir em um container

var container = document.getElementById('container')

console.log(container)

var el = document.createElement('span')

el.appendChild(document.createTextNode('texto do span'))

console.log(el)
container.appendChild(el)