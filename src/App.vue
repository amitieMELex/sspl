<template>
<div>
<Navigation/>
<router-view/>

<Footer/>
  </div>
</template>

<script>

import Navigation from './components/Navigation.vue'
import Footer from './components/Footer.vue'
// import carousel from './components/carousel'


export default {
  name: 'App',
  components: {
    Navigation,
    Footer  
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  
  margin-top: 0px;

}
</style>
