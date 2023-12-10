const caixaCurso = document.querySelector('#caixaCursos')
const btn_c =[...document.querySelectorAll('.curso')]
const cursos = ['html', 'css','javascript', 'php', 'react', 'mysql', 'react native']
const btnCursoSelecionado = document.getElementById('btnCursoSelecionado')
const btnRemoveCurso = document.getElementById('btnRemoverCurso')
const btnAdicionarAntes = document.getElementById('btnAdicionarAntes')
const btnAdicionarDepois = document.getElementById('btnAdicionarDepois')
const nomeCurso = document.getElementById('nomeCurso')

let indice = 0

const tirarSelecao=()=>{
    const cursosSelecionados = [...document.querySelectorAll('.selecionado')]
    cursosSelecionados.map((el)=>{
        el.classList.remove('selecionado')
    })
    
}
const criarNovoCurso=(curso)=>{
    const novoElemento = document.createElement('div')
    novoElemento.setAttribute('id', 'c'+indice)
    novoElemento.setAttribute('class', 'curso c1')
    novoElemento.innerHTML = curso
    novoElemento.addEventListener('click',(evt)=>{
        tirarSelecao()
        evt.target.classList.toggle('selecionado')
    })
    return novoElemento
    
}
cursos.map((el, chave)=>{
    const novoElemento = criarNovoCurso(el)
    caixaCurso.appendChild(novoElemento)
    indice++
})

const cursoSelecionado = ()=>{
    const cursosSelecionados = [...document.querySelectorAll('.selecionado')]
    return cursosSelecionados[0]
}

btnCursoSelecionado.addEventListener('click', (evt)=>{
    const rs = cursoSelecionado()
    try{
        alert('curso selecionado '+ cursoSelecionado().innerHTML)
    } catch(ex){
        alert('selecione um curso ')

    }


})


btnRemoveCurso.addEventListener('click', (evt)=>{
    const cs = cursoSelecionado()
    if(cs != undefined){
        cs.remove()
    } else{
        alert('selecione um curso ')

    }
    
})

btnAdicionarAntes.addEventListener('click',(evt)=>{
    try{ 
        if(nomeCurso.value != ''){
            const novoCurso = criarNovoCurso(nomeCurso.value)
            caixaCurso.insertBefore(novoCurso,cursoSelecionado())
        } else{
            alert('digite o nome do curso')
        }
    } catch(ex){
        alert('selecione um curso ')

    }
})

btnAdicionarDepois.addEventListener('click',(evt)=>{
    try{
        if(nomeCurso.value != ''){
            const novoCurso = criarNovoCurso(nomeCurso.value)
            caixaCurso.insertBefore(novoCurso,cursoSelecionado().nextSibling)
        } else{
            alert('digite o nome do curso')
        }

    } catch(ex){
        alert('selecione um curso ')

    }
})