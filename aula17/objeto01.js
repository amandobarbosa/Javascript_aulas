let amigo = {nome: 'joão',
 sexo: 'm',
peso: 85.7,
engordar(p=0){
    console.log('engordou')
    this.peso += p
}
}
/*console.log(amigo)*/
amigo.engordar(3)
console.log(`o amigo ${amigo.nome} pesa ${amigo.peso}kg`)
