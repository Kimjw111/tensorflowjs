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
      @keyup.enter="gpt()"
    />
    <button @click="gpt()">묻기</button>
  </div>
</template>
<script>
import { chatgptApi } from '../../public/chatgpt'
export default {
  data() {
    return {
      inData: '',
      resp: ''
    }
  },
  methods: {
    gpt: async function () {
      const ask = this.inData
      const answer = await chatgptApi(ask, 32, 0.6, 0.7, 1)
      this.resp = answer
    }
  }
}
</script>
<style scoped>
textarea {
  font-size: 1.1em;
  color: black;
  resize: none;
  font-weight: bold;
  background-color: bisque;
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
