var titulo = document.querySelector('#titulo')

titulo.addEventListener('mouseover', function(){
  this.style.backgroundColor = 'yellow'
})

titulo.addEventListener('mouseout', function(){
  this.style.backgroundColor = 'transparent'
})

//afetar outros elementos


var subtitulo = document.querySelector('.subtitulo')

subtitulo.addEventListener('mouseover', function(){
  var p = document.querySelector('.hide')
  p.style.display = 'block'
})

subtitulo.addEventListener('mouseout', function(){
  var p = document.querySelector('.hide')
  p.style.display = 'none'
})