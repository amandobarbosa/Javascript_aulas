const f_texto = document.getElementById('f_texto')
const p_texto = document.getElementById('p_texto')
const btn_texto = document.getElementById('btn_texto')

btn_texto.addEventListener('click', (evt)=>{

})

let num = 10
const curso = 'javascript'
window.localStorage.setItem('numero', num)
window.localStorage.setItem('nome', 'Amando')
localStorage.setItem('curso', curso)

//alert(localStorage.length)

//alert(localStorage.getItem(localStorage.key(1)))

// alert(localStorage.getItem('numero'))
// alert(localStorage.getItem('nome'))
// alert(localStorage.getItem('curso'))
// localStorage.clear()

sessionStorage.setItem('numero', num)
sessionStorage.setItem('nome', 'Amando')
sessionStorage.setItem('curso', curso)