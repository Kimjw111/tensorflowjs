<template>
  <div>
    <h1>Axios로 Memo의 외부데이터 가져오기</h1>
    <button @click="data">추가</button>
    <ul>
      <li v-for="m in memos" :key="m">{{ m }}</li>
    </ul>
  </div>
</template>
<script setup>
import { reactive } from 'vue'
import axios from 'axios'
axios.get('http://localhost:3000/v1/memos').then((res) => {
  console.log(res)
  const memo = res.data
  memo.forEach((v) => memos.push(v))
})
// const name = '반가워 script setup 구문이야'
const memos = reactive([])
const data = () => {
  memos.push('추가됨')
  console.log(memos)
}
</script>
<style>
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
li {
  padding: 15px;
  margin: 5px;
  border: 1px solid #ddd;
  background-color: beige;
}
</style>
