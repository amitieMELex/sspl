<template>
  <MDBNavbar light bg="light" expand="lg" container>
    <MDBNavbarBrand href="#">
     <a href="/"> <v-img  src="../assets/staforce.png" alt="HTML5 Icon" style="width:60px;height:60px;"></v-img></a>
      
    </MDBNavbarBrand>
    <a href="/" style = "font-family:Cursive,garamond,serif;font-size:32px;font-style:italic;color:#E021A0">staforce</a>
    <MDBNavbarToggler 
    target="#navbarRightAlignExample"
      @click="collapse5 = !collapse5"></MDBNavbarToggler>
      <MDBCollapse v-model="collapse5" id="navbarRightAlignExample">
    <MDBNavbarNav right class="mb-2 mb-lg-0">
       
      <MDBNavbarItem to="/about"> About </MDBNavbarItem>
      <MDBNavbarItem to="/services"> Services </MDBNavbarItem>
      <MDBNavbarItem to="/research"> Research </MDBNavbarItem>
      <MDBNavbarItem to="/contact"> Contact </MDBNavbarItem>
       
    </MDBNavbarNav>
    </MDBCollapse>
  </MDBNavbar>

</template>

<script>
  import {
    MDBNavbar,
    MDBNavbarToggler,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBCollapse,
    MDBNavbarItem,
    // MDBDropdown,
    // MDBDropdownToggle,
    // MDBDropdownMenu,
    // MDBDropdownItem
  } 
  from 'mdb-vue-ui-kit';
  import { ref } from 'vue';

  export default {
    components: {
      MDBNavbar,
      MDBNavbarToggler,
      MDBNavbarBrand,
      MDBNavbarNav,
      MDBCollapse,
      MDBNavbarItem,
      // MDBDropdown,
      // MDBDropdownToggle,
      // MDBDropdownMenu,
      // MDBDropdownItem
    },
     setup() {

      const collapse1 = ref(false);
      const dropdown1 = ref(false);

      return {
        collapse1,
        dropdown1
      }
    }
  };
</script>
<style>
  #MDBNavbarNav{
  display:inline-block;
  margin:8px auto 45px;
  background-color:#16379C;
  box-shadow:0 1px 1px #ccc;
  border-radius:10px;
  margin-left:1px;
}
#MDBNavbarItem {
  display:inline-block;
  padding: 20px 50px;
  color:#13EAE7 !important;
  font-weight:bold;
  font-size:16px;
  text-decoration:none !important;
  line-height:1;
  text-transform: uppercase;
  background-color:transparent;
  -webkit-transition:background-color 0.25s;
  -moz-transition:background-color 0.25s;
  transition:background-color 0.25s;
}

</style>