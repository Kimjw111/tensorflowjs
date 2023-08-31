<template>
  <div class="body">
    <div class="container" @drop.prevent="drop($event)" @dragover.prevent>
      <button id="pbox" draggable="true" @dragstart="drag($event)">🎁</button>
    </div>
    <div
      class="container2"
      @drop.prevent="drop($event)"
      @dragover.prevent
    ></div>
  </div>
</template>
<script setup>
import { onMounted } from 'vue'
function showEvent(ev) {
  if (document.querySelectorAll('p').length === 10) {
    document.querySelectorAll('p').forEach((e) => e.remove())
  }
  const p = document.createElement('p')
  p.textContent = ev
  document.body.appendChild(p)
}
// =======================드롭하기위한 함수=========================
function drag(e) {
  e.dataTransfer.setData('some', e.target.id)
}
function drop(e) {
  e.preventDefault()
  const data = e.dataTransfer.getData('some')
  // console.log(data)
  // console.log(e.currentTarget)
  e.currentTarget.appendChild(document.getElementById(data))
}
// ================================================================
onMounted(() => {
  const pbox = document.querySelector('#pbox')
  const container2 = document.querySelector('.container2')
  // 1) 드래그 시작
  pbox.addEventListener('dragstart', () => {
    showEvent('드래그를 시작하면 발생하는 이벤트')
  })
  // 2) 드래그하면 발생
  // pbox.addEventListener('drag', () => {
  //   showEvent('드래그하는 동안 발생하는 이벤트')
  // })
  // 3) 드래그 요소가 영역에 진입하면 발생
  container2.addEventListener('dragenter', () => {
    showEvent('드래그 요소가 이 영역에 진입하면 발생하는 이벤트')
  })
  // 4) 드래그 요소가 영역에 계속 위치하면 발생
  // container2.addEventListener('dragover', () => {
  //   showEvent('드래그 요소가 이 영역위에 계속 위치하면 발생하는 이벤트')
  // })
  // 5) 드래그 요소가 영역에서 떠나면 발생
  container2.addEventListener('dragleave', () => {
    showEvent('드래그 요소가 이 영역에서 떠나면 발생하는 이벤트')
  })
  // 6) 2단계가 동시에 준비될 것, 드래그 요소의 드롭
  container2.addEventListener('dragover', (e) => {
    e.preventDefault()
  })
  container2.addEventListener('drop', () => {
    // e.preventDefault()
    showEvent('드래그 요소가 컨테이너2 영역에 드롭')
  })
  // 7) 아무데나 놓으면 발생
  pbox.addEventListener('dragend', () => {
    showEvent('드래그가 끝나면 발생하는 이벤트')
  })
})
</script>
<style scoped>
.body {
  display: flex;
  justify-content: center;
}
button {
  width: 70px;
  height: 70px;
  border: none;
  border-radius: 20px;
  margin: 12px;
  cursor: move;
  font-size: 2em;
  background-color: rgb(222, 231, 134);
}
.container,
.container2 {
  width: 100px;
  height: 100px;
  margin: 10px;
  padding: 10px;
  background-color: cornflowerblue;
  border-radius: 20px;
}
</style>
