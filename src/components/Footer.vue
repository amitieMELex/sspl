<template>
  <MDBFooter :text="['center', 'lg-start']">
    <!-- Copyright -->
    <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
      <p class="copyright">Copyright &copy; {{year}} 
      <a class="text-dark" href="https://staforce.in/">Staforce.in</a></p>
    </div>
    <!-- Copyright -->
  </MDBFooter>
</template>

<script>
  import { MDBFooter } from 'mdb-vue-ui-kit';
import { computed } from 'vue'
  export default {
    setup () {
    const year = computed(() => new Date().getFullYear())
    return {year}
  },
    components: {
      MDBFooter
    },
  };
</script>