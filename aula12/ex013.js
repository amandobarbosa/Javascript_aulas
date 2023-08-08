var agora = new Date()
var diasem = agora.getDay()
switch(diasem){
    case 1:
        console.log('Hoje é segunda')
        break
    case 2:
        console.log('Hoje é terça')
        break
    case 3:
        console.log('Hoje é quarta')
        break
    case 4:
        console.log('Hoje é quinta')
        break
    case 5:
        console.log('Hoje é sexta')
        break
    case 6:
        console.log('Hoje é sabado')
        break
    case 7:
        console.log('Hoje é domingo')
        break
    default:
        console.log('dia invalido')
        break
}