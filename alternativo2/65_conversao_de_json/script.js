const pessoa = {
    nome: 'Amando',
    canal: 'Youtube',
    curso: 'Javascript',
    aulas:{
        aula01: 'introdução',
        aula02: 'variaveis',
        aula03: 'condicional'

    }
}

const string_pessoa='{"nome":"Amando","canal":"Youtube","curso":"Javascript","aulas":{"aula01":"introdução","aula02":"variaveis","aula03":"condicional"}}'
const s_json=JSON.stringify(pessoa) //converte objeto em string json
const ojson=JSON.parse(s_json) //converte string json em objeto

console.log(pessoa)
console.log(s_json)
console.log(ojson)