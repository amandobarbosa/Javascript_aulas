document.addEventListener('keydown', function(event){
  console.log(event.key)

  if(event.key === 'Enter'){
    console.log('apertou enter')
  }
})

document.addEventListener('keyup', function(){
  if(event.key === 'Enter'){
    console.log('soltou o enter')
  }
})