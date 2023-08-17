<template>
  <div>1. 실시간 환율 API</div>
  <br />
  원화로 계산할 엔화는
  <input v-model="input" />엔화
  <div v-if="input">현시세: 1엔에 {{ onedollar }}</div>
  <br />
  <div>입력하신 {{ input }} 엔화는 {{ result }}원 입니다.</div>
</template>
<script>
export default {
  data() {
    return {
      onedollar: 0,
      input: null,
      result: 0
    }
  },
  watch: {
    input: function () {
      const dollar = this.input
      if (isNaN(dollar)) {
        this.result = '숫자를 입력하시오.'
        return
      }
      const url =
        'https://quotation-api-cdn.dunamu.com/v1/forex/recent?codes=FRX.KRWJPY'
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          this.onedollar = data[0].basePrice.toLocaleString('ko-KR') + '원'
          const mydata = this.input * data[0].basePrice
          this.result = `${mydata.toLocaleString('ko-KR')}`
        })
    }
  }
}
</script>
<style></style>
