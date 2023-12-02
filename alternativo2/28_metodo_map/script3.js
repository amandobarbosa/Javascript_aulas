/*const converterint=(e)=>parseInt(e)
const dobrar=(e)=>e*2
let num = ['1', '2', '3', '4', '5'].map(converterint)

console.log(num) 
let num2 = ['1', '2', '3', '4', '5'].map(dobrar)
console.log(num2) 
*/

let el=document.getElementsByTagName('div')
el = [...el]

el.map((e,i)=>{
    console.log(el)
    e.innerHTML = 'Amando'
})


/*const el = document.getElementsByTagName('div')
const val = Array.prototype.map.call(el, ({innerHTML})=>innerHTML)
console.log(val)
*/