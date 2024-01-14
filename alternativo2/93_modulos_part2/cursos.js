const cursos = ['javascript', 'html', 'css', 'arduino', 'c++', 'python', 'java', 'c#']
const carros = ['polo', 't-cross', 'golf', 'onix', 'argo']

/*const getTodosCursos=()=>{
    return cursos
}*/

export default function getTodosCursos(){
    return cursos
}

function getCursos(i_curso){
    return cursos[i_curso]
}


export {cursos, carros, getCursos}
//export default getTodosCursos