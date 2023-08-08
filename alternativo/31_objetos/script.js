let pessoa = {
    nome: 'matheus',
    idade: 29,
    falar: function(){
        console.log('olá')
    },
    soma: function(a, b){
        return a + b
    }
}

console.log(pessoa.idade)

pessoa.falar()
 
var soma = pessoa.soma(5, 9)

console.log(soma)