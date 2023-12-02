const cursos = ['html', 'css', 'javascript', 'php', 'react']

let c = cursos.map((el, i)=>{
    return '//'+el+'//'
})

console.log(c)