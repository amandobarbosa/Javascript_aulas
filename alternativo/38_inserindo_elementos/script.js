var el = document.createElement('div')

el.classList = 'div-criada'
el.textContent = 'oi'

console.log(el)

var container = document.querySelector('#container')

container.appendChild(el)

var el2 = document.createElement('div')

el2.classList = 'div2'

el2.textContent = 'olá'

var el3 = document.querySelector('#container .div-criada')

console.log(el3)

container.insertBefore(el2, el3)