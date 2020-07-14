<template>
  <div id="app">
    <landing-page/>
  </div>
</template>

<script>
import './assets/styles/general.css'
import LandingPage from './components/LandingPage.vue'

export default {
  name: 'app',
  
  components: {
    'landing-page': LandingPage
  },

  data () {
    return {
      msg: 'Here we go'
    }
  }
}
</script>

<style lang="scss">


#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  text-decoration: none;
}
</style>