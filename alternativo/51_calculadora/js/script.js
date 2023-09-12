const previousOperation = document.querySelector('#previous-operation')

const currentOperation = document.querySelector('#current-operation')

const buttons = document.querySelectorAll('#buttons-container button')

class calculator{}

buttons.forEach((btn) => {
    btn.addEventListener('click', (e) =>{
        const value = e.target.innerText
        if(+value <= 0 || value === '.'){
            console.log(value)
        } else{
            console.log('op:' + value)
        }
    }) 
})

