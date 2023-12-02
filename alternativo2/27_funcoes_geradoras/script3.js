function* contador(){
    let i =0
    while (true){
        yield i++
        if(i>5){
            break
        }
    }
}

const itc = contador()
console.log(itc.next().value)
console.log(itc.next().value)
console.log(itc.next().value)

for (let c of itc){
    console.log(c)
}