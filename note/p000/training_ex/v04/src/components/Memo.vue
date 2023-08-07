<template>
  <div class="memo">
    <div class="act">
      <button class="btn btn-primary" @click="add()">추가</button>
    </div>
    <h3>{{ str }}</h3>
    <ul>
      <li v-for="(d, i) in data" :key="i">{{ d }}</li>
    </ul>
  </div>
</template>
<script setup>
import { ref } from 'vue' // 스트링, 넘버 등 1개 건드림
// import { reactive } from 'vue' // 전체 건드릴수 있음
const str = ref('고치기전')
const data =
  // reactive(
  // promise형태로
  ['메모 1 내용', '메모 2 내용', '메모 3 내용', '메모 4 내용', '메모 5 내용']
// )
const add = () => {
  data.push('추가될 메모 내용')
  str.value = '고쳤다'
  console.log('data', data)
}
// 업데이트가 라이브로 안됨
</script>
<!-- <script>
export default {
  setup() {
    // 자바스크립트문법 그대로
    const data = [
      '메모 1 내용',
      '메모 2 내용',
      '메모 3 내용',
      '메모 4 내용',
      '메모 5 내용'
    ]
    const add = () => {
      console.log('add누름')
    }
    return { data, add }
  }
}
</script> -->
<style>
.memo ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
ul li {
  padding: 15px;
  margin: 5px;
  border: 1px solid #ddd;
}
</style>
