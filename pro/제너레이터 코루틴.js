function* any() {
  yield 10
  if (false) yield 20
  yield 30
  return 90
  yield 40
}
// console.log(any()) //Object [Generator] {}
/* 방법1 */
const iter = any()
console.log(iter) //Object [Generator] {}
console.log(iter.next())
console.log('딴짓하기1')
console.log(iter.next())
console.log('딴짓하기2')
console.log(iter.next())
console.log('딴짓하기3')
console.log(iter.next())
console.log('딴짓하기4')
/*
{ value: 10, done: false }      
딴짓하기1
{ value: 30, done: false }      
딴짓하기2
{ value: 90, done: true }       
딴짓하기3
{ value: undefined, done: true }
딴짓하기4 */

/* 방법2 */
// console.log(...any()) //10 30 전개연산자로 제너레이터 값을 꺼냄
