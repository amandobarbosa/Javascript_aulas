const objetos = document.getElementById('objetos')

const computador ={
    cpu:'',
    ram:'',
    hd:'',
    info:function(){
        console.log(`cpu ${this.cpu}`)
        console.log(`ram ${this.ram}`)
        console.log(`hd ${this.hd}`)
    }
}
computador['monitor'] = '22pol'
computador.placavideo= 'rtx'
delete(computador.hd)

const c1=Object.assign({}, computador)

console.log(computador)
c1.info()

const c2 = Object.create(computador)
c2.cpu='i9'
c2.ram='32gb'
c2.info()


const o1 = {obj1: '1'}
const o2 = {obj2: '2'}
const o3 = {obj3: '3'}
const o4 = Object.assign(o1,o2,o3)

console.log(o4)











const computadores=[
    {
        cpu:'i9',
        ram:'64gb',
        hd:'2tb'
    },
    {
        cpu:'i7',
        ram:'32gb',
        hd:'2tb'
    },
    {
        cpu:'i5',
        ram:'16gb',
        hd:'1tb'
    }
]
computadores.forEach((c)=>{
    console.log(c)
    const div = document.createElement('div')
    div.innerHTML=c.cpu+'</br>'+ c.ram+'</br>' + c.hd
    div.setAttribute('class', 'computador')
    objetos.appendChild(div)
})


