<template>
  <nav>
    <router-link to="/">1. 레이아웃</router-link> |
    <router-link to="/page2">2. MobileNet</router-link> |
    <router-link to="/page3">3. 외부데이터(setup)</router-link>
  </nav>
  <router-view />
</template>
<script>
// import page1 from './components/page1.vue'
// export default {
//   components: { page1 }
// }
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
