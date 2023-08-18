const arr = ['사과', '딸기', '포도', '배']
for (const a of arr) console.log(a)
/*사과
딸기
포도
배*/
for (const b in arr) console.log(b)
/* 사과
딸기
포도
배  
0   
1   
2   
3*/
console.log(Symbol.iterator in arr)
// true 이터러블하다.
// querySelectorAll은 유사배열 false
