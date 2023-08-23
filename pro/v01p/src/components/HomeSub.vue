<template>
  <div>
    <h3>여기는 homeSub데이터 입니다.</h3>
    <div>
      <mark>받은데이터: {{ homesub }}</mark>
    </div>
  </div>
</template>
<script>
export default {
  props: ['homesub'],
  data() {
    return {
      //   test: '아직테스트중'
    }
  }
}
</script>
<style></style>
