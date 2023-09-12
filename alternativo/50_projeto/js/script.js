//funcção que adciona tarefa
function addtask(){
    const tasktitle = document.querySelector('#task-title').value

    if(tasktitle){
        //clonar template
        const template = document.querySelector('.template')

        const newtask = template.cloneNode(true)

        //adiciona titulo
        newtask.querySelector('.task-title').textContent = tasktitle

        //remover classes desnecessarias
        newtask.classList.remove('template')
        newtask.classList.remove('hide')
        //adciona tarefa na lista

        const list = document.querySelector('#task-list')

        list.appendChild(newtask) 

        //adcionar o evento remover
        const removebtn = newtask.querySelector('.remove-btn').addEventListener('click', function(){
            removetask(this)
        })

        //adcionar evento de completar tarefa
        const donebtn = newtask.querySelector('.done-btn').addEventListener('click', function(){
            completartask(this)
        })

        //limpar texto
        document.querySelector('#task-title').value = ''
    }
    
}

//função de remover tarefa

function removetask(task){
    task.parentNode.remove(true)
}

//função de completar tarefa
function completartask(task){
    const taskcomplete = task.parentNode

    taskcomplete.classList.toggle('done')
}

//evento de adcionar tarefa
const addbtn = document.querySelector('#add-btn')

addbtn.addEventListener('click', function(e){
    e.preventDefault()
    addtask()
})

console.log
