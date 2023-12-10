const caixaCurso = document.querySelector('#caixaCursos')
const btn_c =[...document.querySelectorAll('.curso')]
const cursos = ['html', 'css','javascript', 'php', 'react', 'mysql', 'react native']
const btnCursoSelecionado = document.getElementById('btnCursoSelecionado')
const btnRemoveCurso = document.getElementById('btnRemoverCurso')


cursos.map((el, chave)=>{
    const novoElemento = document.createElement('div')
    novoElemento.setAttribute('id', 'c'+chave)
    novoElemento.setAttribute('class', 'curso c1')
    novoElemento.innerHTML = el

    const comandos = document.createElement('div')
    comandos.setAttribute('class', 'comandos')

    const rb = document.createElement('input')
    rb.setAttribute('type', 'radio')
    rb.setAttribute('name', 'rb_curso')

    comandos.appendChild(rb)
    novoElemento.appendChild(comandos)
    caixaCurso.appendChild(novoElemento)
})

const radioSelecionado = ()=>{
    const todosRadio = [...document.querySelectorAll('input[type=radio]')]
    const radioSelecionado = todosRadio.filter((ele,ind,arr)=>{
        return ele.checked
    })
    return radioSelecionado[0]
}

btnCursoSelecionado.addEventListener('click', (evt)=>{
    const rs = radioSelecionado()
    try{
        const cursoSelecionado = rs.parentNode.previousSibling.textContent
        alert('curso selecionado '+ cursoSelecionado)
    } catch(ex){
        alert('selecione um curso ')

    }


})


btnRemoveCurso.addEventListener('click', (evt)=>{
    const rs = radioSelecionado()
    if(rs != undefined){
        const cursoSelecionado = rs.parentNode.parentNode
        cursoSelecionado.remove()
        console.log(cursoSelecionado)
    } else{
        alert('selecione um curso ')

    }
    
})