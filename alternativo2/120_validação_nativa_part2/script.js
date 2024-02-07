const f_nome = document.getElementById('f_nome')
const f_nota = document.getElementById('f_nota')
const f_msg = document.getElementById('f_msg')

document.querySelector('#btn_validar').addEventListener('click',(evt)=>{
    let estado_validacao = f_nota.validity

    if(estado_validacao.valueMissing){
        f_nota.setCustomValidity('poxa,  este campo é obrigatorio')
    }
        else if(estado_validacao.rangeOverflow){
        f_nota.setCustomValidity('nossa, que nota alta vc digitou')
    }
        else if(estado_validacao.rangeUnderflow){
        f_nota.setCustomValidity('credo, que nota baixa vc digitou')
        }
    
    f_nota.reportValidity()
    f_msg.innerHTML = f_nota.validationMessage
    evt.preventDefault()
})