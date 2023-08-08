var arr = [1,2,3,4]
console.log(arr.length)

//pop

arr.pop()
console.log(arr)

arr.unshift(0)
arr.unshift('teste')
console.log(arr)

//shift

arr.shift()
console.log(arr)

//acessaro ultimo elemento
console.log(arr[arr.length - 1])

console.log(Array.isArray(5))

console.log(Array.isArray(arr))