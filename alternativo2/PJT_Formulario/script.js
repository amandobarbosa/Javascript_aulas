const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const passwordConfirmation = document.getElementById('password-confirmation')

form.addEventListener('submit', (e)=>{
    e.preventDefault()
    checkInputs()
})

function checkInputs(){
    const usernameValue = username.value
    const emailValue = email.value
    const passwordValue = password.value
    const passwordConfirmationValue = passwordConfirmation.value

    if(usernameValue === ''){
        setErrorFor(username, 'o nome do usuario é obrigatório')
    }
}

function setErrorFor(input, message){
    const formcontrol = input.parentElement
    const small = formcontrol.querySelector('small')
    //adcionar msg de erro
    small.innerHTML = message
    //adcionar classe de erro
    formcontrol.className = 'form-control error'
    username.className ='error'
}

function setSuccessFor(){
    const formcontrol = input.parentElement
    //adcionar a classe de sucesso

    formcontrol.className = 'form-control success'
}

const a = document.querySelector('form')
