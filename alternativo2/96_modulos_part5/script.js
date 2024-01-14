

let contatos = []

let contato = {
    getTodosContatos:function(){
        return contatos
    },
    getContato:function(i_cont){
        return contatos[i_cont]
    },
    addContato:function(novoContato, destinoDOM){
        const cont={
            nome:document.getElementById('f_nome').value,
            telefone:document.getElementById('f_telefone').value,
            email:document.getElementById('f_email').value
        }
        contatos.push(cont)
        contatos.forEach((c)={
            
        })
        const div = document.createElement('div')
        div.setAttribute('class', 'contato')
        const p_nome= document.createElement('p')
        p_nome.innerHTML=novoContato.nome
        const p_telefone= document.createElement('p')
        p_telefone.innerHTML=novoContato.telefone
        const p_email= document.createElement('p')
        p_email.innerHTML=novoContato.email
        div.appendChild(p_nome)
        div.appendChild(p_telefone)
        div.appendChild(p_email)
        destinoDOM.appendChild(div)
    }
}



const listaContatos = document.getElementById('listaContatos')
const btn_gravar = document.getElementById('btn_gravar')

btn_gravar.addEventListener('click', (evt)=>{
    const cont={
        nome:document.getElementById('f_nome').value,
        telefone:document.getElementById('f_telefone').value,
        email:document.getElementById('f_email').value
    }
    contato.addContato(cont,listaContatos)
    console.log(contato.getTodosContatos())
})