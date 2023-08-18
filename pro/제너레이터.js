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
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
/*
{ value: 10, done: false }      
{ value: 30, done: false }      
{ value: 90, done: true }       
{ value: undefined, done: true } */

/* 방법2 */
// console.log(...any()) //10 30 전개연산자로 제너레이터 값을 꺼냄
