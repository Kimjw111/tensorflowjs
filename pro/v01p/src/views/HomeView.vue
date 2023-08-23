<template>
  <div>
    <h1>Home 페이지</h1>
    <HomeSub :homesub="sbdata"></HomeSub>
  </div>
</template>
<script>
import HomeSub from '@/components/HomeSub.vue'
export default {
  name: 'Home', // component 이름과 충돌하지 말 것
  data() {
    return {
      sbdata: 'Home에서 서브로 가져온 내용입니다.'
    }
  },
  components: { HomeSub }
}
</script>
<style></style>
