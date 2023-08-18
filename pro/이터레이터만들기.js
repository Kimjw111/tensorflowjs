const range = { from: 1, to: 7 }
// range[Symbol.iterator]=null 배열일때는 바보가 됨
range[Symbol.iterator] = function () {
  // iterator 객체를 반환
  return {
    current: this.from,
    last: this.to,
    next() {
      if (this.current <= this.last) {
        return {
          value: this.current++,
          done: false
        }
      } else {
        return { value: undefined, done: true }
      }
    }
  }
}
// iterable 한지 테스트 해보기
for (const n of range) console.log(n)
/*1
2
3
4
5
6
7 */
// coroutine 테스트 해보기
const iter = range[Symbol.iterator]()
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
/*
{ value: 1, done: false }       
{ value: 2, done: false }       
{ value: 3, done: false }       
{ value: 4, done: false }       
{ value: 5, done: false }       
{ value: 6, done: false }       
{ value: 7, done: false }       
{ value: undefined, done: true } */
