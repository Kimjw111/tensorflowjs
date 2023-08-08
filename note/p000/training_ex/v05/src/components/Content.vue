<template>
  <section>
    <article>
      주 내용들이 들어감
      <button @click="cm = cm === 'Nav' ? 'Adv' : 'Nav'">변경</button>
    </article>
    <component :is="cm"></component>
  </section>
  <!-- <Nav /> -->
  <!-- <Adv /> -->
</template>
<script>
import Nav from './Nav.vue'
import Adv from './Adv.vue'
export default {
  data() {
    return {
      cm: 'Nav'
    }
  },
  components: {
    Nav,
    Adv
  }
}
</script>
<style scoped>
article {
  padding: 25px;
  border: 2px solid green;
  background-color: antiquewhite;
}
section {
  text-align: center;

  border: 4px solid red;
  background-color: white;
  height: 500px;
  display: grid;
  grid-template-columns: 3fr 1fr;
}
</style>
