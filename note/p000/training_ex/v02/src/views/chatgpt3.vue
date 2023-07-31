<template>
  <div>
    <div>OpenAI 자연어 처리기반 GPT3.5 turbo 챗</div>
    <hr />
    <textarea
      disabled
      name=""
      id=""
      cols="30"
      rows="10"
      :value="resp"
    ></textarea>
    <br />
    <input
      placeholder="질문할 내용입력하기"
      v-model="inData"
      @keyup.enter="gpt3()"
    />
    <button @click="gpt3()">묻기</button>
  </div>
</template>
<script>
import { gpt3 } from '../../public/풀이2.js'
export default {
  data() {
    return {
      inData: '',
      resp: ''
      // init: '안녕하세요. 여기는 GPT-3.5 챗봇입니다.', // 기본 정보를 설정합니다.
      // history: '' // 이전 대화 기록을 저장할 변수입니다.
    }
  },
  methods: {
    gpt3: async function () {
      this.resp = '타이핑중'
      const start = this.inData
      const answer = await gpt3(start)
      this.resp = answer
      // this.init + this.history +  // 현재 입력 + 기본 정보 + 이전 대화 기록
      // this.history += `인간: ${this.inData}\nAI: ${answer}\n` // 이전 대화 기록에 새로운 대화를 추가합니다.
      // if (this.history.length > 4000) {
      //   this.history = ''
      // }
    }
  }
}
</script>
<style scoped>
textarea {
  font-size: 1.1em;
  color: rgb(240, 177, 177);
  resize: none;
  font-weight: bold;
  background-color: rgb(203, 225, 250);
}
input {
  width: 210px;
  height: 30px;
}
button {
  width: 45px;
  height: 35px;
}
</style>
