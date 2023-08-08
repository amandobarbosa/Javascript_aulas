var teste = 5
console.log(this.teste)
console.log(teste)

let pessoa = {
    nome: 'matheus',
    idade: 29,
    falar: function(){
        console.log('olá')
    },
    dizerNome: function(){
        console.log('o meu nome é ' + this.nome)
    },
    aniversario: function(){
       this.idade += 1
       //sem o this não funciona
    },
    saudacao: function(){
        return 'sr.' + this.nome
    }
}
console.log(this)


pessoa.dizerNome()

console.log(pessoa.idade)

pessoa.aniversario()

console.log(pessoa.idade)

console.log('ola, ' + pessoa.saudacao())