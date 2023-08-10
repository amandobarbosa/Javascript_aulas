var btn = document.querySelector('#btn')

console.log(btn)

btn.addEventListener('click', function(){
  console.log('clicou')
  //o this vira o proprio elemento

  this.style.color = 'red'
})

var titulo = document.querySelector('#titulo')

titulo.addEventListener('click', function(){
  var subtitulo = document.querySelector('.subtitulo')
  subtitulo.style.display = 'none'
})

var sub =  document.querySelector('.subtitulo')

sub.addEventListener('dblclick', function(){
  console.log('click duplo')
})