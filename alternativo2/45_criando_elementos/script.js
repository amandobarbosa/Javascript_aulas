const caixaCurso = document.querySelector('#caixaCursos')
const btn_c =[...document.querySelectorAll('.curso')]
const cursos = ['html', 'css','javascript', 'php', 'react', 'mysql', 'react native']
const btnCursoSelecionado = document.getElementById('btnCursoSelecionado')
const btnRemoveCurso = document.getElementById('btnRemoverCurso')
const btnAdicionarAntes = document.getElementById('btnAdicionarAntes')
const btnAdicionarDepois = document.getElementById('btnAdicionarDepois')
const nomeCurso = document.getElementById('nomeCurso')

let indice = 0
const criarNovoCurso=(curso)=>{
    const novoElemento = document.createElement('div')
    novoElemento.setAttribute('id', 'c'+indice)
    novoElemento.setAttribute('class', 'curso c1')
    novoElemento.innerHTML = curso

    const comandos = document.createElement('div')
    comandos.setAttribute('class', 'comandos')

    const rb = document.createElement('input')
    rb.setAttribute('type', 'radio')
    rb.setAttribute('name', 'rb_curso')

    comandos.appendChild(rb)
    novoElemento.appendChild(comandos)
    return novoElemento
}
cursos.map((el, chave)=>{
    const novoElemento = criarNovoCurso(el)
    caixaCurso.appendChild(novoElemento)
    indice++
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

btnAdicionarAntes.addEventListener('click',(evt)=>{
    const rs = radioSelecionado()
    try{ 
        if(nomeCurso.value != ''){
            const cursoSelecionado = rs.parentNode.parentNode
            const novoCurso = criarNovoCurso(nomeCurso.value)
            caixaCurso.insertBefore(novoCurso,cursoSelecionado)
        } else{
            alert('digite o nome do curso')
        }
    } catch(ex){
        alert('selecione um curso ')

    }
})

btnAdicionarDepois.addEventListener('click',(evt)=>{
    const rs = radioSelecionado()
    try{
        if(nomeCurso.value != ''){
            const cursoSelecionado = rs.parentNode.parentNode
            const novoCurso = criarNovoCurso(nomeCurso.value)
            caixaCurso.insertBefore(novoCurso,cursoSelecionado.nextSibling)
        } else{
            alert('digite o nome do curso')
        }

    } catch(ex){
        alert('selecione um curso ')

    }
})