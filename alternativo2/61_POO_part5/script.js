const pessoa ={
    nome,
    idade,
    getNome: function(){
        return this.nome
    },
    setNome: function(nome){
        this.nome = nome
    },

    getIdade: function(){
        return this.idade
    },
    setIdade: function(idade){
        this.idade = idade
    }
}

p2 = pessoa
p3 = pessoa

p3.nome = 'cladisvardison'
p2['nome'] = 'bridgertrudismelda'
pessoa.setNome('patricrerdison')


console.log(pessoa.nome)
console.log(p2.getNome())
console.log(p3.nome)