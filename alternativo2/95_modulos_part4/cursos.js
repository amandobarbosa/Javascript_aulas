class Cursos{
    static cursos = ['javascript', 'html', 'css', 'arduino', 'c++', 'python', 'java', 'c#']

    static getTodosCursos=()=>{
        return this.cursos
    }
    static getTodosCurso=(i_curso)=>{
        return this.cursos[i_curso]
    }
    static addCurso=(novoCurso)=>{
        return this.cursos.push(novoCurso)
    }
    static apagarCursos=()=>{
        return this.cursos=''
    }
}


export default Cursos
