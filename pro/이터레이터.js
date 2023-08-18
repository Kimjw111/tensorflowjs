const arr = ['사과', '딸기', '포도', '배']
const iter = arr[Symbol.iterator]()
// console.log(iter)
//Object [Array Iterator] {}
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
/*{ value: '사과', done: false }  
{ value: '딸기', done: false }  
{ value: '포도', done: false }  
{ value: '배', done: false }    
{ value: undefined, done: true } */
// 이터레이터는 done이 true가 될때까지 돌림
// 필요한 부분만 진행하고 멈춰서 다른 작업하고 다시 갈 수 있음 done이 true가 될때 까지
