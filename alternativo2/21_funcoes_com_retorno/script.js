function canal(){
    let n1 = 50
    let n2 = 7
    let res = n1*n2
    if(res %2 == 0)
        return 'par'
    else
        return 'impar'
}

let num = canal()
console.log(canal())
console.log(num)