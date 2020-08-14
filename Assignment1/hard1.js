const realType=(element)=> element===null?"null":element.constructor.name

console.log(realType (1))
console.log(realType("a") )
console.log(realType(true)) 
console.log(realType ([]) )
console.log(realType(null))