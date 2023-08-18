const arr = ['사과', '딸기', '포도', '배']
const iter = arr[Symbol.iterator]()
// console.log(iter)
//Object [Array Iterator] {}
console.log(iter.next())
console.log('쉬었다가자1')
console.log(iter.next())
console.log('쉬었다가자2')
console.log(iter.next())
console.log('쉬었다가자3')
console.log(iter.next())
console.log('쉬었다가자4')
console.log(iter.next())
/*{ value: '사과', done: false }  
쉬었다가자1
{ value: '딸기', done: false }  
쉬었다가자2
{ value: '포도', done: false }  
쉬었다가자3
{ value: '배', done: false }    
쉬었다가자4
{ value: undefined, done: true } */
// 이터레이터는 done이 true가 될때까지 돌림
// 필요한 부분만 진행하고 멈춰서 다른 작업하고 다시 갈 수 있음 done이 true가 될때 까지
