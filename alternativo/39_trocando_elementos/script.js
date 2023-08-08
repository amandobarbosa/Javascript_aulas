var el = document.createElement('h3')

el.classList = 'testando-classe'

//el.textContent = 'oi'

var texto = document.createTextNode('esté é o h3')

el.appendChild(texto)
console.log(el)

var tit = document.querySelector('#titulo')

console.log(tit)

//precisa selecionar o pai do elemento

var pai = tit.parentNode

pai.replaceChild(el, tit)


/*var sub = document.querySelector('.subtitulo')

sub.appendChild(el)

console.log(el)*/