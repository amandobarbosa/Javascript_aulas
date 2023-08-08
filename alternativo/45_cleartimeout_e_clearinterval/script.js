var x = 0

var mytimer = setTimeout(function() {
  console.log('0 x 0 é 0')
}, 1500);

x = 5

if(x>=0){
  clearTimeout(mytimer)
  console.log('o x passou de 0')
}

//clearinterval

var myinterval = setInterval(function() {
  console.log('imprimindo interval')
}, 500);

setTimeout(function() {
  console.log('não precisa mais de intervalo')
  clearInterval(myinterval)
}, 1500);