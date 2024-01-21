const long = document.getElementById('long')
const lati = document.getElementById('lati')


if(navigator.geolocation){

    navigator.geolocation.getCurrentPosition(mostrarLocalizacao,erroLocalizacao)

}else{
    console.log('geolocalização não suportada')
}
function mostrarLocalizacao(pos){
    long.innerHTML=pos.coords.longitude
    lati.innerHTML=pos.coords.latitude

}


function erroLocalizacao(pos){
    console.log('erro ao receber a localização')
}