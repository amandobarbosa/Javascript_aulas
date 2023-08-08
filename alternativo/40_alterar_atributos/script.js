var titulo = document.querySelector('#titulo')
titulo.setAttribute('class', 'testando-atributo')

var btn = document.querySelector('#btn')
btn.setAttribute('disabled', 'disabled')

var subtitulo = document.querySelector('.subtitulo')

subtitulo.setAttribute('id', 'titulo2')
console.log(subtitulo)

//remover atributo

var lista = document.querySelector('#lista')

lista.removeAttribute('id')