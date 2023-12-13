const caixa = document.getElementById('caixa')
let cores=['azul', 'verde', 'vermleho', 
['claro', 'escuro', 'medio']]
let cursos = ['html', 'css', 'javascript', cores]

// cursos.push('c++')
// cursos.pop()

// cursos.unshift('java')
// cursos.shift()



console.log(cursos[3][3][2])

cursos.map((el)=>{
    let p = document.createElement('p')
    p.innerHTML = el
    caixa.appendChild(p)
})