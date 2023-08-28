<template>
  <div class="about">
    <header><div>기본 헤더의 글</div></header>
    <div ref="scrollLine"></div>
    <br />
    <div>===============이곳이 사라지면===============</div>
    <div>
      <div v-for="n in 100" :key="n">{{ n }}</div>
    </div>
  </div>
  <header class="header_fixed" v-if="isFixed">
    <div>ref의 지정라인지점: {{ line }}</div>
    <div>상단에 고정되는 글</div>
    <div>scrollY:{{ scrollY }}</div>
    <div>뷰높이 innerHeight: {{ innerHeight }}</div>
    <div>라인의 끝: {{ lineEnd }}</div>
    <div>Body의 높이 offsetHeight: {{ offsetHeight }}</div>
    <button @click="gotop">최상위로 ㄱㄱ</button>
  </header>
</template>
<script>
export default {
  data() {
    return {
      isFixed: false,
      scrollY: '',
      innerHeight: '',
      line: '',
      lineEnd: '',
      offsetHeight: ''
    }
  },
  mounted() {
    console.log('마운트됨')
    document.addEventListener('scroll', this.scroll)
  },
  methods: {
    scroll() {
      this.scrollY = window.scrollY
      this.innerHeight = this.$refs.scrollLine.offsetTop
      this.line = this.$refs.scrollLine.offsetTop
      this.lineEnd = this.innerHeight + this.scrollY
      this.offsetHeight = document.body.offsetHeight
      if (window.scrollY > this.$refs.scrollLine.offsetTop) {
        this.isFixed = true
      } else {
        this.isFixed = false
      }
    },
    gotop() {
      window.scrollTo(0, 0)
    }
  }
}
</script>
<style scoped>
.header_fixed {
  position: fixed;
  top: 0;
  left: 0;
  /* right: 0; */
  width: 100%;
  background-color: aliceblue;
  padding: 5px;
  z-index: 1000;
}
</style>
