const divTodas = [...document.getElementsByTagName('div')]

const cursosc1 = [...document.getElementsByClassName('c1')]

const cursosc2 = [...document.getElementsByClassName('c2')]

const cursoEspecial = document.getElementById('c1')




//const query_divTodas = [...document.querySelectorAll('div[class]')]

const query_divTodas = [...document.querySelectorAll('div > p')]

const query_cursoTodos = [...document.querySelectorAll('.curso')]

const query_c1 = document.querySelectorAll('.c1,p')

const query_c2 = document.querySelector('.c2')

const query_Especial = document.querySelector('#c1')

//console.log(query_divTodas)
console.log(query_divTodas)

/*console.log(query_divTodas)
console.log(query_cursoTodos)
console.log(query_c1)
console.log(query_c2)*/

/*console.log(divTodas)
console.log(cursosc1)
console.log(cursosc2)
console.log(cursoEspecial)*/

/*cursosc2.map((el)=>{
    el.classList.add('destaque')
})
*/
