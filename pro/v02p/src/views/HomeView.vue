<template>
  <div><h1>SHA256 암호화(단방향)</h1></div>
  <input type="text" v-model="data" @keyup.enter="fn(data)" />
  <button @click="fn(data)" :disabled="!data">확인</button>
  <h3>
    SHA256: {{ result }} <br />
    길이: {{ result.length }}
  </h3>
</template>
<script>
import crypto from 'crypto'
export default {
  name: 'SHA256',
  data() {
    return {
      data: '',
      result: ''
    }
  },
  methods: {
    fn(value) {
      this.result = crypto
        .createHash('sha256')
        .update(value + '14abcd')
        .digest('hex')
      console.log(this.result, this.result.length)
    }
  }
}
</script>
<style></style>
