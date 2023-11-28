function soma(...valores){
    let res = 0
    for(let v of valores){
        res+=v
    }
    return res
}

console.log(soma(7,6,8,2,9))