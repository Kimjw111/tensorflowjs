<template>
  <div>
    <h1>Query 방식</h1>
    <h2>Query로 받은 데이터</h2>
    <h3>name: {{ $route.query.name }}</h3>
    <h3>data: {{ $route.query.data }}</h3>
    <h3>num: {{ $route.query.num }}</h3>
  </div>
  <hr />
  <div>
    <h1>props 방식</h1>
    <h2>props로 받은 데이터</h2>
    <h3>name: {{ name }}</h3>
    <h3>data: {{ data }}</h3>
    <h3>num: {{ num }}</h3>
  </div>
</template>
<script>
export default {
  props: {
    name: {
      type: String,
      default: ''
    },
    data: {
      type: String,
      default: ''
    },
    num: {
      type: Number,
      default: 0
    }
  },
  created() {
    console.log(this.$route.query.name)
    console.log(this.$route.query.data)
    console.log(this.$route.query.num)
  }
}
</script>
<style></style>
