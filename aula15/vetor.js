var valores = [5, 8, 1, 7, 2, 9]
valores.sort()

/*for(pos=0; pos<valores.length; pos++){
    console.log(`a posição ${pos} tem o valor ${valores[pos]}`)
}
Jeito padrão
*/

for(var pos in valores){
    console.log(`a posição ${pos} tem o valor ${valores[pos]}`)

    console.log(`a posição do numero 8 é ${valores.indexOf(5)}`)
}