var agora = new Date()
var hora = agora.getHours()
console.log(`agora são exatamente ${hora}`)
if (hora <12 && hora > 5){
    console.log('é de manhã')
} else if(hora >= 12 && hora <= 18){
    console.log('é de tarde')
} else{
    console.log('é a noite')
}