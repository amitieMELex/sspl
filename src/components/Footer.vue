<template>
  <footer class="footer">
  <nav>
  <router-link to="/about">About</router-link>
    <span></span>
  <router-link to="/privacypolicy">Privacy Policy</router-link>
</nav>
    <p class="copyright">Copyright &copy; {{year}} </p>
  </footer>
</template>
<script>
import { computed } from 'vue'

export default {
  setup () {
    const year = computed(() => new Date().getFullYear())
    return {year}
  }
}
</script>

<style>
  footer{
    background-color: #63786B;
    background-image: url("footer-background.jpg");
    background-clip: padding-box;
    size: 5px 5px;
  }
  copyright{
    background-color: #335EDC;
  }
  footer-nav{
    background-color: #27304B;
  }
  </style>