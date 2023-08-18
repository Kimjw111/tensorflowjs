const obj = {}
const sb1 = Symbol()
const sb2 = Symbol('hi')
const sb3 = Symbol('hello')
obj[sb1] = '첫번째 심볼 ""'
obj[sb2] = '두번째 심볼 hi'
obj[sb3] = '세번째 심볼 hello'
console.log(obj)
/*{
  [Symbol()]: '첫번째 심볼 ""',       
  [Symbol(hi)]: '두번째 심볼 hi',     
  [Symbol(hello)]: '세번째 심볼 hello'
} */
console.log(obj[sb2])
//두번째 심볼 hi
console.log(Array.prototype[Symbol.iterator])
//[Function: values]
